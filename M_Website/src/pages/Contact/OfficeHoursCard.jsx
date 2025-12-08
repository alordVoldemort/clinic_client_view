import { Box, Typography } from "@mui/material";

const OfficeHoursCard = () => {
  return (
    <Box
      
sx={{
  width: {
    xs: "280px", // mobile
    sm: "850px", // iPad mini
    md: "500", // iPad air
    lg: "100%", // Take full width in grid column
  },
  maxWidth: {
    xs: "280px",
    sm: "658px",
    md: "460px",
    lg: "539px", // Max width on desktop
  },
  height: {
    xs: "220px", // mobile (more height)
    sm: "225px", // iPad mini
    md: "230px", // iPad air
    lg: "242px", // laptop
    xl: "240px", // big desktop
  },
  backgroundColor: "#FFFFFF",
  borderRadius: "12px",
  border: "1px solid #E0E0E0",
  boxShadow: "0px 2.58px 7.74px rgba(0, 0, 0, 0.1)",
  p: {
    xs: "20px 16px", // more padding
    sm: "18px 20px",
    md: "16px 22px",
    lg: "16px 24px",
    xl: "18px 26px",
  },
  display: "flex",
  flexDirection: "column",
  // REMOVE ALL ABSOLUTE POSITIONING:
  position: "relative", // Change from "absolute"
  top: 0, // Remove fixed top
  left: 0, // Remove fixed left
  transform: "none", // Remove transform
  opacity: 1,
  transition: "all 0.3s ease",
  mx: { xs: "auto", lg: 0 }, // Center on mobile, left on desktop
}}
    >
      {/* Title with Clock Icon */}
      <Box sx={{ 
        display: "flex", 
        alignItems: "center", 
        gap: {
          xs: 1.5,
          sm: 1.75,
          md: 2,
          lg: 2.25,
          xl: 2.5,
        },
        mb: {
          xs: 3,
          sm: 4.5,
          md: 4,
          lg: 4,
          xl: 4.5,
        }
      }}>
        {/* Clock Icon */}
        <Box sx={{
          width: { xs: "20px", sm: "22px", md: "24px", lg: "26px", xl: "28px" },
          height: { xs: "20px", sm: "22px", md: "24px", lg: "26px", xl: "28px" },
        }}>
          <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 24 24" 
            fill="#000000"
          >
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
          </svg>
        </Box>
        
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontSize: { xs: "18px", sm: "19px", md: "20px", lg: "21px", xl: "22px" },
            lineHeight: "145%",
            color: "#000000",
          }}
        >
          Office Hours
        </Typography>
      </Box>

      {/* Days Container */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {/* Monday - Saturday */}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "15px", sm: "16px", md: "16.5px", lg: "17px", xl: "17.5px" },
              color: "#000000",
            }}
          >
            Monday - Saturday
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "15px", sm: "16px", md: "16.5px", lg: "17px", xl: "17.5px" },
              color: "#000000",
            }}
          >
            10:00 AM - 6:30 PM
          </Typography>
        </Box>

        {/* Divider Line */}
        <Box sx={{ 
          height: "1px", 
          backgroundColor: "#E0E0E0", 
          width: "100%",
        }} />

        {/* Sunday */}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "15px", sm: "16px", md: "16.5px", lg: "17px", xl: "17.5px" },
              color: "#000000",
            }}
          >
            Sunday
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "15px", sm: "16px", md: "16.5px", lg: "17px", xl: "17.5px" },
              color: "#000000",
            }}
          >
            Closed
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default OfficeHoursCard;