// LAYOUT
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer";

// SEO
import { Helmet } from "react-helmet";

// MATERIAL UI
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

// ICONS
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

// TABLE
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// LISTA
import { List, ListItem, ListItemText } from "@mui/material";

// COMPLEMENTS
import { Hero } from "../components/banner";

// CONFIG
import { appTitle } from "../configs/configs";

export function Home() {
  return (
    <>
      <Helmet>
        <title>Inicio | {appTitle}</title>
      </Helmet>
      <Navbar />
      <Hero
        subtitle="¡BIENVENIDO!"
        message={`No hay mejor opción que ${appTitle}`}
      />
      <Grid container height="40vh" mb={8} mt={8} spacing={2}>
        <Grid item lg={6} md={6} xs={12} style={{ display: "flex" }}>
          <Stack width="70%" margin="auto">
            <img
              src="/img/home_illustration.svg"
              alt="there is nothing to show..."
            />
          </Stack>
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <Stack
            direction="column"
            width="100%"
            height="100%"
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <Box width="3em" height="3em">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                />
              </svg>
            </Box>
            <List>
              <ListItem>
                <Typography variant="h4">¿POR QUÉ ELEGIRNOS?</Typography>
              </ListItem>
              <ListItem>
                <Typography variant="h5">
                  Somos una empresa profesional de telecomunicaciones
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Conéctate con el mundo y navega al siguiente nivel con
                  nuestros servicios de Internet de alta velocidad y confiables.
                  En MEGACONNECTION entendemos que tu presencia en línea es
                  crucial para estar siempre informado.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ArrowRightIcon />{" "}
                <ListItemText primary="Velocidades de descarga y carga ultrarrápidas." />
              </ListItem>
              <ListItem>
                <ArrowRightIcon />{" "}
                <ListItemText primary="Conexión estable y de alta calidad." />
              </ListItem>
              <ListItem>
                <ArrowRightIcon />{" "}
                <ListItemText primary="Servicio de atención al cliente disponible las 24 horas del día, los 7 días de la semana." />
              </ListItem>
              <ListItem>
                <ArrowRightIcon />{" "}
                <ListItemText primary="Ancho de banda flexible y escalable para adaptarse a tus necesidades cambiantes." />
              </ListItem>
              <ListItem>
                <ArrowRightIcon />{" "}
                <ListItemText primary="Seguridad avanzada para proteger tu información confidencial." />
              </ListItem>
            </List>
            <Button
              href="https://api.whatsapp.com/send?phone=593968586424&text=Hola.%20Saludos,%20permitame%20conocer%20m%C3%A1s%20de%20sus%20servicios"
              target="_blank"
              variant="contained"
            >
              Más informacion
            </Button>
          </Stack>
        </Grid>
        <Footer />
      </Grid>
    </>
  );
}
