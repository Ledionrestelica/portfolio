"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const Footer = () => {
  return (
    <motion.div className="bg-[#fee7a4] min-h-screen w-full flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="md:container max-w-[1440px] mx-auto flex flex-wrap  items-center justify-center gap-5"
      >
        <p className="text-[20px] cursor-pointer">
          Contact me <span className="text-[30px] rotate-90">&#128073;</span>
        </p>
        <a className="px-4" href="mailto:ledionrestelica7@gmail.com">
          <div className="divi rounded-lg h-[40px] w-[230px] z-40 flex items-center text-center">
            <p className="mx-auto">ledionrestelica7@gmail.com</p>
          </div>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
