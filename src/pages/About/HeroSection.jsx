import { Box, Container, Typography } from "@mui/material";
import aboutHeroImage from "../../assets/clinic/HeroSectionImg/hospital-svgrepo-com 1.svg";

export default function AboutHeroSection() {
  
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#f0f4f8",
        py: { xs: 3, sm: 4, md: 6, lg: 8 },
        display: "flex",
        alignItems: "center",
        minHeight: { xs: "auto", sm: "400px", md: "500px", lg: "544px" },
      }}
    >
      <Container 
        maxWidth="xl"
        sx={{
          px: { xs: 2, sm: 3, md: 4, lg: 6 }
        }}
      >
        {/* Header Section */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 3, sm: 4, md: 5, lg: 6 },
            mx: "auto",
            maxWidth: { xs: "100%", sm: "674px", lg: "800px" },
            width: "100%",
          }}
        >
         
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 500,
              fontSize: { 
                xs: "24px",    // Mobile
                sm: "28px",    // Small tablets
                md: "32px",    // Tablets
                lg: "36px"     // Desktop
              },
              lineHeight: { xs: 1.2, sm: 1.1 },
              color: "#000000",
              mb: { xs: 1, sm: 2 },
            }}
          >
            About Nirmal Health Care
          </Typography>

          {/* Subheading */}
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 500,
              fontSize: { 
                xs: "16px",    // Mobile
                sm: "18px",    // Small tablets
                md: "20px",    // Tablets
                lg: "20px"     // Desktop
              },
              lineHeight: { xs: 1.3, sm: 1.2 },
              color: "#000000",
              opacity: 0.8,
            }}
          >
            A legacy of care, excellence, and innovation in healthcare services
          </Typography>
        </Box>

       
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 4, sm: 6, md: 8, lg: 10 },
          }}
        >
          
          <Box
            sx={{
              flex: { xs: "1 1 100%", md: "1 1 50%" },
              order: { xs: 2, md: 1 }, 
              width: "100%",
              maxWidth: { xs: "100%", md: "600px", lg: "797px" },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: { 
                  xs: "20px",    // Mobile
                  sm: "22px",    // Small tablets
                  md: "24px",    // Tablets
                  lg: "28px"     // Desktop
                },
                color: "#155DFC",
                mb: { xs: 2, sm: 3, md: 4 },
              }}
            >
              Our Story
            </Typography>

            
            <Box 
              sx={{ 
                display: "flex", 
                flexDirection: "column",
                gap: { xs: 3, sm: 4 },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 400,
                  fontSize: { 
                    xs: "14px",    // Mobile
                    sm: "15px",    // Small tablets
                    md: "16px",    // Tablets
                    lg: "17px"     // Desktop
                  },
                  lineHeight: { xs: 1.6, sm: 1.7, md: 1.75 },
                  color: "#000000",
                  textAlign: { xs: "justify", sm: "left" },
                }}
              >
                Founded over two decades ago, Healing Touch Clinic began with a simple yet powerful vision: to provide world-class healthcare services with a personal touch. What started as a small practice has grown into a comprehensive medical facility trusted by thousands.
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 400,
                  fontSize: { 
                    xs: "14px",    // Mobile
                    sm: "15px",    // Small tablets
                    md: "16px",    // Tablets
                    lg: "17px"     // Desktop
                  },
                  lineHeight: { xs: 1.6, sm: 1.7, md: 1.75 },
                  color: "#000000",
                  textAlign: { xs: "justify", sm: "left" },
                }}
              >
                Our journey has been marked by continuous growth, innovation, and an unwavering commitment to patient care. We've expanded our services to include specialized treatments in spine care, gastrointestinal health, and advanced cosmetology, always staying at the forefront of medical advancement.
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 400,
                  fontSize: { 
                    xs: "14px",    // Mobile
                    sm: "15px",    // Small tablets
                    md: "16px",    // Tablets
                    lg: "17px"     // Desktop
                  },
                  lineHeight: { xs: 1.6, sm: 1.7, md: 1.75 },
                  color: "#000000",
                  textAlign: { xs: "justify", sm: "left" },
                }}
              >
                Today, we stand proud as a beacon of healthcare excellence, combining cutting-edge medical technology with the warmth and compassion that has been our hallmark since day one.
              </Typography>
            </Box>
          </Box>

          {/* RIGHT IMAGE */}
          <Box
            sx={{
              flex: { xs: "1 1 100%", md: "1 1 50%" },
              order: { xs: 1, md: 2 },
              display: "flex",
              justifyContent: { xs: "center", md: "center", lg: "flex-end" },
              alignItems: "center",
              width: "100%",
              maxWidth: { xs: "100%", md: "600px", lg: "797px" },
            }}
          >
            <Box
              component="img"
              src={aboutHeroImage}
              alt="Hospital Illustration"
              sx={{
                width: "100%",
                maxWidth: { 
                  xs: "250px",   // Mobile
                  sm: "300px",   // Small tablets
                  md: "350px",   // Tablets
                  lg: "389px"    // Desktop
                },
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}