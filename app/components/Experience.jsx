"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="mt-[150px] flex flex-col"
    >
      <div className="flex items-center gap-2 cursor-pointer hover:underline">
        <p className="text-[20px] text-primary font-medium">
          <Link href="#projects">Experience</Link>
        </p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 16.5L16.5 7.5"
            stroke="#1A1B25"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 7.5H16.5V16.5"
            stroke="#1A1B25"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="flex flex-col gap-[20px] mt-[60px] rounded-2xl ">
        <div className="flex items-center gap-4">
          <h2 className="text-[18px] font-medium text-primary">
            Frontend Developer @
          </h2>
          <div className="px-4 py-2 bg-button text-secondary rounded-full">
            Alius
          </div>
        </div>
        <div className="px-4 w-max py-2 bg-button text-secondary rounded-full">
          Aug 2023 - Current
        </div>

        <p className="md:w-[500px] text-[16px] font-normal text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam veniam
          necessitatibus praesentium, mollitia exercitationem architecto, eum
          aliquam illum non delectus quas saepe, consequatur dolorem sit!
          Obcaecati porro sit voluptatum cupiditate!
        </p>
      </div>
      <div className="flex flex-col gap-[20px] mt-[60px] rounded-2xl">
        <div className="flex items-center gap-4">
          <h2 className="text-[18px] font-medium text-primary">
            Digital Marketing course @
          </h2>
          <div className="px-4 py-2 bg-button text-secondary rounded-full">
            Tactica
          </div>
        </div>
        <div className="px-4 py-2 w-max  bg-button text-secondary rounded-full">
          May 2022 - Oct 2022
        </div>

        <p className="md:w-[500px] text-[16px] font-normal text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam veniam
          necessitatibus praesentium, mollitia exercitationem architecto, eum
          aliquam illum non delectus quas saepe, consequatur dolorem sit!
          Obcaecati porro sit voluptatum cupiditate!
        </p>
      </div>
    </motion.div>
  );
};

export default Experience;
