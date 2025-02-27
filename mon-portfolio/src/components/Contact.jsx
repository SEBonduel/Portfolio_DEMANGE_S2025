import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * 0.3); // Ajuste la vitesse de déplacement
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("emailSent") === "true") {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        localStorage.removeItem("emailSent"); 
      }, 3000);
    }
  }, []);

  const handleSubmit = () => {
    localStorage.setItem("emailSent", "true");
  };

  return (
    <section id="Contact" className="relative min-h-screen flex items-center justify-center bg-black/80 text-white px-4 py-6 sm:px-6">
      {showPopup && (
        <div className="fixed top-4 right-4 bg-green-500 text-white p-3 rounded-lg shadow-lg z-50 text-sm sm:text-base">
          ✅ Email envoyé avec succès !
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-0"></div>

      <motion.div
        className="relative z-10 w-full max-w-sm sm:max-w-lg bg-black/60 p-4 sm:p-6 rounded-2xl shadow-lg backdrop-blur-md"
        style={{ transform: `translateY(${offsetY}px)` }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-neon-blue font-orbitron uppercase mt-2 pb-4">Contactez-moi</h2>
        <form
          className="flex flex-col gap-3 sm:gap-4 mt-4 font-orbitron"
          action="https://formspree.io/f/mvgzjjjr"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input type="text" name="subject" placeholder="Objet" required className="bg-white text-black p-2 mb-2 sm:p-3 rounded-md text-sm sm:text-base" />
          <input type="email" name="email" placeholder="Votre email" required className="bg-white text-black p-2 mb-2 sm:p-3 rounded-md text-sm sm:text-base" />
          <input type="tel" name="phone" placeholder="Numéro de téléphone (optionnel)" className="bg-white text-black p-2 mb-8 sm:p-3 rounded-md text-sm sm:text-base" />
          <textarea name="message" placeholder="Votre message" required className="h-28 sm:h-32 bg-white text-black p-2 sm:p-3 rounded-md text-sm sm:text-base"></textarea>
          <button type="submit" className="mt-4 bg-gray-800 text-white font-bold py-2 rounded-lg hover:opacity-80 transition-all text-sm sm:text-base">
            Envoyer
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
