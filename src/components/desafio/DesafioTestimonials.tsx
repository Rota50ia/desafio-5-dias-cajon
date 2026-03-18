import { motion } from "framer-motion";

const depoimentos = [
  {
    texto:
      "Tentei 2 anos sozinho. Em 7 dias aqui eu toquei mais que em 2 anos no YouTube. Eu tinha 47 vídeos salvos de 'como tocar xote'. Nenhum explicava a BASE antes. Terminei a Aula 7 e toquei xote completo pela primeira vez. Chorei.",
    nome: "Carlos",
    idade: 42,
    cidade: "São Paulo",
  },
  {
    texto:
      "Fui chamado pra tocar num casamento antes de terminar o curso. Cheguei na Aula 18 (baião) e um amigo me chamou. Eu falei 'cara, ainda não terminei o curso'. Ele falou 'mas você já toca melhor que muito percussionista que eu conheço'. Ganhei R$ 300.",
    nome: "Roberto",
    idade: 35,
    cidade: "Belo Horizonte",
  },
  {
    texto:
      "Eu sou professora. Quando vi a ordem das aulas, pensei: 'esse cara entende de pedagogia'. Cada aula desbloqueia a próxima. É viciante. Terminei em 22 dias.",
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
        <span className="badge-pill text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full inline-block mb-4">
          Resultados Reais
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
          Quem Já Fez o Desafio
        </h2>
        <p className="text-muted-foreground mt-3 max-w-md mx-auto">
          Pessoas que também achavam que "não tinham jeito" — e que hoje tocam.
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
            className="bg-card card-glow rounded-2xl p-6 border border-border flex flex-col gap-4"
          >
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, s) => (
                <span key={s} className="text-primary text-base">★</span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed italic flex-1">
              "{d.texto}"
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
