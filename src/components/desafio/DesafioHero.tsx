import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const CHECKOUT_URL = "https://chk.eduzz.com/7WXQROGD9A";

const DesafioHero = () => (
  <section className="noise-overlay relative min-h-[90vh] flex items-center justify-center bg-hero-gradient overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(18_100%_60%/0.08)_0%,transparent_60%)]" />
    <div className="hero-glow -top-40 -left-40" />
    <div className="hero-glow -bottom-40 -right-40" />
    <motion.div
      className="relative z-10 container text-center py-16 md:py-24"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
    >
      <motion.div
        variants={fadeUp}
        className="inline-flex items-center gap-2 badge-pill text-primary px-5 py-2 rounded-full text-sm font-semibold mb-6"
      >
        <span>🥁</span> Desafio Gratuito — 5 Dias para Tocar Livre
      </motion.div>

      <motion.h1
        variants={fadeUp}
        className="font-heading text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-6 max-w-4xl mx-auto text-foreground tracking-tight text-balance"
      >
        Você Sabe Tocar.{" "}
        <span className="text-primary">Mas Quando Alguém Olha, Você Congela.</span>
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="text-xl sm:text-2xl mb-4 max-w-2xl mx-auto text-muted-foreground leading-relaxed"
      >
        O problema não é técnica. É o bloqueio que aparece quando tem gente
        olhando. Em 5 dias você vai dissolver esse bloqueio — e tocar com a
        liberdade que sempre deveria ter sido sua.
      </motion.p>

      <motion.p
        variants={fadeUp}
        className="text-sm mb-10 max-w-lg mx-auto text-muted-foreground/60 italic"
      >
        "Eu sabia os ritmos. Mas na hora que alguém prestava atenção, eu travava.
        Esse desafio mudou isso pra mim."
      </motion.p>

      <motion.div variants={fadeUp} className="divider-glow max-w-xl mx-auto mb-10" />

      <motion.a
        variants={fadeUp}
        href={CHECKOUT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-primary text-primary-foreground font-heading font-bold text-lg px-10 py-5 rounded-lg shadow-cta hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-cta-hover transition-all uppercase animate-pulse-glow"
      >
        DESAFIO GRATUITO — GARANTIR MINHA VAGA
      </motion.a>

      <motion.p variants={fadeUp} className="text-xs text-muted-foreground/50 mt-3 mb-6">
        100% gratuito · Acesso imediato · Sem cartão de crédito
      </motion.p>

      <motion.div
        variants={fadeUp}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground"
      >
        {[
          { icon: "🎬", label: "5 Aulas em Vídeo" },
          { icon: "⚡", label: "Acesso Imediato" },
          { icon: "💬", label: "Grupo VIP no WhatsApp" },
        ].map((b) => (
          <span
            key={b.label}
            className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10"
          >
            <span>{b.icon}</span> {b.label}
          </span>
        ))}
      </motion.div>
    </motion.div>
  </section>
);

export default DesafioHero;
