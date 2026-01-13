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
              href="https://charakdt.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="object-cover object-center rounded hover:transition duration-200 ease-in-out hover:scale-105"
                alt="CharakDT platform"
                src="/organic.jpg"
                width={720}
                height={600}
              />
            </a>
          </div>

          {/* Content */}
          <div className="lg:flex-grow lg:pl-56 flex flex-col lg:items-start lg:text-left items-center text-center max-sm:text-start">
            <h1 className="title-font sm:text-4xl text-3xl mb-8 font-semibold text-white">
              CharakDT – Healthcare Documentation Platform
            </h1>

            <div>
              <p className="text-orange-500 font-semibold">
                AI-Powered Clinical Documentation:
              </p>
              <p className="mb-8 leading-relaxed">
                CharakDT is a healthcare-focused web platform designed to assist
                medical professionals with efficient and accurate clinical
                documentation. It streamlines patient record creation using
                technology-driven workflows to reduce manual effort.
              </p>

              <p className="text-orange-500 font-semibold">
                Speech-to-Text & Smart Data Capture:
              </p>
              <p className="mb-8 leading-relaxed">
                The platform enables seamless speech-to-text conversion for
                medical notes, allowing doctors to dictate observations and
                generate structured records quickly, improving productivity and
                accuracy during consultations.
              </p>

              <p className="text-orange-500 font-semibold">
                Secure Medical Data Management:
              </p>
              <p className="mb-8 leading-relaxed">
                CharakDT emphasizes data security and reliability, ensuring that
                sensitive patient information is handled securely with proper
                authentication, access control, and cloud-based storage
                practices.
              </p>

              <p className="text-orange-500 font-semibold">
                Scalable & Production-Ready Architecture:
              </p>
              <p className="mb-8 leading-relaxed">
                Built using modern web technologies, the platform follows a
                scalable architecture suitable for real-world healthcare
                environments. Performance optimization and maintainability were
                key considerations throughout development.
              </p>

              <p className="text-orange-500 font-semibold">
                Real-World Deployment & Impact:
              </p>
              <p className="mb-8 leading-relaxed">
                CharakDT is a live, production-ready application actively used
                by healthcare professionals, demonstrating the ability to
                deliver reliable, domain-specific solutions from concept to
                deployment.
              </p>
            </div>

            {/* Button */}
            <div className="flex justify-center">
              <a
                href="https://charakdt.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 transition duration-150 rounded text-lg"
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
