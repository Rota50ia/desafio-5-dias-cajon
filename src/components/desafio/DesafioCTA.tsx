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
          Última chance
        </span>

        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-tight">
          Em 5 Dias Você Vai Tocar{" "}
          <span className="text-primary">Com Confiança</span>
          {" "}— ou Devolvemos Seu Dinheiro
        </h2>

        <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
          Garantia de 7 dias. Se você completar os 5 dias e não sentir diferença, devolvemos 100% do valor. Sem perguntas.
        </p>

        <div className="bg-card card-glow rounded-2xl p-8 mb-8 border border-border">
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">Desafio 5 Dias</p>
          <p className="font-heading text-5xl font-bold text-foreground mb-1 stat-number">
            Acesso <span className="text-primary">Imediato</span>
          </p>
          <p className="text-muted-foreground text-sm mb-6">Comece hoje, termine em 5 dias.</p>
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full bg-primary text-primary-foreground font-heading font-bold text-lg px-10 py-5 rounded-lg shadow-cta hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-cta-hover transition-all uppercase animate-pulse-glow"
          >
            QUERO PERDER A VERGONHA AGORA
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="text-accent">&#10003;</span> Acesso Imediato
          </span>
          <span className="flex items-center gap-2">
            <span className="text-accent">&#10003;</span> Garantia 7 Dias
          </span>
          <span className="flex items-center gap-2">
            <span className="text-accent">&#10003;</span> Pagamento Seguro
          </span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default DesafioCTA;
