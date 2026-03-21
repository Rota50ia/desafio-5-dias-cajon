import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "É realmente gratuito? Não vai virar cobrança?",
    answer:
      "Sim, 100% gratuito. Não há cobrança escondida, nem assinatura, nem nada. É nosso investimento em provar que o método funciona. Você só pagaria se, depois do desafio, quisesse continuar com o curso completo - e mesmo assim seria opcional.",
  },
  {
    question: "Preciso ter cajón profissional?",
    answer:
      "Não! Pode ser qualquer cajón. Se não tiver, uma caixa de madeira resistente já serve. O foco é perder a vergonha, não ter equipamento perfeito.",
  },
  {
    question: "E se eu não tiver tempo?",
    answer:
      "As aulas têm 5-10 minutos. Os exercícios, 10-15 minutos. Menos tempo que você gasta rolando redes sociais. E você pode fazer no horário que quiser.",
  },
  {
    question: "Funciona mesmo para quem tem muita vergonha?",
    answer:
      "Funciona ESPECIALMENTE para quem tem vergonha. O método foi criado pensando nisso. Começamos devagar, sem pressão, celebrando cada pequeno progresso.",
  },
  {
    question: "Vou receber spam?",
    answer:
      "Não. Você receberá apenas os 5 emails do desafio e, se quiser continuar, ofertas do curso completo. Pode cancelar a qualquer momento.",
  },
  {
    question: "Como receberei as aulas?",
    answer:
      "Por email, uma por dia durante 5 dias. Acesso imediato após inscrição. Também terá acesso ao grupo de apoio no WhatsApp.",
  },
  {
    question: "E se eu perder um dia?",
    answer:
      "Sem problemas! As aulas ficam disponíveis. Você faz no seu ritmo. O importante é completar os 5 dias, mesmo que demore mais.",
  },
  {
    question: "Preciso saber ler partitura?",
    answer:
      "Não! Zero teoria musical. Apenas prática guiada. Você vai aprender ouvindo e repetindo.",
  },
  {
    question: "Funciona mesmo se eu nunca toquei nada na vida?",
    answer:
      "Funciona ESPECIALMENTE para quem nunca tocou. O Desafio foi desenhado do absoluto zero. Sem assumir nenhum conhecimento prévio. Se você consegue bater palma no ritmo, você já tem o que precisa.",
  },
  {
    question: "Como sei que não vou desistir no meio?",
    answer:
      "Porque cada dia foi construído para te dar uma vitória pequena e real. Não pedimos que você 'acredite no processo' — pedimos 10 minutos. E no final desses 10 minutos você vai ter feito algo concreto que vai querer repetir.",
  },
];

export const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-5 bg-[#0D1B2A]">
      <div className="container">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-center mb-4 tracking-wider">
          Perguntas Frequentes
        </h2>
        <p className="font-serif text-xl text-foreground/70 text-center mb-16 italic">
          Tire suas dúvidas antes de se inscrever
        </p>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-2xl border-l-4 border-l-secondary overflow-hidden"
              >
                <AccordionTrigger className="px-8 py-6 text-lg font-semibold text-left hover:bg-secondary/10 transition-colors [&[data-state=open]>svg]:text-secondary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-foreground/70 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
