import React from "react";
import { TypeAnimation } from "react-type-animation";

const Experience = () => {
  return (
    <div
      style={{ fontFamily: "Montserrat, sans-serif" }}
      className="bg-black p-6 py-12 mb-12"
    >
      <h2 className="text-orange-500 text-4xl text-center mb-20">
        <TypeAnimation
          sequence={["Experience", 1000, "", 1000]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "1em", display: "inline-block" }}
          repeat={Infinity}
        />
      </h2>

      {/* Experience 1 */}
      <div className="text-white lg:px-20 max-sm:text-justify mb-12">
        <h3 className="text-lg font-semibold">Full Stack Developer</h3>
        <p className="mb-2 font-semibold">Arokee Online Solutions</p>

        <p className="text-sm leading-relaxed">
          As a Full Stack Developer, I work on designing, developing, and
          maintaining scalable web applications with a strong focus on clean,
          efficient, and maintainable code. I primarily work with the{" "}
          <span className="text-orange-400 font-semibold">Nextjs</span> and
          MERN stack to build high-performance applications, optimize system
          performance, and implement complex features. I collaborate closely
          with cross-functional teams to align technical solutions with business
          objectives and deliver seamless user experiences from development to
          deployment.
        </p>
      </div>

      {/* Experience 2 */}
      <div className="text-white lg:px-20 max-sm:text-justify">
        <h3 className="text-lg font-semibold">Software Engineer</h3>
        <p className="mb-2 font-semibold">LTIMindtree</p>

      <p className="text-sm leading-relaxed">
  As a Software Engineer, I worked extensively with the{" "}
  <span className="text-orange-400 font-semibold">MERN stack</span> (MongoDB,
  Express.js, React, Node.js) to develop and maintain scalable, production-ready
  web applications. My responsibilities included building dynamic and responsive
  user interfaces, developing RESTful APIs, integrating frontend components with
  backend services, and optimizing application performance. This role strengthened
  my understanding of enterprise-level development workflows, version control,
  and collaborative engineering practices, while enhancing my problem-solving
  and time management skills.
</p>

      </div>
    </div>
  );
};

export default Experience;
