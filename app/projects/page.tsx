import React from "react";
import Image from "next/image";
import Link from "next/link";

import { TbBrandNextjs } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiCanva } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";
import { TypeAnimation } from "react-type-animation";

const icons = [
  { id: 1, icon: <TbBrandNextjs className="text-8xl text-gray-500 hover:text-white transition" /> },
  { id: 2, icon: <RiReactjsLine className="text-8xl text-gray-500 hover:text-white transition" /> },
  { id: 3, icon: <FaNodeJs className="text-8xl text-gray-500 hover:text-white transition" /> },
  { id: 4, icon: <SiExpress className="text-8xl text-gray-500 hover:text-white transition" /> },
  { id: 5, icon: <DiMongodb className="text-8xl text-gray-500 hover:text-white transition" /> },
  { id: 6, icon: <SiTailwindcss className="text-8xl text-gray-500 hover:text-white transition" /> },
  { id: 7, icon: <DiJavascript className="text-8xl text-gray-500 hover:text-white transition" /> },
  { id: 8, icon: <FaHtml5 className="text-8xl text-gray-500 hover:text-white transition" /> },
  { id: 9, icon: <IoLogoCss3 className="text-8xl text-gray-500 hover:text-white transition" /> },
  { id: 10, icon: <FaGitAlt className="text-8xl text-gray-500 hover:text-white transition" /> },
  { id: 11, icon: <BiLogoTypescript className="text-8xl text-gray-500 hover:text-white transition" /> },
  { id: 12, icon: <SiCanva className="text-8xl text-gray-500 hover:text-white transition" /> },
];

const page = () => {
  return (
    <div>
      {/* PROJECTS SECTION */}
      <section
        style={{ fontFamily: "Montserrat, sans-serif" }}
        className="text-gray-400 bg-black body-font"
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-800 rounded overflow-hidden">
              <div className="w-24 h-full bg-indigo-500" />
            </div>

            <div className="flex flex-wrap flex-row py-6 lg:mb-12 max-sm:mb-12">
              <div className="font-semibold max-sm:mb-5">
                <h1 className="text-white text-4xl inline max-sm:text-3xl">
                  Explore My
                </h1>
                <h1 className="text-orange-500 text-4xl inline ml-3 max-sm:text-3xl">
                  Creations
                </h1>
              </div>

              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 lg:relative lg:left-56 max-sm:text-justify">
                A curated selection of real-world, production-ready applications
                built using modern web technologies. These projects demonstrate
                my expertise in healthcare platforms, scalable architecture, and
                user-centric design.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">

            {/* Project 1 – SmileAge India */}
            <div className="p-4 md:w-1/3 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Link href="/project1">
                  <Image
                    src="/meditrack.jpg"
                    width={400}
                    height={400}
                    alt="SmileAge India"
                    className="object-cover h-full w-full hover:scale-105 transition"
                  />
                </Link>
              </div>
              <h2 className="text-xl font-medium text-white mt-5">
                SmileAge India
              </h2>
              <p className="mt-2">
                A modern dental and healthcare platform delivering a clean,
                responsive UI and a professional digital presence. Built with
                performance optimization and real-world deployment in mind.
              </p>
              <a href="/project1" className="text-indigo-400 inline-flex items-center mt-3">
                Learn More →
              </a>
            </div>

            {/* Project 2 – CharakDT */}
            <div className="p-4 md:w-1/3 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Link href="/project2">
                  <Image
                    src="/organic.jpg"
                    width={400}
                    height={400}
                    alt="CharakDT"
                    className="object-cover h-full w-full hover:scale-105 transition"
                  />
                </Link>
              </div>
              <h2 className="text-xl font-medium text-white mt-5">
                CharakDT
              </h2>
              <p className="mt-2">
                A healthcare documentation platform enabling doctors to create
                structured clinical records using speech-to-text workflows,
                secure storage, and scalable architecture.
              </p>
              <a href="/project2" className="text-indigo-400 inline-flex items-center mt-3">
                Learn More →
              </a>
            </div>

            {/* Project 3 – BraceFree */}
            <div className="p-4 md:w-1/3 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Link href="/project3">
                  <Image
                    src="/meditrack.jpg"
                    width={400}
                    height={400}
                    alt="BraceFree"
                    className="object-cover h-full w-full hover:scale-105 transition"
                  />
                </Link>
              </div>
              <h2 className="text-xl font-medium text-white mt-5">
                BraceFree
              </h2>
              <p className="mt-2">
                An orthodontics and clear aligner platform designed to educate
                users, streamline treatment discovery, and deliver a seamless
                healthcare-grade digital experience.
              </p>
              <a href="/project3" className="text-indigo-400 inline-flex items-center mt-3">
                Learn More →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section
        style={{ fontFamily: "Montserrat, sans-serif" }}
        className="bg-black body-font"
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <div className="mb-6 font-semibold">
              <h1 className="text-white text-4xl inline">My</h1>
              <h1 className="text-orange-500 text-4xl inline ml-2">Skills</h1>
            </div>

            <p className="xl:w-2/4 lg:w-3/4 mx-auto text-gray-300">
              Technologies and tools I use to build scalable, performant, and
              production-ready web applications.
            </p>

            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 bg-indigo-500 rounded-full" />
            </div>
          </div>

          <div className="flex justify-center items-center gap-20 flex-wrap max-w-lg mx-auto">
            {icons.map((item) => (
              <div key={item.id}>{item.icon}</div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
