import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const destinations = [
  {
    title: "Mt. Kenya",
    image: "/mt-kenya.jpg",
    description:
      "A challenging climb and breathtaking scenery await at Kenya’s highest peak.",
    price: "From KSH.45,000",
  },
  {
    title: "Mt. Ruwenzori",
    image: "/mt-ruwenzori.jpg",
    description:
      "Explore the snow-capped peaks and alpine valleys of the legendary Mountains of the Moon.",
    price: "From KSH.56,000",
  },
  {
    title: "Lake Nakuru",
    image: "/lake-nakuru.jpg",
    description:
      "Famous for its flamingos and rhino sanctuary, this lake is a birdwatcher’s paradise.",
    price: "From KSH.24,000",
  },
  {
    title: "Tsavo National Park",
    image: "/tsavo.jpg",
    description:
      "Experience raw wilderness, red elephants, and the largest park in Kenya.",
    price: "From KSH.45,000",
  },
  {
    title: "Nairobi National Park",
    image: "/nairobi-park.jpg",
    description:
      "A unique safari experience right on the edge of the capital city.",
    price: "From KSH.30,000",
  },
  {
    title: "Coastal Kenya",
    image: "/coastal-kenya.jpg",
    description:
      "White sandy beaches, Swahili culture, and perfect sunsets by the Indian Ocean.",
    price: "From KSH.50,000",
  },
];

const FeaturedDestinations = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: "#fff" }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontFamily: "Dancing Script",
          fontWeight: "800",
          fontSize: "69px",
          mb: 4,
        }}
      >
        Featured Destinations
      </Typography>
      <Grid container spacing={4} justifyContent="center" sx={{ px: 2 }}>
        {destinations.map((dest, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                backgroundColor: "#E7EFC7",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: 6,
                  cursor: "pointer",
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={dest.image}
                alt={dest.title}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {dest.title}
                </Typography>
                <Typography variant="body2" sx={{ my: 1 }}>
                  {dest.description}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  {dest.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedDestinations;
