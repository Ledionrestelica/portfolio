"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaGithub,
  FaInstagram,
  FaLinkedin,
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
            Hey, I'm Ledion
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
      <p className="text-[18px] font-medium text-primary md:w-[600px]">
        I love using JavaScript to prototype different ideas and dive into
        projects that let me play with the latest tech. I'm passionate about
        what I do, but I also like to keep things light and fun.
      </p>
      <p className="text-[18px] font-normal text-secondary md:w-[600px]">
        I love using JavaScript to prototype different ideas and dive into
        projects that let me play with the latest tech. I'm passionate about
        what I do, but I also like to keep things light and fun.
      </p>
    </motion.div>
  );
};

export default Header;
