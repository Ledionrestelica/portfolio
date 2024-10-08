"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const listItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="flex flex-col gap-[40px]"
    >
      <div className="flex justify-between">
        <div>
          <Image
            className="hover:scale-110 transition-all cursor-pointer mb-4"
            src="/pfp.png"
            width={72}
            height={72}
            quality={100}
          ></Image>
          <h1 className="text-[24px] font-medium text-primary">
            Ledion Restelica - Junior Frontend Developer
          </h1>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="flex flex-col h-max gap-2"
            id="socials"
          >
            <DropdownMenu>
              <DropdownMenuTrigger className="font-normal text-secondary hover:bg-background hover:border-button border-2 border-transparent transition-all box-content duration-500 shadow-sm bg-button  px-4 py-2 rounded-md outline-none">
                Socials
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  <Link href="https://linkedin.com/in/Ledionrestelica">
                    <DropdownMenuItem className="flex justify-between">
                      <motion.div variants={listItem}>Linkedin</motion.div>
                      <FaLinkedin />
                    </DropdownMenuItem>
                  </Link>
                  <Link href="https://github.com/Ledionrestelica">
                    <DropdownMenuItem className="flex justify-between">
                      <motion.div variants={listItem}>Github</motion.div>
                      <FaGithub />
                    </DropdownMenuItem>
                  </Link>
                  <Link href="https://instagram.com/in/ledionres">
                    <DropdownMenuItem className="flex justify-between">
                      <motion.div variants={listItem}>Instagram</motion.div>
                      <FaInstagram />
                    </DropdownMenuItem>
                  </Link>
                  <Link href="https://alius.se">
                    <DropdownMenuItem className="flex justify-between">
                      <motion.div variants={listItem}>Alius</motion.div>
                      <FaArrowRight />
                    </DropdownMenuItem>
                  </Link>
                </motion.div>
              </DropdownMenuContent>
            </DropdownMenu>
          </motion.div>
        </div>
      </div>
      <p className="text-[18px] flex items-center gap-3 font-medium text-primary md:w-[600px]">
        Based in Prishtina <FaLocationArrow />
      </p>
      <p className="text-[18px] font-normal text-secondary md:w-[600px]">
        I am a Frontend Devloper who builds everything from Web Components and
        UI/UX animations to React.JS, Redux, NextJS, and Node.JS. Check out my
        latest web development portfolio projects.
      </p>
      <a href="/CV.pdf" target="_blank" rel="noopener noreferrer">
        <div className="undertekst text-[18px] font-medium text-primary w-max">
          View my CV
        </div>
      </a>
    </motion.div>
  );
};

export default Header;
