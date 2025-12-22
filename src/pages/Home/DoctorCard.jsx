import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

export default function DoctorCard({ name, specialty, image }) {
  return (
    <Card
      sx={{
        justifyContent: "center",
        width: {
          xs: "270px", // mobile
          sm: "280px", // small tablets
          md: "300px", // iPad Mini/Air
          lg: "360px", // laptop
          xl: "380px", // large desktops (your Figma value)
        },
        height: {
          xs: 320,
          sm: 380,
          md: 420,
          lg: 470,
        },
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        borderRadius: "23px",
        overflow: "hidden",
        backgroundColor: "#ffffffff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        transition: "0.3s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 8px 24px rgba(96, 183, 255, 0.12)",
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
            height: { xs: "240px", sm: "220px", md: "340px" },
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      </Box>
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          textAlign: "flex-start",
          p: { xs: 0, sm: 0, md: 0 },
          justifyContent: "center",
          ml: "20px",
          mt: "15px",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontSize: {
              xs: "16px",
              sm: "16px",
              md: "16px",
            },
            color: "#000000",
            mb: 1.5,
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            color: "#155DFC",
            fontSize: { xs: "14px", sm: "14px", md: "14px" },
            fontWeight: 400,
          }}
        >
          {specialty}
        </Typography>
      </CardContent>
    </Card>
  );
}
