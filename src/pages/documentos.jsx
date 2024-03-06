import React from "react";

// SEO
import { Helmet } from "react-helmet";

// LAYOUT
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer";

// MATERIAL UI
import Box from "@mui/material/Box";

// CONFIGS
import { pdfRoutes } from "../configs/configs";

// COMPONENTS
import { ShowPdf } from "../components/previewPdf";
import { Hero } from "../components/banner";

// CONFIG
import { appTitle } from "../configs/configs";

export function Documentos() {
  return (
    <>
      <Helmet>
        <title>Documentos | {appTitle}</title>
      </Helmet>
      <Navbar />
      <Hero
        subtitle="DOCUMENTOS"
        message="Conforme a la ley, presentamos la respectiva documentación."
      />
      <Box height="100px" />
      <ShowPdf pdfRoutes={pdfRoutes} />
      <Footer />
    </>
  );
}
