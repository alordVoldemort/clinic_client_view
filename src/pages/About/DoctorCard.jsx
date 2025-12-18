import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

export default function DoctorCard({ name, specialty, image, description }) {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: 280, md: 300, lg: 360 },
        maxWidth: 360,
        mx: "auto",
        borderRadius: "16px",
        backgroundColor: "#fff",
        boxShadow: "0px 8px 24px rgba(0,0,0,0.06)",
        overflow: "hidden",
        transition: "0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0px 12px 28px rgba(96,183,255,0.15)",
        },
      }}
    >
      {/* Image */}
      <CardMedia
        component="img"
        image={image}
        alt={name}
        sx={{
          height: 260,
          objectFit: "cover",
        }}
      />

      {/* Content */}
      <CardContent
        sx={{
          p: 3,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            color: "#1a1a1a",
            mb: 2,
          }}
        >
          {name}
        </Typography>

        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "15px",
            color: "#155DFC",
            mb: 2,
          }}
        >
          {specialty}
        </Typography>

        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "15px",
            color: "#242528",
            lineHeight: 1.6,
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
