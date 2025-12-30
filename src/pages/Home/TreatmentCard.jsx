import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link, useNavigate } from "react-router-dom";

export default function TreatmentCard({ title, description, image, route }) {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    if (route) {
      navigate(route);
    }
  };
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: {
          xs: "100%", // mobile = full width
          sm: "300px", // small tablet
          md: "320px", // iPad Mini/Air/Pro
          lg: "350px", // laptop
          xl: "380px", // big monitors
        },
        minHeight: {
          xs: 400,
          sm: 420,
          md: 450,
          lg: 480,
        },
        display: "flex",
        flexDirection: "column",
        borderRadius: "12px",
        overflow: "hidden",
        backgroundColor: "#F2F8FF",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
        },
      }}
    >
      <Box
        sx={{
          px: { xs: 2, sm: 2.5, md: 3 },
          pt: { xs: 2, sm: 2.5, md: 3 },
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            width: "100%",
            height: { xs: "200px", sm: "220px", md: "240px" },
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
          p: { xs: 2, sm: 2.5, md: 3 },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: {
              xs: "14px",
              sm: "17px",
              md: "17px",
            },
            color: "#1a1a1a",
            mb: -3,
            minHeight: { xs: "3rem", sm: "3.5rem", md: "4rem" },
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            color: "#666",
            fontSize: { xs: "14px", sm: "16px", md: "16px" },
            lineHeight: 1.6,
            mb: 1,
            flexGrow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontWeight: 300,
          }}
        >
          {description}
        </Typography>
        <Button
          endIcon={<ArrowForwardIcon />}
          onClick={handleLearnMoreClick}
          sx={{
            fontFamily: "Poppins, sans-serif",
            alignSelf: "flex-start",
            color: "#155DFC",
            textTransform: "none",
            fontWeight: 300,
            fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
            px: 0,
            mt: "auto",
            "&:hover": {
              backgroundColor: "transparent",
              color: "#155DFC",
            },
          }}
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
}
