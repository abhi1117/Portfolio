import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <section
        style={{ fontFamily: "Montserrat, sans-serif" }}
        className="text-gray-400 bg-gray-900 body-font"
      >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          
          {/* Project Image */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 lg:relative lg:left-16">
            <a
              href="https://www.smileageindia.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="object-cover object-center rounded hover:transition duration-200 ease-in-out hover:scale-105"
                alt="SmileAge India website"
                src="/meditrack2.jpg"
                width={720}
                height={600}
              />
            </a>
          </div>

          {/* Content */}
          <div className="lg:flex-grow lg:pl-56 flex flex-col lg:items-start lg:text-left items-center text-center max-sm:text-start">
            <h1 className="title-font sm:text-4xl text-3xl mb-8 font-semibold text-white">
              SmileAge India – Healthcare Web Platform
            </h1>

            <div>
              <p className="text-orange-500 font-semibold">
                Comprehensive Dental & Healthcare Platform:
              </p>
              <p className="mb-8 leading-relaxed">
                SmileAge India is a modern healthcare web platform designed to
                provide users with seamless access to dental and healthcare
                services. The platform focuses on delivering clear information,
                intuitive navigation, and a professional digital presence for
                healthcare providers.
              </p>

              <p className="text-orange-500 font-semibold">
                Responsive & User-Centric Design:
              </p>
              <p className="mb-8 leading-relaxed">
                The application features a fully responsive layout optimized for
                desktops, tablets, and mobile devices. Special attention was
                given to UI/UX design to ensure a smooth and engaging experience
                for patients and visitors.
              </p>

              <p className="text-orange-500 font-semibold">
                Scalable Frontend Architecture:
              </p>
              <p className="mb-8 leading-relaxed">
                Built using modern web technologies, the platform follows clean
                and scalable frontend practices. Components are structured for
                reusability and performance, ensuring long-term maintainability
                as the platform grows.
              </p>

              <p className="text-orange-500 font-semibold">
                Secure & Reliable Web Experience:
              </p>
              <p className="mb-8 leading-relaxed">
                The website is optimized for performance and reliability, with
                secure data handling practices and SEO-friendly implementation
                to improve visibility and trust for healthcare services.
              </p>

              <p className="text-orange-500 font-semibold">
                Real-World Production Deployment:
              </p>
              <p className="mb-8 leading-relaxed">
                SmileAge India is a live, production-ready application actively
                serving real users. The project demonstrates my ability to
                deliver real-world solutions from design to deployment while
                maintaining quality, performance, and usability.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4">
              <a
                href="https://www.smileageindia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 transition duration-150 rounded text-lg"
              >
                LIVE WEBSITE
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
