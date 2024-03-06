// SEO
import { Helmet } from "react-helmet";

// LAYOUT
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer";

// COMPONENTS
import { Hero } from "../components/banner";
import { ContactForm } from "../components/contactForm";
import { GoogleMap } from "../components/maps";

// CONFIG
import { appTitle } from "../configs/configs";

export function Nosotros() {
  return (
    <>
      <Helmet>
        <title>Nosotros | {appTitle}</title>
      </Helmet>
      <Navbar />
      <Hero
        subtitle="NOSOTROS"
        message="Si tienes dudas, no dudes en consultar con nosotros."
      />
      <GoogleMap />
      <ContactForm />
      <Footer />
    </>
  );
}
