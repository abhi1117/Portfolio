"use client";

import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // New state for loading animation

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true); // Start the loading animation

    try { 
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }); 

      if (response.ok) {
        console.log("Form submitted successfully");
        // Reset form fields after successful submission
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert("Failed to submit data");
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setIsSubmitting(false); // End the loading animation
    }
  };

  return (
    <div style={{ fontFamily: "Montserrat, sans-serif" }}>
      <section className="text-gray-400 bg-gray-950 body-font relative">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="max-sm:text-3xl lg:text-4xl font-medium title-font mb-4 text-orange-500">
              <TypeAnimation
                sequence={["Contact Me", 1000, "", 1000]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "1em", display: "inline-block" }}
                repeat={Infinity}
              />
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Ready to collaborate? Let&apos;s make magic happen.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Message
                  </label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isSubmitting} // Disable button when submitting
                  className={`flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 transition duration-200 rounded text-lg ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <svg
                      className="animate-spin h-5 w-5 mr-3 text-white"
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
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.978 7.978 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
