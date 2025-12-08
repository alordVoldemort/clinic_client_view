import { Box, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const ContactCards = () => {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: { xs: 'column', sm: 'row' },
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: { xs: 2, sm: 2, md: 3 },
      mb: { xs: 4, sm: 5, md: 6, lg: 8 },
      px: { xs: 1, sm: 0 } // Add padding on mobile
    }}>
      {/* Phone Card */}
      <Box sx={{
        border: "1px solid #eee",
        padding: { xs: "12px", sm: "14px", md: "16px" },
        borderRadius: "13px",
        height: { 
          xs: "160px",     // Mobile
          sm: "180px",     // Small tablets
          md: "200px",     // Desktop
          lg: "227px",     // Large desktop
        },
        width: { 
          xs: "100%",      // Full width on mobile
          sm: "calc(50% - 8px)",  // 2 cards per row on tablets
          md: "calc(33.33% - 16px)", // 3 cards per row on desktop
        },
        maxWidth: { xs: "100%", sm: "none" },
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
      }}>
        <PhoneIcon sx={{ 
          fontSize: { 
            xs: 28,   // Mobile
            sm: 32,   // Small tablets
            md: 36,   // Desktop
            lg: 40,
          }, 
          mb: 1, 
          color: "#638aff" 
        }} />
        <Typography sx={{ 
          fontWeight: 600, 
          fontSize: { 
            xs: '14px',   // Mobile
            sm: '15px',   // Small tablets
            md: '16px',   // Desktop
            lg: '18px',
          },
          mb: 0.5
        }}>
          Phone
        </Typography>
        <Typography sx={{ 
          color: "#638aff", 
          fontSize: { 
            xs: '12px',   // Mobile
            sm: '13px',   // Small tablets
            md: '14px',   // Desktop
            lg: '16px',
          },
          mb: 0.5
        }}>
          +91 9822141851
        </Typography>
        <Typography sx={{ 
          fontSize: { 
            xs: '11px',   // Mobile
            sm: '11px',   // Small tablets
            md: '12px',   // Desktop
            lg: '14px',
          }, 
          color: '#666'
        }}>
          Mon–Sat, 10:00AM–6:30PM
        </Typography>
      </Box>

      {/* Email Card */}
      <Box sx={{
        border: "1px solid #eee",
        padding: { xs: "12px", sm: "14px", md: "16px" },
        borderRadius: "13px",
        height: { 
          xs: "160px",
          sm: "180px",
          md: "200px",
          lg: "227px",
        },
        width: { 
          xs: "100%",
          sm: "calc(50% - 8px)",
          md: "calc(33.33% - 16px)",
        },
        maxWidth: { xs: "100%", sm: "none" },
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
      }}>
        <EmailIcon sx={{ 
          fontSize: { 
            xs: 28,
            sm: 32,
            md: 36,
            lg: 40,
          }, 
          mb: 1, 
          color: "#638aff" 
        }} />
        <Typography sx={{ 
          fontWeight: 600, 
          fontSize: { 
            xs: '14px',
            sm: '15px',
            md: '16px',
            lg: '18px',
          },
          mb: 0.5
        }}>
          Email
        </Typography>
        <Typography sx={{ 
          color: "#638aff", 
          fontSize: { 
            xs: '10px',
            sm: '11px',
            md: '12px',
            lg: '14px',
          },
          wordBreak: "break-word",
          px: { xs: 1, sm: 2 },
          mb: 0.5
        }}>
          drdradarasimhahealthcare@gmail.com
        </Typography>
        <Typography sx={{ 
          fontSize: { 
            xs: '11px',
            sm: '11px',
            md: '12px',
            lg: '14px',
          }, 
          color: '#666'
        }}>
          We'll reply within 24h
        </Typography>
      </Box>

      {/* Location Card */}
      <Box sx={{
        border: "1px solid #eee",
        padding: { xs: "12px", sm: "14px", md: "16px" },
        borderRadius: "13px",
        height: { 
          xs: "160px",
          sm: "180px",
          md: "200px",
          lg: "227px",
        },
        width: { 
          xs: "100%",
          sm: "100%",  // Full width on tablets for 3rd card
          md: "calc(33.33% - 16px)",
        },
        maxWidth: { xs: "100%", sm: "none" },
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
      }}>
        <LocationOnIcon sx={{ 
          fontSize: { 
            xs: 28,
            sm: 32,
            md: 36,
            lg: 40,
          }, 
          mb: 1, 
          color: "#638aff" 
        }} />
        <Typography sx={{ 
          fontWeight: 600, 
          fontSize: { 
            xs: '14px',
            sm: '15px',
            md: '16px',
            lg: '18px',
          },
          mb: 0.5
        }}>
          Location
        </Typography>
        <Typography sx={{ 
          fontSize: { 
            xs: '10px',
            sm: '11px',
            md: '12px',
            lg: '14px',
          }, 
          lineHeight: 1.4,
          color: '#666'
        }}>
          Arhatship, 1349/50, Bajirao Rd,<br />
          Below Hotel Ganraj, Natu Baug,<br />
          Shukrawar Peth, Pune,<br />
          Maharashtra 411002
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactCards;