import { motion } from "framer-motion";

const CHECKOUT_URL = "https://chk.eduzz.com/7WXQROGD9A";

const DesafioProfessor = () => (
  <section className="py-16 md:py-24 bg-muted">
    <div className="container max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <span className="badge-pill text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded inline-block mb-4">
          Quem Vai Te Guiar
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
          Seu Professor Nesse Desafio
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-card card-glow rounded p-8 border border-border flex flex-col md:flex-row gap-8 items-center md:items-start"
      >
        {/* Foto do professor */}
        <div className="shrink-0">
          <img
            src="/edilson-cajon.jpeg"
            alt="Edilson Morais tocando cajón"
            className="w-48 h-56 md:w-52 md:h-60 object-cover rounded border border-primary/20"
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h3 className="font-heading text-2xl font-bold text-foreground mb-1">
            Edilson Morais
          </h3>
          <p className="text-primary text-sm font-semibold mb-5">
            Professor de Cajón e Percussão
          </p>

          <div className="flex gap-4 mb-6 justify-center md:justify-start">
            <div className="bg-primary/10 border border-primary/20 rounded px-5 py-3 text-center">
              <p className="font-heading text-2xl font-bold text-primary">40</p>
              <p className="text-xs text-muted-foreground">anos tocando</p>
            </div>
            <div className="bg-primary/10 border border-primary/20 rounded px-5 py-3 text-center">
              <p className="font-heading text-2xl font-bold text-primary">217</p>
              <p className="text-xs text-muted-foreground">alunos transformados</p>
            </div>
          </div>

          <p className="text-muted-foreground text-base leading-relaxed mb-2">
            Edilson conduz o desafio com exercícios simples, diretos e feitos para quem já sabe o básico,
            mas ainda trava quando precisa tocar para alguém.
          </p>
          <p className="text-foreground text-lg font-semibold leading-relaxed mb-8">
            A proposta é prática: menos teoria, mais repetição guiada e exposição gradual.
          </p>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block cta-lime font-heading font-semibold text-sm px-6 py-3 rounded transition-all uppercase tracking-[0.08em]"
          >
            Quero Entrar no Desafio
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default DesafioProfessor;
