import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    header: "De Travado a Confiante",
    text: "Eu travava completamente quando alguém pedia pra tocar. Depois do desafio, toquei na frente da família inteira no Natal. Não perfeito, mas FELIZ.",
    author: "Roberto, 45 anos - Contador",
  },
  {
    header: "Finalmente Desbloqueei",
    text: "Achava que precisava de anos de estudo. Em 5 dias já estava acompanhando músicas simples. O método é genial porque remove a pressão.",
    author: "Camila, 32 anos - Professora",
  },
  {
    header: "Do Medo ao Prazer",
    text: "O cajón ficou 2 anos parado no canto. Tinha vergonha até de praticar sozinho. Agora toco todo dia e meus vizinhos já pedem bis!",
    author: "Fernando, 58 anos - Aposentado",
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-5 bg-navy-deep">
      <div className="container">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-center mb-4 tracking-wider">
          O Que Dizem Quem Já Fez
        </h2>
        <p className="font-serif text-xl text-foreground/70 text-center mb-16 italic">
          Histórias reais de transformação
        </p>

        <div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card p-8 rounded-2xl hover:-translate-y-2 hover:bg-white/15 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-300"
            >
              <h3 className="font-display text-xl text-primary mb-4 tracking-wide">
                {testimonial.header}
              </h3>
              <p className="text-foreground/70 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <p className="font-semibold text-accent">{testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
