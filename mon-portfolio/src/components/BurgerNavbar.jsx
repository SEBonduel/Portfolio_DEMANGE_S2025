import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const about = "src/assets/icons/user.svg";
const projects = "src/assets/icons/projects.svg";
const skills = "src/assets/icons/skills.svg";
const contact = "src/assets/icons/contact.svg"; 

const BurgerNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="p-3 rounded-full bg-black bg-opacity-30 text-white fixed top-5 left-3 z-[9999]"
      >
        <div className="relative w-6 h-6 mt-1 ml-1 mr-1 ">
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

      {isOpen && <div className="fixed inset-0 bg-black/30 backdrop-blur-md z-[100]" onClick={toggleMenu} />}
    
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 left-0 w-[350px] bg-black bg-opacity-90 text-white shadow-lg z-[9998]"
          >
            <div className="p-7 ml-6">
              
              <h2 className="text-2xl mb-8"> Sébastien Demange</h2>
              <ul className="space-y-4 text-start ml-8 flex flex-col">
                <li><a href="#About" onClick={toggleMenu} className='flex flex-row items-center hover:text-green-500 transition-all'><img src={about} className="w-8 h-8 mr-2"/>À Propos de moi</a></li>
                <li><a href="#Project" onClick={toggleMenu} className='flex flex-row items-center hover:text-green-500 transition-all'><img src={projects} className="w-8 h-8 mr-2" />Mes Projets</a></li>
                <li><a href="#Skills" onClick={toggleMenu} className='flex flex-row items-center hover:text-green-500 transition-all'><img src={skills}  className="w-8 h-8 mr-2" />Mes Compétences</a></li>
                <li><a href="#Contact" onClick={toggleMenu} className='flex flex-row items-center hover:text-green-500 transition-all'><img src={contact}  className="w-8 h-8 mr-2" />Me Contacter</a></li>
                <li><a href="#" onClick={toggleMenu} className='flex flex-row items-center hover:text-green-500 transition-all'>?</a></li>
                <li><a href="#" onClick={toggleMenu} className='flex flex-row items-center hover:text-green-500 transition-all'>?</a></li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BurgerNavbar;
