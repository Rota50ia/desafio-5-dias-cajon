import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const people = [
  { name: "João Silva", city: "São Paulo" },
  { name: "Maria Santos", city: "Rio de Janeiro" },
  { name: "Carlos Oliveira", city: "Belo Horizonte" },
  { name: "Ana Costa", city: "Brasília" },
  { name: "Pedro Almeida", city: "Curitiba" },
  { name: "Julia Ferreira", city: "Porto Alegre" },
  { name: "Lucas Rodrigues", city: "Salvador" },
  { name: "Fernanda Lima", city: "Fortaleza" },
];

export const SocialProofNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPerson, setCurrentPerson] = useState(people[0]);

  useEffect(() => {
    const showNotification = () => {
      const randomPerson = people[Math.floor(Math.random() * people.length)];
      setCurrentPerson(randomPerson);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // First notification after 3 seconds
    const initialTimeout = setTimeout(showNotification, 3000);

    // Subsequent notifications every 15 seconds
    const interval = setInterval(showNotification, 15000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-5 left-5 bg-white py-4 px-6 rounded-xl shadow-card z-50 flex items-center gap-3 border-l-4 border-accent"
        >
          <span className="text-2xl">🎉</span>
          <div>
            <strong className="text-navy-deep block">{currentPerson.name}</strong>
            <span className="text-gray-600 text-sm">
              acabou de se inscrever de {currentPerson.city}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
