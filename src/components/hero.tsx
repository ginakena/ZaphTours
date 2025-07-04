import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100vh",
        pt: { xs: 8, md: 10 },
        backgroundImage: `url("/background-image.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textAlign: "center",
        px: 2,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.6)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          textAlign: "center",
          color: "#fff",
        }}
      >
      <Typography
        variant="h2"
        sx={{ fontWeight: "bold", mb: 2, textShadow: "2px 2px 4px #000" }}
      >
        Explore The World With Us
      </Typography>
      <Typography
        variant="h6"
        sx={{ mb: 4, maxWidth: 600, textShadow: "1px 1px 2px #000" }}
      >
        Explore Kenya's natural beauty and rich culture with Zaph Tours.
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        onClick={() => navigate("/contact")}
      >
        Plan Your Trip
      </Button>
    </Box>
    </Box>
  );
};

export default Hero;
