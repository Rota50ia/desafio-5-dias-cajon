import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock, CheckCircle, Zap } from "lucide-react";

export const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [counter, setCounter] = useState(97);
  const [timer, setTimer] = useState({ hours: 47, minutes: 32, seconds: 15 });

  // Countdown timer
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

  // Random counter decrease
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
    // Handle form submission
    console.log({ name, email });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-white rounded-3xl p-8 md:p-10 shadow-card relative"
    >
      {/* Decorative music note */}
      <span className="absolute -top-8 -right-8 text-7xl opacity-10 rotate-12">🎵</span>

      <h2 className="font-display text-3xl text-navy-deep text-center mb-2">
        Garanta Sua Vaga Grátis
      </h2>
      <p className="text-center text-gray-600 mb-6 text-sm">
        Transforme sua relação com o cajón em apenas 5 dias
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-2 text-navy-deep font-semibold text-sm">
            Seu nome
          </label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite seu nome"
            className="w-full px-5 py-4 bg-gray-100 border-2 border-gray-100 rounded-xl text-base text-navy-deep placeholder:text-gray-500 focus:border-secondary focus:bg-white transition-all duration-300"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-navy-deep font-semibold text-sm">
            Seu melhor e-mail
          </label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
            className="w-full px-5 py-4 bg-gray-100 border-2 border-gray-100 rounded-xl text-base text-navy-deep placeholder:text-gray-500 focus:border-secondary focus:bg-white transition-all duration-300"
            required
          />
        </div>

        <Button
          type="submit"
          variant="cta"
          size="xl"
          className="w-full py-6 rounded-xl"
        >
          QUERO PARTICIPAR GRÁTIS
        </Button>

        <div className="flex items-center justify-center gap-4 text-xs text-gray-600 flex-wrap">
          <span className="flex items-center gap-1">
            <Lock className="w-3 h-3" /> 100% seguro
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle className="w-3 h-3" /> Sem spam
          </span>
          <span className="flex items-center gap-1">
            <Zap className="w-3 h-3" /> Acesso imediato
          </span>
        </div>
      </form>

      {/* Urgency box */}
      <motion.div
        className="gradient-urgency text-white p-4 rounded-xl mt-5 text-center"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <strong className="text-lg block mb-1">
          ⚠️ Vagas restantes: <span className="font-display text-2xl text-primary">{counter}</span> de 100
        </strong>
        <div>
          ⏰ Oferta expira em:{" "}
          <span className="font-display text-2xl text-primary">
            {formatTime(timer.hours)}:{formatTime(timer.minutes)}:{formatTime(timer.seconds)}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};
