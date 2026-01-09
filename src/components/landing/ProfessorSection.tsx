import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import professorImage from "@/assets/professor-edilson.jpg";

export const ProfessorSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-5 gradient-professor">
      <div className="container">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-center mb-16 tracking-wider">
          SEU PROFESSOR
        </h2>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto glass-card rounded-3xl p-8 md:p-12 grid md:grid-cols-[350px_1fr] gap-12 items-center"
        >
          <div className="relative mx-auto md:mx-0">
            <img
              src={professorImage}
              alt="Professor Edilson Morais tocando cajón"
              className="w-full max-w-[350px] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-foreground/70 leading-relaxed">
              Meu nome é <strong className="text-foreground">Edilson Morais</strong>. Tenho{" "}
              <strong className="text-foreground">40 anos de experiência</strong> com percussão. 
              Já passei por conservatórios, orquestras, percorri mais de 20 países...
            </p>

            <p className="text-xl font-semibold">
              Mas sabe o que mais me realiza?
            </p>

            <div className="bg-accent/10 p-6 rounded-xl border-l-4 border-accent">
              <p className="text-accent font-bold text-xl">
                Ver aquele brilho no olho de quem achava que "não levava jeito" 
                quando finalmente consegue tocar.
              </p>
            </div>

            <p className="text-lg text-foreground/70 italic leading-relaxed">
              Criei este desafio gratuito porque sei que a vergonha é o maior 
              obstáculo. Não a falta de talento. E quero provar isso para você.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
