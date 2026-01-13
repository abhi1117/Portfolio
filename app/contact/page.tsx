"use client";

import React, { useState } from "react";

type FormDataType = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  // ✅ FIXED: Works for both input & textarea
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <section
        style={{ fontFamily: "Montserrat, sans-serif" }}
        className="text-gray-400 bg-gray-950 body-font relative"
      >
        <div className="flex justify-center relative top-10 font-semibold max-sm:top-16">
          <h1 className="text-white text-4xl inline">Contact</h1>
          <h1 className="text-orange-500 text-4xl inline ml-2">Me</h1>
        </div>

        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          {/* Map section */}
          <div className="max-sm:hidden lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              title="map"
              className="absolute inset-0"
              frameBorder={0}
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Lucknow,Uttar+Pradesh,India&t=&z=13&iwloc=B&output=embed"
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.16)" }}
            />

            <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">Lucknow, Uttar Pradesh, India</p>
              </div>

              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  EMAIL
                </h2>
                <a
                  href="mailto:singh.abhishek1117@gmail.com"
                  className="text-indigo-400 leading-relaxed"
                >
                  singh.abhishek1117@gmail.com
                </a>

                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <a href="tel:+918756565995" className="leading-relaxed">
                  +91 8756565995
                </a>
              </div>
            </div>
          </div>

          {/* Form section */}
          <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <div className="flex relative bottom-5">
              <h1 className="text-white text-2xl inline">Get in</h1>
              <h1 className="text-orange-500 text-2xl inline ml-2 font-semibold">
                touch
              </h1>
            </div>

            <p className="leading-relaxed mb-5">
              Ready to collaborate? Let&apos;s make magic happen.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-400">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-gray-100 py-1 px-3"
                />
              </div>

              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-400">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-gray-100 py-1 px-3"
                />
              </div>

              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-400">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-gray-100 py-1 px-3 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="text-white bg-indigo-500 py-2 px-6 hover:bg-indigo-600 rounded text-lg"
              >
                {isLoading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
