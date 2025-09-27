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

    // Validate required fields
    const requiredFields = [
      "firstName",
      "lastName",
      "phoneNumber",
      "email",
      "businessType",
      "businessName",
      "businessLocation",
      "binPlacementLocation",
      "materialType",
      "binSize",
      "dumpFrequency",
      "pickupsPerWeek",
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

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: `Missing required fields: ${missingFields.join(", ")}`,
        },
        { status: 400 }
      );
    }

    // Get bin placement other if needed
    let binPlacementValue = formData.get("binPlacementLocation");
    if (binPlacementValue === "Other") {
      const binPlacementOther = formData.get("binPlacementOther");
      if (!binPlacementOther) {
        return NextResponse.json(
          {
            success: false,
            message:
              'Please specify the bin placement location when selecting "Other"',
          },
          { status: 400 }
        );
      }
      binPlacementValue = `${binPlacementValue} - ${binPlacementOther}`;
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
    const logoPath = path.join(process.cwd(), 'public', 'images', 'logo.png');
    let logoAttachment = null;
    try {
      if (fs.existsSync(logoPath)) {
        logoAttachment = {
          filename: 'logo.png',
          path: logoPath,
          cid: logoCid,
          contentType: 'image/png'
        };
        attachments.push(logoAttachment);
      }
    } catch (error) {
      console.warn('Logo file not found or could not be read:', error);
    }

    // Helper function to format array values as line breaks
    const formatArrayValue = (formData, fieldName) => {
      const values = formData.getAll(fieldName);
      return values.length > 0 ? values.join('<br>') : '';
    };

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
          max-width: 800px;
          margin: 0 auto;
          padding: 40px 20px;
        }
        
        .header {
          text-align: center;
          margin-bottom: 40px;
          position: relative;
        }
        
        .header-logo {
          margin-bottom: 15px;
        }
        
        .header-logo img {
          max-width: 200px;
          height: auto;
        }
        
        .header::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 3px;
          background: linear-gradient(90deg, #5b9d39, #007994);
          border-radius: 2px;
        }
        
        .subtitle {
          color: #94a3b8;
          font-size: 16px;
          font-weight: 400;
        }
        
        .card {
          background: white;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(71, 85, 105, 0.3);
          border-radius: 20px;
          padding: 30px;
          margin-bottom: 25px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        
        .card-title {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 20px;
          color: #fdef04;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }
        
        .field {
          margin-bottom: 15px;
        }
        
        .field-label {
          font-size: 12px;
          font-weight: 500;
          color: #007994;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 5px;
        }
        
        .field-value {
          font-size: 15px;
          color: #5b9d39;
          word-break: break-word;
        }
        
        .attachments {
          margin-top: 20px;
        }
        
        .attachments-title {
          font-size: 14px;
          font-weight: 500;
          color: #007994;
          margin-bottom: 10px;
        }
        
        .attachment-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        
        .attachment-item {
          background: rgba(0, 121, 148, 0.1);
          border: 1px solid rgba(0, 121, 148, 0.3);
          border-radius: 8px;
          padding: 8px 12px;
          font-size: 12px;
          color: #f1f5f9;
        }
        
        .footer {
          text-align: center;
          margin-top: 40px;
          padding-top: 30px;
          border-top: 1px solid rgba(71, 85, 105, 0.3);
          color: #64748b;
          font-size: 14px;
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
              <div class="field-value">${formData.get("firstName")}</div>
            </div>
            <div class="field">
              <div class="field-label">Last Name</div>
              <div class="field-value">${formData.get("lastName")}</div>
            </div>
            <div class="field">
              <div class="field-label">Phone Number</div>
              <div class="field-value">${formData.get("phoneNumber")}</div>
            </div>
            <div class="field">
              <div class="field-label">Email</div>
              <div class="field-value">${formData.get("email")}</div>
            </div>
          </div>
        </div>
        
        <!-- Business Information -->
        <div class="card">
          <div class="card-title">Business Information</div>
          <div class="grid">
            <div class="field">
              <div class="field-label">Business Type</div>
              <div class="field-value">${formData.get("businessType")}</div>
            </div>
            <div class="field">
              <div class="field-label">Business Name</div>
              <div class="field-value">${formData.get("businessName")}</div>
            </div>
            <div class="field">
              <div class="field-label">Business Location</div>
              <div class="field-value">${formData.get("businessLocation")}</div>
            </div>
            <div class="field">
              <div class="field-label">Bin Placement Location</div>
              <div class="field-value">${binPlacementValue}</div>
            </div>
            <div class="field">
              <div class="field-label">Material Type</div>
              <div class="field-value">${formatArrayValue(formData, "materialType")}</div>
            </div>
            <div class="field">
              <div class="field-label">Bin Size</div>
              <div class="field-value">${formatArrayValue(formData, "binSize")}</div>
            </div>
            <div class="field">
              <div class="field-label">Dump Frequency</div>
              <div class="field-value">${formData.get("dumpFrequency")}</div>
            </div>
            <div class="field">
              <div class="field-label">Pickups Per Week</div>
              <div class="field-value">${formData.get("pickupsPerWeek")}</div>
            </div>
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
            <div class="field-value">${contractEndDate}</div>
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
              .filter(att => att.filename !== 'logo.png')
              .map(
                (att) => `<div class="attachment-item">${att.filename}</div>`
              )
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
      to: process.env.EMAIL_TO || process.env.GMAIL_USER,
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