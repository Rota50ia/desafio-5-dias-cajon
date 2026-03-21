import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const CTASection = () => {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const [counter, setCounter] = useState(97);
  const [timer, setTimer] = useState({ hours: 47, minutes: 32, seconds: 15 });

  useEffect(() => {
    // Load the external form script
    const script = document.createElement("script");
    script.src = "//web.webformscr.com/apps/fc3/build/loader.js";
    script.async = true;
    script.setAttribute("sp-form-id", "c77e07171229a43d1d0cedd71c5931641bde0bde99b0e14e42b8cea133272ee4");
    
    if (formContainerRef.current) {
      formContainerRef.current.appendChild(script);
    }

    return () => {
      if (formContainerRef.current && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

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

  return (
    <section className="py-24 px-5 gradient-cta text-center">
      <div className="container">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4 tracking-wider text-white">
          Cinco Dias Que Mudam Sua Relação com a Música
        </h2>
        <p className="font-serif text-xl text-white/90 mb-8 italic max-w-2xl mx-auto">
          Você já esperou tempo demais. O cajón está esperando por você.
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

          {/* External form container */}
          <div ref={formContainerRef} className="min-h-[200px]" />
        </motion.div>
      </div>
    </section>
  );
};
