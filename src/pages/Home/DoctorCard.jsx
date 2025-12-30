import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

export default function DoctorCard({ name, specialty, image }) {
  return (
    <Card
      sx={{
        width: {
          xs: "100%", // mobile - take full width with container padding
          sm: "280px", // small tablets
          md: "300px", // medium tablets
          lg: "350px", // laptop
          xl: "396px", // large desktops
        },
        maxWidth: {
          xs: "320px", // prevent too wide on mobile
          sm: "280px",
          md: "300px",
          lg: "350px",
          xl: "396px",
        },
        height: {
          xs: "auto", // auto height on mobile for better content flow
          sm: "400px",
          md: "420px",
          lg: "450px",
          xl: "450px",
        },
        minHeight: {
          xs: "350px", // ensure minimum height consistency
          sm: "400px",
          md: "420px",
        },
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        borderRadius: "23px",
        overflow: "hidden",
        backgroundColor: "#ffffff",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 12px 32px rgba(96, 183, 255, 0.15)",
        },
      }}
    >
      <Box
        sx={{
          px: { xs: 0, sm: 0, md: 0 },
          pt: { xs: 0, sm: 0, md: 0 },
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt={name}
          sx={{
            width: "100%",
            height: {
              xs: "250px", // consistent mobile height
              sm: "280px", // small tablets
              md: "300px", // medium tablets
              lg: "320px", // laptop
              xl: "340px", // large desktop
            },
            objectFit: "cover",
            objectPosition: "center",
            borderTopLeftRadius: "23px",
            borderTopRightRadius: "23px",
          }}
        />
      </Box>
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          p: {
            xs: "20px", // consistent padding on mobile
            sm: "20px",
            md: "24px",
            lg: "24px",
          },
          "&:last-child": {
            paddingBottom: {
              xs: "20px",
              sm: "20px",
              md: "24px",
            },
          },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 500,
            fontSize: {
              xs: "18px",
              sm: "18px",
              md: "20px",
              lg: "20px",
            },
            color: "#000000",
            mb: 1,
            lineHeight: 1.3,
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            color: "#155DFC",
            fontSize: {
              xs: "14px",
              sm: "14px",
              md: "16px",
              lg: "16px",
            },
            fontWeight: 400,
            lineHeight: 1.4,
          }}
        >
          {specialty}
        </Typography>
      </CardContent>
    </Card>
  );
}
