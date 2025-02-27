import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "@fontsource/orbitron";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;
      setIsVisible(scrolledToBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.footer
      className="fixed flex flex-col justify-center w-full  items-center bottom-0 bg-black text-white p-4 text-center backdrop-blur-md shadow-lg h-auto md:h-[150px]"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl opacity-30 z-[10000]" />
      <div className="flex flex-col items-center gap-2 w-full max-w-lg px-4">
        <p className="text-lg md:text-xl font-bold text-neon-blue text-orbitron text-center">Sébastien Demange</p>
        <div className="flex gap-4 text-lg md:text-xl justify-center">
          <a href="https://github.com/SEBonduel" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/s%C3%A9bastien-demange-5a4b03243/" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
            <FaLinkedin />
          </a>
          <a href="mailto:sebastien050599@hotmail.fr" className="hover:text-green-500 transition">
            <FaEnvelope />
          </a>
        </div>
        <p className="text-xs md:text-sm text-gray-400 text-center">© {new Date().getFullYear()} Sébastien. Tous droits réservés.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
