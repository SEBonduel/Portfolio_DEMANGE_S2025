import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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

    const glitchInterval = setInterval(glitchEffect, 3000);

    return () => {
      clearInterval(glitchInterval);
    };
  }, []);

  return (
      <section className="flex flex-row items-center justify-center w-screen h-screen bg-[url('../Medias/background-pc.jpg')] bg-cover bg-center bg-no-repeat"> 
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
            className="mt-4 text-xl md:text-2xl text-gray-300"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            Développeur Web Full-Stack
          </motion.p>
        </div>
    
        <motion.div 
            className="flex flex-col items-center justify-start mb-8 ml-8 bg-black bg-opacity-60 p-8 rounded-lg w-[625px] z-2"
            initial={{ opacity: 0, y:-100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1.5 }}>

            <p className="text-start text-2xl w-full text-neon font-bold z-50 mb-2">À propos de moi</p>
            <p className="text-gray-200 text-start z-50 leading-relaxed">Passionné de développement d'application web, de musique, 
                de guitare et de production vidéos musicales âgé de 25 ans. Depuis que j'ai commencé à apprendre le développement web en 2021
                dans le cadre de mon BTS, j'ai été fasciné par les possibilités et les opportunités qu'offre ce domaine passionnant. 
                Depuis lors, j'ai travaillé dur pour développer mes compétences en développement web et j'ai décidé que je voulais faire de cette passion mon métier. 
                Mon portfolio est un témoignage de mon parcours jusqu'à présent, ainsi que de mes projets et réalisations en développement web.
                En parcourant mon portfolio, vous pourrez voir mes compétences en développement web à travers divers projets, 
                vous pourrez trouver mes réseaux comme LinkedIn ainsi que mon GitHub. Je suis fier de ce que j'ai accompli jusqu'à présent,
                mais je suis également impatient de continuer à développer mes compétences et à explorer de nouveaux projets et domaines 
                d'intérêt. Si vous êtes intéressé à travailler avec moi ou à explorer de nouvelles opportunités de collaboration, n'hésitez pas à me contacter.
                Merci d'avoir pris le temps de découvrir mon portfolio, 
                j'espère que vous apprécierez ce que vous y trouverez et que vous serez inspiré par mes projets et mes réalisations.</p>
        </motion.div>
      </section>
    );
};

export default Home;
