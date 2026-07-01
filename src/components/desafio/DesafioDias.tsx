import { motion } from "framer-motion";
import { Drum, Eye, Search, Users, Zap } from "lucide-react";

const dias = [
  {
    num: "01",
    Icon: Search,
    titulo: "Mapeie Sua Trava",
    desc: "Antes de resolver, você precisa nomear. Neste dia você vai identificar o gatilho exato do seu bloqueio — porque uma trava que você conhece já não tem mais o mesmo poder sobre você.",
    cor: "border-primary/30 bg-primary/5",
  },
  {
    num: "02",
    Icon: Drum,
    titulo: "Toque Errado de Propósito",
    desc: "O medo de errar paralisa mais do que qualquer falta de técnica. Hoje você vai errar intencionalmente — e descobrir que o mundo não acaba. Esse exercício quebra o ciclo.",
    cor: "border-accent/30 bg-accent/5",
  },
  {
    num: "03",
    Icon: Users,
    titulo: "Sua Primeira Plateia",
    desc: "Toque com uma pessoa de confiança ao lado. Só uma. Sem pressão, sem julgamento. O primeiro passo para sair do quarto e entrar na roda começa aqui.",
    cor: "border-primary/30 bg-primary/5",
  },
  {
    num: "04",
    Icon: Zap,
    titulo: "O Teste Real",
    desc: "Hora de errar na frente de alguém — de propósito, com intenção. Quem aprende a continuar tocando depois de errar em público nunca mais para por causa de medo.",
    cor: "border-accent/30 bg-accent/5",
  },
  {
    num: "05",
    Icon: Eye,
    titulo: "Você Está Pronto",
    desc: "Toque para alguém hoje. Um familiar, um amigo — tanto faz. O que importa é que você chegou aqui. E o que vem depois disso depende só de você ir mais longe.",
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
        <span className="badge-pill text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded inline-block mb-4">
          O Programa
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
          O Que Acontece em Cada Dia
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Uma aula em vídeo + um exercício prático por dia. 20 minutos são suficientes — sem teoria, sem enrolação.
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
            className={`card-glow rounded p-6 border ${dia.cor} flex gap-5 items-start`}
          >
            <div className="shrink-0 w-14 h-14 rounded bg-primary/10 border border-primary/20 flex items-center justify-center">
              <dia.Icon className="h-6 w-6 text-primary" aria-hidden="true" />
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
