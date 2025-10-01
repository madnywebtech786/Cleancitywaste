"use client";
import { Trash } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

const MultiSelect = ({
  options,
  value,
  onChange,
  placeholder,
  name,
  error,
  isMulti = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleOption = (optionValue) => {
    if (isMulti) {
      const newValues = value.includes(optionValue)
        ? value.filter((v) => v !== optionValue)
        : [...value, optionValue];
      onChange({ target: { name, value: newValues } });
    } else {
      onChange({ target: { name, value: optionValue } });
      setIsOpen(false);
    }
  };

  const removeTag = (optionValue) => {
    const newValues = value.filter((v) => v !== optionValue);
    onChange({ target: { name, value: newValues } });
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className={`w-full bg-gray-100/50 border ${
          error ? "border-red-500" : "border-gray-600"
        } rounded-xl px-4 py-3 text-primary focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all cursor-pointer min-h-[48px] flex flex-wrap items-center gap-2`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isMulti ? (
          value.length === 0 ? (
            <span className="text-primary">{placeholder}</span>
          ) : (
            value.map((val, index) => (
              <span
                key={index}
                className="bg-secondary/20 text-secondary px-2 py-1 rounded-full text-sm flex items-center gap-1"
              >
                {val}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeTag(val);
                  }}
                  className="ml-1 hover:bg-secondary/30 rounded-full w-4 h-4 flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </span>
            ))
          )
        ) : value ? (
          <span className="text-primary">{value}</span>
        ) : (
          <span className="text-primary">{placeholder}</span>
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute z-10 w-full bg-white border border-gray-600 rounded-xl mt-1 max-h-60 overflow-y-auto shadow-xl">
          {options.map((option, index) => (
            <div
              key={index}
              className="flex items-center px-4 py-3 hover:bg-gray-100/50 cursor-pointer"
              onClick={() => toggleOption(option)}
            >
              {!isMulti && (
                <div
                  className={`w-5 h-5 rounded mr-3 flex items-center justify-center`}
                >
                  {/* marker for selected single option */}
                  {value === option && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-secondary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
              )}
              {isMulti && (
                <div
                  className={`w-5 h-5 rounded border mr-3 flex items-center justify-center ${
                    value.includes(option)
                      ? "bg-secondary border-secondary"
                      : "border-gray-400"
                  }`}
                >
                  {value.includes(option) && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
              )}
              <span className="text-primary">{option}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",

    // Business Information
    businessType: "",
    businessName: "",
    businessLocation: "",
    // Removed legacy materialType/binSize/dumpFrequency/pickupsPerWeek from top-level
    // Bin details will be added to `bins` array
    bins: [],

    // Current Contract Information
    contractEndDate: "",
    noExistingContract: false,

    // Files
    files: [],
  });

  // Current bin input values (separate from the list)
  const [currentBin, setCurrentBin] = useState({
    materialType: "",
    binSize: "",
    numberOfBins: 1,
    binPlacementLocation: "",
    dumpFrequency: "",
    pickupsPerWeek: "",
  });

  const [binErrors, setBinErrors] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: "", message: "" });
  const fileInputRef = useRef(null);

  const validate = () => {
    const newErrors = {};

    // Personal Information
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\+?[\d\s\-\(\)]{10,}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Business Information
    if (!formData.businessType)
      newErrors.businessType = "Business type is required";
    if (!formData.businessName.trim())
      newErrors.businessName = "Business name is required";
    if (!formData.businessLocation.trim())
      newErrors.businessLocation = "Business location is required";

    // IMPORTANT: do NOT validate the CURRENT BIN INPUTS here.
    // Only require that at least one bin info entry exists in `formData.bins`.
    // Per-bin field validation happens only when user clicks "Add More" (validateCurrentBin).
    if (!formData.bins || formData.bins.length === 0)
      newErrors.bins = "Please add at least one bin information";

    // Current Contract Information
    if (!formData.noExistingContract && !formData.contractEndDate) {
      newErrors.contractEndDate =
        'Please select a contract end date or check "No existing contract"';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));

      // Clear contract end date when checkbox is checked
      if (name === "noExistingContract" && checked) {
        setFormData((prev) => ({
          ...prev,
          contractEndDate: "",
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleCurrentBinChange = (e) => {
    const { name, value, type } = e.target;
    const v =
      type === "number" ? (value === "" ? "" : parseInt(value, 10)) : value;
    setCurrentBin((prev) => ({
      ...prev,
      [name]: v,
    }));

    if (binErrors[name]) {
      setBinErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateCurrentBin = () => {
    const be = {};
    if (!currentBin.materialType) be.materialType = "Material type is required";
    if (!currentBin.binSize) be.binSize = "Bin size is required";
    if (!currentBin.numberOfBins || currentBin.numberOfBins < 1)
      be.numberOfBins = "Enter number of bins (min 1)";
    if (!currentBin.binPlacementLocation)
      be.binPlacementLocation = "Bin placement location is required";
    if (!currentBin.dumpFrequency)
      be.dumpFrequency = "Dump frequency is required";
    if (!currentBin.pickupsPerWeek)
      be.pickupsPerWeek = "Number of pickups is required";
    setBinErrors(be);
    return Object.keys(be).length === 0;
  };

  const addBin = () => {
    if (!validateCurrentBin()) return;

    setFormData((prev) => ({
      ...prev,
      bins: [...prev.bins, { ...currentBin }],
    }));

    // reset current bin to defaults
    setCurrentBin({
      materialType: "",
      binSize: "",
      numberOfBins: 1,
      binPlacementLocation: "",
      dumpFrequency: "",
      pickupsPerWeek: "",
    });

    setBinErrors({});
    // also clear general bins error if any
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy.bins;
      return copy;
    });
  };

  const removeBin = (indexToRemove) => {
    setFormData((prev) => ({
      ...prev,
      bins: prev.bins.filter((_, i) => i !== indexToRemove),
    }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      files: files,
    }));
  };

  const removeFile = (indexToRemove) => {
    setFormData((prev) => ({
      ...prev,
      files: prev.files.filter((_, index) => index !== indexToRemove),
    }));
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitMessage({ type: "", message: "" });

    try {
      const formDataToSend = new FormData();

      // Add all form fields
      Object.keys(formData).forEach((key) => {
        if (key === "files") {
          formData.files.forEach((file) => {
            formDataToSend.append("files", file);
          });
        } else if (key === "noExistingContract") {
          formDataToSend.append(key, formData[key].toString());
        } else if (key === "bins") {
          // append each bin as JSON string so backend can parse
          formData.bins.forEach((bin) => {
            formDataToSend.append("bins", JSON.stringify(bin));
          });
        } else {
          formDataToSend.append(key, formData[key]);
        }
      });

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage({
          type: "success",
          message: result.message || "Form submitted successfully!",
        });
        // Reset form after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          businessType: "",
          businessName: "",
          businessLocation: "",
          bins: [],
          contractEndDate: "",
          noExistingContract: false,
          files: [],
        });
        setCurrentBin({
          materialType: "",
          binSize: "",
          numberOfBins: 1,
          binPlacementLocation: "",
          dumpFrequency: "",
          pickupsPerWeek: "",
        });
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        setTimeout(() => {
          setSubmitMessage({ type: "", message: "" });
        }, 5000);
      } else {
        setSubmitMessage({
          type: "error",
          message: result.message || "Failed to submit form. Please try again.",
        });
      }
    } catch (error) {
      setSubmitMessage({
        type: "error",
        message: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const businessTypes = [
    "Automotive Services",
    "Beauty, Salon & Personal Care",
    "Construction & Renovation",
    "Logistics & Warehousing",
    "Healthcare & Professional Services",
    "Manufacturing & Industrial",
    "Property & Office Management",
    "Real Estate, Rental & Leasing",
    "Restaurants & Hospitality",
    "Retail & E-Commerce",
    "Education & Training",
    "Technology & IT Services",
    "Finance & Insurance",
    "Cleaning & Waste Management",
    "Other",
  ];

  const binPlacementOptions = [
    "Enclosure",
    "Outside",
    "Parking Lot",
    "Underground Parking Lot",
    "Other",
  ];

  const materialTypes = ["Waste", "Recycle", "Organic"];
  const binSizes = ["4 Yard", "6 Yard", "8 Yard"];
  const dumpFrequencies = ["Weekly", "Bi-Weekly"];
  const pickupOptions = [
    "1 time",
    "2 times",
    "3 times",
    "4 times",
    "5 times",
    "6 times",
    "Daily",
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#5b9d39] to-secondary bg-clip-text text-transparent">
              Get Your Custom Quote
            </span>
          </h2>
          <p className="text-xl text-primary max-w-3xl mx-auto">
            Fill out the form below and our waste management specialists will
            contact you with a personalized solution.
          </p>
        </div>

        <div className="bg-gray-50 backdrop-blur-xl rounded-3xl border border-gray-700/50 p-6 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h3 className="text-2xl font-semibold mb-6 text-secondary flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Personal Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-gray-100/50 placeholder:text-primary border border-gray-600 rounded-xl px-4 py-3 text-primary focus:outline-none focus:ring-2 focus:ring-[#5b9d39] focus:border-transparent transition-all"
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-gray-100/50 placeholder:text-primary border border-gray-600 rounded-xl px-4 py-3 text-primary focus:outline-none focus:ring-2 focus:ring-[#5b9d39] focus:border-transparent transition-all"
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full bg-gray-100/50 placeholder:text-primary border border-gray-600 rounded-xl px-4 py-3 text-primary focus:outline-none focus:ring-2 focus:ring-[#5b9d39] focus:border-transparent transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-100/50 placeholder:text-primary border border-gray-600 rounded-xl px-4 py-3 text-primary focus:outline-none focus:ring-2 focus:ring-[#5b9d39] focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Business Information */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h3 className="text-2xl font-semibold mb-6 text-secondary flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                Business Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Business Type *
                  </label>
                  <MultiSelect
                    name="businessType"
                    options={businessTypes}
                    value={formData.businessType}
                    onChange={handleChange}
                    placeholder="Select business type"
                    error={errors.businessType}
                    isMulti={false}
                  />
                  {errors.businessType && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.businessType}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full bg-gray-100/50 placeholder:text-primary border border-gray-600 rounded-xl px-4 py-3 text-primary focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                    placeholder="Enter your business name"
                  />
                  {errors.businessName && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.businessName}
                    </p>
                  )}
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-primary mb-2">
                    Business Location *
                  </label>
                  <input
                    type="text"
                    name="businessLocation"
                    value={formData.businessLocation}
                    onChange={handleChange}
                    className="w-full bg-gray-100/50 placeholder:text-primary border border-gray-600 rounded-xl px-4 py-3 text-primary focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                    placeholder="Enter full business address"
                  />
                  {errors.businessLocation && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.businessLocation}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Bin Information (NEW) */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h3 className="text-2xl font-semibold mb-6 text-secondary flex items-center">
                <Trash size={22} className="mr-2" />
                Bin Information
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Material to Dump (single select) */}
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Material to Dump *
                  </label>
                  <MultiSelect
                    name="materialType"
                    options={materialTypes}
                    value={currentBin.materialType}
                    onChange={(e) => {
                      // MultiSelect returns { target: { name, value } }
                      const { name, value } = e.target;
                      setCurrentBin((prev) => ({ ...prev, [name]: value }));
                      if (binErrors.materialType)
                        setBinErrors((b) => ({ ...b, materialType: "" }));
                    }}
                    placeholder="Select material type"
                    error={binErrors.materialType}
                    isMulti={false}
                  />
                  {binErrors.materialType && (
                    <p className="text-red-400 text-sm mt-1">
                      {binErrors.materialType}
                    </p>
                  )}
                </div>

                {/* Bin Size (single select) */}
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Bin Size *
                  </label>
                  <MultiSelect
                    name="binSize"
                    options={binSizes}
                    value={currentBin.binSize}
                    onChange={(e) => {
                      const { name, value } = e.target;
                      setCurrentBin((prev) => ({ ...prev, [name]: value }));
                      if (binErrors.binSize)
                        setBinErrors((b) => ({ ...b, binSize: "" }));
                    }}
                    placeholder="Select bin size"
                    error={binErrors.binSize}
                    isMulti={false}
                  />
                  {binErrors.binSize && (
                    <p className="text-red-400 text-sm mt-1">
                      {binErrors.binSize}
                    </p>
                  )}
                </div>

                {/* Number of Bins (number input) */}
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Number of Bins *
                  </label>
                  <input
                    type="number"
                    name="numberOfBins"
                    value={currentBin.numberOfBins}
                    min={1}
                    max={20}
                    onChange={(e) =>
                      handleCurrentBinChange({
                        target: {
                          name: "numberOfBins",
                          value: e.target.value,
                          type: "number",
                        },
                      })
                    }
                    className="w-full bg-gray-100/50 placeholder:text-primary border border-gray-600 rounded-xl px-4 py-3 text-primary focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                  />
                  {binErrors.numberOfBins && (
                    <p className="text-red-400 text-sm mt-1">
                      {binErrors.numberOfBins}
                    </p>
                  )}
                </div>

                {/* Bin Placement Location (single select) */}
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Bin Placement Location *
                  </label>
                  <MultiSelect
                    name="binPlacementLocation"
                    options={binPlacementOptions}
                    value={currentBin.binPlacementLocation}
                    onChange={(e) => {
                      const { name, value } = e.target;
                      setCurrentBin((prev) => ({ ...prev, [name]: value }));
                      if (binErrors.binPlacementLocation)
                        setBinErrors((b) => ({
                          ...b,
                          binPlacementLocation: "",
                        }));
                    }}
                    placeholder="Choose placement location"
                    error={binErrors.binPlacementLocation}
                    isMulti={false}
                  />
                  {binErrors.binPlacementLocation && (
                    <p className="text-red-400 text-sm mt-1">
                      {binErrors.binPlacementLocation}
                    </p>
                  )}
                </div>

                {/* How Frequently to Dump? (single select) */}
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    How Frequently to Dump? *
                  </label>
                  <MultiSelect
                    name="dumpFrequency"
                    options={dumpFrequencies}
                    value={currentBin.dumpFrequency}
                    onChange={(e) => {
                      const { name, value } = e.target;
                      setCurrentBin((prev) => ({ ...prev, [name]: value }));
                      if (binErrors.dumpFrequency)
                        setBinErrors((b) => ({ ...b, dumpFrequency: "" }));
                    }}
                    placeholder="Select frequency"
                    error={binErrors.dumpFrequency}
                    isMulti={false}
                  />
                  {binErrors.dumpFrequency && (
                    <p className="text-red-400 text-sm mt-1">
                      {binErrors.dumpFrequency}
                    </p>
                  )}
                </div>

                {/* Number of Pickups Per Week (single select) */}
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Number of Pickups Per Week *
                  </label>
                  <MultiSelect
                    name="pickupsPerWeek"
                    options={pickupOptions}
                    value={currentBin.pickupsPerWeek}
                    onChange={(e) => {
                      const { name, value } = e.target;
                      setCurrentBin((prev) => ({ ...prev, [name]: value }));
                      if (binErrors.pickupsPerWeek)
                        setBinErrors((b) => ({ ...b, pickupsPerWeek: "" }));
                    }}
                    placeholder="Select number of pickups"
                    error={binErrors.pickupsPerWeek}
                    isMulti={false}
                  />
                  {binErrors.pickupsPerWeek && (
                    <p className="text-red-400 text-sm mt-1">
                      {binErrors.pickupsPerWeek}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6 flex gap-4 items-center">
                <button
                  type="button"
                  onClick={addBin}
                  className="bg-gradient-to-r from-[#5b9d39] to-secondary text-white px-6 py-2 rounded-full font-semibold"
                >
                  Add More
                </button>
                {errors.bins && (
                  <p className="text-red-400 text-sm">{errors.bins}</p>
                )}
              </div>

              {/* Added bins list */}
              {formData.bins.length > 0 && (
                <div className="mt-6 grid gap-4">
                  {formData.bins.map((b, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-lg bg-gray-100/60 border border-gray-300 flex flex-col md:flex-row justify-between items-start gap-6"
                    >
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full md:w-10/12">
                        <div className="flex flex-col gap-1">
                          <div className="text-sm text-gray-600">Material</div>
                          <div className="font-medium">{b.materialType}</div>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="text-sm text-gray-600 ">Bin Size</div>
                          <div className="font-medium">{b.binSize}</div>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="text-sm text-gray-600 ">
                            Number of Bins
                          </div>
                          <div className="font-medium">{b.numberOfBins}</div>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="text-sm text-gray-600 ">
                            Placement
                          </div>
                          <div className="font-medium">
                            {b.binPlacementLocation}
                          </div>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="text-sm text-gray-600 ">
                            Dump Frequency
                          </div>
                          <div className="font-medium">{b.dumpFrequency}</div>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="text-sm text-gray-600 ">
                            Pickups / Week
                          </div>
                          <div className="font-medium">{b.pickupsPerWeek}</div>
                        </div>
                      </div>
                      <div className="flex md:justify-end w-full md:w-2/12">
                        <button
                          type="button"
                          onClick={() => removeBin(i)}
                          className="text-white bg-red-600 p-2 rounded-xl"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Current Contract Information */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h3 className="text-2xl font-semibold mb-6 text-secondary flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Current Contract Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="noExistingContract"
                    checked={formData.noExistingContract}
                    onChange={handleChange}
                    className="w-5 h-5 text-[#5b9d39] bg-gray-800 border-gray-600 rounded focus:ring-[#5b9d39] focus:ring-2"
                  />
                  <label className="ml-3 text-sm font-medium text-primary">
                    I do not have an existing contract
                  </label>
                </div>

                {!formData.noExistingContract && (
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      When does your current contract end? *
                    </label>
                    <input
                      type="date"
                      name="contractEndDate"
                      value={formData.contractEndDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full bg-gray-100/50 placeholder:text-primary border border-gray-600 rounded-xl px-4 py-3 text-primary focus:outline-none focus:ring-2 focus:ring-[#5b9d39] focus:border-transparent transition-all"
                    />
                    {errors.contractEndDate && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.contractEndDate}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* File Attachments */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h3 className="text-2xl font-semibold mb-6 text-secondary flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                File Attachments
              </h3>
              <div className="space-y-4">
                <div
                  className="border-2 border-dashed border-gray-600 rounded-xl p-6 text-center hover:border-secondary hover:bg-primary/20 transition-all cursor-pointer"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 mx-auto text-gray-400 mb-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <p className="text-primary mb-2">Click to upload files</p>
                  <p className="text-sm text-gray-400">
                    Supports multiple files (PDF, DOC, JPG, PNG)
                  </p>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    multiple
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif"
                    className="hidden"
                  />
                </div>

                {formData.files.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-primary">
                      Selected Files:
                    </h4>
                    {formData.files.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-gray-100/50 placeholder:text-primary rounded-lg p-3"
                      >
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-secondary"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="text-primary font-medium text-sm">
                              {file.name}
                            </p>
                            <p className="text-gray-400 text-xs">
                              {formatFileSize(file.size)} •{" "}
                              {file.type.split("/")[1] || "file"}
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-red-400 hover:text-red-300 transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {submitMessage.message && (
              <div
                className={`mb-6 p-4 rounded-xl text-center ${
                  submitMessage.type === "success"
                    ? "bg-gradient-to-r from-primary to-secondary  text-white"
                    : "bg-red-900/30 border border-red-500/30 text-red-300"
                }`}
              >
                {submitMessage.message}
              </div>
            )}

            {/* Submit Button */}
            <div className="text-center pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-[#5b9d39] to-secondary text-white px-12 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-transform disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </div>
                ) : (
                  "Submit Request"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
