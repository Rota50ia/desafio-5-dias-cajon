import HeaderNav from "@/components/HeaderNav";
import DesafioHero from "@/components/desafio/DesafioHero";
import DesafioDias from "@/components/desafio/DesafioDias";
import DesafioParaQuem from "@/components/desafio/DesafioParaQuem";
import DesafioBeneficios from "@/components/desafio/DesafioBeneficios";
import DesafioCTA from "@/components/desafio/DesafioCTA";
import FooterSection from "@/components/FooterSection";

const Desafio = () => (
  <main>
    <HeaderNav />
    <DesafioHero />
    <DesafioDias />
    <DesafioParaQuem />
    <DesafioBeneficios />
    <DesafioCTA />
    <FooterSection />
  </main>
);

export default Desafio;
