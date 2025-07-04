import {
  Stack,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Box,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const testimonials = [
  {
    name: "Mary N.",
    quote:
      "Our safari with Zaph Tours was a dream come true. Everything was perfectly planned!",
    avatar: "https://www.randomuser.me/api/portraits/women/80.jpg",
  },
  {
    name: "James K.",
    quote:
      "From the beautiful lodges to the wildlife, the experience was unforgettable.",
    avatar: "https://www.randomuser.me/api/portraits/men/81.jpg",
  },
  {
    name: "Amina L.",
    quote:
      "Incredible service and breathtaking destinations. I highly recommend Zaph Tours!",
    avatar: "https://www.randomuser.me/api/portraits/women/85.jpg",
  },  
];

const Testimonials = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: "#f2f2f2" }}>
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", mb: 4 }}
        >
          What Our Travelers Say
        </Typography>

        <Stack spacing={2}>
          {testimonials.map((item, index) => (
            <Card key={index} sx={{ p: 2 }}>
              <CardContent>
                <FormatQuoteIcon
                  sx={{ fontSize: 30, color: "#FB9A40", mb: 1 }}
                />
                <Typography
                  variant="body1"
                  sx={{ mb: 2, fontStyle: "italic" }}
                >
                  "{item.quote}"
                </Typography>
                <Stack direction="row" alignItems="center" gap={2}>
                  <Avatar src={item.avatar} alt={item.name} />
                  <Typography variant="subtitle2" color="text.secondary">
                    {item.name}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Testimonials;
