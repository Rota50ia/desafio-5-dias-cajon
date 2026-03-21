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
              Meu nome é <strong className="text-foreground">Edilson Morais</strong>. São{" "}
              <strong className="text-foreground">40 anos tocando percussão</strong> —
              conservatórios, orquestras, mais de 20 países percorridos.
            </p>

            <p className="text-lg text-foreground/70 leading-relaxed">
              Mas o momento que eu mais espero em cada curso não é o aluno avançado
              tocando algo complexo.
            </p>

            <div className="bg-accent/10 p-6 rounded-xl border-l-4 border-accent">
              <p className="text-accent font-bold text-xl">
                É o aluno que chegou na primeira aula dizendo "acho que não tenho jeito pra isso"...
                tocando solo na frente de todo mundo no último dia.
              </p>
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed">
              Esse brilho no olho — eu não troco por nada.
            </p>

            <p className="text-lg text-foreground/70 italic leading-relaxed">
              Vi centenas de pessoas pararem de tocar por vergonha. Não por falta de talento.
              E decidi fazer algo a respeito. Estes 5 dias são minha garantia pessoal:
              se você seguir o método, você vai tocar. Não perfeitamente.
              Mas vai tocar — e vai gostar do que ouviu.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
