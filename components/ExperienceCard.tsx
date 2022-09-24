import React from "react";
import { motion } from "framer-motion";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-between space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 mt-36 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://ga-core.s3.amazonaws.com/production/uploads/program/default_image/9142/thumb_CMYK-Red_Small_GeneralAssembly-Cog.png"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO of GENERAL ASSEMBLY </h4>
        <p className="mt-1 text-2xl font-bold">GENERAL ASSEMBLY</p>
        <div className="flex my-2 space-x-2">
          <img
            className="w-10 h-10 rounded-full"
            src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
            alt=""
          />
          <img
            className="w-10 h-10 rounded-full"
            src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
            alt=""
          />
          <img
            className="w-10 h-10 rounded-full"
            src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
            alt=""
          />
          {/* Tech used */}
          {/* Tech used */}
          {/* Tech used */}
        </div>
        <p className="py-5 text-gray-300 uppercase">
          Started work.... blah blah
        </p>

        <ul className="ml-5 space-y-4 text-lg list-dic">
          <li>
            Summary pointsSummary pointsSummary pointsSummary pointsSummary
            points Summary
          </li>
          <li>
            Summary pointsSummary pointsSummary pointsSummary pointsSummary
            points Summary
          </li>
          <li>
            Summary pointsSummary pointsSummary pointsSummary pointsSummary
            ppoints Summary points Summary points Summary points Summary points
          </li>
          <li>
            Summary pary points Summary points Summary points Summary points
            Summary points
          </li>
          <li>
            Summary pointsSummary pointsSummary pointsSummary pointsSummary
            points Summary points Summary points Summary points Summary points
            Summary
          </li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
