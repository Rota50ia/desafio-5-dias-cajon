const FooterSection = () => (
  <footer id="termos" className="bg-card text-foreground py-12 text-center border-t border-border">
    <div className="divider-glow mb-8" />
    <div className="container max-w-3xl">
      <h3 className="font-heading text-3xl font-bold mb-3 text-primary">Edilson Morais</h3>
      <p className="text-base text-muted-foreground mb-4">
        Professor de cajón e percussão. Desafio gratuito para alunos que já tocam,
        mas querem ganhar confiança para tocar na frente de outras pessoas.
      </p>
      <p className="mb-8">
        &#128231;{" "}
        <a href="mailto:edilsomdil@gmail.com" className="underline hover:text-primary transition-colors">
          edilsomdil@gmail.com
        </a>
      </p>
      <div className="bg-background/60 border border-border rounded p-5 text-left text-sm text-muted-foreground mb-6">
        <h4 className="font-heading text-foreground font-semibold mb-2">Termos de uso do desafio</h4>
        <p>
          O Desafio 5 Dias de Cajón é um conteúdo educacional gratuito. A inscrição dá acesso às aulas,
          exercícios e comunicações do desafio. Os resultados dependem da prática individual, do nível atual
          do aluno e da participação nas atividades propostas.
        </p>
      </div>
      <div className="text-sm text-muted-foreground mb-4 space-x-3">
        <a href="#termos" className="hover:text-primary transition-colors">Termos de Uso</a>
        <span>|</span>
        <a href="https://politica-de-privacidade.rota50ia.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Política de Privacidade</a>
        <span>|</span>
        <a href="mailto:edilsomdil@gmail.com" className="hover:text-primary transition-colors">Contato</a>
      </div>
      <p className="text-xs text-muted-foreground pt-4 border-t border-border">
        Todos os direitos reservados – Edilson Morais 2026
      </p>
    </div>
  </footer>
);

export default FooterSection;
