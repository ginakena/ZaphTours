import { Box, Typography, Container } from "@mui/material";

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        py: 8,
        backgroundColor: "#f8f8f8",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#333" }}
        >
          About Zaph Tours
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ color: "#555", lineHeight: 1.8 }}
        >
          Zaph Tours is a premier travel company based in Kenya, dedicated to offering
          unforgettable safari and adventure experiences. With years of experience
          and a passion for exploration, we specialize in showcasing the breathtaking
          landscapes, diverse wildlife, and vibrant cultures of Kenya and beyond.
          Whether you're looking for a luxury vacation, a family-friendly getaway, or
          a rugged adventure, Zaph Tours provides personalized travel packages that
          meet your needs and exceed your expectations.
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
