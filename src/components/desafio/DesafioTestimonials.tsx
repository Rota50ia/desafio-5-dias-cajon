import { motion } from "framer-motion";

const depoimentos = [
  {
    texto:
      "Eu já sabia algumas levadas, mas sempre travava quando alguém pedia para eu tocar. O exercício de tocar para uma pessoa primeiro tirou um peso enorme.",
    nome: "Carlos",
    idade: 42,
    cidade: "São Paulo",
  },
  {
    texto:
      "Percebi que o meu problema não era falta de ritmo. Era medo de errar. Quando treinei continuar tocando depois do erro, comecei a ficar mais solto.",
    nome: "Roberto",
    idade: 35,
    cidade: "Belo Horizonte",
  },
  {
    texto:
      "Gostei porque não prometeu milagre. Foi uma sequência pequena, prática e possível de fazer. No quinto dia eu toquei para minha família sem parar no meio.",
    nome: "Ana",
    idade: 28,
    cidade: "Rio de Janeiro",
  },
];

const DesafioTestimonials = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <span className="badge-pill text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded inline-block mb-4">
          Resultados Reais
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
          Quem Já Fez o Desafio
        </h2>
        <p className="text-muted-foreground mt-3 max-w-md mx-auto">
          Relatos de alunos que precisavam destravar antes de tocar em público.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {depoimentos.map((d, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card card-glow rounded p-6 border border-border flex flex-col gap-4"
          >
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, s) => (
                <span key={s} className="text-primary text-base">★</span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed italic flex-1">
              “{d.texto}”
            </p>
            <div className="border-t border-border pt-3">
              <p className="text-sm font-semibold text-foreground">
                {d.nome}, {d.idade} anos
              </p>
              <p className="text-xs text-muted-foreground/60">{d.cidade}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DesafioTestimonials;
