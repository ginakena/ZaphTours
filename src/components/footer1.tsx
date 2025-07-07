import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link as RouterLink } from "react-router-dom";

const CustomRouterLink = RouterLink as React.ElementType;

const Footer1 = () => {
  return (
    <Box sx={{ backgroundColor: "#E7EFC7", color: "black", pt: 4, pb: 2 }}>
      <Container>
        <Grid container spacing={4}>
          {/* Branding */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              Zaph Tours
            </Typography>
            <Typography variant="body2">
              Best Safaris and Adventures. Discover Kenya with us!
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              <Link component={CustomRouterLink} to="/" underline="hover" color="inherit">
                Home
              </Link>
              <Link component={CustomRouterLink} to="/destinations" underline="hover" color="inherit">
                Destinations
              </Link>
              <Link component={CustomRouterLink} to="/trip-types" underline="hover" color="inherit">
                Trip Types
              </Link>
              <Link component={CustomRouterLink} to="/contact" underline="hover" color="inherit">
                Contact
              </Link>
            </Stack>
          </Grid>

          {/* Socials */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              Connect With Us
            </Typography>
            <Stack direction="row" spacing={2}>
              <Link
                href="https://www.linkedin.com/in/regina-makena-a12731267"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
              >
                <LinkedInIcon />
              </Link>
              <Link
                href="https://github.com/ginakena"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
              >
                <GitHubIcon />
              </Link>
            </Stack>
          </Grid>
        </Grid>

        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 4, fontSize: "0.875rem", color: "#ddd" }}
        >
          &copy; {new Date().getFullYear()} Zaph Tours. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer1;
