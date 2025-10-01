import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

// --- embed logo as inline attachment (cid) ---
const logoCid = "logo@cid";
export const config = {
  api: {
    bodyParser: false, // disable Next’s JSON parser
  },
};

export async function POST(request) {
  try {
    // Parse form data
    const formData = await request.formData();

    // Validate required scalar fields (DO NOT require per-bin inputs here)
    const requiredFields = [
      "firstName",
      "lastName",
      "phoneNumber",
      "email",
      "businessType",
      "businessName",
      "businessLocation",
      // removed direct bin fields from required list - bins handled below
    ];

    const missingFields = [];
    for (const field of requiredFields) {
      if (!formData.get(field)) {
        missingFields.push(field);
      }
    }

    // Check contract end date condition
    const noExistingContract = formData.get("noExistingContract") === "true";
    const contractEndDate = formData.get("contractEndDate");

    if (!noExistingContract && !contractEndDate) {
      missingFields.push("contractEndDate");
    }

    // Build `bins` array from either:
    // 1) repeated "bins" JSON entries (frontend appended JSON per bin), OR
    // 2) per-field arrays (materialType[], binSize[], numberOfBins[], binPlacementLocation[], dumpFrequency[], pickupsPerWeek[])
    const bins = [];
    const binsJsonEntries = formData.getAll("bins"); // may contain JSON strings

    if (binsJsonEntries && binsJsonEntries.length > 0) {
      for (const entry of binsJsonEntries) {
        try {
          // entry might already be an object or a JSON string — handle both
          const parsed = typeof entry === "string" ? JSON.parse(entry) : entry;
          // Normalize the parsed bin object fields to expected keys
          bins.push({
            materialType: parsed.materialType ?? parsed.material ?? "",
            binSize: parsed.binSize ?? parsed.size ?? "",
            numberOfBins: parsed.numberOfBins ?? parsed.count ?? parsed.number ?? "",
            binPlacementLocation: parsed.binPlacementLocation ?? parsed.placement ?? "",
            dumpFrequency: parsed.dumpFrequency ?? parsed.frequency ?? "",
            pickupsPerWeek: parsed.pickupsPerWeek ?? parsed.pickups ?? "",
          });
        } catch (err) {
          // If parse fails, skip this entry but continue (so we don't block other valid bins)
          console.warn("Failed to parse bin JSON entry:", err);
        }
      }
    } else {
      // Try to read per-field arrays that may have been named with [] or without
      const matArr =
        formData.getAll("materialType[]").length > 0
          ? formData.getAll("materialType[]")
          : formData.getAll("materialType");
      const sizeArr =
        formData.getAll("binSize[]").length > 0
          ? formData.getAll("binSize[]")
          : formData.getAll("binSize");
      const numArr =
        formData.getAll("numberOfBins[]").length > 0
          ? formData.getAll("numberOfBins[]")
          : formData.getAll("numberOfBins");
      const placeArr =
        formData.getAll("binPlacementLocation[]").length > 0
          ? formData.getAll("binPlacementLocation[]")
          : formData.getAll("binPlacementLocation");
      const dumpArr =
        formData.getAll("dumpFrequency[]").length > 0
          ? formData.getAll("dumpFrequency[]")
          : formData.getAll("dumpFrequency");
      const pickArr =
        formData.getAll("pickupsPerWeek[]").length > 0
          ? formData.getAll("pickupsPerWeek[]")
          : formData.getAll("pickupsPerWeek");

      const maxLen = Math.max(
        matArr.length,
        sizeArr.length,
        numArr.length,
        placeArr.length,
        dumpArr.length,
        pickArr.length
      );

      for (let i = 0; i < maxLen; i++) {
        // convert number strings to number if possible
        const numberVal = numArr[i] ? Number(numArr[i]) : "";
        bins.push({
          materialType: matArr[i] ?? "",
          binSize: sizeArr[i] ?? "",
          numberOfBins: numberVal || numberVal === 0 ? numberVal : (numArr[i] ?? ""),
          binPlacementLocation: placeArr[i] ?? "",
          dumpFrequency: dumpArr[i] ?? "",
          pickupsPerWeek: pickArr[i] ?? "",
        });
      }
    }

    // If no bins found, that is an error (we require at least one bin info)
    if (!bins || bins.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: `Missing required fields: bins (at least one bin information is required)`,
        },
        { status: 400 }
      );
    }

    // If any bin placement is "Other", try to append top-level binPlacementOther if present
    const binPlacementOtherTop = formData.get("binPlacementOther");
    if (binPlacementOtherTop) {
      for (let b of bins) {
        if (b.binPlacementLocation === "Other" && binPlacementOtherTop) {
          b.binPlacementLocation = `${b.binPlacementLocation} - ${binPlacementOtherTop}`;
        }
      }
    }

    // If earlier we collected some missingFields from scalar fields, return all missing now
    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: `Missing required fields: ${missingFields.join(", ")}`,
        },
        { status: 400 }
      );
    }

    // Get files
    const files = formData.getAll("files");

    // Create Nodemailer transporter (Gmail)
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Format attachments for nodemailer
    const attachments = [];
    for (const file of files) {
      if (file.size > 0) {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        attachments.push({
          filename: file.name,
          content: buffer,
          contentType: file.type,
        });
      }
    }

    // Add logo as inline attachment
    const logoPath = path.join(process.cwd(), "public", "images", "logo.png");
    let logoAttachment = null;
    try {
      if (fs.existsSync(logoPath)) {
        logoAttachment = {
          filename: "logo.png",
          path: logoPath,
          cid: logoCid,
          contentType: "image/png",
        };
        attachments.push(logoAttachment);
      }
    } catch (error) {
      console.warn("Logo file not found or could not be read:", error);
    }

    // Helper function to format array values as line breaks (left for non-bin arrays)
    const formatArrayValue = (formData, fieldName) => {
      const values = formData.getAll(fieldName);
      return values.length > 0 ? values.join("<br>") : "";
    };

    // Build futuristic HTML email template, including a table for the bins
    const binsTableRows = bins
      .map((b, idx) => {
        const material = b.materialType || "";
        const size = b.binSize || "";
        const count = b.numberOfBins ?? "";
        const placement = b.binPlacementLocation || "";
        const freq = b.dumpFrequency || "";
        const pickups = b.pickupsPerWeek || "";
        return `
          <tr>
            <td class="table-cell-index">${idx + 1}</td>
            <td class="table-cell">${escapeHtml(material)}</td>
            <td class="table-cell">${escapeHtml(size)}</td>
            <td class="table-cell">${escapeHtml(String(count))}</td>
            <td class="table-cell">${escapeHtml(placement)}</td>
            <td class="table-cell">${escapeHtml(freq)}</td>
            <td class="table-cell">${escapeHtml(pickups)}</td>
          </tr>
        `;
      })
      .join("");

    // Create futuristic HTML email template
    const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Inter', sans-serif;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          color: #f1f5f9;
          line-height: 1.6;
        }
        
        .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 40px 20px;
        }
        
        .header {
          text-align: center;
          margin-bottom: 30px;
          position: relative;
        }
        
        .header-logo {
          margin-bottom: 12px;
        }
        
        .header-logo img {
          max-width: 180px;
          height: auto;
          filter: drop-shadow(0 6px 18px rgba(0,0,0,0.6));
        }
        
        .header::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 3px;
          background: linear-gradient(90deg, #5b9d39, #007994);
          border-radius: 2px;
          box-shadow: 0 6px 20px rgba(0,121,148,0.18);
        }
        
        .subtitle {
          color: #94a3b8;
          font-size: 15px;
          font-weight: 400;
        }
        
        .card {
          background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));
          border: 1px solid rgba(71, 85, 105, 0.18);
          border-radius: 16px;
          padding: 22px;
          margin-bottom: 18px;
          box-shadow: 0 10px 30px rgba(2,6,23,0.6);
        }
        
        .card-title {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 14px;
          color: #e6ffb3;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 14px;
        }
        
        .field {
          margin-bottom: 10px;
        }
        
        .field-label {
          font-size: 11px;
          font-weight: 600;
          color: #00bcd4;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          margin-bottom: 6px;
        }
        
        .field-value {
          font-size: 14px;
          color: #c7f0c4;
          word-break: break-word;
        }

        /* Futuristic bins table */
        .bins-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 10px;
          background: linear-gradient(90deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
          border-radius: 12px;
          overflow: hidden;
        }
        .bins-table thead {
          background: linear-gradient(90deg, rgba(11, 78, 63, 0.15), rgba(0, 121, 148, 0.08));
          color: #e6ffb3;
        }
        .bins-table th, .bins-table td {
          padding: 10px 12px;
          font-size: 13px;
          text-align: left;
          border-bottom: 1px solid rgba(255,255,255,0.03);
        }
        .bins-table th {
          font-weight: 700;
          letter-spacing: 0.6px;
          text-transform: uppercase;
        }
        .table-cell-index {
          color: #94a3b8;
          width: 40px;
        }
        .table-cell {
          color: #c7f0c4;
        }
        .bins-table tbody tr:hover {
          background: linear-gradient(90deg, rgba(91,157,57,0.03), rgba(0,121,148,0.03));
        }
        
        .attachments {
          margin-top: 14px;
        }
        
        .attachments-title {
          font-size: 13px;
          font-weight: 600;
          color: #00bcd4;
          margin-bottom: 10px;
        }
        
        .attachment-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        
        .attachment-item {
          background: rgba(0, 121, 148, 0.08);
          border: 1px solid rgba(0, 121, 148, 0.18);
          border-radius: 8px;
          padding: 8px 12px;
          font-size: 12px;
          color: #cfeee6;
        }
        
        .footer {
          text-align: center;
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid rgba(71, 85, 105, 0.12);
          color: #94a3b8;
          font-size: 13px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="header-logo">
            ${logoAttachment ? `<img src="cid:${logoCid}" alt="Clean City Waste Logo">` : '<div class="logo">Clean City Waste</div>'}
          </div>
          <div class="subtitle">New Contact Form Submission</div>
        </div>
        
        <!-- Personal Information -->
        <div class="card">
          <div class="card-title">Personal Information</div>
          <div class="grid">
            <div class="field">
              <div class="field-label">First Name</div>
              <div class="field-value">${escapeHtml(formData.get("firstName") || "")}</div>
            </div>
            <div class="field">
              <div class="field-label">Last Name</div>
              <div class="field-value">${escapeHtml(formData.get("lastName") || "")}</div>
            </div>
            <div class="field">
              <div class="field-label">Phone Number</div>
              <div class="field-value">${escapeHtml(formData.get("phoneNumber") || "")}</div>
            </div>
            <div class="field">
              <div class="field-label">Email</div>
              <div class="field-value">${escapeHtml(formData.get("email") || "")}</div>
            </div>
          </div>
        </div>
        
        <!-- Business Information -->
        <div class="card">
          <div class="card-title">Business Information</div>
          <div class="grid">
            <div class="field">
              <div class="field-label">Business Type</div>
              <div class="field-value">${escapeHtml(formData.get("businessType") || "")}</div>
            </div>
            <div class="field">
              <div class="field-label">Business Name</div>
              <div class="field-value">${escapeHtml(formData.get("businessName") || "")}</div>
            </div>
            <div class="field">
              <div class="field-label">Business Location</div>
              <div class="field-value">${escapeHtml(formData.get("businessLocation") || "")}</div>
            </div>
            <div class="field">
              <div class="field-label">Bin Placement Location (Primary)</div>
              <div class="field-value">${escapeHtml(formData.get("binPlacementLocation") || "")}</div>
            </div>
          </div>

          <!-- Futuristic bins table -->
          <div style="margin-top:16px;">
            <div class="card-title" style="font-size:16px; margin-bottom:8px; color:#d1ffb8;">Bin Details</div>
            <table class="bins-table" role="table" aria-label="Bin information table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Material</th>
                  <th>Size</th>
                  <th>Quantity</th>
                  <th>Placement</th>
                  <th>Dump Frequency</th>
                  <th>Pickups / Week</th>
                </tr>
              </thead>
              <tbody>
                ${binsTableRows}
              </tbody>
            </table>
          </div>
        </div>
        
        <!-- Contract Information -->
        <div class="card">
          <div class="card-title">Contract Information</div>
          <div class="field">
            <div class="field-label">No Existing Contract</div>
            <div class="field-value">${noExistingContract ? "Yes" : "No"}</div>
          </div>
          ${
            !noExistingContract
              ? `
          <div class="field">
            <div class="field-label">Contract End Date</div>
            <div class="field-value">${escapeHtml(contractEndDate || "")}</div>
          </div>
          `
              : ""
          }
        </div>
        
        <!-- Attachments -->
        ${
          attachments.length > (logoAttachment ? 1 : 0)
            ? `
        <div class="card">
          <div class="card-title">Attachments</div>
          <div class="attachment-list">
            ${attachments
              .filter((att) => att.filename !== "logo.png")
              .map((att) => `<div class="attachment-item">${escapeHtml(att.filename)}</div>`)
              .join("")}
          </div>
        </div>
        `
            : ""
        }
        
        <div class="footer">
          <p>Submission received on ${new Date().toLocaleString()}</p>
        </div>
      </div>
    </body>
    </html>
    `;

    // Send email
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'info@cleancitywaste.ca',
      subject: "New Contact Form Submission - Clean City Waste",
      html: htmlTemplate,
      attachments: attachments,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        success: true,
        message: "Form submitted successfully! We will contact you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in contact form submission:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send message. Please try again later.",
      },
      { status: 500 }
    );
  }
}

/**
 * Utility: basic HTML-escape for injected values (keeps template safe-ish for text fields).
 * We keep it small and self-contained to avoid pulling in additional deps.
 */
function escapeHtml(str) {
  if (str === null || str === undefined) return "";
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
