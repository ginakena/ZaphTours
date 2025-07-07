import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link as RouterLink } from "react-router-dom";
import NewsletterSignup from "../components/NewsLetter";


const GridItem = Grid as React.ElementType;
const CustomRouterLink = RouterLink as React.ElementType;

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#E7EFC7", color: "black", pt: 4, pb: 2 }}>
      {/* Newsletter embedded */}
      <NewsletterSignup />

      <Divider sx={{ backgroundColor: "#ffffff44", my: 4 }} />

      <Container>
        <Grid container spacing={4}>
          {/* Branding */}
          <GridItem xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              Zaph Tours
            </Typography>
            <Typography variant="body2">
              Best Safaris and Adventures. Discover Kenya with us!
            </Typography>
          </GridItem>

          {/* Quick Links */}
          <GridItem xs={12} md={4}>
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
          </GridItem>

          {/* Socials */}
          <GridItem xs={12} md={4}>
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
          </GridItem>
        </Grid>

        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 4, fontSize: "0.5rem", color: "#ddd" }}
        >
          &copy; {new Date().getFullYear()} Zaph Tours. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
