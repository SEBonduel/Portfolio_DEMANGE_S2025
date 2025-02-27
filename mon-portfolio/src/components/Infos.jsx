import { motion } from "framer-motion";
import { FaCar, FaGlobe, FaUserCheck } from "react-icons/fa";

const infos = [
  {
    icon: <FaCar className="text-4xl text-neon" />, 
    title: "Permis & Mobilité",
    description: "Permis B, Véhicule personnel, Disponible pour déplacements",
  },
  {
    icon: <FaGlobe className="text-4xl text-neon" />, 
    title: "Langues",
    description: "Français (natif), Anglais (B1), Allemand (A2)",
  },
  {
    icon: <FaUserCheck className="text-4xl text-neon" />, 
    title: "Soft Skills",
    description: "Autonomie, Rigueur, Travail en équipe, Communication, Adaptabilité",
  },
];

const Infos = () => {
  return (
    <section className="relative bg-black w-full min-h-screen h-[100vh] text-gray-300 flex flex-col items-center justify-center p-8 pb-16 overflow-hidden" id="Infos">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-gray-800/30 via-purple-800/30 to-gray-800/30  blur-3xl opacity-40 animate-pulse-slow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      />
      
      <motion.h2
        className="text-xl md:text-3xl font-medium font-orbitron mb-24 mt-8 uppercase relative z-10"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        Informations Complémentaires
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-7xl mt-10 relative z-10">
        {infos.map((info, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 bg-opacity-70 rounded-2xl shadow-xl border-[0.1px] border-neon p-8 flex flex-col items-center justify-center text-center transform transition-transform duration-300 hover:scale-110 hover:translate-y-[-10px] hover:shadow-neon relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ rotate: [0, -5, 5, -5, 5, 0], transition: { duration: 0.3 } }}
            transition={{ delay: 0.2 * index, duration: 0.8 }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-blue-300/20 via-purple-300/20 blur-2xl opacity-40 animate-neon-glow"
              animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            {info.icon}
            <h3 className="text-2xl font-semibold mt-4 font-orbitron text-glitch">{info.title}</h3>
            <p className="mt-2 text-gray-400">{info.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Infos;
