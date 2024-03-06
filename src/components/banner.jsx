import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Typewriter from "typewriter-effect";

import "../assets/css/hero.css";

import { appTitle } from "../configs/configs";

export function Hero(props) {
  return (
    <>
      <Box className="container">
        <Grid container width="100%" height="100%">
          <Stack
            width="100%"
            height="100%"
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            <Typography
              variant="h1"
              sx={{ fontSize: { xs: "2.5rem", sm: "4rem", md: "5rem" } }}
            >
              {appTitle}
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" } }}
            >
              {props.subtitle}
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" } }}
            >
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(props.message)
                    .pauseFor(3000)
                    .deleteAll()
                    .start();
                }}
              />
            </Typography>
          </Stack>
        </Grid>
      </Box>
    </>
  );
}
