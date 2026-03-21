import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const painPoints = [
  "Alguém pede pra você tocar e você inventa qualquer desculpa pra não ir",
  "O cajón está encostado na parede há meses — ou anos — cheio de poeira",
  "Você tentou aprender no YouTube, se perdeu nos vídeos e desistiu",
  "Sente que 'não tem dom' enquanto vê outras pessoas tocando sem esforço",
  "Pratica com medo de ser ouvido — mesmo quando está sozinho em casa",
];

export const PainPointsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-5 bg-gradient-to-b from-navy-deep to-[#1a1a1a]">
      <div className="container">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-center mb-4 tracking-wider">
          A Vergonha Que Todo Mundo Sente
        </h2>
        <p className="font-serif text-xl text-foreground/70 text-center mb-16 italic">
          Mas ninguém fala sobre...
        </p>

        <div
          ref={ref}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card p-8 rounded-2xl border-l-4 border-secondary hover:translate-x-2 hover:shadow-[0_10px_30px_rgba(66,165,245,0.2)] transition-all duration-300"
            >
              <span className="text-3xl block mb-4">💔</span>
              <p className="text-foreground/80 leading-relaxed text-lg">{point}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-3xl mx-auto mt-16 gradient-truth text-white p-10 rounded-2xl text-center text-xl font-semibold leading-relaxed shadow-[0_10px_40px_rgba(0,188,212,0.3)]"
        >
          <strong>A VERDADE:</strong> Em 40 anos ensinando, eu nunca encontrei alguém que "não levava jeito".<br /><br />
          Encontrei pessoas que nunca tiveram o método certo.
        </motion.div>
      </div>
    </section>
  );
};
