import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "@fontsource/space-grotesk";
import "@fontsource/orbitron";

import about from '../assets/icons/user.svg';
import projects from '../assets/icons/projects.svg';
import skills from '../assets/icons/skills.svg';
import contact from '../assets/icons/contact.svg';
import infos from '../assets/icons/infos.svg';
import background from '../assets/icons/parcours.svg';

const BurgerNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative font-sans">
      {/* Bouton Burger */}
      <button
        onClick={toggleMenu}
        className="p-3 rounded-full bg-black bg-opacity-30 text-white fixed top-5 left-3 z-[9999] sm:top-7 sm:left-5"
        aria-label="Ouvrir le menu"
      >
        <div className="relative w-6 h-6">
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
            className="absolute w-6 h-0.5 bg-white"
          />
          <motion.div
            animate={{ opacity: isOpen ? 0 : 1 }}
            className="absolute top-2 w-6 h-0.5 bg-white"
          />
          <motion.div
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
            className="absolute top-4 w-6 h-0.5 bg-white"
          />
        </div>
      </button>

      {/* Overlay du menu */}
      {isOpen && <div className="fixed inset-0 bg-black/30 backdrop-blur-md z-[100]" onClick={toggleMenu} />}

      {/* Menu latéral */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 left-0 w-[80%] max-w-[480px] bg-black bg-opacity-90 text-white shadow-lg z-[9998] sm:w-[60%] md:w-[50%] lg:w-[30%]"
          >
            <div className="p-6">
              <h2 className="text-xl sm:text-2xl mb-10 uppercase">Sébastien Demange</h2>
              <ul className="space-y-6 text-start flex flex-col">
                <li><a href="#About" onClick={toggleMenu} className="flex items-center hover:text-green-500 transition-all text-lg sm:text-xl"><img src={about} className="w-6 h-6 sm:w-8 sm:h-8 mr-4"/>À Propos de moi</a></li>
                <li><a href="#Project" onClick={toggleMenu} className="flex items-center hover:text-green-500 transition-all text-lg sm:text-xl"><img src={projects} className="w-6 h-6 sm:w-8 sm:h-8 mr-4"/>Mes Projets</a></li>
                <li><a href="#Skills" onClick={toggleMenu} className="flex items-center hover:text-green-500 transition-all text-lg sm:text-xl"><img src={skills} className="w-6 h-6 sm:w-8 sm:h-8 mr-4"/>Mes Compétences</a></li>
                <li><a href="#Background" onClick={toggleMenu} className="flex items-center hover:text-green-500 transition-all text-lg sm:text-xl"><img src={background} className="w-6 h-6 sm:w-8 sm:h-8 mr-4"/>Parcours Académique</a></li>
                <li><a href="#Infos" onClick={toggleMenu} className="flex items-center hover:text-green-500 transition-all text-lg sm:text-xl"><img src={infos} className="w-6 h-6 sm:w-8 sm:h-8 mr-4"/>Informations complémentaires</a></li>
                <li><a href="#Contact" onClick={toggleMenu} className="flex items-center hover:text-green-500 transition-all text-lg sm:text-xl"><img src={contact} className="w-6 h-6 sm:w-8 sm:h-8 mr-4"/>Me Contacter</a></li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BurgerNavbar;
