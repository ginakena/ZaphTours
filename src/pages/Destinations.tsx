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

const Destinations = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", mb: 4 }}
        >
          Our Top Destinations
        </Typography>

        <Grid container spacing={4}>
          {destinations.map((dest, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={dest.image}
                  alt={dest.name}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {dest.name}
                  </Typography>
                  <Typography variant="body2" sx={{ my: 1 }}>
                    {dest.description}
                  </Typography>
                  <Typography variant="subtitle2">
                    <strong>Group:</strong> {dest.groupPrice}
                  </Typography>
                  <Typography variant="subtitle2">
                    <strong>Solo:</strong> {dest.individualPrice}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="outlined"
                    href="#"
                    sx={{ ml: 1 }}
                  >
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Destinations;
