import React from "react";

const page = () => {
  return (
    <div>
      <section
        style={{ fontFamily: "Montserrat, sans-serif" }}
        className="bg-black body-font"
      >
        <div className="container px-5 py-24 mx-auto text-center">
          <div className="mb-10 font-semibold">
            <h1 className="text-white text-4xl inline">About</h1>
            <h1 className="text-orange-500 text-4xl inline ml-2">Me</h1>
          </div>

          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-gray-200 text-justify">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org2000/svg"
                fill="currentColor"
                className="inline-block w-8 h-8 text-gray-400 mb-8"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
              </svg>
            </div>

            <p className="leading-relaxed text-lg my-5">
              I’m a passionate and results-driven{" "}
              <span className="text-orange-400 font-semibold">
                Full Stack Developer
              </span>{" "}
              with strong expertise in building modern, scalable web
              applications. I specialize in crafting clean, high-performance,
              and user-centric solutions that solve real-world problems and
              deliver meaningful digital experiences.
            </p>

            <p className="leading-relaxed text-lg my-5">
              My core expertise lies in{" "}
              <span className="text-orange-400 font-semibold">
                Next.js and the MERN stack
              </span>{" "}
              (MongoDB, Express.js, React, Node.js). I work across both frontend
              and backend systems, focusing on clean architecture, reusable
              components, efficient state management, and performance
              optimization.
            </p>

            <p className="leading-relaxed text-lg my-5">
              I have hands-on experience working with{" "}
              <span className="text-orange-400 font-semibold">
                monorepo architectures
              </span>
              , containerizing applications using{" "}
              <span className="text-orange-400 font-semibold">Docker</span>, and
              managing cloud-based storage solutions with{" "}
              <span className="text-orange-400 font-semibold">AWS S3</span>. This
              enables me to build production-ready systems that are scalable,
              maintainable, and deployment-friendly.
            </p>

            <p className="leading-relaxed text-lg my-5">
              Beyond development, I value{" "}
              <span className="text-orange-400 font-semibold">UI/UX design</span>{" "}
              and strive to create interfaces that are intuitive, responsive,
              and visually engaging. I believe great products are built at the
              intersection of functionality, usability, and design.
            </p>

            <p className="leading-relaxed text-lg my-5">
              I continuously explore new technologies and best practices to stay
              ahead in the ever-evolving tech landscape. I enjoy collaborating
              with teams, turning complex ideas into reliable, production-grade
              solutions, and contributing to impactful web products.
            </p>

            <span className="inline-block h-1 w-10 rounded bg-orange-500 mt-8 mb-6" />

            <h2 className="text-gray-200 font-semibold tracking-wider">
              Abhishek Singh
            </h2>
            <p className="text-gray-400 font-semibold">
              Full Stack Developer
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
