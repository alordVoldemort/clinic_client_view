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
      backgroundColor: '#FBF9FA', 
      minHeight: '100vh',
      py: { xs: 3, sm: 4, md: 5, lg: 6 },
      px: { xs: 2, sm: 3, md: 4, lg: 0 },
    }}>
      <Container maxWidth="xl">
       
        <Box sx={{ 
          textAlign: 'center', 
          mb: { xs: 3, sm: 4, md: 5, lg: 6 },
          px: { xs: 1, sm: 0 } 
        }}>
          <Typography
            variant="h1"
            sx={{ 
              fontSize: { 
                xs: '24px', 
                sm: '28px', 
                md: '32px', 
                lg: '42px' 
              }, 
              fontWeight: 600, 
              color: '#000000',
              mb: { xs: 1.5, sm: 2, md: 2 }
            }}
          >
            Get In Touch
          </Typography>

          <Typography
            sx={{ 
              fontSize: { 
                xs: '14px', 
                sm: '15px', 
                md: '16px', 
                lg: '18px' 
              }, 
              color: '#000000',
              maxWidth: 600,
              fontWeight: 400, 
              mx: 'auto',
              px: { xs: 1, sm: 2, md: 0 },
              lineHeight: { xs: 1.5, sm: 1.6 }
            }}
          >
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </Typography>
        </Box>

        {/* Contact Cards Component */}
        <ContactCards />

        
        <Grid 
          container 
          spacing={{ xs: 3, sm: 4, md: 4, lg: 4 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start"
          }}
        >
          {/* Left Column - Form (Mobile: full width, Tablet: full width, Desktop: 7/12) */}
          <Grid item xs={12} md={12} lg={7}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column',
              gap: { xs: 3, sm: 4, md: 4 },
              width: '100%',
              maxWidth: { md: '100%', lg: '100%' }
            }}>
              <SendMessageForm />
            </Box>
          </Grid>

          {/* Right Column - Info Cards (Mobile: full width, Tablet: full width, Desktop: 5/12) */}
          <Grid item xs={12} md={12} lg={5}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: { xs: 3, sm: 4, md: 4 },
              width: '100%',
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