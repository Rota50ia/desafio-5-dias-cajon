import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const CHECKOUT_URL = "https://chk.eduzz.com/7WXQROGD9A";

const DesafioHero = () => (
  <section className="noise-overlay relative min-h-[92vh] flex items-center justify-center bg-hero-gradient overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(0_0%_0%/0.88)_0%,hsl(0_0%_0%/0.58)_48%,hsl(0_0%_0%/0.24)_100%)]" />
    <div className="absolute right-0 top-0 hidden h-full w-[48%] bg-[radial-gradient(ellipse_at_center,hsl(0_0%_100%/0.13)_0%,transparent_55%)] opacity-70 lg:block" />
    <div className="hero-glow -top-40 -left-40" />
    <div className="hero-glow -bottom-40 -right-40" />
    <motion.div
      className="relative z-10 container py-16 md:py-24"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
    >
      <motion.div
        className="grid max-w-6xl items-center gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,0.8fr)]"
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <motion.div variants={fadeUp} className="max-w-3xl">
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 badge-pill text-foreground px-5 py-2 text-sm font-semibold mb-7"
          >
            <span className="text-primary">&#10003;</span> Desafio gratuito de cajón para destravar em público
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-heading text-4xl sm:text-5xl lg:text-7xl font-medium leading-[0.98] mb-7 text-foreground tracking-normal text-balance"
          >
            Desafio de Cajón:{" "}
            <span className="text-primary">Perca a Vergonha de Tocar em 5 Dias</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-2xl mb-6 text-muted-foreground leading-relaxed"
          >
            Para quem já toca cajón em casa, mas congela quando alguém presta atenção.
            Em 5 dias, você pratica confiança, erro em público e presença para tocar com mais liberdade.
          </motion.p>

          <motion.a
            variants={fadeUp}
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block cta-lime font-heading font-bold text-base sm:text-lg px-8 sm:px-10 py-5 rounded hover:-translate-y-0.5 transition-all uppercase tracking-[0.08em]"
          >
            ENTRAR GRATUITAMENTE NO DESAFIO
          </motion.a>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-3 mt-6 text-sm text-muted-foreground"
          >
            {["5 aulas práticas", "Acesso imediato", "Sem cartão de crédito"].map((label) => (
              <span key={label} className="flex items-center gap-2 bg-white/[0.03] px-4 py-2 border border-white/10">
                <span className="text-accent">&#10003;</span> {label}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp} className="relative border border-white/10 bg-card/80 overflow-hidden">
          <img
            src="/edilson-cajon.jpeg"
            alt="Edilson Morais tocando cajón"
            className="aspect-[4/5] w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,hsl(0_0%_0%/0.72)_100%)]" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="font-heading text-xl font-semibold text-foreground">Edilson Morais</p>
            <p className="text-sm text-muted-foreground">Professor de cajón e percussão</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default DesafioHero;
