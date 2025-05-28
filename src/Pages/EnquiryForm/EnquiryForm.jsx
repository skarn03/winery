import React, { useState } from "react";
import Header from "../../Components/Header/Header";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    organization: "",
    enquiry: "",
  });

  const [emailLabel, setEmailLabel] = useState("Enter your email .....");
  const [phoneLabel, setPhoneLabel] = useState("Phone Number ...........");
  const [orgLabel, setOrgLabel] = useState("Organization ...........");
  const [enquiryLabel, setEnquiryLabel] = useState("Your Enquiry ........");

  // Error States
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [organizationError, setOrganizationError] = useState("");
  const [enquiryError, setEnquiryError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validations
  const validateEmail = (email) => {
    if (!email) {
      return "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      return "Invalid email format";
    }
    return ""; // No error
  };

  const validatePhone = (phone) => {
    if (!phone) {
      return "Phone number is required";
    } else if (!/^\d{10}$/.test(phone)) {
      return "Invalid phone number format (10 digits required)";
    }
    return "";
  };

  const validateOrganization = (organization) => {
    if (!organization) {
      return "Organization is required";
    }
    return "";
  };

  const validateEnquiry = (enquiry) => {
    if (!enquiry) {
      return "Enquiry is required";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailErr = validateEmail(formData.email);
    const phoneErr = validatePhone(formData.phone);
    const organizationErr = validateOrganization(formData.organization);
    const enquiryErr = validateEnquiry(formData.enquiry);

    setEmailError(emailErr);
    setPhoneError(phoneErr);
    setOrganizationError(organizationErr);
    setEnquiryError(enquiryErr);

    if (emailErr || phoneErr || organizationErr || enquiryErr) {
      return;
    }

    console.log("Form submitted successfully!", formData);
    // TO DO
    /*
    const endpoint = "https://your-endpoint.com/api/enquiry"; // Replace with correct endpoint
  
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log("Enquiry submitted successfully");
      } else {
        console.error("Failed to submit enquiry");
      }
    } catch (error) {
      console.error("Error submitting enquiry:", error);
    }
    */
  };

  return (
    <div className="min-h-screen w-full bg-[#FFFFE3] flex flex-col">
      <div className="h-[12vh]"></div>
      <div className="flex-1 flex items-center pb-[8vh] pt-[12vh]"> 
        <div className="flex flex-col md:flex-row w-full">
          {/* Left Side - Text Content */}
          <div className="mt-5 md:mt-0 flex flex-1 items-center justify-center md:justify-end">
            <div className="w-[95%] md:w-[85%] md:h-[80%]">
              {/* Heading */}
              <h1 className="text-center md:text-start text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-melodrama-regular mb-2 md:mb-18 tracking-normal md:tracking-wider leading-tight">
                Let’s Connect – Your Questions,<span className="hidden sm:inline"><br /></span> Our Passion
              </h1>

              {/* Paragraph */}
              <p className="text-center md:text-start text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-santoshi-regular leading-relaxed tracking-wide">
                Your curiosity fuels our passion – let’s grow together through every question shared
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="flex-1 p-4 flex justify-center md:justify-start">
            <div className="w-full sm:w-[65%] md:w-[95%] lg:w-[80%] h-auto">
              <div className="sm:border sm:border-[#202019] sm:rounded-2xl sm:px-6 sm:pt-6 sm:pb-4 md:px-8 md:pt-4 md:pb-5 lg:pt-8 lg:pb-7">
                <h2 className="text-[24px] font-santoshi-regular text-center mb-4 text-[#202019]">Enquiry Form</h2>
                <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
                  {/* Email Field */}
                  <div className="p-0 relative">
                    <div className="w-full h-[50px] relative">
                      <input
                        name="email"
                        id="email"
                        autoComplete="off"
                        onFocus={() => setEmailLabel("Email")}
                        onBlur={() => {
                          if (!formData.email) setEmailLabel("Enter your email .....");
                        }}
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full h-full px-4 md:px-6 py-2 md:py-4 border ${
                          emailError ? "border-red-600" : "border-[#202019]"
                        } rounded bg-transparent text-[#848484] font-santoshi-regular text-[16px] cursor-pointer appearance-none focus:outline-none focus:ring-0 peer`}
                        placeholder=" "
                      />
                      <label
                        htmlFor="email"
                        className={`ml-3 absolute ${
                          emailError ? "text-red-600" : "text-[#848484]"
                        } duration-500 transform -translate-y-4 scale-75 top-1 z-10 origin-left px-2 
                          peer-placeholder-shown:scale-100 
                          peer-not-placeholder-shown:scale-75 
                          peer-not-placeholder-shown:-translate-y-4 
                          peer-not-placeholder-shown:top-1 
                          peer-not-placeholder-shown:translate-x-1 
                          peer-placeholder-shown:-translate-y-1/2 
                          peer-placeholder-shown:top-1/2 
                          peer-focus:top-1 
                          peer-focus:scale-75 
                          peer-focus:-translate-y-4 
                          peer-focus:translate-x-1 
                          peer-focus:bg-[#FFFFE3] 
                          peer-not-placeholder-shown:backdrop-blur-sm 
                          peer-focus:px-2 
                          start-1 
                          cursor-pointer`}
                      >
                        {emailLabel}
                      </label>
                    </div>
                    {emailError && (
                      <p className="mt-0.5 text-[0.6rem] text-red-600 font-semibold absolute top-12 left-2">
                        {emailError}
                      </p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div className="p-0 relative">
                    <div className="w-full h-[50px] relative">
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        autoComplete="off"
                        onFocus={() => setPhoneLabel("Phone")}
                        onBlur={() => {
                          if (!formData.phone) setPhoneLabel("Phone Number ...........");
                        }}
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full h-full px-4 md:px-6 py-2 md:py-4 border ${
                          phoneError ? "border-red-600" : "border-[#202019]"
                        } rounded bg-transparent text-[#848484] font-santoshi-regular text-[16px] cursor-pointer appearance-none focus:outline-none focus:ring-0 peer`}
                        placeholder=" "
                      />
                      <label
                        htmlFor="phone"
                        className={`ml-3 absolute ${
                          phoneError ? "text-red-600" : "text-[#848484]"
                        } duration-500 transform -translate-y-4 scale-75 top-1 z-10 origin-left px-2 
                          peer-placeholder-shown:scale-100 
                          peer-not-placeholder-shown:scale-75 
                          peer-not-placeholder-shown:-translate-y-4 
                          peer-not-placeholder-shown:top-1 
                          peer-not-placeholder-shown:translate-x-1 
                          peer-placeholder-shown:-translate-y-1/2 
                          peer-placeholder-shown:top-1/2 
                          peer-focus:top-1 
                          peer-focus:scale-75 
                          peer-focus:-translate-y-4 
                          peer-focus:translate-x-1 
                          peer-focus:bg-[#FFFFE3] 
                          peer-not-placeholder-shown:backdrop-blur-sm 
                          peer-focus:px-2 
                          start-1 
                          cursor-pointer`}
                      >
                        {phoneLabel}
                      </label>
                    </div>
                    {phoneError && (
                      <p className="mt-0.5 text-[0.6rem] text-red-600 font-semibold absolute top-12 left-2">
                        {phoneError}
                      </p>
                    )}
                  </div>

                  {/* Organization Field */}
                  <div className="p-0 relative">
                    <div className="w-full h-[50px] relative">
                      <input
                        type="text"
                        name="organization"
                        id="organization"
                        autoComplete="off"
                        onFocus={() => setOrgLabel("Organization")}
                        onBlur={() => {
                          if (!formData.organization) setOrgLabel("Organization ...........");
                        }}
                        value={formData.organization}
                        onChange={handleChange}
                        className={`w-full h-full px-4 md:px-6 py-2 md:py-4 border ${
                          organizationError ? "border-red-600" : "border-[#202019]"
                        } rounded bg-transparent text-[#848484] font-santoshi-regular text-[16px] cursor-pointer appearance-none focus:outline-none focus:ring-0 peer`}
                        placeholder=" "
                      />
                      <label
                        htmlFor="organization"
                        className={`ml-3 absolute ${
                          organizationError ? "text-red-600" : "text-[#848484]"
                        } duration-500 transform -translate-y-4 scale-75 top-1 z-10 origin-left px-2 
                          peer-placeholder-shown:scale-100 
                          peer-not-placeholder-shown:scale-75 
                          peer-not-placeholder-shown:-translate-y-4 
                          peer-not-placeholder-shown:top-1 
                          peer-not-placeholder-shown:translate-x-1 
                          peer-placeholder-shown:-translate-y-1/2 
                          peer-placeholder-shown:top-1/2 
                          peer-focus:top-1 
                          peer-focus:scale-75 
                          peer-focus:-translate-y-4 
                          peer-focus:translate-x-1 
                          peer-focus:bg-[#FFFFE3] 
                          peer-not-placeholder-shown:backdrop-blur-sm 
                          peer-focus:px-2 
                          start-1 
                          cursor-pointer`}
                      >
                        {orgLabel}
                      </label>
                    </div>
                    {organizationError && (
                      <p className="mt-0.5 text-[0.6rem] text-red-600 font-semibold absolute top-12 left-2">
                        {organizationError}
                      </p>
                    )}
                  </div>

                  {/* Enquiry Field */}
                  <div className="p-0 relative">
                    <div className="w-full h-[28%] relative">
                      <textarea
                        name="enquiry"
                        id="enquiry"
                        autoComplete="off"
                        onFocus={() => setEnquiryLabel("Enquiry")}
                        onBlur={() => {
                          if (!formData.enquiry) setEnquiryLabel("Your Enquiry ........");
                        }}
                        value={formData.enquiry}
                        onChange={handleChange}
                        className={`w-full h-full px-4 md:px-6 py-2 md:py-4 border ${
                          enquiryError ? "border-red-600" : "border-[#202019]"
                        } rounded bg-transparent text-[#848484] font-santoshi-regular text-[16px] cursor-pointer appearance-none focus:outline-none focus:ring-0 peer`}
                        placeholder=" "
                        rows="4"
                      ></textarea>
                      <label
                        htmlFor="enquiry"
                        className={`ml-3 absolute ${
                          enquiryError ? "text-red-600" : "text-[#848484]"
                        } duration-500 transform -translate-y-4 scale-75 top-[10%] z-10 origin-left px-2 
                          peer-placeholder-shown:scale-100 
                          peer-placeholder-shown:translate-y-0  
                          peer-placeholder-shown:top-[10%] 
                          peer-focus:top-1
                          peer-focus:scale-75 
                          peer-focus:-translate-y-4 
                          peer-focus:translate-x-1 
                          peer-focus:bg-[#FFFFE3]
                          peer-focus:px-2 
                          peer-not-placeholder-shown:scale-75 
                          peer-not-placeholder-shown:-translate-y-4 
                          peer-not-placeholder-shown:top-1 
                          peer-not-placeholder-shown:translate-x-1 
                          peer-not-placeholder-shown:backdrop-blur-sm 
                          start-1 
                          cursor-pointer`}
                      >
                        {enquiryLabel}
                      </label>
                    </div>
                    {enquiryError && (
                      <p className="mt-0.5 text-[0.6rem] text-red-600 font-semibold absolute top-[94%] left-2">
                        {enquiryError}
                      </p>
                    )}
                  </div>

                  <button type="submit" className="w-full h-[50px] bg-[#202019] text-[#FFFFE3] font-santoshi-bold py-2 rounded-lg mb-0 cursor-pointer">
                    Submit Query
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}