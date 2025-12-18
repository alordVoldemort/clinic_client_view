import { Box, Typography } from "@mui/material";
import PhoneSVG from "../../assets/Appointment/PhoneIcon.svg";
import EmailSVG from "../../assets/Appointment/EmailIcon.svg";
import LocationSVG from "../../assets/Appointment/LocationIcon.svg";

const ContactCards = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: { xs: "wrap", lg: "nowrap" }, 
        justifyContent: "center",
        gap: { xs: 2, sm: 2, md: 3, lg: "42px" },
        mb: { xs: 4, sm: 5, md: 6, lg: 8 },
        px: { xs: 1, sm: 0 },
        width: { lg: "1194px" },
        height: { lg: "227px" },
        mx: { lg: "auto" },
      }}
    >
      {/* Phone Card */}
      <Box
        sx={{
          border: "1px solid #eee",
          padding: { xs: "12px", sm: "14px", md: "16px", lg: "10px" },
          borderRadius: "13px",
          height: { xs: "160px", sm: "227px", md: "227px", lg: "227px" },
          width: { xs: "100%", sm: "370px", md: "370px", lg: "370px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            transform: "translateY(-4px)",
          },
          flexShrink: 0, // Prevent cards from shrinking on larger screens
        }}
      >
        <Box
          component="img"
          src={PhoneSVG}
          alt="Phone Icon"
          sx={{ 
            width: 70, 
            height: 70, 
            mb: 1,
            lg: { mb: 0.75 }
          }}
        />
        <Typography sx={{ 
          fontWeight: 400, 
          fontSize: { xs: "14px", sm: "15px", md: "17px", lg: "18px" }, 
          mb: { lg: 0.5 }
        }}>
          Phone
        </Typography>
        <Typography sx={{ 
          color: "#155DFC", 
          fontSize: { xs: "12px", sm: "13px", md: "14px", lg: "16px" }, 
          mb: { lg: 0.5 }
        }}>
          +91 9822141851
        </Typography>
        <Typography sx={{ 
          fontSize: { xs: "11px", sm: "11px", md: "12px", lg: "14px" }, 
          color: "#404246"
        }}>
          Mon–Sat, 10:00AM–6:30PM
        </Typography>
      </Box>

      {/* Email Card */}
      <Box
        sx={{
          border: "1px solid #eee",
          padding: { xs: "12px", sm: "14px", md: "16px", lg: "10px" },
          borderRadius: "13px",
          height: { xs: "160px", sm: "180px", md: "227px", lg: "227px" },
          width: { xs: "100%", sm: "calc(50% - 8px)", md: "370px", lg: "370px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            transform: "translateY(-4px)",
          },
          flexShrink: 0,
        }}
      >
        <Box
          component="img"
          src={EmailSVG}
          alt="Email Icon"
          sx={{ 
            width: 70, 
            height: 70, 
            mb: 1,
            lg: { mb: 0.75 }
          }}
        />
        <Typography sx={{ 
          fontWeight: 400, 
          fontSize: { xs: "14px", sm: "15px", md: "17px", lg: "18px" }, 
          mb: { lg: 0.5 }
        }}>
          Email
        </Typography>
        <Typography
          sx={{
            color: "#155DFC",
            fontSize: { xs: "10px", sm: "11px", md: "12px", lg: "14px" },
            wordBreak: "break-word",
            px: { xs: 1, sm: 2, lg: 1 },
            mb: { lg: 0.5 },
          }}
        >
          drdardasnirmalhealthcare@gmail.com
        </Typography>
        <Typography sx={{ 
          fontSize: { xs: "11px", sm: "11px", md: "12px", lg: "14px" }, 
          color: "#404246"
        }}>
          We'll reply within 24h
        </Typography>
      </Box>

      {/* Location Card */}
      <Box
        sx={{
          border: "1px solid #eee",
          padding: { xs: "12px", sm: "14px", md: "16px", lg: "10px" },
          borderRadius: "13px",
          height: { xs: "160px", sm: "180px", md: "227px", lg: "227px" },
          width: { xs: "100%", sm: "100%", md: "370px", lg: "370px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            transform: "translateY(-4px)",
          },
          flexShrink: 0,
        }}
      >
        <Box
          component="img"
          src={LocationSVG}
          alt="Location Icon"
          sx={{ 
            width: 70, 
            height: 70, 
            mb: 1,
            lg: { mb: 0.75 }
          }}
        />
        <Typography sx={{ 
          fontWeight: 400, 
          fontSize: { xs: "14px", sm: "15px", md: "17px", lg: "18px" }, 
          mb: { lg: 0.5 },
          color: "#000000"
        }}>
          Location
        </Typography>
        <Typography sx={{ 
          fontSize: { xs: "10px", sm: "11px", md: "12px", lg: "14px" }, 
          lineHeight: 1.4, 
          color: "#404246"
        }}>
          Arthashilp, 1349/50, Bajirao Rd, Below <br/>
          hotel Ganraj, Natu Baag, Shukrawar <br />
          Peth, Pune, Maharashtra 411002
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactCards;