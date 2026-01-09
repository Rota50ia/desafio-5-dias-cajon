import { motion } from "framer-motion";
import { SignupForm } from "./SignupForm";

export const HeroSection = () => {
  return (
    <header className="gradient-hero min-h-screen flex items-center relative overflow-hidden py-16 px-5">
      {/* Animated background gradients */}
      <div className="absolute inset-0 animate-float">
        <div className="absolute top-0 left-[20%] w-[50%] h-[50%] bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] right-[20%] w-[40%] h-[40%] bg-primary/15 rounded-full blur-3xl" />
      </div>
      
      {/* Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 70px)`
        }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div 
              className="inline-block bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-5"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              🔥 100 Vagas Gratuitas
            </motion.div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-none tracking-wider mb-5">
              5 DIAS PARA PERDER{" "}
              <span className="text-primary block">A VERGONHA DO CAJÓN</span>
            </h1>
            
            <p className="font-serif text-lg md:text-xl lg:text-2xl text-foreground/80 italic leading-relaxed">
              Descubra o método simples que já libertou 500+ pessoas do medo de tocar. 
              Vagas gratuitas limitadas - última chance antes que vire pago.
            </p>
          </motion.div>

          {/* Signup Form */}
          <SignupForm />
        </div>
      </div>
    </header>
  );
};
