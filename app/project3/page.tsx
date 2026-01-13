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
              href="https://www.bracefree.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="object-cover object-center rounded hover:transition duration-200 ease-in-out hover:scale-105"
                alt="BraceFree Orthodontics Platform"
                src="/girl3.jpg"
                width={720}
                height={600}
              />
            </a>
          </div>

          {/* Content */}
          <div className="lg:flex-grow lg:pl-56 flex flex-col lg:items-start lg:text-left items-center text-center max-sm:text-start">
            <h1 className="title-font sm:text-4xl text-3xl mb-8 font-semibold text-white">
              BraceFree – Clear Aligner & Orthodontics Platform
            </h1>

            <div>
              <p className="text-orange-500 font-semibold">
                Modern Orthodontic Care Platform:
              </p>
              <p className="mb-8 leading-relaxed">
                BraceFree is a healthcare-focused web platform designed to
                educate users about clear aligner treatments and modern
                orthodontic solutions. The platform provides clear, structured
                information to help users make informed dental care decisions.
              </p>

              <p className="text-orange-500 font-semibold">
                User-Centric & Responsive Design:
              </p>
              <p className="mb-8 leading-relaxed">
                The application features a clean, responsive, and intuitive UI
                optimized for all devices. Special emphasis was placed on user
                experience to ensure smooth navigation and easy access to
                treatment-related information.
              </p>

              <p className="text-orange-500 font-semibold">
                Performance-Optimized Web Experience:
              </p>
              <p className="mb-8 leading-relaxed">
                Built using modern web technologies, BraceFree is optimized for
                fast load times and smooth interactions, ensuring a reliable and
                engaging experience for healthcare audiences.
              </p>

              <p className="text-orange-500 font-semibold">
                Secure & Trust-Focused Platform:
              </p>
              <p className="mb-8 leading-relaxed">
                The platform follows best practices for security and data
                handling, helping establish trust and credibility in a sensitive
                healthcare domain.
              </p>

              <p className="text-orange-500 font-semibold">
                Real-World Production Deployment:
              </p>
              <p className="mb-8 leading-relaxed">
                BraceFree is a live, production-ready platform actively serving
                real users, showcasing the ability to deliver scalable,
                healthcare-grade web solutions from concept to deployment.
              </p>
            </div>

            {/* Button */}
            <div className="flex justify-center">
              <a
                href="https://www.bracefree.in/"
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
