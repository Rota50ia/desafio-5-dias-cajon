import { motion } from "framer-motion";

const SIM = [
  "Você toca cajón em casa, mas congela quando tem alguém olhando",
  "Você já recusou convite para tocar — por vergonha, não por falta de técnica",
  "Você ficou parado numa roda enquanto todo mundo entrava na música",
  "Você quer tocar em festas e encontros sem aquele nó no estômago antes de começar",
  "Você quer sentir prazer ao tocar — não aquela ansiedade que aparece quando alguém presta atenção",
];

const NAO = [
  "Você nunca tocou cajón na vida (para isso existe o Curso Rápido de Cajón)",
  "Você já toca em público e não sente nenhum bloqueio",
  "Você quer aulas técnicas de ritmos avançados ou teoria musical",
];

const DesafioParaQuem = () => (
  <section className="py-16 md:py-24 bg-muted">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
          Esse Desafio é Pra Você?
        </h2>
        <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
          Leia com atenção. Não adianta entrar se não for o momento certo.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* SIM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border border-primary/30 bg-primary/5 rounded-2xl p-8 card-glow"
        >
          <h3 className="font-heading text-lg font-bold text-primary mb-5 flex items-center gap-2">
            <span>✅</span> SIM, é para você se...
          </h3>
          <ul className="space-y-3">
            {SIM.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                <span className="text-accent shrink-0 mt-0.5">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* NÃO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="border border-red-500/25 bg-red-950/20 rounded-2xl p-8"
        >
          <h3 className="font-heading text-lg font-bold text-muted-foreground mb-5 flex items-center gap-2">
            <span>❌</span> NÃO é para você se...
          </h3>
          <ul className="space-y-3">
            {NAO.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                <span className="text-red-400 shrink-0 mt-0.5">&#10005;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default DesafioParaQuem;
