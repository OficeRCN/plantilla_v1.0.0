// MATERIAL UI
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

// ICONS
import GetAppIcon from "@mui/icons-material/GetApp";

export function ShowPdf({ pdfRoutes }) {
  return (
    <Grid margin="auto" maxWidth="lg" container spacing={2}>
      {pdfRoutes.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Stack margin="auto" spacing={2} maxWidth="90%">
            <object
              key={index}
              data={item}
              type="application/pdf"
              width="auto"
              height="auto"
            />
            <Button startIcon={<GetAppIcon />} href={item} download={item}>
              Clic para descargar documento
            </Button>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
}
