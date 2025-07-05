import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
   const navLinks = [
    {
      label: "Home",
      icon: <HomeIcon sx={{ mr: 1 }} />,
      path: "/",
    },
    {
      label: "Destinations",
      icon: <LocationOnIcon sx={{ mr: 1 }} />,
      path: "/destinations",
    },
    {
      label: "Trip Types",
      icon: <MultipleStopIcon sx={{ mr: 1 }} />,
      path: "/trip-types",
    },
    {
      label: "Contact",
      icon: <AddIcCallIcon sx={{ mr: 1 }} />,
      path: "/contact",
    },
  ];
  return (
    <AppBar position="absolute" 
    color="transparent" 
    sx={{ width: "100%",
      backgroundColor: "#B13BFF",
      boxShadow: "none",
      zIndex: 10,
     }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          {/* Logo */}
          <Box display="flex" alignItems="center">
            < AirportShuttleIcon fontSize="large" sx={{ mr: 1, color: "#FFF" }} />
            <Typography
              component={RouterLink}
              to="/"
              variant="h5"
               sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 800,
                color: "#fff",
                textDecoration: "none",
                letterSpacing: ".2rem",
              }}
            >
              ZAPH TOURS
            </Typography>
          </Box>

          {/* Navigation links */}
         <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>            
             {navLinks.map((link) => (
              <Button
                key={link.label}
                component={RouterLink}
                to={link.path}
                sx={{
                  color: "#fff",
                  fontWeight: 600,
                  textTransform: "none",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {link.icon}
                {link.label}
              </Button>
              
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
