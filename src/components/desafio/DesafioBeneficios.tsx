import { motion } from "framer-motion";
import { Clock, MessageCircle, PlayCircle, Unlock } from "lucide-react";

const beneficios = [
  {
    Icon: PlayCircle,
    titulo: "5 Aulas em Vídeo",
    desc: "Uma aula por dia, direto ao ponto. Cada vídeo tem no máximo 15 minutos — mais tempo do que isso não é necessário.",
  },
  {
    Icon: Clock,
    titulo: "Exercício Prático Diário",
    desc: "Cada dia tem um exercício desenhado para empurrar o bloqueio um passo para frente. 20 minutos de prática valem mais do que horas de teoria.",
  },
  {
    Icon: MessageCircle,
    titulo: "Grupo VIP no WhatsApp",
    desc: "Você não vai fazer isso sozinho. O grupo é o lugar onde outros alunos mostram progresso — e onde o professor responde dúvidas.",
  },
  {
    Icon: Unlock,
    titulo: "Acesso Imediato",
    desc: "Assim que você se inscrever, recebe tudo. Sem esperar. Você pode começar hoje, agora, antes de fechar essa página.",
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
        <span className="badge-pill text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded inline-block mb-4">
          Incluso no Desafio
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
          Tudo Que Você Recebe — Gratuitamente
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
            className="bg-card card-glow rounded p-6 border border-border"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded border border-primary/20 bg-primary/10">
              <b.Icon className="h-5 w-5 text-primary" aria-hidden="true" />
            </div>
            <h3 className="font-heading font-bold text-foreground mb-2">{b.titulo}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DesafioBeneficios;
