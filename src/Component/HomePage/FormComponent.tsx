"use client";
import React, { useState } from "react";
import Typography from "../UI/Typography";
import Button from "../UI/button";
import Image from "next/image";
import component from "@/assets/images/Homepage/formComponent.svg";
import ThankYouPopup from "./ThankyouPopup";

interface FormData {
  yourName: string;
  emailAddress: string;
  contactNumber: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";
interface SubmitResult {
  status: SubmitStatus;
  message: string | null;
}

const FormComponent = () => {
  const [formData, setFormData] = useState<FormData>({
    yourName: "",
    emailAddress: "",
    contactNumber: "",
  });

  const [submitResult, setSubmitResult] = useState<SubmitResult>({
    status: "idle",
    message: null,
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (submitResult.status === "error") {
      setSubmitResult({ status: "idle", message: null });
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitResult({ status: "loading", message: null }); // Set loading state
    setShowSuccessPopup(false);

    try {
      const response = await fetch("/api/contact", {
        // Send to your API route
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log(formData, "formdata");

      const result = await response.json(); // Get response body
      console.log(result, "result");

      if (response.ok) {
        console.log("Form submitted successfully!");
        setSubmitResult({ status: "success", message: null });
        setFormData({ yourName: "", emailAddress: "", contactNumber: "" });
        setShowSuccessPopup(true);
      } else {
        console.error("Form submission failed:", result.message);
        setSubmitResult({
          status: "error",
          message: result.message || "An error occurred. Please try again.",
        });
      }
    } catch (error) {
      console.error("Network or fetch error:", error);
      setSubmitResult({
        status: "error",
        message:
          "Could not connect to the server. Please check your connection.",
      });
    }
  };

  const handleClosePopup = () => {
    setShowSuccessPopup(false);
    setSubmitResult({ status: "idle", message: null }); // Reset status after closing
  };
  return (
    <>
      <div id="contactSection" className="flex gap-4 mx-4 3xl:max-w-[1600px] 3xl:mx-auto">
        <div className="rounded-2xl bg-[#00695F] px-10 py-16 flex-2/5 relative">
          <Typography
            variant="title"
            className="font-leaguespartan tracking-tight relative z-10 mb-3"
          >
            Contact
            <br /> Us
          </Typography>
          <Typography
            variant="body1"
            className="font-raleway relative z-10 max-w-[370px]"
          >
            Fill in the form to schedule a meeting with our data experts
          </Typography>
          <Image
            src={component}
            alt=""
            width={290}
            // height={250}
            className="top-0 right-0 absolute rounded-2xl w-[250px] 1xl:w-[290px]"
          />
        </div>
        <div className="flex-3/5 bg-[#151515] rounded-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div>
              <input
                type="text"
                id="yourName"
                name="yourName"
                placeholder="Your Name"
                value={formData.yourName}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-0 border-b border-gray-400 focus:border-[#7DDEDA]  text-white placeholder:text-gray-400 py-2 px-1 focus:outline-none focus:ring-0 transition duration-300 ease-in-out font-raleway text-lg"
              />
            </div>

            <div>
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                placeholder="Email Address"
                value={formData.emailAddress}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-0 border-b border-gray-400 focus:border-[#7DDEDA]  text-white placeholder:text-gray-400 py-2 px-1 focus:outline-none focus:ring-0 transition duration-300 ease-in-out font-raleway text-lg"
              />
            </div>

            <div>
              {/* <input
                type="text"
                id="contactNumber"
                name="contactNumber"
                placeholder="What should we know before contacting you?"
                value={formData.contactNumber}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-0 border-b border-gray-400 focus:border-[#7DDEDA]  text-white placeholder:text-gray-400 py-2 px-1 focus:outline-none focus:ring-0 transition duration-300 ease-in-out font-raleway text-lg"
              /> */}
              <textarea
                id="contactNumber"
                name="contactNumber"
                placeholder="What should we know before contacting you?"
                value={formData.contactNumber}
                onChange={handleChange}
                required
                rows={1.5}
                className="w-full bg-transparent border-0 border-b border-gray-400 focus:border-[#7DDEDA] text-white placeholder:text-gray-400 py-2 px-1 focus:outline-none focus:ring-0 transition duration-300 ease-in-out font-raleway text-lg"
              />
            </div>
            {submitResult.status !== "idle" && submitResult.message && (
              <div
                className={`mt-4 text-sm ${
                  submitResult.status === "success"
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {submitResult.message}
              </div>
            )}

            <div className="mt-6">
              <Button
                variant="primary"
                type="submit"
                className={`${
                  submitResult.status === "loading"
                    ? "opacity-70 cursor-not-allowed"
                    : ""
                }`}
              >
                {submitResult.status === "loading" ? "SENDING..." : "SUBMIT"}
              </Button>
            </div>
          </form>
        </div>
      </div>

      <ThankYouPopup isOpen={showSuccessPopup} onClose={handleClosePopup} />
    </>
  );
};

export default FormComponent;
