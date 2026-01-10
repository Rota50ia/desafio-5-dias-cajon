import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const SignupForm = () => {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load the external form script
    const script = document.createElement("script");
    script.src = "//web.webformscr.com/apps/fc3/build/loader.js";
    script.async = true;
    script.setAttribute("sp-form-id", "c77e07171229a43d1d0cedd71c5931641bde0bde99b0e14e42b8cea133272ee4");
    
    if (formContainerRef.current) {
      formContainerRef.current.appendChild(script);
    }

    return () => {
      // Cleanup script on unmount
      if (formContainerRef.current && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-white rounded-3xl p-8 md:p-10 shadow-card relative overflow-hidden"
    >
      {/* Decorative music note */}
      <span className="absolute -top-8 -right-8 text-7xl opacity-10 rotate-12">🎵</span>

      <h2 className="font-display text-3xl text-navy-deep text-center mb-2">
        Garanta Sua Vaga Grátis
      </h2>
      <p className="text-center text-gray-600 mb-6 text-sm">
        Transforme sua relação com o cajón em apenas 5 dias
      </p>

      {/* External form container */}
      <div ref={formContainerRef} className="min-h-[300px]" />
    </motion.div>
  );
};
