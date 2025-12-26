import { Box, Container, Typography, Grid } from "@mui/material";
import compassionateCareIcon from "../../assets/clinic/ValueIcons/compassionate-care.svg";
import excellenceIcon from "../../assets/clinic/ValueIcons/excellence.svg";
import patientCenteredIcon from "../../assets/clinic/ValueIcons/patient-centered.svg";
import innovationIcon from "../../assets/clinic/ValueIcons/innovation.svg";

export default function CoreValuesSection() {
  const values = [
    {
      title: "Compassionate Care",
      description:
        "We support every patient with empathetic, respectful, and gentle homeopathic treatment for lasting comfort.",
      icon: compassionateCareIcon,
      iconAlt: "Compassionate Care Icon",
    },
    {
      title: "Excellence",
      description:
        "We deliver reliable, high-quality homeopathy care through trusted methods and consistent clinical experience.",
      icon: excellenceIcon,
      iconAlt: "Excellence Icon",
    },
    {
      title: "Patient-Centered",
      description:
        "We listen deeply, offering homeopathic care that supports physical recovery and emotional well-being.",
      icon: patientCenteredIcon,
      iconAlt: "Patient-Centered Icon",
    },
    {
      title: "Innovation",
      description:
        "We advance our homeopathic clinic with modern approaches, thoughtful practices, and updated treatment insights.",
      icon: innovationIcon,
      iconAlt: "Innovation Icon",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: { xs: "auto", md: "334px" },
        backgroundColor: "#F8FAFF",
        py: { xs: 2, sm: 4, md: 4, lg: 5 },
        display: "flex",
        bottom: "30px",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          px: { xs: 2, sm: 3, md: 4, lg: 6 },
        }}
      >
        {/* Header Section */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 4, sm: 5, md: 6, lg: 6 },
            mx: "auto",
            maxWidth: { xs: "100%", sm: "800px", lg: "900px" },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 500,
              fontSize: {
                xs: "24px",
                sm: "32px",
                md: "24px",
                lg: "30px",
              },
              lineHeight: { xs: 1.2, sm: 1.1 },
              color: "#000000",
              mb: { xs: 1, sm: 2 },
            }}
          >
            Our Core Values
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 500,
              fontSize: {
                xs: "18px",
                sm: "18px",
                md: "18px",
                lg: "20px",
              },
              lineHeight: { xs: 1.3, sm: 1.2 },
              color: "#000000",
              opacity: 0.8,
            }}
          >
            The principles that guide our every decision and action
          </Typography>
        </Box>

        <Box
          sx={{
            maxWidth: "1284px",
            minHeight: "224px",
            mx: "auto",
            px: { xs: 2, sm: 4, md: 4, lg: 0 }, // Reduced on desktop
          }}
        >
          <Grid
            container
            spacing={{ xs: 3, sm: 4, md: 3, lg: 2 }} // Reduced spacing on desktop
            sx={{
              justifyContent: { xs: "center", md: "space-between" },
              alignItems: "stretch",
            }}
          >
            {values.map((value, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                lg={3}
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  height: "100%",
                  px: { lg: 1 }, // Add small padding on desktop
                }}
              >
                {/* Icon Container */}
                <Box
                  sx={{
                    width: {
                      xs: "70px",
                      sm: "90px",
                      md: "100px",
                      lg: "100px", // Reduced from 120px
                    },
                    height: {
                      xs: "70px",
                      sm: "90px",
                      md: "100px",
                      lg: "100px", // Reduced from 120px
                    },
                    mb: { xs: 2, sm: 3, md: 3, lg: 3 }, // Reduced on desktop
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={value.icon}
                    alt={value.iconAlt}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>

                {/* Title */}
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 400,
                    fontSize: {
                      xs: "16px",
                      sm: "18px",
                      md: "20px",
                      lg: "22px",
                    },
                    lineHeight: 1.2,
                    color: "#000000",
                    mb: { xs: 4, sm: 1.5, md: 1.5, lg: 1.5 },
                    px: { xs: 0.5, sm: 0, lg: 0.5 },
                  }}
                >
                  {value.title}
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 400,
                    fontSize: {
                      xs: "13px",
                      sm: "14px",
                      md: "15px",
                      lg: "15px", // Reduced from 17px
                    },
                    lineHeight: { xs: 1.4, sm: 1.5, md: 1.5, lg: 1.5 },
                    color: "#666",
                    maxWidth: {
                      xs: "100%",
                      sm: "260px",
                      md: "250px",
                      lg: "250px", // Reduced from 280px
                    },
                    mx: "auto",
                    px: { xs: 1, sm: 0.5, md: 0, lg: 0.5 },
                  }}
                >
                  {value.description}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
