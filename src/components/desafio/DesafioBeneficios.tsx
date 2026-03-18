import { motion } from "framer-motion";

const beneficios = [
  {
    emoji: "🎬",
    titulo: "5 Aulas em Vídeo",
    desc: "Uma aula por dia. Diretas, sem enrolação. Cada uma com um exercício prático para aplicar no mesmo dia.",
  },
  {
    emoji: "📋",
    titulo: "Exercícios Diários",
    desc: "20 minutos por dia são suficientes. Cada exercício foi desenhado para desafiar o bloqueio de vergonha progressivamente.",
  },
  {
    emoji: "💬",
    titulo: "Grupo VIP no WhatsApp",
    desc: "Acesso ao grupo exclusivo de alunos do desafio. Você não vai fazer isso sozinho.",
  },
  {
    emoji: "🏆",
    titulo: "Metodologia Testada",
    desc: "O mesmo método que transformou 217 alunos. Adaptado para resolver especificamente o bloqueio de tocar em público.",
  },
];

const DesafioBeneficios = () => (
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
          Incluso no Desafio
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
          O Que Você Recebe
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {beneficios.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card card-glow rounded-2xl p-6 border border-border"
          >
            <div className="text-3xl mb-3">{b.emoji}</div>
            <h3 className="font-heading font-bold text-foreground mb-2">{b.titulo}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DesafioBeneficios;
