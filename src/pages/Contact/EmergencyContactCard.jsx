import { Box, Typography } from "@mui/material";
import PhoneIcon from "../../assets/Appointment/white-phone.svg";

const PhoneIconComponent = () => (
  <Box
    component="img"
    src={PhoneIcon}
    alt="Phone Icon"
    sx={{
      width: "20px",
      height: "20px",
      display: "flex",
      alignItems: "center",
      color: "#FFFFFF",
    }}
  />
);

const EmergencyContactCard = () => {
  return (
    <Box
      sx={{
        width: {
          xs: "100%", //  mobile
          sm: "100%", // tablet
          md: "100%", // medium screens
          lg: "100%", // large screens
          xl: "100%", // extra large screens
        },
        maxWidth: {
          xs: "100%",
          sm: "100%",
          md: "100%",
          lg: "539px", 
          xl: "539px",
        },
        height: {
          xs: "auto",
          sm: "auto",
          md: "auto",
          lg: "242px",
          xl: "242px",
        },
        minHeight: {
          xs: "180px",
          sm: "200px",
          md: "200px",
          lg: "242px",
          xl: "242px",
        },
        backgroundColor: "#FFE3E3",
        borderRadius: "12px",
        border: "1px solid #f56666ff",
        boxShadow: "0px 2.58px 7.74px rgba(0, 0, 0, 0.1)",
        p: {
          xs: "20px 16px", // mobile
          sm: "24px 20px", // tablet
          md: "24px 24px", // desktop
          lg: "24px 28px", // large desktop
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "all 0.3s ease",
      }}
    >
      {/* Title - Emergency Contact */}
      <Box>
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontSize: {
              xs: "14px", // mobile
              sm: "16px", // small tablet
              md: "18px", // large tablet
              lg: "16px", // laptop (decreased from 21px)
              xl: "20px", // desktop/large screens
            },

            lineHeight: "145%",
            color: "#000000",
            mb: {
              xs: 1.5,
              sm: 2,
              md: 2,
              lg: 2.5,
            },
          }}
        >
          Emergency Contact
        </Typography>

        {/* Description Text */}
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 300,
            fontSize: {
              xs: "14px",
              sm: "15px",
              md: "15px",
              lg: "17px",
              xl: "17px",
            },
            lineHeight: "145%",
            color: "#666666",
            mb: {
              xs: 2.5,
              sm: 3,
              md: 3,
              lg: 3.5,
            },
          }}
        >
          For medical emergencies, please call our 24/7 helpline
        </Typography>
      </Box>

      {/* Phone Number Container */}
      <Box
        sx={{
          backgroundColor: "#FF6262",
          width: {
            xs: "100%", 
            sm: "auto", 
            md: "auto",
            lg: "215px",
          },
          minWidth: {
            sm: "205px",
            md: "210px",
            lg: "215px",
          },
          height: {
            xs: "48px",
            sm: "50px",
            md: "52px",
            lg: "54px",
            xl: "56px",
          },
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: {
            xs: "6px",
            sm: "6px",
            md: "6px",
            lg: "8px",
          },
          padding: "2px 16px",
          cursor: "pointer",
          alignSelf: {
            xs: "stretch",
            sm: "flex-start",
          },
          "&:hover": {
            backgroundColor: "#E55555",
            transform: "scale(1.02)",
          },
          transition: "all 0.2s ease",
        }}
        onClick={() => (window.location.href = "tel:+91 9822141851")}
      >
        {/* Phone Icon Container */}
        <Box
          sx={{
            borderRadius: "10px",
            width: {
              xs: "34px",
              sm: "36px",
              md: "38px",
              lg: "40px",
            },
            height: {
              xs: "34px",
              sm: "36px",
              md: "38px",
              lg: "40px",
            },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <PhoneIconComponent />
        </Box>

        {/* Phone Number */}
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 300,
            fontSize: {
              xs: "16px",
              sm: "17px",
              md: "18px",
              lg: "18px",
              xl: "19px",
            },
            color: "#FFFFFF",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          +91 9822141851
        </Typography>
      </Box>
    </Box>
  );
};

export default EmergencyContactCard;
