import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      // This gives it that fade in effect.
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1.2 }}
        // viewport={{ once: true }}
        src="https://i.imgur.com/wACl1ey.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      />

      <div className="px-0 space-y-10 md:px-10">
        <h4 className="text-4xl font-semibold ">
          Here is some{" "}
          {/* <span className="underline decoration-[#F7AB0A]">little</span>{" "} */}
          background:
        </h4>
        <p>
          My full name is Jose Rafael Kaibigan. I am a Software Engineer with 5+
          years experience in business operations and account management.
          Growth-focused, detail-oriented, and solutions-driven, apply the same
          unwavering attitude to solving client pain points as to writing clean
          and scalable code. Proven to develop strong relationships across
          cultures and provide decisive team leadership in a fast-paced
          environment. I have experience in developing applications in
          JavaScript, Node.js, Express.js, React, Python, and Django. Finding
          solutions to complex problems and building applications that simplify
          our lives is my passion.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
