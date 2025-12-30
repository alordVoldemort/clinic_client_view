import { Box, Container, Typography } from "@mui/material";
import termsHeroImage from "../../assets/Terms&Condition/terms-hero.svg"; // Import SVG

export default function TermsHeroSection() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#F4F9FF",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: { xs: "400px", sm: "400px", md: "500px", lg: "370px" },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          px: { xs: 2, sm: 3, md: 4, lg: 6 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* SVG Image */}
        <Box
          component="img"
          src={termsHeroImage}
          alt="Terms and Conditions Illustration"
          sx={{
            width: "100%",
            maxWidth: {
              xs: "100px", // Mobile
              sm: "100px", // Small tablets
              md: "150px", // Tablets
              lg: "80px", // Desktop
            },
            height: "80px",
            margintop: "10px",
          }}
        />

        <Box
          sx={{
            width: { xs: "100%", md: "800px" },
            height: { xs: "auto", md: "200px" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 4, md: "12px" },
            opacity: 1,
            pt: "10px",
            pr: "9px",
            pb: "10px",
            pl: "9px",
            mx: "auto",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              fontStyle: "regular",
              fontSize: {
                xs: "28px", // Mobile
                sm: "32px", // Small tablets
                md: "36px", // Desktop
              },
              lineHeight: "145%",
              letterSpacing: "0%",
              color: "#000000",
              textAlign: "center",
              width: { xs: "100%", md: "361px" },
              height: { xs: "auto", md: "52px" },
              pb: "10px",
              pl: "9px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Terms & Conditions
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              fontStyle: "regular",
              fontSize: "16px",
              lineHeight: "145%",
              letterSpacing: "0%",
              color: "#000000",
              textAlign: "center",

              maxWidth: "100%",
              opacity: 0.9,
            }}
          >
            These terms help ensure smooth service, clarity, and patient
            understanding.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
