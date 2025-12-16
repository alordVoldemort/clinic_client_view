import { Box, Container, Typography, Grid } from "@mui/material";
import { useLocation } from "react-router-dom";
import { getTreatmentByRoute } from "../../../utils/treatmentsData";
import stethoscopeIcon from "../../../assets/clinic/FourLogos/stethoscope 1.svg";

const ServiceSection = ({ title, subtitle, services }) => {
  const location = useLocation();

  // Auto-detect treatment data from route if props are not provided
  const treatmentData = getTreatmentByRoute(location.pathname);

  // Use provided props or fall back to route-based data or defaults
  const finalTitle =
    title || treatmentData?.services?.title || "Our Treatment Services";
  const finalSubtitle =
    subtitle ||
    treatmentData?.services?.subtitle ||
    "Comprehensive solutions tailored to your specific condition";
  const finalServices = services || treatmentData?.services?.services || [];
  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 5, sm: 6, md: 8 },
        backgroundColor: "#FBF9FA",
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 4, sm: 5, md: 6 },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: { xs: "24px", sm: "28px", md: "32px", lg: "36px" },
              color: "#1a1a1a",
              mb: 2,
            }}
          >
            {finalTitle}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              color: "#666",
              maxWidth: "700px",
              mx: "auto",
            }}
          >
            {finalSubtitle}
          </Typography>
        </Box>

        {/* Services Grid */}
        <Grid
          container
          spacing={{ xs: 2, sm: 3, md: 4 }}
          justifyContent="flex-start"
        >
          {finalServices.map((service, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                flexGrow: 1,
              }}
            >
              <Box
                sx={{
                  width: "349px",
                  maxWidth: "400px",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  px: { xs: 2, sm: 2.5, md: 3 },
                  py: { xs: 2, sm: 2.5, md: 3 },
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {/* Icon Container */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: { xs: "50px", sm: "56px", md: "60px" },
                    height: { xs: "50px", sm: "56px", md: "60px" },
                    borderRadius: "50%",
                    backgroundColor: "rgba(21, 93, 252, 0.1)",
                    border: "1px solid rgba(21, 93, 252, 0.2)",
                    flexShrink: 0,
                  }}
                >
                  <Box
                    component="img"
                    src={stethoscopeIcon}
                    alt="Service Icon"
                    sx={{
                      width: { xs: "24px", sm: "28px", md: "32px" },
                      height: "auto",
                      filter:
                        "brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(1352%) hue-rotate(201deg) brightness(97%) contrast(96%)",
                    }}
                  />
                </Box>

                {/* Service Name */}
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 500,
                    fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
                    color: "#1a1a1a",
                    flex: 1,
                  }}
                >
                  {service}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServiceSection;
