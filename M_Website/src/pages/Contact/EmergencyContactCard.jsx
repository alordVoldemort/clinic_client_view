import { Box, Typography } from "@mui/material";

const EmergencyContactCard = () => {
  return (
    <Box
      sx={{
        width: {
          xs: "100%", // Full width on mobile
          sm: "100%", // Full width on tablet
          md: "100%", // Full width on medium screens
          lg: "100%", // Take full width in grid column
        },
        maxWidth: {
          xs: "100%",
          sm: "100%",
          md: "100%",
          lg: "100%",
        },
        height: {
          xs: "auto", // Auto height on mobile
          sm: "auto",
          md: "auto",
          lg: "242px",
        },
        minHeight: {
          xs: "180px",
          sm: "200px",
          md: "200px",
          lg: "242px",
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
            fontWeight: 500,
            fontSize: {
              xs: "18px",
              sm: "19px",
              md: "20px",
              lg: "21px",
              xl: "22px",
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
            fontWeight: 400,
            fontSize: {
              xs: "14px",
              sm: "15px",
              md: "15px",
              lg: "16px",
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
            xs: "100%", // full width on mobile
            sm: "auto", // auto width on tablet+
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
            xs: "10px",
            sm: "12px",
            md: "12px",
            lg: "14px",
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
        onClick={() => window.location.href = "tel:+91982214651"}
      >
        {/* Phone Icon Container */}
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
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
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 24 24"  
            xmlns="http://www.w3.org/2000/svg"
            style={{
              width: "70%",
              height: "70%",
            }}
          >
            <path 
              d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z" 
              fill="#FF6262"
            />
          </svg>
        </Box>

        {/* Phone Number */}
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
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
          +91 982214651
        </Typography>
      </Box>
    </Box>
  );
};

export default EmergencyContactCard;