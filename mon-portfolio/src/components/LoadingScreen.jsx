/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 1000); // Wait for fade-out
          }, 500);
          return 100;
        }
        return oldProgress + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-[100000] overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-black">
            <motion.div
              className="absolute w-full h-full opacity-30"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              style={{ background: "radial-gradient(circle, rgba(29,78,216,0.4) 0%, rgba(0,0,0,1) 80%)" }}
            />
            <motion.div
              className="absolute top-0 left-0 w-full h-full opacity-20"
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              style={{ background: "conic-gradient(from 180deg at 50% 50%, rgba(0,255,255,0.2), rgba(0,0,0,0) 80%)" }}
            />
          </div>
          
          <motion.h1
            className="text-4xl md:text-6xl font-bold glitch relative z-10 flex items-center mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Chargement
            <motion.span
              className="inline-block"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 0.5, delay: 0 }}
            >.</motion.span>
            <motion.span
              className="inline-block"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 0.5, delay: 0.2 }}
            >.</motion.span>
            <motion.span
              className="inline-block"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 0.5, delay: 0.4 }}
            >.</motion.span>
          </motion.h1>
          
          <div className="w-64 h-2 mt-4 bg-gray-800 overflow-hidden rounded-lg relative z-10">
            <motion.div
              className="h-full bg-blue-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2 }}
            />
          </div>

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-0 left-0 w-48 h-1 bg-blue-500"
              animate={{ x: [0, 300, -300, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
