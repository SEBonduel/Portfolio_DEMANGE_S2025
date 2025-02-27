/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaFilePdf, FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import { PiMouseSimpleThin } from "react-icons/pi";
import "@fontsource/orbitron";
import "@fontsource/space-grotesk";

const Home = () => {
  const originalText = "Sébastien Demange";
  const [glitchText, setGlitchText] = useState(originalText);

  useEffect(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

    const glitchEffect = () => {
      let iteration = 0;
      const interval = setInterval(() => {
        setGlitchText((prev) =>
          originalText
            .split("")
            .map((char) => (Math.random() > 0.9 ? chars[Math.floor(Math.random() * chars.length)] : char))
            .join("")
        );

        iteration++;
        if (iteration > 4) {
          clearInterval(interval);
          setTimeout(() => setGlitchText(originalText), 100);
        }
      }, 80);
    };

    const glitchInterval = setInterval(glitchEffect, 1800);
    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center w-screen min-h-screen px-6 py-12 lg:flex-row lg:h-screen bg-[url('../Medias/background-pc.jpg')] bg-cover bg-center bg-no-repeat relative" id="About"> 
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left justify-center w-full max-w-[700px] mb-8 px-6 lg:pl-8 z-50">
        <motion.h1
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-glitch font-orbitron"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          {glitchText}
        </motion.h1>

        <motion.p
          className="mt-4 mb-8 text-gray-300 text-sm sm:text-base lg:text-xl font-sans"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          Développeur Web Full-Stack
        </motion.p>

        <motion.div className="flex space-x-6 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}>
          {[{
            href: "https://www.linkedin.com/in/s%C3%A9bastien-demange-5a4b03243/",
            icon: <FaLinkedin />,
            color: "hover:text-blue-500"
          }, {
            href: "mailto:sebastien050599@hotmail.fr",
            icon: <FaEnvelope />,
            color: "hover:text-red-500"
          }, {
            href: "https://github.com/SEBonduel",
            icon: <FaGithub />,
            color: "hover:text-green-500"
          }, {
            href: "../Medias/CV_Demange_Sebastien.pdf",
            icon: <FaFilePdf />,
            color: "hover:text-purple-500"
          }].map(({ href, icon, color }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-300 ${color} text-2xl sm:text-3xl md:text-4xl hover:scale-110 transition-all duration-300`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3 + (index * 0.5), duration: 0.2 }}
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div className="flex flex-col items-center text-center lg:text-left bg-black bg-opacity-60 p-6 sm:p-8 rounded-lg w-full max-w-[625px] mx-4 z-50" 
        initial={{ opacity: 0, y:-100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 2 }}>
        <p className="text-2xl font-orbitron font-bold mb-4 uppercase">À propos de moi</p>
        <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
          Passionné de développement web, musique, guitare et production vidéo, j’ai commencé mon parcours en 2021 dans le cadre de mon BTS.
          Depuis, j’ai travaillé dur pour perfectionner mes compétences et transformer cette passion en carrière.
        </p>
        <p className="text-gray-200 text-sm sm:text-base leading-relaxed mt-3">
          Mon portfolio témoigne de mon parcours, mes projets et mes compétences en développement web. Vous y trouverez également mes liens professionnels.
        </p>
        <p className="text-gray-200 text-sm sm:text-base leading-relaxed mt-3">
          Je suis toujours en quête d’apprentissage et d’amélioration. Si vous êtes intéressé, n’hésitez pas à me contacter. Bonne visite !
        </p>
      </motion.div>

      <motion.div className="absolute bottom-10 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ y: [0, 10, 0], opacity: 1 }}
        transition={{ repeat: Infinity, duration: 2, delay: 3 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}>
        <PiMouseSimpleThin className="text-5xl sm:text-6xl text-gray-300 hover:text-green-500 hover:scale-110 transition-all z-50" />
      </motion.div>
    </section>
  );
};

export default Home;
