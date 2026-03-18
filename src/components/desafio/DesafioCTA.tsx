import { motion } from "framer-motion";

const CHECKOUT_URL = "https://chk.eduzz.com/7WXQROGD9A";

const DesafioCTA = () => (
  <section className="py-16 md:py-24 bg-cta-gradient">
    <div className="container max-w-2xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="badge-pill text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full inline-block mb-6">
          Comece Hoje
        </span>

        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-tight">
          Cada Dia Que Você Adia,{" "}
          <span className="text-primary">É Mais Uma Roda que Você Assiste de Fora.</span>
        </h2>

        <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
          O desafio é gratuito, começa assim que você se inscrever, e dura 5 dias.
          Em 5 dias você já vai sentir a diferença — ou não perde nada por ter tentado.
        </p>

        <div className="bg-card card-glow rounded-2xl p-8 mb-8 border border-border">
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">
            Desafio 5 Dias — 100% Gratuito
          </p>
          <p className="font-heading text-5xl font-bold text-foreground mb-1 stat-number">
            Acesso <span className="text-primary">Imediato</span>
          </p>
          <p className="text-muted-foreground text-sm mb-6">
            Inscreva-se agora. Comece hoje. Termine em 5 dias.
          </p>
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full bg-primary text-primary-foreground font-heading font-bold text-lg px-10 py-5 rounded-lg shadow-cta hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-cta-hover transition-all uppercase animate-pulse-glow"
          >
            QUERO TOCAR LIVRE — ENTRAR NO DESAFIO AGORA
          </a>
          <p className="text-xs text-muted-foreground/50 mt-3">
            100% gratuito · Sem cartão de crédito · Acesso imediato
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="text-accent">&#10003;</span> Acesso Imediato
          </span>
          <span className="flex items-center gap-2">
            <span className="text-accent">&#10003;</span> 100% Gratuito
          </span>
          <span className="flex items-center gap-2">
            <span className="text-accent">&#10003;</span> Grupo VIP Incluso
          </span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default DesafioCTA;
