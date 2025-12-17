import { Box, Container, Typography, Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import healingJourneyImage from "../../../assets/clinic/ReadyToStartHealingJourney/Ready to Start Your Healing Journey_.jpg";
import calendarIcon from "../../../assets/clinic/HeroSectionIcon/calendar1.svg";
import { getTreatmentByRoute } from "../../../utils/treatmentsData";

export default function CallToActionSection({ cta }) {
  const location = useLocation();
  const treatmentData = getTreatmentByRoute(location.pathname);

  // Use provided props or fall back to route-based data or defaults
  const finalCta = cta ||
    treatmentData?.cta || {
      title: "Ready to Start Your Healing Journey?",
      subtitle:
        "Book an appointment today and take the first step towards better health",
      buttonText: "Schedule Your Appointment",
    };
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        py: { xs: 8, sm: 10, md: 12, lg: 14 },
        backgroundImage: `url(${healingJourneyImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            color: "#ffffff",
            maxWidth: "800px",
            mx: "auto",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              fontSize: {
                xs: "20px",
                sm: "20px",
                md: "24px",
                lg: "24px",
              },
              mb: 3,
              color: "#ffffff",
            }}
          >
            {finalCta.title}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontSize: { xs: "16px", sm: "16px", md: "16px" },
              mb: 4,
              color: "#f0f0f0",
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            {finalCta.subtitle}
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={
              <Box
                component="img"
                src={calendarIcon}
                alt="Calendar"
                sx={{
                  width: "20px",
                  height: "auto",
                  mr: 1,
                }}
              />
            }
            sx={{
              fontFamily: "Poppins, sans-serif",
              px: { xs: 4, sm: 5, md: 6 },
              py: { xs: 1.5, sm: 2 },
              fontSize: { xs: "10px", sm: "16px", md: "16px" },
              backgroundColor: "#155DFC",
              borderRadius: "8px",
              fontWeight: 700,

              textTransform: "none",
              "&:hover": {
                backgroundColor: "#155DFC",
                transform: "translateY(-2px)",
                boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
              },
              transition: "all 0.3s ease",
            }}
          >
            {finalCta.buttonText}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}




