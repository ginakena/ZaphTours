import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Paper,
} from "@mui/material";

const destinations = [
  {
    name: "Maasai Mara National Park",
    image: "/masai-mara.jpg",
    description:
      "Famous for the Great Migration, Maasai Mara offers iconic African wildlife and vast open plains.",
    groupPrice: "KSH. 75,000",
    individualPrice: "KSH. 15,000",    
  },
  {
    name: "Diani Beach",
    image: "/diani-beach.jpg",
    description:
      "White sand, turquoise waters, and a relaxing coastal vibe make Diani Kenya’s top beach getaway.",
    groupPrice: "KSH. 65,000",
    individualPrice: "KSH. 12,000",    
  },
  {
    name: "Zanzibar",
    image: "/zanzibar.jpg",
    description:
      "A tropical paradise with spice markets, historic Stone Town, and stunning Indian Ocean beaches.",
    groupPrice: "KSH. 85,000",
    individualPrice: "KSH. 18,000",    
  },
  {
    name: "Samburu National Reserve",
    image: "/samburu.jpg",
    description:
      "A semi-arid savanna famous for rare wildlife species and unique cultural experiences.",
    groupPrice: "KSH. 70,000",
    individualPrice: "KSH. 14,000",    
  },
];

function Destinations() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: "black", fontWeight: "bold", mb: 6 }}
      >
        Our Top Destinations
      </Typography>

      {/* <Paper sx={{ p: 5, backgroundColor: "#f5f0ff" }} variant="outlined">
        <Typography
          variant="h5"
          align="center"
          sx={{ color: "#471396", fontWeight: "bold", mb: 2 }}
        >
          Travel is the only thing you can buy that makes you richer.
        </Typography>
        <Typography align="center" sx={{ color: "#090040" }}>
          Discover handpicked travel destinations for unforgettable memories.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#B13BFF", color: "white", px: 4 }}
          >
            Let's Go!
          </Button>
        </Box>
      </Paper> */}

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "center",
          mt: 6,
        }}
      >
        {destinations.map((dest) => (
          <Card
            key={dest.name}
            sx={{
              width: 300,
              borderRadius: 3,
              backgroundColor: "#E7EFC7",
              boxShadow: 4,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
              },
            }}
          >
            <CardMedia
              component="img"
              height="180"
              image={dest.image}
              alt={dest.name}
            />
            <CardContent>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ color: "black", fontWeight: "bold" }}
              >
                {dest.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {dest.description}
              </Typography>

              <Typography fontWeight="bold">
                <Box component="span" sx={{ color: "black" }}>
                  Group:{" "}
                </Box>
                <Box component="span" sx={{ color: "black" }}>
                  {dest.groupPrice}
                </Box>
              </Typography>

              <Typography fontWeight="bold">
                <Box component="span" sx={{ color: "black" }}>
                  Solo: {" "}
                </Box>
                <Box component="span" sx={{ color: "black" }}>
                  {dest.individualPrice}
                </Box>
              </Typography>

              <Button
                variant="outlined"
                size="small"
                href="#"                
                sx={{
                  mt: 2,
                  color: "#471396",
                  borderColor: "#471396",
                  "&:hover": {
                    backgroundColor: "#B13BFF",
                    color: "white",
                  },
                }}
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
}

export default Destinations;


