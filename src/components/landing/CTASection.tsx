import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [counter, setCounter] = useState(97);
  const [timer, setTimer] = useState({ hours: 47, minutes: 32, seconds: 15 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          return { hours: 0, minutes: 0, seconds: 0 };
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7 && counter > 85) {
        setCounter((prev) => prev - 1);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [counter]);

  const formatTime = (num: number) => String(num).padStart(2, "0");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email });
  };

  return (
    <section className="py-24 px-5 gradient-cta text-center">
      <div className="container">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4 tracking-wider text-white">
          Última Chance de Participar Grátis
        </h2>
        <p className="font-serif text-xl text-white/90 mb-8 italic max-w-2xl mx-auto">
          Em breve esse desafio será pago. Garanta sua vaga agora!
        </p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto bg-white rounded-3xl p-8 md:p-10 shadow-card"
        >
          {/* Urgency banner */}
          <div className="bg-destructive text-white p-6 rounded-2xl mb-8 text-center">
            <h3 className="font-display text-2xl md:text-3xl tracking-wide mb-4">
              ⚠️ VAGAS ACABANDO
            </h3>
            <div className="font-display text-4xl md:text-5xl text-primary tracking-wider mb-2">
              {formatTime(timer.hours)}:{formatTime(timer.minutes)}:{formatTime(timer.seconds)}
            </div>
            <p className="text-sm opacity-90">
              Restam apenas <strong>{counter}</strong> vagas gratuitas
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome"
              className="w-full px-5 py-4 bg-gray-100 border-2 border-gray-100 rounded-xl text-base text-navy-deep placeholder:text-gray-500 focus:border-secondary focus:bg-white transition-all"
              required
            />
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor e-mail"
              className="w-full px-5 py-4 bg-gray-100 border-2 border-gray-100 rounded-xl text-base text-navy-deep placeholder:text-gray-500 focus:border-secondary focus:bg-white transition-all"
              required
            />
            <Button
              type="submit"
              variant="cta"
              size="xl"
              className="w-full py-6 rounded-xl"
            >
              GARANTIR MINHA VAGA GRÁTIS
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
