import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Footer1 from '../components/footer1';

const GridItem = Grid as React.ElementType;

const officeHours = [
  { day: "Monday", hours: "9:00 AM - 1:00 PM" },
  { day: "Tuesday", hours: "9:00 AM - 5:00 PM" },
  { day: "Wednesday", hours: "9:00 AM - 1:00 PM" },
  { day: "Thursday", hours: "9:00 AM - 5:00 PM" },
  { day: "Friday", hours: "9:00 AM - 5:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "Open from 2:00 PM - 5:00 PM" },
];

const ContactUs = () => {
  return (
    <>
      <Box
        sx={{
          px: { xs: 2, md: 8 },
          py: 6,
          mt: 8,
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#EBD6FB",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box textAlign="center" mb={5}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            ,
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {/* Contact Form */}
          <GridItem xs={12} md={6}>
            <Paper
              sx={{
                p: 3,
                borderRadius: 3,
                boxShadow: 3,
                backgroundColor: "#fff9ef",
              }}
            >
              <Typography variant="h5" fontWeight="bold">
                Reach Out To us🤗
              </Typography>
              <Box component="form">
                <TextField fullWidth label="Full Name" required margin="normal" />
                <TextField
                  fullWidth
                  label="Email Address"
                  type="email"
                  required
                  margin="normal"
                />
                <TextField fullWidth label="Subject" required margin="normal" />
                <TextField
                  fullWidth
                  label="Message"
                  multiline
                  rows={4}
                  required
                  margin="normal"
                  placeholder="What's on your mind"
                />
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: "#FB9A40",
                    color: "#fff",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    letterSpacing: 1,
                    px: 3,
                    py: 1.5,
                    borderRadius: 2,
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Paper>
          </GridItem>

          {/* Info Section */}
          <GridItem xs={12} md={6}>
            <Grid container spacing={2}>
              {/* Get in Touch */}
              <GridItem xs={12} md={6}>
                <Paper
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    boxShadow: 3,
                    backgroundColor: "#fff9ef",
                    mb: 3,
                    height: "100%",
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    Get in Touch
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <EmailIcon />
                      </ListItemIcon>
                      <ListItemText primary="makenareginam@gmail.com" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <PhoneIcon />
                      </ListItemIcon>
                      <ListItemText primary="+25474257643" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <AddLocationAltIcon />
                      </ListItemIcon>
                      <ListItemText primary="Kiharu, Murang'a County" />
                    </ListItem>
                  </List>
                </Paper>
              </GridItem>

              {/* Find Us */}
              <GridItem xs={12} md={6}>
                <Paper
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    boxShadow: 3,
                    backgroundColor: "#fff9ef",
                    mb: 3,
                    height: "100%",
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    Find Us
                  </Typography>
                  <Box
                    sx={{
                      borderRadius: 2,
                      overflow: "hidden",
                      height: 250,
                      mt: 1,
                    }}
                  >
                    <iframe
                      title="Google Map Location"
                      width="100%"
                      height="100%"
                      style={{ border: 0, borderRadius: 8 }}
                      allowFullScreen
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7979.007421036816!2d37.143477137684165!3d-0.7195319190599854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18289874dd56f1a5%3A0xed3b1918af62f2cd!2sKiharu%2C%20Murang&#39;a!5e0!3m2!1sen!2ske!4v1751619066875!5m2!1sen!2ske"
                    ></iframe>
                  </Box>
                </Paper>
              </GridItem>

              {/* Office Hours */}
              <GridItem xs={12}>
                <Paper
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    boxShadow: 3,
                    backgroundColor: "#fff9ef",
                    mb: 3,
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    Office Hours
                  </Typography>
                  <List dense>
                    {officeHours.map(({ day, hours }) => (
                      <ListItem key={day}>
                        <ListItemText primary={day} secondary={hours} />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </GridItem>

              {/* Social Links */}
              <GridItem xs={12}>
                <Paper
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    boxShadow: 3,
                    backgroundColor: "#fff9ef",
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    Follow Us
                  </Typography>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <IconButton href="#" sx={{ color: "#E55050" }}>
                      <InstagramIcon />
                    </IconButton>
                    <IconButton href="#" color="primary">
                      <LinkedInIcon />
                    </IconButton>
                    <IconButton href="#" sx={{ color: "#000000" }}>
                      <XIcon />
                    </IconButton>
                  </Box>
                </Paper>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </Box>

      <Footer1 />
    </>
  );
};

export default ContactUs;
