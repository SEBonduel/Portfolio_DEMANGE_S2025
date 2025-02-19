import { motion } from "framer-motion";
import "@fontsource/orbitron";
const projects = [
  {
    title: "See Weather",
    description: "Application météo en temps réel utilisant ReactJS et TailwindCSS.",
    link: "https://see-wea-ther.netlify.app",
    image: "/Medias/see-weather.jpg",
  },
  {
    title: "Portfolio 2025",
    description: "Mon portfolio actuel, réalisé avec ReactJS et TailwindCSS.",
    link: "https://sebastiendemange.netlify.app",
    image: "/Medias/portfolio2025.jpg",
  },
  {
    title: "Amap Collaborative",
    description: "Il s'agit d'une application web permettant de gérer des AMAPs (Associations pour le Maintien d'une Agriculture Paysanne) en ligne.",
    link: "https://Amap-co.fr",
    image: "/Medias/Ham'apiens.png",
  },
  {
    title: "Password Generator",
    description: "Générateur de mots de passe aléatoires avec choix du nombre de caractères réalisé avec ReactJS.",
    link: "https://generateur-mot-de-passe.netlify.app",
    image: "/Medias/PasswordGenerator.png",
  },
  {
    title: "Portfolio 2024",
    description: "Mon 2ème portfolio, celui avec lequel j'ai commencé à apprendre les animations dynamiques.",
    link: "https://sebastiendemange.netlify.app",
    image: "/Medias/portfolio2024.png",
  },
  {
    title: "ConsensUs",
    description: "Application d'aide à la décision multi-acteurs visant à soutenir le processus de consensus dans les projets d'innovation réalisé avec ReactJS et Firebase.",
    link: "https://consens-us.netlify.app",
    image: "/Medias/Consensus.png",
  },
  {
    title: "Spot'Elec",
    description: "Site vitrine pour un ami auto-entrepreneur électricien.",
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
    <section className="bg-black w-screen min-h-screen text-gray-300 flex flex-col items-center justify-center p-8"id="Project">
      <motion.h2
        className="text-4xl md:text-6xl font-medium font-orbitron  mb-16 mt-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Mes Projets
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-9xl mt-10 ml-4 mr-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className=" bg-gray-900 bg-opacity-60 rounded-2xl shadow-xl  border-2 border-neon rounded-2xl p-8 ml-4 mr-4 hover:shadow-2xl hover:border-neon hover:border-4 hover:bg-opacity-80 transition-all"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.8 }}
          >
            <div className="w-full h-[250px]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4 text-glitch">{project.title}</h3>
              {project.description && <p className="mb-6">{project.description}</p>}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon font-bold hover:underline font-orbitron"
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
