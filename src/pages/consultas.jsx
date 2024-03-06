// SEO
import { Helmet } from "react-helmet";

// LAYOUT
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer";

// COMPONENTS
import { Hero } from "../components/banner";
import { ConsultTabs } from "../components/tabsConsultas";

// CONFIG
import { appTitle } from "../configs/configs";

export function Consultas() {
  return (
    <>
      <Helmet>
        <title>Consultas | {appTitle}</title>
      </Helmet>
      <Navbar />
      <Hero
        subtitle="CONSULTAS"
        message="¿Crees tener deudas pendientes? ¡Consultalas aquí!"
      />
      <ConsultTabs />
      <Footer />
    </>
  );
}
