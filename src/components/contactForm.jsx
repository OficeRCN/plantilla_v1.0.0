import React from "react";

// COMPLEMENTS MATERIAL UI
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// ALERTAS
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

// HOOKS
import { useState, useEffect } from "react";

// FORM
import TextField from "@mui/material/TextField";
import Typewriter from "typewriter-effect";
import { Formik } from "formik";

// HELPER
import { sendEmail } from "../api/SendEmail";

export const ContactForm = () => {
  const [alertSeverity, setAlertSeverity] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const [open, setOpen] = useState(false);

  async function handleSendEmail(values, { resetForm }) {
    try {
      await sendEmail(values);
      handleOpenAlert("success", "Email enviado con éxito");
      resetForm();
    } catch (error) {
      handleOpenAlert("error", "Hubo un error al enviar el email");
    }
  }

  const handleOpenAlert = (alertSeverity, alertMessage) => {
    setAlertSeverity(alertSeverity);
    setAlertMessage(alertMessage);
    setOpen(true);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Grid container height="60vh" mb={8} mt={8}>
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
                  d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                />
              </svg>
            </Box>
            <Typography align="center" variant="h3">
              ¿Tienes alguna duda?
            </Typography>
            <Typography align="center" variant="h6">
              ¡Contáctanos! Solo escribe lo que quieras saber en el formulario
              al lado.
            </Typography>
          </Stack>
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <Formik
            initialValues={{ email: "", mensaje: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = (
                  <Typography color="red" variant="subtitle">
                    *Correo requerido*
                  </Typography>
                );
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = (
                  <Typography color="red" variant="subtitle">
                    *Formato de correo inválido*
                  </Typography>
                );
              }
              if (!values.mensaje) {
                errors.mensaje = (
                  <Typography color="red" variant="subtitle">
                    *Mensaje requerido*
                  </Typography>
                );
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              handleSendEmail(values, { resetForm });
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit} style={{ height: "100%" }}>
                <Stack
                  direction="column"
                  spacing={2}
                  justifyContent="center"
                  margin="auto"
                  height="100%"
                  width="60%"
                >
                  <Typography variant="h5" align="center">
                    <Typewriter
                      options={{
                        autoStart: true,
                        loop: true,
                      }}
                      onInit={(typewriter) => {
                        typewriter
                          .typeString("Dinos que piensas ⚡")
                          .pauseFor(3000)
                          .deleteAll()
                          .start();
                      }}
                    />
                  </Typography>
                  <TextField
                    type="email"
                    name="email"
                    placeholder="my_email@gmail.com"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    fullWidth
                  />
                  {errors.email && touched.email && errors.email}
                  <TextField
                    type="text"
                    name="mensaje"
                    placeholder="Escribe tu mensaje..."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.mensaje}
                    multiline
                    maxRows={5}
                    fullWidth
                  />
                  {errors.mensaje && touched.mensaje && errors.mensaje}
                  <Button
                    variant="outlined"
                    type="submit"
                    // disabled={isSubmitting}
                  >
                    Submit
                  </Button>
                </Stack>
              </form>
            )}
          </Formik>
        </Grid>
      </Grid>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleCloseAlert}>
        <Alert
          elevation={6}
          variant="filled"
          onClose={handleCloseAlert}
          severity={alertSeverity}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </>
  );
};
