import { Box, Typography } from "@mui/material";
import ClockIcon from "../../assets/Appointment/clock.svg";

const ClockIconComponent = () => (
  <Box
    component="img"
    src={ClockIcon}
    alt="Clock Icon"
    sx={{
      width: "25px",
      height: "25px",
      display: "flex",
      alignItems: "center",
      color: "#FFFFFF",
    }}
  />
);

const OfficeHoursCard = () => {
  return (
    <Box
      sx={{
        width: {
          xs: "100%", // mobile
          sm: "850px", // iPad mini
          md: "500", // iPad air
          lg: "100%", // Take full width
          xl: "100%", // Take full width
        },
        maxWidth: {
          xs: "100%", // mobile
          sm: "658px",
          md: "460px",
          lg: "539px", // Max width on desktop
          xl: "539px",
        },
        height: {
          xs: "220px", // mobile (more height)
          sm: "225px", // iPad mini
          md: "230px", // iPad air
          lg: "242px", // laptop
          xl: "242px", // big desktop
        },
        backgroundColor: "#FFFFFF",
        borderRadius: "12px",
        border: "1px solid #E0E0E0",
        boxShadow: "0px 2.58px 7.74px rgba(0, 0, 0, 0.1)",
        p: {
          xs: "20px 16px",
          sm: "18px 20px",
          md: "16px 22px",
          lg: "16px 24px",
          xl: "18px 26px",
        },
        display: "flex",
        flexDirection: "column",

        position: "relative",
        top: 0,
        left: 0,
        transform: "none",
        opacity: 1,
        transition: "all 0.3s ease",
        mx: { xs: "auto", lg: 0 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: {
            xs: 2, // 4px
            sm: 0.75, // 6px
            md: 1, // 8px
            lg: 1.25, // 10px
            xl: 1.5, // 12px
          },

          mb: {
            xs: 3,
            sm: 4.5,
            md: 4,
            lg: 4,
            xl: 4.5,
          },
        }}
      >
        {/* Clock Icon */}
        <Box
          sx={{
            width: {
              xs: "20px",
              sm: "22px",
              md: "24px",
              lg: "26px",
              xl: "28px",
            },
            height: {
              xs: "20px",
              sm: "22px",
              md: "24px",
              lg: "26px",
              xl: "28px",
            },
          }}
        >
          <ClockIconComponent />
        </Box>

        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontSize: {
              xs: "15px",
              sm: "16px",
              md: "16px",
              lg: "21px",
              xl: "22px",
            },
            lineHeight: "145%",
            color: "#000000",
          }}
        >
          Office Hours
        </Typography>
      </Box>

      
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {/* Monday - Saturday */}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 300,
              fontSize: {
                xs: "15px",
                sm: "17px",
                md: "17px",
                lg: "17px",
                xl: "17.5px",
              },
              color: "#000000",
            }}
          >
            Monday - Saturday
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 300,
              fontSize: {
                xs: "15px",
                sm: "17px",
                md: "17px",
                lg: "17px",
                xl: "17.5px",
              },
              color: "#000000",
            }}
          >
            10:00 AM - 6:30 PM
          </Typography>
        </Box>

        {/* Divider Line */}
        <Box
          sx={{
            height: "1px",
            backgroundColor: "#E0E0E0",
            width: "100%",
          }}
        />

        {/* Sunday */}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 300,
              fontSize: {
                xs: "15px",
                sm: "17px",
                md: "17px",
                lg: "17px",
                xl: "17.5px",
              },
              color: "#000000",
            }}
          >
            Sunday
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 300,
              fontSize: {
                xs: "15px",
                sm: "17px",
                md: "17px",
                lg: "17px",
                xl: "17.5px",
              },
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
