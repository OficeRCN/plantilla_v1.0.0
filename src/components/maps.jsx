import React from "react";

// MATERIAL UI
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

export function GoogleMap() {
  return (
    <>
      <Grid container height="60vh" mb={8} mt={8} spacing={2}>
        <Grid item lg={6} md={6} xs={12}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.92394030171636!2d-78.58234266139604!3d-3.403027526062029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cc610b1d86d003%3A0xddd91cc64a6cf4a6!2sMegaConnection!5e0!3m2!1ses-419!2sec!4v1707758314624!5m2!1ses-419!2sec"
            style={{ border: 0 }}
            allowFullScreen=""
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="mapa"
          ></iframe>
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
                  d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64"
                />
              </svg>
            </Box>
            <Typography align="center" variant="h3">
              ¿Dónde encontrarnos?
            </Typography>
            <Typography align="center" variant="h6">
              Si quieres saber dónde estamos, solo navega en el mapa.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
