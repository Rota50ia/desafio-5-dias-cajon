import { motion } from "framer-motion";

const topics = [
  {
    title: "Como perder a vergonha de tocar cajón em público",
    text: "A vergonha diminui quando você treina exposição em etapas pequenas. O desafio usa exercícios progressivos para você sair do treino sozinho e tocar primeiro para uma pessoa de confiança.",
  },
  {
    title: "Por que você trava mesmo sabendo tocar",
    text: "Muitas vezes o bloqueio não é técnico. Você sabe o ritmo, mas associa erro a julgamento. Por isso o treino inclui errar de propósito e continuar tocando.",
  },
  {
    title: "O que praticar durante 5 dias",
    text: "Cada dia trabalha uma camada: mapear a trava, reduzir medo de erro, tocar para alguém, continuar depois de errar e fazer uma apresentação simples.",
  },
  {
    title: "O desafio substitui um curso de cajón?",
    text: "Não. O desafio foi criado para confiança e destravamento. Quem nunca tocou cajón deve começar por uma formação do zero antes de fazer este processo.",
  },
];

const DesafioSeoSection = () => (
  <section className="py-16 md:py-24 bg-secondary">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <p className="text-primary font-semibold mb-3">Cajón sem travar</p>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-5 text-foreground">
          Uma sequência prática para tocar na frente de outras pessoas
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          O objetivo não é ensinar teoria musical. É ajudar você a atravessar o bloqueio emocional
          que aparece quando alguém está olhando.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {topics.map((topic, i) => (
          <motion.article
            key={topic.title}
            className="bg-card card-glow rounded p-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <h3 className="font-heading text-xl font-bold mb-3 text-foreground">{topic.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{topic.text}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default DesafioSeoSection;
