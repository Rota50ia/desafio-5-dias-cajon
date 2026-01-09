import { Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-navy-deep py-16 px-5 text-center">
      <div className="container max-w-4xl mx-auto">
        <h3 className="font-display text-3xl text-primary mb-5">
          EDILSON MORAIS
        </h3>
        
        <p className="text-foreground/70 mb-8 max-w-xl mx-auto leading-relaxed">
          Transformando vidas através da música, um ritmo de cada vez.
        </p>

        <div className="flex justify-center mb-8">
          <a
            href="https://www.instagram.com/edilson.cajon/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full text-white hover:bg-primary hover:-translate-y-1 transition-all duration-300"
          >
            <Instagram className="w-6 h-6" />
            <span className="font-semibold">Instagram</span>
          </a>
        </div>

        <div className="flex justify-center gap-8 mb-8 flex-wrap">
          <a
            href="https://politica-de-privacidade.rota50ia.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-primary transition-colors"
          >
            Termos de Uso
          </a>
          <a
            href="https://politica-de-privacidade.rota50ia.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-primary transition-colors"
          >
            Política de Privacidade
          </a>
          <a
            href="mailto:edilsomdil@gmail.com"
            className="text-foreground/70 hover:text-primary transition-colors"
          >
            Contato
          </a>
        </div>

        <div className="border-t border-white/10 pt-8 text-sm text-foreground/50">
          <p>© 2025 Cajón Express - Todos os direitos reservados</p>
          <p className="mt-2">Desenvolvido por Edilson Morais</p>
          <p className="mt-2">
            Dúvidas? Escreva para:{" "}
            <a href="mailto:edilsomdil@gmail.com" className="text-primary hover:underline">
              edilsomdil@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
