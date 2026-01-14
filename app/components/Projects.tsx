import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Projects = () => {
  return (
    <div style={{ fontFamily: "Montserrat, sans-serif" }}>
      <section className="text-gray-400 bg-gray-950 body-font py-12 mb-10">
        <div className="container px-5 mx-auto">
          <div className="flex flex-col">
            <div className="flex text-justify justify-center sm:flex-row py-6 mb-12">
              <h1 className="max-sm:w-2/5 font-medium title-font text-4xl mb-2 sm:mb-0 text-orange-500">
                <TypeAnimation
                  sequence={["Projects", 1000, "", 1000]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: "1em", display: "inline-block" }}
                  repeat={Infinity}
                />
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            
            {/* Project 1 – SmileAge India */}
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Link href="/project1">
                  <Image
                    width={400}
                    height={400}
                    alt="SmileAge India"
                    className="object-cover object-center h-full w-full hover:transition duration-200 ease-in-out hover:scale-105"
                    src="/smileage.jpg"
                  />
                </Link>
              </div>
              <h2 className="text-xl font-medium title-font text-white mt-5">
                SmileAge India
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Developed a modern healthcare and dental services platform
                focused on clean UI, responsive design, and performance
                optimization. The project delivers a professional digital
                presence with intuitive navigation and real-world production
                deployment.
              </p>
              <a
                href="/project1"
                className="text-indigo-400 inline-flex items-center mt-3"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Project 2 – CharakDT */}
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Link href="/project2">
                  <Image
                    width={400}
                    height={400}
                    alt="CharakDT Healthcare Platform"
                    className="object-cover object-center h-full w-full hover:transition duration-200 ease-in-out hover:scale-105"
                    src="/charak.jpg"
                  />
                </Link>
              </div>
              <h2 className="text-xl font-medium title-font text-white mt-5">
                CharakDT
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Built a healthcare documentation platform enabling doctors to
                generate structured clinical records using speech-to-text
                workflows. The system focuses on efficiency, secure data
                handling, and scalable architecture for real-world medical use.
              </p>
              <a
                href="/project2"
                className="text-indigo-400 inline-flex items-center mt-3"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Project 3 – BraceFree */}
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Link href="/project3">
                <Image
                  src="/girl3.jpg"
                  alt="BraceFree Orthodontics Platform"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover object-top rounded-xl"
                  priority
                />


                </Link>
              </div>
              <h2 className="text-xl font-medium title-font text-white mt-5">
                BraceFree
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Developed a modern orthodontics and clear aligner platform
                designed to educate users, streamline treatment discovery, and
                provide a seamless digital experience. The project focuses on
                clean UI, responsive design, and performance optimization for
                healthcare audiences.
              </p>
              <a
                href="/project3"
                className="text-indigo-400 inline-flex items-center mt-3"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
