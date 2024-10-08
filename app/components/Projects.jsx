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
      <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <motion.div className="relative flex justify-center items-center aspect-video w-200px bg-button rounded-lg">
            <Image
              src="/balkan-nobg.png"
              fill
              quality={100}
              style={{ objectFit: "contain" }}
            />
            <div className="absolute bottom-[-15px] right-[50px] flex">
              <div className="bg-background p-1 rounded-full border-2 border-button ">
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M6 28L4 3H28L26 28L16 31L6 28Z"
                      fill="#E44D26"
                    ></path>{" "}
                    <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"></path>{" "}
                    <path
                      d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z"
                      fill="white"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className="bg-background p-1 rounded-full border-2 border-button ml-[-10px]">
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M6 28L4 3H28L26 28L16 31L6 28Z"
                      fill="#1172B8"
                    ></path>{" "}
                    <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"></path>{" "}
                    <path
                      d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z"
                      fill="white"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className="bg-background p-1 rounded-full border-2 border-button ml-[-10px]">
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z"
                      fill="#53C1DE"
                    ></path>{" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z"
                      fill="#53C1DE"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className="bg-background p-1 rounded-full border-2 border-button ml-[-10px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="JavaScript"
                  role="img"
                  viewBox="0 0 512 512"
                  width="30px"
                  height="30px"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <rect
                      width="512"
                      height="512"
                      rx="15%"
                      fill="#f7df1e"
                    ></rect>
                    <path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z"></path>
                  </g>
                </svg>
              </div>
              <div className="bg-background p-1 rounded-full border-2 border-button ml-[-10px]">
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 10.087 13.6902 12.3681 11.6975 13.7163L4.90687 4.20942C4.78053 4.03255 4.5544 3.95756 4.34741 4.02389C4.14042 4.09022 4 4.28268 4 4.50004V12H5V6.06027L10.8299 14.2221C9.82661 14.7201 8.696 15 7.5 15C3.35786 15 0 11.6421 0 7.5ZM10 10V4H11V10H10Z"
                      fill="#000000"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className="bg-background p-1 rounded-full border-2 border-button ml-[-10px]">
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 -204 512 512"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <polygon
                        fill="#F37368"
                        points="381.461756 36.9858357 381.461756 101.81983 360.575637 101.81983 360.575637 26.8328612"
                      >
                        {" "}
                      </polygon>{" "}
                      <path
                        d="M85.8651558,89.7813031 L101.529745,103.415297 L167.524079,69.0402266 L160.707082,52.6504249 L85.8651558,89.7813031 Z M360.575637,48.0090652 L413.66119,20.4509915 L404.668555,4.93144476 L360.575637,26.8328612 L360.575637,48.0090652 Z"
                        fill="#F7A199"
                      >
                        {" "}
                      </path>{" "}
                      <path
                        d="M211.18187,31.9093484 L211.18187,101.81983 L191.166006,101.81983 L191.166006,2.17563739 L211.18187,31.9093484 Z M85.8651558,89.7813031 L101.529745,103.415297 L131.698584,27.9932011 L121.980737,2.17563739 L85.8651558,89.7813031 Z"
                        fill="#F37368"
                      >
                        {" "}
                      </path>{" "}
                      <path
                        d="M121.980737,2.17563739 L142.576771,2.17563739 L180.722946,101.81983 L159.546742,101.81983 L121.980737,2.17563739 Z M214.227762,2.17563739 L258.175637,70.2005666 L258.175637,101.81983 L191.166006,2.17563739 L214.227762,2.17563739 Z M295.886686,2.17563739 L316.627762,2.17563739 L316.627762,101.81983 L295.886686,101.81983 L295.886686,2.17563739 Z M360.575637,20.4509915 L328.666289,20.4509915 L328.666289,2.17563739 L403.073088,2.17563739 L413.66119,20.4509915 L381.461756,20.4509915 L360.575637,20.4509915 Z"
                        fill="#F04939"
                      >
                        {" "}
                      </path>{" "}
                      <polyline
                        fill="#F7A199"
                        points="475.014164 63.9637394 475.014164 101.81983 454.41813 101.81983 454.41813 63.9637394"
                      >
                        {" "}
                      </polyline>{" "}
                      <polygon
                        fill="#F04939"
                        points="489.228329 2.17563739 454.41813 63.9637394 475.014164 63.9637394 511.129745 2.17563739"
                      >
                        {" "}
                      </polygon>{" "}
                      <polygon
                        fill="#F37368"
                        points="454.41813 63.9637394 418.447592 2.17563739 441.074221 2.17563739 465.296317 44.5280453"
                      >
                        {" "}
                      </polygon>{" "}
                      <path
                        d="M8.55750708,13.7790368 C8.55750708,27.5580737 17.1150142,35.8254958 34.2300283,40.1767705 L52.3603399,44.3830028 C68.6050992,48.1541076 78.4679887,57.4368272 78.4679887,72.5212465 C78.6130312,79.0481586 76.4373938,85.4300283 72.5212465,90.6515581 C72.5212465,75.5671388 64.6889518,67.4447592 45.9784703,62.5133144 L28.1382436,58.4521246 C13.7790368,55.2611898 2.75580737,47.5739377 2.75580737,31.184136 C2.75580737,24.9473088 4.78640227,18.7104816 8.55750708,13.7790368"
                        fill="#F04939"
                      >
                        {" "}
                      </path>{" "}
                      <polygon
                        fill="#F37368"
                        points="258.175637 65.1240793 258.175637 2.17563739 278.191501 2.17563739 278.191501 101.81983 258.175637 101.81983"
                      >
                        {" "}
                      </polygon>{" "}
                      <path
                        d="M61.3529745,68.7501416 C69.0402266,73.6815864 72.5212465,80.6436261 72.5212465,90.6515581 C65.9943343,98.9189802 54.8260623,103.415297 41.6271955,103.415297 C19.4356941,103.415297 3.62606232,92.392068 0.290084986,73.3915014 L21.6113314,73.3915014 C24.3671388,82.094051 31.6192635,86.1552408 41.482153,86.1552408 C53.2305949,86.3002833 61.207932,79.9184136 61.3529745,68.7501416 M8.55750708,13.6339943 C14.7943343,5.51161473 25.5274788,0.580169972 38.5813031,0.580169972 C61.3529745,0.580169972 74.4067989,12.6186969 77.7427762,29.4436261 L57.1467422,29.4436261 C54.8260623,22.7716714 49.1694051,17.5501416 38.8713881,17.5501416 C27.7031161,17.6951841 20.1609065,24.0770538 19.725779,34.2300283 C12.2517705,30.1081799 8.2674221,22.0464589 8.55750708,13.6339943 Z"
                        fill="#F37368"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
              <div className="bg-background p-1 rounded-full border-2 border-button ml-[-10px]">
                <Image src="/clerkjs.png" width={30} height={30}></Image>
              </div>
            </div>
          </motion.div>
          <ExpandableDiv href="https://balkangross.com" text="Balkan" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <motion.div className="relative flex justify-center w-full p-2 items-center aspect-video  bg-button rounded-lg">
            <Image
              src="/alius-nobg.png"
              fill
              quality={100}
              style={{ objectFit: "contain" }}
            />
            <div className="absolute bottom-[-15px] right-[50px] flex">
              <div className="bg-background p-1 rounded-full border-2 border-button ">
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M6 28L4 3H28L26 28L16 31L6 28Z"
                      fill="#E44D26"
                    ></path>{" "}
                    <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"></path>{" "}
                    <path
                      d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z"
                      fill="white"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className="bg-background p-1 rounded-full border-2 border-button ml-[-10px]">
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M6 28L4 3H28L26 28L16 31L6 28Z"
                      fill="#1172B8"
                    ></path>{" "}
                    <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"></path>{" "}
                    <path
                      d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z"
                      fill="white"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className="bg-background p-1 rounded-full border-2 border-button ml-[-10px]">
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z"
                      fill="#53C1DE"
                    ></path>{" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z"
                      fill="#53C1DE"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className="bg-background p-1 rounded-full border-2 border-button ml-[-10px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="JavaScript"
                  role="img"
                  viewBox="0 0 512 512"
                  width="30px"
                  height="30px"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <rect
                      width="512"
                      height="512"
                      rx="15%"
                      fill="#f7df1e"
                    ></rect>
                    <path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z"></path>
                  </g>
                </svg>
              </div>
              <div className="bg-background p-1 rounded-full border-2 border-button ml-[-10px]">
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 10.087 13.6902 12.3681 11.6975 13.7163L4.90687 4.20942C4.78053 4.03255 4.5544 3.95756 4.34741 4.02389C4.14042 4.09022 4 4.28268 4 4.50004V12H5V6.06027L10.8299 14.2221C9.82661 14.7201 8.696 15 7.5 15C3.35786 15 0 11.6421 0 7.5ZM10 10V4H11V10H10Z"
                      fill="#000000"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
            </div>
          </motion.div>
          <ExpandableDiv href="https://alius.se" text="Alius" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <motion.div className=" relative flex justify-center items-center aspect-video w-200px bg-button rounded-lg">
            <Image
              src="/estatex-iphone-nobg.png"
              fill
              quality={100}
              style={{ objectFit: "contain" }}
            />
            <div className="absolute bottom-[-15px] right-[50px] flex">
              <div className="bg-background p-1 rounded-full border-2 border-button ">
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30Z"
                      fill="white"
                    ></path>{" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9 20.3335H16V27.0002L9 20.3335Z"
                      fill="#0055FF"
                    ></path>{" "}
                    <path
                      d="M16 13.6665H9V20.3332H23L16 13.6665Z"
                      fill="#00AAFF"
                    ></path>{" "}
                    <path d="M9 7L16 13.6667H23V7H9Z" fill="#88DDFF"></path>{" "}
                  </g>
                </svg>
              </div>
              <div className="bg-background p-1 rounded-full border-2 border-button ml-[-10px]">
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M6 28L4 3H28L26 28L16 31L6 28Z"
                      fill="#1172B8"
                    ></path>{" "}
                    <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"></path>{" "}
                    <path
                      d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z"
                      fill="white"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className="bg-background p-1 rounded-full border-2 border-button ml-[-10px]">
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z"
                      fill="#53C1DE"
                    ></path>{" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z"
                      fill="#53C1DE"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
            </div>
          </motion.div>
          <ExpandableDiv href="https://estatex.eu" text="Estatex" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <motion.div className="relative flex justify-center items-center aspect-video w-200px bg-button rounded-lg">
            <Image
              src="/kreate-nobg.png"
              fill
              quality={100}
              style={{ objectFit: "contain" }}
            />
            <div className="absolute bottom-[-15px] right-[50px] flex">
              <div className="bg-background p-1 rounded-full border-2 border-button ">
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M6 28L4 3H28L26 28L16 31L6 28Z"
                      fill="#E44D26"
                    ></path>{" "}
                    <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"></path>{" "}
                    <path
                      d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z"
                      fill="white"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className="bg-background p-1 rounded-full border-2 border-button ml-[-10px]">
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M6 28L4 3H28L26 28L16 31L6 28Z"
                      fill="#1172B8"
                    ></path>{" "}
                    <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"></path>{" "}
                    <path
                      d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z"
                      fill="white"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className="bg-background p-1 rounded-full border-2 border-button ml-[-10px]">
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z"
                      fill="#53C1DE"
                    ></path>{" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z"
                      fill="#53C1DE"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className="bg-background p-1 rounded-full border-2 border-button ml-[-10px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="JavaScript"
                  role="img"
                  viewBox="0 0 512 512"
                  width="30px"
                  height="30px"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <rect
                      width="512"
                      height="512"
                      rx="15%"
                      fill="#f7df1e"
                    ></rect>
                    <path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z"></path>
                  </g>
                </svg>
              </div>
              <div className="bg-background p-1 rounded-full border-2 border-button ml-[-10px]">
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 10.087 13.6902 12.3681 11.6975 13.7163L4.90687 4.20942C4.78053 4.03255 4.5544 3.95756 4.34741 4.02389C4.14042 4.09022 4 4.28268 4 4.50004V12H5V6.06027L10.8299 14.2221C9.82661 14.7201 8.696 15 7.5 15C3.35786 15 0 11.6421 0 7.5ZM10 10V4H11V10H10Z"
                      fill="#000000"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
            </div>
          </motion.div>
          <ExpandableDiv href="https://www.wearekreate.com" text="Kreate" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <motion.div className="relative flex justify-center items-center aspect-video w-200px bg-button rounded-lg">
            <Image
              src="/munthes-nobg.png"
              fill
              quality={100}
              style={{ objectFit: "contain" }}
            />
            <div className="absolute bottom-[-15px] right-[50px] flex">
              <div className="bg-background p-1 rounded-full border-2 border-button ">
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M6 28L4 3H28L26 28L16 31L6 28Z"
                      fill="#E44D26"
                    ></path>{" "}
                    <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"></path>{" "}
                    <path
                      d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z"
                      fill="white"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className="bg-background p-1 rounded-full border-2 border-button ml-[-10px]">
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M6 28L4 3H28L26 28L16 31L6 28Z"
                      fill="#1172B8"
                    ></path>{" "}
                    <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"></path>{" "}
                    <path
                      d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z"
                      fill="white"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className="bg-background p-1 rounded-full border-2 border-button ml-[-10px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="JavaScript"
                  role="img"
                  viewBox="0 0 512 512"
                  width="30px"
                  height="30px"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <rect
                      width="512"
                      height="512"
                      rx="15%"
                      fill="#f7df1e"
                    ></rect>
                    <path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z"></path>
                  </g>
                </svg>
              </div>
            </div>
          </motion.div>
          <ExpandableDiv href="/" text="Link not available" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <motion.div className="relative flex justify-center items-center aspect-video w-200px bg-button rounded-lg">
            <Image
              src="/massoud-nobg.png"
              fill
              quality={100}
              style={{ objectFit: "contain" }}
            />
            <div className="absolute bottom-[-15px] right-[50px] flex">
              <div className="bg-background p-1 rounded-full border-2 border-button ">
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M6 28L4 3H28L26 28L16 31L6 28Z"
                      fill="#E44D26"
                    ></path>{" "}
                    <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"></path>{" "}
                    <path
                      d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z"
                      fill="white"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className="bg-background p-1 rounded-full border-2 border-button ml-[-10px]">
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M6 28L4 3H28L26 28L16 31L6 28Z"
                      fill="#1172B8"
                    ></path>{" "}
                    <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"></path>{" "}
                    <path
                      d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z"
                      fill="white"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className="bg-background p-1 rounded-full border-2 border-button ml-[-10px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="JavaScript"
                  role="img"
                  viewBox="0 0 512 512"
                  width="30px"
                  height="30px"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <rect
                      width="512"
                      height="512"
                      rx="15%"
                      fill="#f7df1e"
                    ></rect>
                    <path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z"></path>
                  </g>
                </svg>
              </div>
            </div>
          </motion.div>
          <ExpandableDiv href="/" text="Link not available" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
