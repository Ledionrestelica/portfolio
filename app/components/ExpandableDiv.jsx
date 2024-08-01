import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const ExpandableDiv = ({ href, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      onHoverStart={() => setIsOpen(true)}
      onHoverEnd={() => setIsOpen(false)}
      className={`bg-button px-6 py-2 rounded-lg flex justify-between w-max cursor-pointer ${
        isOpen ? "w-[220px]" : "w-max"
      }`}
    >
      <motion.p layout className="text-secondary font-normal">
        View more
      </motion.p>
      {isOpen && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="underline"
        >
          <Link href={href}>{text}</Link>
        </motion.p>
      )}
    </motion.div>
  );
};

export default ExpandableDiv;
