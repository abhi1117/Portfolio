"use client";

import React from "react";
import "@fontsource/montserrat";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const Home = () => {
  return (
    <div className="bg-black">
      {/* Image for laptop */}
      <Image
        className="max-sm:hidden h-full w-full"
        src="/hero-image3.jpg"
        alt="hero image"
        width={0}
        height={0}
        sizes="100vw"
      />

      {/* Image for mobile */}
      <Image
        className="lg:hidden h-full w-full mb-56 relative top-14"
        src="/hero-image3.jpg"
        alt="hero image"
        width={0}
        height={0}
        sizes="100vw"
      />

      {/* Text for laptop */}
      <div
        className="max-sm:hidden flex flex-col absolute top-60 left-96 pl-36 text-white"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <h1 className="text-6xl">Hi, I&apos;m Abhishek,</h1>
        <div className="flex">
          <p className="text-4xl mt-1">Your Go To</p>
          <span className="text-lg text-orange-500 ml-2 mt-2">
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                1000,
                "Backend Developer",
                1000,
                "Full-Stack Developer",
                1000,
                "Web Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </span>
        </div>
      </div>

      {/* Text for mobile */}
      <div
        className="lg:hidden flex flex-col text-justify absolute top-72 left-10 mt-48 text-white"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <h1 className="text-3xl">Hi, I&apos;m Abhishek,</h1>

        <div>
          <p className="text-3xl mb-2">Your Go To</p>
          <span className="text-sm text-orange-500">
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                1000,
                "Backend Developer",
                1000,
                "Full-Stack Developer",
                1000,
                "Web Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </span>
        </div>
      </div>

      <div className="lg:hidden max-sm:pt-5 max-sm:bg-black"></div>

      {/* About section */}
      <section
        style={{ fontFamily: "Montserrat, sans-serif" }}
        className="text-white bg-black body-font relative max-sm:top-36 max-sm:mb-60"
      >
        <div className="container px-5 py-12 mx-auto">
          <h1 className="text-center text-4xl text-orange-500 my-3">
            <TypeAnimation
              sequence={["About Me", 1000, "", 1000]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>

          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 text-gray-400 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
            </svg>

            {/* UPDATED ABOUT CONTENT */}
<p className="leading-relaxed text-xl text-justify max-sm:text-lg">
  I’m a passionate and results-driven{" "}
  <span className="text-orange-400 font-semibold">Full Stack Developer</span>{" "}
  with strong expertise in modern web technologies. I specialize in building
  scalable, high-performance, and user-centric web applications that solve
  real-world problems and deliver meaningful digital experiences.
</p>

<p className="leading-relaxed text-xl text-justify max-sm:text-lg mt-4">
  My core skill set includes{" "}
  <span className="text-orange-400 font-semibold">Next.js</span> and the{" "}
  <span className="text-orange-400 font-semibold">MERN stack</span> (MongoDB,
  Express.js, React, Node.js), enabling me to develop end-to-end solutions across
  both frontend and backend. I focus on clean architecture, reusable components,
  efficient state management, and performance optimization to build maintainable
  applications.
</p>

<p className="leading-relaxed text-xl text-justify max-sm:text-lg mt-4">
  I have hands-on experience working with{" "}
  <span className="text-orange-400 font-semibold">monorepo architectures</span>,
  allowing me to manage multiple applications and shared packages efficiently
  within a single codebase. This approach helps maintain consistency, improve
  collaboration, and streamline development workflows in large-scale projects.
</p>

<p className="leading-relaxed text-xl text-justify max-sm:text-lg mt-4">
  On the infrastructure side, I have exposure to{" "}
  <span className="text-orange-400 font-semibold">Docker</span> for containerizing
  applications and ensuring consistent environments across development and
  deployment. I’ve also worked with{" "}
  <span className="text-orange-400 font-semibold">AWS S3 </span> for secure file
  storage, media handling, and cloud-based asset management.
</p>

<p className="leading-relaxed text-xl text-justify max-sm:text-lg mt-4">
  Alongside backend development, I value{" "}
  <span className="text-orange-400 font-semibold">UI/UX design</span> and strive to
  create interfaces that are intuitive, responsive, and visually engaging.
  Driven by continuous learning, I stay updated with emerging technologies and
  enjoy transforming complex ideas into reliable, production-ready solutions
  that align with business and user goals.
</p>


            <span className="inline-block h-1 w-10 rounded bg-orange-500 mt-8 mb-6" />
            <h2 className="font-medium title-font tracking-wider">
              Abhishek Singh
            </h2>
            <p className="text-orange-500">Web Developer</p>
          </div>
        </div>
      </section>

      <div className="flex justify-center my-10">
        <div className="h-1 w-80 relative bg-gray-800 rounded overflow-hidden">
          <div className="w-24 h-full bg-indigo-500" />
        </div>
      </div>

      <Projects />

      <div className="flex justify-center mb-10">
        <div className="h-1 w-80 relative bg-gray-800 rounded overflow-hidden">
          <div className="w-24 h-full bg-indigo-500" />
        </div>
      </div>

      <Experience />

      <div className="flex justify-center my-10">
        <div className="h-1 w-80 relative bg-gray-800 rounded overflow-hidden">
          <div className="w-24 h-full bg-indigo-500" />
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default Home;
