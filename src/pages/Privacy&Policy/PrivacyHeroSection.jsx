import { Box, Container, Typography } from "@mui/material";
import privacyHeroImage from "../../assets/PrivacyPolicy/privacy-hero.svg";

export default function PrivacyHeroSection() {
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
        <Box
          component="img"
          src={privacyHeroImage}
          alt="Privacy Policy Illustration"
          sx={{
            width: "100%",
            maxWidth: {
              xs: "100px",
              sm: "100px",
              md: "150px",
              lg: "80px",
            },
            height: "80px",
            marginTop: "10px",
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
                xs: "28px",
                sm: "32px",
                md: "36px",
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
            Privacy Policy
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
            We are committed to protecting your privacy. This policy explains
            how we collect, use, store, and protect your personal information
            when you visit our website or receive treatment at our clinic.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
