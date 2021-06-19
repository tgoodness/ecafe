import React from "react";
import { motion } from "framer-motion";

export default function Animation({ children }) {
  //Animation
//   const pageVariants = {
//     initial: {
//       scale: 0.8,
//       opacity: 0,
//       y: "100%",
//     },
//     in: {
//       scale: 1,
//       opacity: 1,
//       y: 0,
//     },
//     out: {
//       scale: 1,
//       opacity: 0,
//       y: "0%",
//     },
//   };

  return (
    <div>
      <motion.div initial={{scale:0.95}} animate={{ scale:1 }} transition={{ duration: 0.5 }}>
        {children}
      </motion.div>
    </div>
  );
}
