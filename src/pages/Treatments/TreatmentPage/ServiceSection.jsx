import { Box, Container, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { getTreatmentByRoute } from "../../../utils/treatmentsData";
import stethoscopeIcon from "../../../assets/clinic/FourLogos/stethoscope 1.svg";

const ServiceSection = ({ title, subtitle, services }) => {
  const location = useLocation();

  const treatmentData = getTreatmentByRoute(location.pathname);

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
        backgroundColor: "#FBF9FA",
        py: {
          xs: "40px",
          sm: "48px",
          md: "56px",
          lg: "72px",
          xl: "80px",
        },
      }}
    >
      {/* 🔹 Fixed Figma Width Container */}
      <Container
        maxWidth={false}
        sx={{
          maxWidth: { xs: "100%", sm: "100%", md: "100%", lg: "1271px" },
          mx: "auto",
          px: { xs: 2, sm: 3, md: 4, lg: 0 },
        }}
      >
        {/* 🔹 Section Header */}
        <Box
          sx={{
            textAlign: "center",
            mb: {
              xs: "32px",
              sm: "40px",
              md: "48px",
              lg: "62px",
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              fontSize: {
                xs: "18px",
                sm: "20px",
                md: "22px",
                lg: "24px",
              },
              color: "#1A1A1A",
              mb: { xs: "10px", sm: "12px", md: "12px" },
            }}
          >
            {finalTitle}
          </Typography>

          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontSize: {
                xs: "13px",
                sm: "14px",
                md: "15px",
                lg: "16px",
              },
              fontWeight: 300,
              color: "#666666",
              maxWidth: { xs: "100%", sm: "600px", md: "650px", lg: "700px" },
              mx: "auto",
              lineHeight: 1.6,
              px: { xs: 1, sm: 0 },
            }}
          >
            {finalSubtitle}
          </Typography>
        </Box>

        {/* 🔹 Services Grid (FIXED: Left-aligned last row) */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(2, 344px)",
              lg: "repeat(3, 344px)",
            },
            rowGap: {
              xs: "20px",
              sm: "24px",
              md: "32px",
              lg: "62px",
            },

            // ✅ horizontal spacing (left ↔ right)
            columnGap: {
              xs: "20px",
              sm: "24px",
              md: "32px",
              lg: "112px",
            },
            justifyContent: {
              xs: "stretch",
              sm: "stretch",
              md: "center",
              lg: "center",
            }, // ✅ KEY FIX
          }}
        >
          {finalServices.map((service, index) => (
            <Box
              key={index}
              sx={{
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "100%",
                  lg: "344px",
                },
                maxWidth: {
                  xs: "100%",
                  sm: "100%",
                  md: "400px",
                  lg: "344px",
                },
                minHeight: {
                  xs: "68px",
                  sm: "72px",
                  md: "80px",
                  lg: "84px",
                },
                display: "flex",
                alignItems: "center",
                gap: { xs: "12px", sm: "14px", md: "16px" },
                px: {
                  xs: "14px",
                  sm: "16px",
                  md: "20px",
                  lg: "24px",
                },
                py: {
                  xs: "14px",
                  sm: "16px",
                  md: "18px",
                  lg: "20px",
                },
                backgroundColor: "#FFFFFF",
                borderRadius: "18px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                transition: "all 0.25s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 16px rgba(0, 0, 0, 0.12)",
                },
              }}
            >
              {/* 🔹 Icon */}
              <Box
                sx={{
                  width: {
                    xs: "40px",
                    sm: "44px",
                    md: "52px",
                    lg: "56px",
                  },
                  height: {
                    xs: "40px",
                    sm: "44px",
                    md: "52px",
                    lg: "56px",
                  },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  backgroundColor: "rgba(21, 93, 252, 0.1)",
                  flexShrink: 0,
                }}
              >
                <Box
                  component="img"
                  src={stethoscopeIcon}
                  alt="Service Icon"
                  sx={{
                    width: {
                      xs: "20px",
                      sm: "22px",
                      md: "26px",
                      lg: "28px",
                    },
                  }}
                />
              </Box>

              {/* 🔹 Service Text */}
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 500,
                  fontSize: {
                    xs: "13px",
                    sm: "14px",
                    md: "15px",
                    lg: "16px",
                  },
                  color: "#1A1A1A",
                  lineHeight: 1.4,
                }}
              >
                {service}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ServiceSection;
