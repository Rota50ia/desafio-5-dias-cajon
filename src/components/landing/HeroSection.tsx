import { motion } from "framer-motion";
import { SignupForm } from "./SignupForm";
import { Flame, Users, Clock, ArrowDown } from "lucide-react";

export const HeroSection = () => {
  const textReveal = {
    hidden: { opacity: 0, y: 100, rotateX: -80 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1] as const,
      },
    }),
  };

  const floatingStats = [
    { icon: Users, value: "500+", label: "Pessoas Desbloqueadas" },
    { icon: Clock, value: "10 min", label: "Por Dia" },
    { icon: Flame, value: "100%", label: "Gratuito" },
  ];

  return (
    <header className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 opacity-30">
          <motion.div
            className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full"
            style={{
              background: "radial-gradient(circle, hsl(var(--secondary)) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full"
            style={{
              background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
              filter: "blur(100px)",
            }}
            animate={{
              x: [0, -80, 0],
              y: [0, -60, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-[40%] left-[50%] w-[40%] h-[40%] rounded-full"
            style={{
              background: "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)",
              filter: "blur(90px)",
            }}
            animate={{
              x: [0, 60, -60, 0],
              y: [0, -40, 40, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 py-20 lg:py-0">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
          {/* Hero Text */}
          <div className="space-y-8" style={{ perspective: "1000px" }}>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2"
            >
              <motion.span
                className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--orange-dark)) 100%)",
                }}
              >
                <motion.span
                  className="absolute inset-0 bg-white/20"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                />
                <Flame className="w-4 h-4 text-primary-foreground" />
                <span className="text-primary-foreground relative z-10">Desafio Gratuito — Sem cartão, sem taxa</span>
              </motion.span>
            </motion.div>

            {/* Main headline with 3D reveal */}
            <div className="space-y-3">
              <motion.h1
                custom={0}
                initial="hidden"
                animate="visible"
                variants={textReveal}
                className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-wide"
              >
                Você até Sabe Tocar.
              </motion.h1>
              <motion.div
                custom={1}
                initial="hidden"
                animate="visible"
                variants={textReveal}
                className="relative inline-block"
              >
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-wide text-transparent bg-clip-text"
                  style={{
                    backgroundImage: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--orange-dark)) 50%, hsl(var(--primary)) 100%)",
                    backgroundSize: "200% auto",
                  }}
                >
                  Mas Quando Alguém Olha,
                </h1>
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                />
              </motion.div>
              <motion.h1
                custom={2}
                initial="hidden"
                animate="visible"
                variants={textReveal}
                className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-wide"
              >
                Você Congela.
              </motion.h1>
            </div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="font-serif text-lg md:text-xl lg:text-2xl text-foreground/70 italic leading-relaxed max-w-xl"
            >
              O método que já desbloqueou{" "}
              <span className="text-primary font-semibold not-italic">500+ pessoas</span>{" "}
              que achavam que "não levavam jeito". Sem partitura. Sem teoria. Só você e o ritmo.
            </motion.p>

            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              {floatingStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl glass-card"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="p-2 rounded-xl bg-primary/20">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-display text-2xl text-foreground">{stat.value}</p>
                    <p className="text-xs text-foreground/60 uppercase tracking-wider">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Signup Form with glow effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-3xl blur-2xl" />
            <div className="relative">
              <SignupForm />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <span className="text-xs text-foreground/50 uppercase tracking-widest">Role para baixo</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5 text-foreground/50" />
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
};
