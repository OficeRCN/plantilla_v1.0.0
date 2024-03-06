import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";

import { tiers, planesRadio, planesFibra } from "../configs/configs";

const defaultTheme = createTheme();

export default function Pricing() {
  return (
    <>
      {/* Hero unit */}
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        >
          Precios competitivos en el mercado ecuatoriano. En Megaconnection te
          ofrecemos una amplia variedad de planes para que puedas elegir de
          acuerdo a tu presupuesto y necesidades.
        </Typography>
      </Container>
      {/* RADIO ENLACE */}
      <Container maxWidth="lg" component="main">
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
        >
          PLANES DE RADIO ENLACE
        </Typography>
        <Typography
          variant="h5"
          align="left"
          color="text.secondary"
          component="p"
          maxWidth="md"
        >
          "Confía en nuestra experiencia y en la calidad de nuestros servicios
          de Internet. Estamos comprometidos en brindarte una conexión confiable
          y de alto rendimiento que te permitirá alcanzar tus metas en línea."
        </Typography>
        <Grid container spacing={5} alignItems="flex-end">
          {planesRadio.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Enterprise" ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  action={tier.title === "Pro" ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: "center",
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2,
                    }}
                  >
                    <Typography
                      component="h2"
                      variant="h3"
                      color="text.primary"
                    >
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    href={`https://api.whatsapp.com/send?phone=59399 2419399&text=Hola.%20Saludos,%20permitame%20conocer%20m%C3%A1s%20sobre%20el%20servicio%20${tier.title}`}
                    target="_blank"
                    fullWidth
                    variant={tier.buttonVariant}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box height="60px" />
      {/* FIBRA */}
      <Container maxWidth="lg" component="main">
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
        >
          PLANES DE INTERNET FIBRA ÓPTICA
        </Typography>
        <Typography
          variant="h5"
          align="left"
          color="text.secondary"
          component="p"
          maxWidth="md"
        >
          "Confía en nuestra experiencia y en la calidad de nuestros servicios
          de Internet. Estamos comprometidos en brindarte una conexión confiable
          y de alto rendimiento que te permitirá alcanzar tus metas en línea."
        </Typography>
        <Grid container spacing={5} alignItems="flex-end">
          {planesFibra.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Enterprise" ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  action={tier.title === "Pro" ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: "center",
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2,
                    }}
                  >
                    <Typography
                      component="h2"
                      variant="h3"
                      color="text.primary"
                    >
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    href={`https://api.whatsapp.com/send?phone=59399 2419399&text=Hola.%20Saludos,%20permitame%20conocer%20m%C3%A1s%20sobre%20el%20servicio%20${tier.title}`}
                    target="_blank"
                    fullWidth
                    variant={tier.buttonVariant}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
