import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { motion } from "framer-motion";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with ${email}`);
      setEmail("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Box sx={{ py: 8, backgroundColor: "transparent" }}>
        <Container maxWidth="sm">
          <Typography
            variant="h4"
            align="center"
            sx={{ fontWeight: "bold", mb: 2, color: "#fff" }}
          >
            Join Our Newsletter
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ mb: 4, color: "#fff" }}
          >
            Get weekly updates on safaris, adventures, and exclusive offers!
          </Typography>

          <Paper
            elevation={4}
            sx={{
              p: 2,
              borderRadius: 2,
              backgroundColor: "#ffffffcc",
              backdropFilter: "blur(5px)",
            }}
          >
            <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              gap={2}
              justifyContent="center"
            >
              <TextField
                variant="outlined"
                placeholder="Enter your email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ borderRadius: 1, backgroundColor: "#fff" }}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#FB9A40",
                  color: "#fff",
                  fontWeight: "bold",
                  px: 4,
                  "&:hover": {
                    backgroundColor: "#e88925",
                  },
                }}
                endIcon={<SendIcon />}
                onClick={handleSubscribe}
              >
                Subscribe
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>
    </motion.div>
  );
};

export default NewsletterSignup;
