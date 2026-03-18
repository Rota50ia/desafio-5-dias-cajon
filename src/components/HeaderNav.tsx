import { Music } from "lucide-react";

const HeaderNav = () => (
  <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
    <div className="container flex items-center gap-3 h-14">
      <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
        <Music className="w-4 h-4 text-primary" />
      </div>
      <span className="font-heading font-bold text-sm tracking-[0.15em] uppercase">
        Realize <span className="text-muted-foreground">Seu Sonho</span>
      </span>
    </div>
  </header>
);

export default HeaderNav;
