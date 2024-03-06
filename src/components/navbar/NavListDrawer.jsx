import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  ListItemButton,
  Typography,
} from "@mui/material";

import { ListItemComponent } from "../ItemNavbar";
import { navbarRoutes } from "../../configs/configs";

export function NavListDrawer({ navbarRoutes, NavLink, setOpen }) {
  return (
    <Box
      sx={{
        height: "100%",
        width: "250px",
        bgcolor: "white",
        color: "#161A30",
      }}
    >
      <nav>
        <Box
          sx={{
            display: "flex",
            width: { xs: "100%", justifyContent: "center", sm: "9em" },
          }}
        >
          {/* <img src="/img/logo.svg" alt="cargando..." /> */}
          <Typography textAlign="center" variant="h6" color="black">
            MY LOGO
          </Typography>
        </Box>
        <List>
          {navbarRoutes.map((item) => (
            <ListItemComponent
              NavLink={NavLink}
              text={item.title}
              icon={item.icon}
              pathApp={item.path}
              setOpen={setOpen}
            />
          ))}
        </List>
      </nav>
    </Box>
  );
}
