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
        py: { xs: 4, sm: 6, md: 8 },
        backgroundColor: "#F4F9FF",
      }}
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          width: "1275px",
          height: "399px",
          backgroundColor: "transparent",
          px: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: "94px" },
            alignItems: { xs: "flex-start", md: "center" },
          }}
        >
          {/* LEFT CONTENT */}
          <Box
            sx={{
              flex: { xs: "1 1 100%", md: "1 1 50%" },
              width: { xs: "100%", md: "583px" },
              height: { md: "352px" },
              display: "flex",
              flexDirection: "column",
              padding: "9px 7px 9px 7px",
              gap: "41px",
              borderRadius: "6px",
              boxSizing: "border-box",
            }}
          >
            {/* Treatment Category Badge */}
            <Box
              sx={{
                display: "inline-flex",
                px: 2.5,
                py: 1,
                backgroundColor: "#E4EDFF",
                borderRadius: "8px",
                width: "fit-content", // ⭐ FIX: Auto-size to text
                whiteSpace: "nowrap", // prevents stretching
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
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
                fontSize: { xs: "20px", sm: "20px", md: "24px", lg: "24px" },
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
                fontSize: { xs: "15px", sm: "18px", md: "18px" },
                lineHeight: 1.7,
                fontWeight: 400,
              }}
            >
              {finalDescription}
            </Typography>

            {/* Book Consultation Button */}
            <Box sx={{ mt: { xs: 1, md: 0 } }}>
              <Button
                variant="contained"
                size="large"
                onClick={handleBookConsultation}
                startIcon={
                  <Box
                    component="img"
                    src={calendarIcon}
                    alt="Calendar"
                    sx={{ width: "20px", height: "auto" }}
                  />
                }
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  px: { xs: 3, sm: 4 },
                  py: 1.5,
                  fontSize: { xs: "0.9rem", sm: "1rem" },
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
              flex: { xs: "1 1 100%", md: "1 1 50%" },
              width: { xs: "100%", md: "50%" },
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={finalImage}
              alt={finalTreatmentName}
              sx={{
                width: "100%",
                maxWidth: { xs: "100%", sm: "500px", md: "598px" },
                height: { xs: "300px", sm: "350px", md: "399px" },
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
