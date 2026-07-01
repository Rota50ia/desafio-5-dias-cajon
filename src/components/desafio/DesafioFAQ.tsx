import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    q: "Preciso ter um cajón para participar?",
    a: "Para os primeiros dias, não. Você pode usar qualquer superfície para os exercícios de confiança. Mas a partir do Dia 2, ter um cajón vai fazer uma diferença grande na experiência — e no resultado.",
  },
  {
    q: "É realmente de graça?",
    a: "Sim. 100% gratuito. Sem teste grátis que vira pago, sem cartão de crédito, sem pegadinha. Você se inscreve e recebe acesso imediato.",
  },
  {
    q: "Quanto tempo preciso dedicar por dia?",
    a: "20 minutos por dia são suficientes. Menos do que o tempo que você já gasta rolando feed — e com resultado muito maior.",
  },
  {
    q: "Esse desafio é para quem nunca tocou cajón?",
    a: "Não. Esse desafio é para quem já toca — mas trava quando tem alguém olhando. Se você nunca tocou cajón na vida, existe o Curso Rápido de Cajón, que começa do zero.",
  },
  {
    q: "Onde recebo as aulas?",
    a: "Direto no seu acesso após a inscrição — e também no grupo VIP do WhatsApp, onde você vai junto com outros alunos que estão no mesmo ponto que você.",
  },
  {
    q: "O desafio ensina técnica de cajón?",
    a: "Ele usa exercícios práticos no cajón, mas o foco principal é confiança, exposição gradual e continuidade depois do erro. Para aprender do zero, o ideal é começar pelo Curso Rápido de Cajón.",
  },
  {
    q: "Serve para tocar na igreja, roda de amigos ou eventos?",
    a: "Sim, desde que você já tenha alguma base no cajón. O desafio ajuda justamente quem sabe tocar em casa, mas sente pressão quando precisa tocar diante de outras pessoas.",
  },
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-border rounded overflow-hidden cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between px-5 py-4 bg-card hover:bg-card/80 transition-colors">
        <p className="font-heading text-sm font-semibold text-foreground pr-4">{q}</p>
        <span className="text-primary shrink-0 text-lg">{open ? "−" : "+"}</span>
      </div>
      {open && (
        <div className="px-5 py-4 bg-card/40 border-t border-border">
          <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
};

const DesafioFAQ = () => (
  <section className="py-16 md:py-24 bg-muted">
    <div className="container max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
          Perguntas Frequentes
        </h2>
        <p className="text-muted-foreground mt-3">
          Se ainda ficou alguma dúvida, aqui estão as respostas diretas.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col gap-3"
      >
        {faqs.map((faq, i) => (
          <FAQItem key={i} q={faq.q} a={faq.a} />
        ))}
      </motion.div>
    </div>
  </section>
);

export default DesafioFAQ;
