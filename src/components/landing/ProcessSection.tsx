import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const days = [
  {
    number: "1",
    title: '"Uau, é mais fácil<br/>do que pensei!"',
    lesson: "Os 3 sons fundamentais do cajón — você aprende todos hoje, em menos de 10 minutos",
    exercise: "10 minutos de prática guiada, sem julgamento, sem erros 'errados'",
    result: "Você termina o Dia 1 tendo tocado de verdade — pela primeira vez sem travar",
    color: "border-t-secondary",
  },
  {
    number: "2",
    title: '"Ei, até que estou<br/>conseguindo!"',
    lesson: "Um padrão rítmico completo que funciona em 15+ músicas que você já conhece",
    exercise: "Prática progressiva — começa devagar, termina no tempo certo",
    result: "A sensação real de 'espera... eu realmente estou evoluindo aqui'",
    color: "border-t-accent",
  },
  {
    number: "3",
    title: '"Isso até que<br/>é divertido!"',
    lesson: "O segredo que transforma prática em prazer (a maioria dos professores não ensina isso)",
    exercise: "Jogo rítmico que você vai querer repetir quando terminar",
    result: "Perceber que aprender cajón pode ser mais divertido que assistir série",
    color: "border-t-primary",
  },
  {
    number: "4",
    title: '"Consegui fazer um<br/>ritmo inteiro!"',
    lesson: "Seu primeiro ritmo completo do início ao fim — Baião básico",
    exercise: "Montagem peça por peça até soar como música de verdade",
    result: "'Eu toquei uma música. Do começo ao fim. Eu mesmo.'",
    color: "border-t-[#7C4DFF]",
  },
  {
    number: "5",
    title: '"Olha só o que<br/>eu consigo fazer!"',
    lesson: "Como tocar junto com uma música real sem travar no meio",
    exercise: "Acompanhe uma faixa de verdade com tudo que aprendeu nos 4 dias",
    result: "Confiança para tocar na frente de qualquer pessoa — porque você tem prova de que consegue",
    color: "border-t-destructive",
  },
];

export const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-5 gradient-process">
      <div className="container">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-center mb-4 tracking-wider">
          Como a Vergonha Some em 5 Dias
        </h2>
        <p className="font-serif text-xl text-foreground/70 text-center mb-16 italic max-w-3xl mx-auto">
          Um processo testado e aprovado por 500+ pessoas
        </p>

        <div ref={ref} className="space-y-10 max-w-4xl mx-auto">
          {days.map((day, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`glass-card rounded-2xl p-8 md:p-10 border-t-4 ${day.color} hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-all duration-300`}
            >
              <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
                <span className="font-display text-6xl md:text-7xl text-secondary leading-none min-w-[80px]">
                  {day.number}
                </span>
                <h3 
                  className="font-display text-2xl md:text-3xl leading-tight"
                  dangerouslySetInnerHTML={{ __html: day.title }}
                />
              </div>

              <div className="md:ml-24 space-y-5">
                <div>
                  <h4 className="text-secondary font-semibold mb-2">📚 AULA:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-foreground/80">
                      <span className="text-accent font-bold">✓</span>
                      {day.lesson}
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-secondary font-semibold mb-2">💪 EXERCÍCIO:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-foreground/80">
                      <span className="text-accent font-bold">✓</span>
                      {day.exercise}
                    </li>
                  </ul>
                </div>

                <div className="bg-primary/10 p-5 rounded-xl border-l-4 border-primary">
                  <span className="font-semibold text-primary">🎯 RESULTADO: {day.result}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
