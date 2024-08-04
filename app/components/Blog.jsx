"use client";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
const Blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-[120px] flex flex-col gap-8 mb-[50px]"
    >
      <div className="flex items-center gap-2 cursor-pointer hover:underline">
        <p className="text-[20px] text-primary font-medium">
          <Link href="/">Writings</Link>
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
      <div className="">
        <ScrollArea className="w-full rounded ">
          <div className="flex flex-col md:flex-row gap-4 bg-background">
            <Card className="md:w-[420px] md:h-[420px] border-none shadow-none w-full h-[400px] flex flex-col bg-background gap-[16px] ">
              <div className="bg-button grid items-center justify-center flex-1 rounded-[18px]"></div>
              <CardContent className="md:py-2 py-4 px-0 flex flex-col md:gap-[16px] gap-[10px]">
                <p className="line-clamp-2 font-medium text-[18px] text-black">
                  Coming Soon!
                </p>
                <Button
                  disabled
                  className={`w-max rounded-full bg-button text-secondary hover:bg-background`}
                >
                  View More
                </Button>
              </CardContent>
            </Card>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </motion.div>
  );
};

export default Blog;
