import { Box, Container, Typography, Button } from "@mui/material";
import calendarIcon from "../../../assets/clinic/HeroSectionIcon/calendar1.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { getTreatmentByRoute } from "../../../utils/treatmentsData";

// Import all treatment images
import spineImage from "../../../assets/treatments/SpineTreatment.jpg";
import gitImage from "../../../assets/treatments/GITTreatments.jpg";
import cosmetologyImage from "../../../assets/treatments/Cosmetology.jpg";
import kidneyImage from "../../../assets/treatments/KidneyTreatment.jpg";
import gynecologistImage from "../../../assets/treatments/Gynecologist Treatment.jpg";
import migraineImage from "../../../assets/treatments/Migraine Treatment.jpg";
import entImage from "../../../assets/treatments/ENT Treatment.jpg";
import jointImage from "../../../assets/treatments/JointTreatment.jpg";
import childImage from "../../../assets/treatments/ChildTreatment.jpg";

// Dummy image placeholder
const DUMMY_IMAGE =
  "https://via.placeholder.com/598x399/155DFC/FFFFFF?text=Treatment+Image";

// Map treatment keys to images
const TREATMENT_IMAGES = {
  spine: spineImage,
  git: gitImage,
  cosmetology: cosmetologyImage,
  kidney: kidneyImage,
  gynecologist: gynecologistImage,
  migraine: migraineImage,
  ent: entImage,
  joint: jointImage,
  child: childImage,
};

const HeroSection = ({ treatmentName, title, description, image }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const treatmentData = getTreatmentByRoute(location.pathname);

  const finalTreatmentName = treatmentName || treatmentData?.tag || "Treatment";
  const finalTitle =
    title || treatmentData?.title || "Advanced Treatment Solutions";
  const finalDescription =
    description ||
    treatmentData?.description ||
    "Expert care for all conditions using state-of-the-art technology and proven treatment methods. Our specialized team is dedicated to helping you achieve optimal health and wellness.";

  const finalImage =
    image ||
    (treatmentData?.key && TREATMENT_IMAGES[treatmentData.key]) ||
    DUMMY_IMAGE;

  const handleBookConsultation = () => {
    navigate("/appointment");
  };

  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 3, sm: 4, md: 6, lg: 8 },
        backgroundColor: "#F4F9FF",
      }}
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          width: { xs: "100%", sm: "100%", md: "100%", lg: "100%", xl: "1440px" },
          maxWidth: { xs: "100%", sm: "100%", md: "100%", lg: "100%", xl: "1275px" },
          height: { xs: "auto", sm: "auto", md: "auto", lg: "auto", xl: "399px" },
          backgroundColor: "transparent",
          px: { xs: 2, sm: 3, md: 4, lg: 4, xl: 0 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row", md: "row" },
            gap: { xs: 3, sm: 4, md: 6, lg: "94px" },
            alignItems: { xs: "flex-start", sm: "center", md: "center" },
          }}
        >
          {/* LEFT CONTENT */}
          <Box
            sx={{
              flex: {
                xs: "1 1 100%",
                sm: "1 1 50%",
                md: "1 1 50%",
                lg: "1 1 50%",
              },
              width: { xs: "100%", sm: "50%", md: "100%", lg: "583px" },
              height: { xs: "auto", sm: "auto", md: "auto", lg: "352px" },
              display: "flex",
              flexDirection: "column",
              padding: {
                xs: "12px",
                sm: "16px",
                md: "20px",
                lg: "9px 7px 9px 7px",
              },
              gap: { xs: 2, sm: 3, md: 4, lg: "41px" },
              borderRadius: "6px",
              boxSizing: "border-box",
            }}
          >
            {/* Treatment Category Badge */}
            <Box
              sx={{
                display: "inline-flex",
                px: { xs: 2, sm: 2.5, md: 2.5 },
                py: { xs: 0.75, sm: 1, md: 1 },
                backgroundColor: "#E4EDFF",
                borderRadius: "8px",
                width: "fit-content", // ⭐ FIX: Auto-size to text
                whiteSpace: "nowrap", // prevents stretching
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: {
                    xs: "0.75rem",
                    sm: "0.85rem",
                    md: "0.9rem",
                    lg: "1rem",
                  },
                  fontWeight: 400,
                  color: "#155DFC",
                }}
              >
                {finalTreatmentName}
              </Typography>
            </Box>

            {/* Main Heading */}
            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 500,
                fontSize: { xs: "18px", sm: "20px", md: "22px", lg: "24px" },
                lineHeight: "145%",
                letterSpacing: "0px",
                color: "#0C0E11",
              }}
            >
              {finalTitle}
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                color: "#0C0E11",
                fontSize: { xs: "14px", sm: "15px", md: "16px", lg: "18px" },
                lineHeight: 1.7,
                fontWeight: 400,
              }}
            >
              {finalDescription}
            </Typography>

            {/* Book Consultation Button */}
            <Box sx={{ mt: { xs: 1, sm: 1, md: 0 } }}>
              <Button
                variant="contained"
                size="large"
                onClick={handleBookConsultation}
                startIcon={
                  <Box
                    component="img"
                    src={calendarIcon}
                    alt="Calendar"
                    sx={{
                      width: { xs: "18px", sm: "19px", md: "20px" },
                      height: "auto",
                    }}
                  />
                }
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  px: { xs: 2.5, sm: 3, md: 3.5, lg: 4 },
                  py: { xs: 1.25, sm: 1.5, md: 1.5 },
                  fontSize: {
                    xs: "0.85rem",
                    sm: "0.9rem",
                    md: "0.95rem",
                    lg: "1rem",
                  },
                  backgroundColor: "#155DFC",
                  borderRadius: "8px",
                  textTransform: "none",
                  fontWeight: 500,
                  "&:hover": {
                    backgroundColor: "#1247c4",
                  },
                }}
              >
                Book consultation
              </Button>
            </Box>
          </Box>

          {/* RIGHT IMAGE */}
          <Box
            sx={{
              flex: {
                xs: "1 1 100%",
                sm: "1 1 50%",
                md: "1 1 50%",
                lg: "1 1 50%",
              },
              width: { xs: "100%", sm: "50%", md: "100%", lg: "50%" },
              display: "flex",
              justifyContent: {
                xs: "center",
                sm: "center",
                md: "center",
                lg: "flex-end",
              },
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={finalImage}
              alt={finalTreatmentName}
              sx={{
                width: "100%",
                maxWidth: {
                  xs: "100%",
                  sm: "100%",
                  md: "500px",
                  lg: "598px",
                },
                height: {
                  xs: "250px",
                  sm: "300px",
                  md: "350px",
                  lg: "399px",
                },
                objectFit: "cover",
                borderRadius: "9px",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
