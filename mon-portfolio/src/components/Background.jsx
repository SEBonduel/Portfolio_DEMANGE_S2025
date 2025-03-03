// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import "@fontsource/orbitron";

const Background = () => {
  const timeline = [
    { year: "2019", title: "Baccalauréat général scientifique", location: "Lycée Jean Lurçat, Bruyères (88)" },
    { year: "2019 - 2020", title: "Licence 1 Mathématiques - Informatique", location: "Université de Lorraine, Nancy (54)" },
    { year: "2020 - 2022", title: "BTS SNIR (Systèmes numériques option informatique et réseau)", location: "Lycée Charles de Foucauld, Nancy (54)" },
    { year: "2022 - 2023", title: "Licence professionnelle CIASIE (Conception-Intégration d'Applications et Services Web pour l'Entreprise)", location: "IUT Nancy-Charlemagne (54)" }
  ];

  return (
    <section id="Background" className="overflow-x-hidden">
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-black py-12 px-4 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-30"></div>

        <h2 className="text-xl md:text-3xl font-medium font-orbitron uppercase mb-14 mt-4 text-center">
          Parcours Académique
        </h2>

        <div className="relative flex flex-col items-center w-full max-w-3xl mb-20">
          <div className="absolute w-1 h-full bg-cyan-400 rounded-full opacity-40"></div>

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative flex w-full mb-12 pb-4"
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-cyan-400 rounded-full border-4 border-black animate-pulse shadow-lg"></div>
              <div className={`max-w-[90%] md:w-5/6 p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg text-white 
                  ${index % 2 === 0 ? "ml-auto text-right" : "mr-auto text-left"} 
                `}
              >
                <p className="text-lg font-semibold text-cyan-300">{item.year}</p>
                <p className="text-base font-medium">{item.title}</p>
                <p className="text-sm opacity-70">{item.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Background;
