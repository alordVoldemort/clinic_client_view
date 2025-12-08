import {
  Container,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import SendMessageForm from "./SendMessageForm";
import LocationSection from "./LocationSection";
import OfficeHoursCard from "./OfficeHoursCard";
import EmergencyContactCard from "./EmergencyContactCard";
import ContactCards from "./ContactCards";

const Contact = () => {
  return (
    <Box sx={{ 
      backgroundColor: '#ffffff', 
      minHeight: '100vh',
      py: { xs: 3, sm: 4, md: 5, lg: 6 },
      px: { xs: 2, sm: 3, md: 0 }, // Added horizontal padding for mobile
    }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: { xs: 3, sm: 4, md: 5, lg: 6 } }}>
          <Typography
            variant="h1"
            sx={{ 
              fontSize: { xs: '28px', sm: '32px', md: '36px', lg: '42px' }, 
              fontWeight: 600, 
              color: '#000000',
              mb: 2
            }}
          >
            Get In Touch
          </Typography>

          <Typography
            sx={{ 
              fontSize: { xs: '14px', sm: '15px', md: '16px', lg: '18px' }, 
              color: '#000000',
              maxWidth: 600,
              mx: 'auto',
              px: { xs: 1, sm: 2, md: 0 },
              lineHeight: 1.6
            }}
          >
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </Typography>
        </Box>

        {/* Contact Cards Component */}
        <ContactCards />

        {/* Main Content - Two Column Layout on Desktop */}
        <Grid container spacing={{ xs: 3, sm: 3, md: 4 }}>
          {/* Left Column - Send Message Form */}
          <Grid item xs={12} lg={7}>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: { xs: 'center', lg: 'flex-start' },
              width: '100%'
            }}>
              <SendMessageForm />
            </Box>
          </Grid>

          {/* Right Column - Additional Cards */}
          <Grid item xs={12} lg={5}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 3,
              alignItems: { xs: 'center', lg: 'flex-start' },
              width: '100%'
            }}>
              <LocationSection />
              <OfficeHoursCard />
              <EmergencyContactCard />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;