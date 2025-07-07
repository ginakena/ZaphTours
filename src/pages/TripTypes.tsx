import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Footer1 from "../components/footer1";

const tripTypes = [
  {
    title: "Adventure",
    images: "/adventure.jpg",
    description:
      "Thrilling experiences like hiking, rafting, and wildlife treks for the adrenaline junkie.",
    price: "From KSH. 95,000",
  },
  {
    title: "Cultural Tours",
    images: "/cultural-tour.jpg",
    description:
      "Explore local traditions, festivals, and heritage sites with expert guides.",
    price: "From KSH. 70,000",
  },
  {
    title: "Wildlife Safaris",
    images: "/safari.jpg",
    description:
      "Close encounters with Africa’s Big Five in their natural habitat.",
    price: "From KSH. 100,000",
  },
  {
    title: "Eco-Tours",
    images: "/eco-tours.jpg",
    description:
      "Travel responsibly and discover pristine environments with minimal impact.",
    price: "From KSH. 65,000",
  },
  {
    title: "Luxury Vacations",
    images: "/vacations.jpg",
    description:
      "Indulge in premium accommodations, fine dining, and VIP treatment.",
    price: "From KSH. 180,000",
  },
  {
    title: "Beach Holidays",
    images: "/diani-beach.jpg",
    description: "Sun, sea, and sand — perfect coastal getaways.",
    price: "From KSH. 90,000",
  },
  {
    title: "Wellness Retreats",
    images: "/zanzibar.jpg",
    description:
      "Relax and recharge with yoga, spa treatments, and holistic healing.",
    price: "From KSH. 110,000",
  },
  {
    title: "Culinary Tours",
    images: "/culinary.jpg",
    description:
      "Taste the flavors of Kenya with hands-on cooking classes and food adventures.",
    price: "From KSH. 75,000",
  },
];

const TripTypesPage = () => {
  return (
    <>
      <Box sx={{ p: 8 }}>
        <Container>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold", mb: 4 }}
          >
            Our Trip Types
          </Typography>

          <Grid container spacing={4}>
            {tripTypes.map((trip, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                <Card sx={{ height: "100%" }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={trip.images}
                    alt={trip.title}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {trip.title}
                    </Typography>
                    <Typography variant="body2" sx={{ my: 1 }}>
                      {trip.description}
                    </Typography>
                    <Typography variant="subtitle2">{trip.price}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      variant="outlined"
                      href="#"
                      sx={{ ml: 1 }}
                    >
                      View Package
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Footer1 />
    </>
  );
};

export default TripTypesPage;
