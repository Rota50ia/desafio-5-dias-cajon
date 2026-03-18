import { motion } from "framer-motion";

const SIM = [
  "Você toca cajón em casa mas trava quando tem gente olhando",
  "Você já recusou convite para tocar por vergonha",
  "Você quer parar de ficar só \"esperando a hora certa\" para tocar em público",
  "Você quer tocar em festas, reuniões e encontros com confiança",
  "Você quer sentir prazer ao tocar — não ansiedade",
];

const NAO = [
  "Você nunca tocou cajón na vida (para isso existe o Curso Rápido de Cajón)",
  "Você já toca em público sem nenhum bloqueio",
  "Você quer aulas técnicas de ritmos avançados",
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
          Esse Desafio é Para Você?
        </h2>
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
