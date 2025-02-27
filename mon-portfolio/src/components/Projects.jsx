import { motion } from "framer-motion";
import "@fontsource/orbitron";
import "@fontsource/space-grotesk";

const projects = [
  {
    title: "See Weather",
    description: "Application météo en temps réel utilisant ReactJs et TailwindCSS.",
    link: "https://see-wea-ther.netlify.app",
    image: "/Medias/see-weather.jpg",
  },
  {
    title: "Portfolio 2025",
    description: "Mon portfolio actuel, réalisé avec ReactJs et TailwindCSS.",
    link: "https://sebastiendemange.netlify.app",
    image: "/Medias/portfolio2025.jpg",
  },
  {
    title: "Amap Collaborative",
    description: "Application web permettant de gérer des AMAPs en ligne avec ReactJs et PHP.",
    link: "https://Amap-co.fr",
    image: "/Medias/Ham'apiens.png",
  },
  {
    title: "Password Generator",
    description: "Générateur de mots de passe aléatoires réalisé avec ReactJs.",
    link: "https://generateur-mot-de-passe.netlify.app",
    image: "/Medias/PasswordGenerator.png",
  },
  {
    title: "Portfolio 2024",
    description: "Mon 2ème portfolio, avec animations dynamiques en HTML, CSS et JavaScript.",
    link: "https://sebastiendemange.netlify.app",
    image: "/Medias/portfolio2024.png",
  },
  {
    title: "ConsensUs",
    description: "Application d'aide à la décision multi-acteurs avec ReactJs et Firebase.",
    link: "https://consens-us.netlify.app",
    image: "/Medias/Consensus.png",
  },
  {
    title: "Spot'Elec",
    description: "Site vitrine pour un électricien, développé en HTML, CSS et JavaScript.",
    link: "https://www.spotelec.fr/",
    image: "/Medias/spotelec.png",
  },
  {
    title: "Portfolio 2022",
    description: "Mon 1er portfolio, réalisé avec HTML, CSS et JavaScript.",
    link: "https://sebastiendemange2k22.netlify.app/",
    image: "/Medias/portfolio2022.png",
  },
];

const Projects = () => {
  return (
    <section 
      className="relative bg-black w-full min-h-screen text-gray-300 flex flex-col items-center justify-center px-4 py-16"
      id="Project"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl opacity-30" />
      
      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-medium font-orbitron uppercase mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Mes Projets
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 w-full max-w-8xl px-4 z-50">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 bg-opacity-60 rounded-2xl shadow-xl border border-neon p-6 hover:bg-opacity-30 transition-all"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.8 }}
          >
            <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden rounded-xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2 text-glitch">{project.title}</h3>
              <p className="text-sm md:text-base mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-neon font-bold hover:underline font-orbitron"
              >
                Voir le projet
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;