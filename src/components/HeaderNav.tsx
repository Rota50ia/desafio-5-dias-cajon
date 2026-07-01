import { Music } from "lucide-react";

const HeaderNav = () => (
  <header className="sticky top-0 z-50 bg-background/82 backdrop-blur-md border-b border-border">
    <div className="container flex items-center gap-3 h-16">
      <div className="w-8 h-8 rounded border border-primary/35 bg-primary/10 flex items-center justify-center shrink-0">
        <Music className="w-4 h-4 text-primary" />
      </div>
      <span className="font-heading font-bold text-sm tracking-[0.16em] uppercase">
        Desafio <span className="text-primary">5 Dias</span> Cajón
      </span>
    </div>
  </header>
);

export default HeaderNav;
