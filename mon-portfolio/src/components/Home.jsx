/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaFilePdf } from 'react-icons/fa';
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import { PiMouseSimpleThin } from "react-icons/pi";
import "@fontsource/orbitron";

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
            .map((char, index) =>
              Math.random() > 0.9 ? chars[Math.floor(Math.random() * chars.length)] : char
            )
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

    return () => {
      clearInterval(glitchInterval);
    };
  }, []);

  return (
    <section className="flex flex-row items-center justify-center w-screen h-screen bg-[url('../Medias/background-pc.jpg')] bg-cover bg-center bg-no-repeat" id="About"> 
      <div className="absolute inset-0 bg-black opacity-40 z-1"></div>
      <div className="flex flex-col items-start justify-center md:w-[625px] mb-8 mr-8 z-50">
        <motion.h1
          className="text-xl md:text-6xl font-bold text-glitch relative"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {glitchText}
        </motion.h1>

        <motion.p
          className="mt-4 mb-10 text-xl md:text-2xl text-gray-300"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Développeur Web Full-Stack
        </motion.p>

        <motion.div
          className="flex space-x-6 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.a
            href="https://www.linkedin.com/in/s%C3%A9bastien-demange-5a4b03243/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-300 hover:text-blue-500 hover:scale-110 text-3xl trasition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 2 }}

          >
            <FaLinkedin />
          </motion.a>

          <motion.a 
            href="mailto:sebastien050599@hotmail.fr" 
            className="text-gray-300 hover:text-red-500 text-3xl hover:scale-110 trasition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 2 }}
          >
          <FaEnvelope />
          </motion.a>

          <motion.a
            href="https://github.com/SEBonduel" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-300 hover:text-green-500 text-3xl hover:scale-110 trasition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 2 }}
          >
          <FaGithub />
          </motion.a>

          <motion.a
            href="../Medias/CV_Demange_Sebastien.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-purple-500 text-3xl hover:scale-110 trasition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 2 }}
          >
          <FaFilePdf />

          </motion.a>
        </motion.div>
      </div>

      <motion.div 
        className="flex flex-col items-center justify-start mb-8 ml-8 bg-black bg-opacity-60 p-8 rounded-lg w-[625px] z-2"
        initial={{ opacity: 0, y:-100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1.5 }}>

        <p className="text-start text-3xl w-full font-orbitron font-bold z-50 mb-4">À propos de moi</p>
        <p className="text-gray-200 text-start z-50 leading-relaxed mb-4">Passionné de développement d&#39;application web, de musique, 
          de guitare et de production vidéos musicales âgé de 25 ans. Depuis que j&#39;ai commencé à apprendre le développement web en 2021
          dans le cadre de mon BTS, j&#39;ai été fasciné par les possibilités et les opportunités qu&#39;offre ce domaine passionnant.</p>

        <p className="text-gray-200 text-start z-50 leading-relaxed mb-4">Depuis lors, j&#39;ai travaillé dur pour développer mes compétences en 
          développement web et j&#39;ai décidé que je voulais faire de cette passion mon métier.</p> 

        <p className="text-gray-200 text-start z-50 leading-relaxed mb-4">Mon portfolio est un témoignage de mon parcours jusqu&#39;à présent, ainsi que de mes projets et réalisations en développement web.
          En parcourant mon portfolio, vous pourrez voir mes compétences en développement web à travers divers projets, 
          vous pourrez trouver mes réseaux comme LinkedIn ainsi que mon GitHub.</p>

        <p className="text-gray-200 text-start z-50 leading-relaxed mb-4"> Je suis fier de ce que j&#39;ai accompli jusqu&#39;à présent,
          mais je suis également impatient de continuer à développer mes compétences et à explorer de nouveaux projets et domaines 
          d&#39;intérêt.</p>

        <p className="text-gray-200 text-start z-50 leading-relaxed">Si vous êtes intéressé à travailler avec moi ou à explorer de nouvelles opportunités de collaboration, n&#39;hésitez pas à me contacter.
          Merci de prendre le temps de découvrir mon portfolio, 
          j&#39;espère que vous apprécierez ce que vous y trouverez et que vous serez inspiré par mes projets et mes réalisations.</p>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ y: [0, 10, 0],  opacity: 1 }}
        transition={{ repeat: Infinity, duration: 2, delay:2 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        cursor="pointer"
      >
        <PiMouseSimpleThin className="text-6xl text-gray-300" />
      </motion.div>
    </section>
  );
};

export default Home;
