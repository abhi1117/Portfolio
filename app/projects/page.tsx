"use client";

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

export default function ProjectsPage() {
  return (
    <div>
      {/* ================= PROJECTS SECTION ================= */}
      <section className="text-gray-400 bg-black body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-800 rounded overflow-hidden">
              <div className="w-24 h-full bg-indigo-500" />
            </div>

            <div className="flex flex-wrap py-6 mb-12">
              <div className="font-semibold">
                <h1 className="text-white text-4xl inline">Explore My</h1>
                <h1 className="text-orange-500 text-4xl inline ml-3">Creations</h1>
              </div>

              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 lg:ml-auto">
                A curated selection of production-ready applications built with
                modern web technologies and scalable architecture.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap -m-4">
            {/* Project 1 */}
            <div className="p-4 md:w-1/3">
              <div className="rounded-lg h-64 overflow-hidden">
                <Link href="/project1">
                  <Image
                    src="/smileage.jpg"
                    width={400}
                    height={400}
                    alt="Project 1"
                    className="object-cover h-full w-full hover:scale-105 transition"
                  />
                </Link>
              </div>
              <h2 className="text-xl font-medium text-white mt-5">Project One</h2>
              <p className="mt-2">
                Placeholder project showcasing UI, performance optimization,
                and modern design principles.
              </p>
              <Link href="/project1" className="text-indigo-400 inline-flex items-center mt-3">
                Learn More →
              </Link>
            </div>

            {/* Project 2 */}
            <div className="p-4 md:w-1/3">
              <div className="rounded-lg h-64 overflow-hidden">
                <Link href="/project2">
                  <Image
                    src="/charak.jpg"
                    width={400}
                    height={400}
                    alt="Project 2"
                    className="object-cover h-full w-full hover:scale-105 transition"
                  />
                </Link>
              </div>
              <h2 className="text-xl font-medium text-white mt-5">Project Two</h2>
              <p className="mt-2">
                Demonstrates scalable backend integration and clean UX patterns.
              </p>
              <Link href="/project2" className="text-indigo-400 inline-flex items-center mt-3">
                Learn More →
              </Link>
            </div>

            {/* Project 3 */}
            <div className="p-4 md:w-1/3">
              <div className="rounded-lg h-64 overflow-hidden">
                <Link href="/project3">
                  <Image
                    src="/girl3.jpg"
                    width={400}
                    height={400}
                    alt="Project 3"
                    className="object-cover h-full w-full hover:scale-105 transition"
                  />
                </Link>
              </div>
              <h2 className="text-xl font-medium text-white mt-5">Project Three</h2>
              <p className="mt-2">
                Focused on healthcare-grade UI, accessibility, and performance.
              </p>
              <Link href="/project3" className="text-indigo-400 inline-flex items-center mt-3">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SKILLS SECTION ================= */}
      <section className="bg-black body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-white text-4xl inline">My</h1>
            <h1 className="text-orange-500 text-4xl inline ml-2">Skills</h1>

            <p className="xl:w-2/4 lg:w-3/4 mx-auto mt-6 text-gray-300">
              Technologies and tools I use to build modern web applications.
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
}
