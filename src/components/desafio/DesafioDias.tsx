import { motion } from "framer-motion";

const dias = [
  {
    num: "01",
    emoji: "🎯",
    titulo: "Identifique Sua Trava",
    desc: "Entenda de onde vem o bloqueio. A vergonha de tocar tem um gatilho específico — e quando você o identifica, ele perde o poder sobre você.",
    cor: "border-primary/30 bg-primary/5",
  },
  {
    num: "02",
    emoji: "🥁",
    titulo: "Toque Sem Julgamento",
    desc: "Exercício prático de confiança individual. Você vai tocar errado de propósito — e descobrir que o mundo não acaba quando isso acontece.",
    cor: "border-accent/30 bg-accent/5",
  },
  {
    num: "03",
    emoji: "👥",
    titulo: "Quebre o Gelo",
    desc: "Hora de tocar com alguém ao lado pela primeira vez. Uma pessoa de confiança. Um passo pequeno que muda tudo.",
    cor: "border-primary/30 bg-primary/5",
  },
  {
    num: "04",
    emoji: "💪",
    titulo: "Erro em Público",
    desc: "Aprenda a lidar com o erro na frente dos outros. Quem não tem medo de errar, toca livre. Este exercício vai mudar sua relação com o cajón para sempre.",
    cor: "border-accent/30 bg-accent/5",
  },
  {
    num: "05",
    emoji: "🎉",
    titulo: "Apresentação Final",
    desc: "Toque para alguém. Pode ser um familiar, um amigo, qualquer pessoa. Você vai se surpreender com o quanto evoluiu em apenas 5 dias.",
    cor: "border-primary/40 bg-primary/8 ring-1 ring-primary/20",
  },
];

const DesafioDias = () => (
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
          O Programa
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
          Os 5 Dias do Desafio
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Cada dia tem uma aula em vídeo + exercício prático. 20 minutos por dia é o suficiente.
        </p>
      </motion.div>

      <div className="flex flex-col gap-4 max-w-3xl mx-auto">
        {dias.map((dia, i) => (
          <motion.div
            key={dia.num}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`card-glow rounded-2xl p-6 border ${dia.cor} flex gap-5 items-start`}
          >
            <div className="shrink-0 w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <span className="text-2xl">{dia.emoji}</span>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-xs font-bold text-primary tracking-widest uppercase">
                  Dia {dia.num}
                </span>
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-1">
                {dia.titulo}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{dia.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DesafioDias;
