"use client";

import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 2 }}
      viewport={{ once: true }}
      className="flex md:pt-[100px] lg:flex-row flex-col pt-[30px] gap-[80px] md:gap-[200px] mb-[100px]"
    >
      <div className="font-medium text-[20px] text-primary">Skills</div>
      <div className="flex-1 flex md:flex-row flex-col gap-[80px] lg:gap-[200px] flex-wrap">
        <ul className=" list-none">
          <li className="mb-[20px] font-medium text-[20px] text-primary">
            Languages
          </li>
          <li className="font-light text-secondary text-[16px] mb-[5px]">
            JavaScript (Es6)
          </li>
          <li className="font-light text-secondary text-[16px] mb-[5px]">
            TypeScript
          </li>
          <li className="font-light text-secondary text-[16px] mb-[5px]">
            HTML
          </li>
          <li className="font-light text-secondary text-[16px] mb-[5px]">
            CSS/Tailwind
          </li>
          <li className="font-light text-secondary text-[16px] mb-[5px]">
            SQL
          </li>
          <li className="font-light text-secondary text-[16px] mb-[5px]">
            GROQ
          </li>
        </ul>
        <ul className=" list-none">
          <li className="mb-[20px] font-medium text-[20px] text-primary">
            Frameworks
          </li>
          <li className="font-light text-secondary text-[16px] mb-[5px]">
            React
          </li>
          <li className="font-light text-secondary text-[16px] mb-[5px]">
            Next.js
          </li>
          <li className="font-light text-secondary text-[16px] mb-[5px]">
            Shopify
          </li>
          <li className="font-light text-secondary text-[16px] mb-[5px]">
            Wordpress
          </li>
        </ul>
        <ul className=" list-none">
          <li className="mb-[20px] font-medium text-[20px] text-primary">
            Tools
          </li>
          <li className="font-light text-secondary text-[16px] mb-[5px]">
            Git & Github
          </li>
          <li className="font-light text-secondary text-[16px] mb-[5px]">
            MongoDB
          </li>
          <li className="font-light text-secondary text-[16px] mb-[5px]">
            Postman
          </li>
          <li className="font-light text-secondary text-[16px] mb-[5px]">
            Chrome DevTools
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Skills;
