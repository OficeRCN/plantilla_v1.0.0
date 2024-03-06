import {
  Button,
  Container,
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import { NavListDrawer } from "./NavListDrawer";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { navbarRoutes } from "../../configs/configs";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar
        position="fixed"
        style={{
          justifyContent: "center",
          background: "white",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            sx={{ display: { sx: "flex", sm: "none" } }}
            variant="contained"
            onClick={() => setOpen(true)}
          >
            <MenuIcon style={{ color: "#161A30" }} />
          </IconButton>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              width: { xs: "100%", justifyContent: "flex-end", sm: "9em" },
            }}
          >
            {/* <img src="/img/logo.svg" alt="cargando..." /> */}
            <Typography variant="h6" color="black">MY LOGO</Typography>
          </Box>
          <Typography variant="h6" sx={{ flexGrow: 1 }}></Typography>

          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            {navbarRoutes.map((item, index) => (
              <Button
                startIcon={item.icon}
                component={NavLink}
                to={item.path}
                key={index}
                style={{ color: "#161A30" }}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
        <NavListDrawer
          setOpen={setOpen}
          navbarRoutes={navbarRoutes}
          NavLink={NavLink}
        />
      </Drawer>
    </>
  );
}
