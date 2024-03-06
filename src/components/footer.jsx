// Material UI
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";

// Configs
import { footers } from "../configs/configs";

export function Footer() {
  return (
    <>
      <Container
        maxWidth="md"
        component="main"
        sx={{
          borderTop: (theme) => `transparent ${theme.palette.divider}`,
          mt: 1,
          py: [5, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly" mt={4}>
          {footers.map((footer, index) => (
            <div key={index}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item, subIndex) => (
                  <li key={subIndex}>
                    {subIndex ===
                    footer.path.findIndex((path) => path.includes("@")) ? (
                      <Link
                        href={`mailto:${footer.path[subIndex]}?subject=Consulta`}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="subtitle1"
                        color="text.secondary"
                      >
                        {item}
                      </Link>
                    ) : (
                      <Link
                        href={footer.path[subIndex]}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="subtitle1"
                        color="text.secondary"
                      >
                        {item}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Grid>
      </Container>
    </>
  );
}
