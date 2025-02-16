/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const projects = [
  {
    title: "See Weather",
    description: "Application météo en temps réel utilisant ReactJS et TailwindCSS.",
    link: "https://see-weather.netlify.app",
  },
  {
    title: "Portfolio",
    description: "Un portfolio futuriste avec des animations fluides et un design épuré.",
    link: "#",
  },
  {
    title: "Gestionnaire de Tâches",
    description: "Application pour gérer vos tâches quotidiennes avec une interface moderne.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="w-screen min-h-screen bg-black text-gray-300 flex flex-col items-center justify-center p-8">
      <motion.h2
        className="text-4xl md:text-6xl font-semibold text-neon mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Mes Projets
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-black bg-opacity-60 p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-glitch">{project.title}</h3>
            <p className="mb-6">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon font-bold hover:underline"
            >
              Voir le projet
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
