// SEO
import { Helmet } from "react-helmet";

// LAYOUT
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer";

// COMPONENTS
import { Hero } from "../components/banner";
import Pricing from "../components/pricing";

// CONFIG
import { appTitle } from "../configs/configs";

export function Servicios() {
  return (
    <>
      <Helmet>
        <title>Servicios | {appTitle}</title>
      </Helmet>
      <Navbar />
      <Hero
        subtitle="SERVICIOS"
        message="Consulta nuestros paquetes de internet aquí. "
      />
      <Pricing />
      <Footer />
    </>
  );
}
