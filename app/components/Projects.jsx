"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import ExpandableDiv from "./ExpandableDiv";

const Projects = () => {
  return (
    <motion.div
      id="projects"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="mt-[150px] flex flex-col gap-10"
    >
      <div className="flex items-center gap-2 cursor-pointer hover:underline">
        <p className="text-[20px] text-primary font-medium">
          <Link href="#projects">Projects</Link>
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
      <motion.div
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 lg:grid-cols-2 gap-10"
      >
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center p-2 items-center aspect-video w-200px bg-button rounded-lg"
          >
            <div className="relative w-full h-full">
              <Image
                src="/alius-nobg.png"
                fill
                quality={100}
                objectFit="contain"
              />
            </div>
          </motion.div>
          <ExpandableDiv href="/alius" text="Alius" />
        </div>
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true }}
            className="p-12 flex justify-center items-center aspect-video w-200px bg-button rounded-lg"
          >
            <div className="relative w-full h-full">
              <Image
                src="/estatex-nobg.png"
                fill
                quality={100}
                objectFit="contain"
              />
            </div>
          </motion.div>
          <ExpandableDiv href="/estatex" text="Estatex" />
        </div>
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
            className="p-2 flex justify-center items-center aspect-video w-200px bg-button rounded-lg"
          >
            <div className="relative w-full h-full">
              <Image
                src="/kreate-nobg.png"
                fill
                quality={100}
                objectFit="contain"
              />
            </div>
          </motion.div>
          <ExpandableDiv href="/kreate" text="Kreate" />
        </div>
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true }}
            className="p-2 flex justify-center items-center aspect-video w-200px bg-button rounded-lg"
          >
            <div className="relative w-full h-full">
              <Image
                src="/munthes-nobg.png"
                fill
                quality={100}
                objectFit="contain"
              />
            </div>
          </motion.div>
          <ExpandableDiv href="/munthes" text="Munthes" />
        </div>
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
            className="p-2 flex justify-center items-center aspect-video w-200px bg-button rounded-lg"
          >
            <div className="relative w-full h-full">
              <Image
                src="/balkan-nobg.png"
                fill
                quality={100}
                objectFit="contain"
              />
            </div>
          </motion.div>
          <ExpandableDiv href="/balkan" text="Balkan" />
        </div>
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true }}
            className="p-2 flex justify-center items-center aspect-video w-200px bg-button rounded-lg"
          >
            <div className="relative w-full h-full">
              <Image
                src="/massoud-nobg.png"
                fill
                quality={100}
                objectFit="contain"
              />
            </div>
          </motion.div>
          <ExpandableDiv href="/massoud" text="Massoud" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
