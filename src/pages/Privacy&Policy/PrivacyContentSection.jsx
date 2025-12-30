import { Box, Container, Typography, List, ListItem, ListItemIcon } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function PrivacyContentSection() {
  const privacyPoints = [
    "By using our website or clinic services, you agree to the following",
    "All treatments and remedies are prescribed based on symptoms, medical history, and doctor evaluation.",
    "Appointment time may vary depending on doctor availability and emergency patients.",
    "Fees, consultation charges, and treatment costs may change without prior notice.",
    "Online bookings made with Pay at Clinic do not reserve your slot. You must confirm your appointment manually at the reception.",
    "Homeopathic medicines and treatment response may vary from person to person based on body constitution and lifestyle.",
    "Patients must provide correct medical information and follow treatment instructions for best results.",
    "Personal and medical records shared with us remain confidential and secure.",
    "If you have any concerns regarding these terms, please contact our clinic support.",
  ];

  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 },
        px: { xs: 1.5, sm: 2, md: 3, lg: 0 },
        backgroundColor: "#F2F2F2",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container 
        maxWidth="xl"
        sx={{
          px: { xs: 1, sm: 2, md: 3, lg: 2 },
        }}
      >
        {/* White Card */}
        <Box
          sx={{
            width: { xs: "100%", sm: "95%", md: "85%", lg: "780px" },
            maxWidth: "780px",
            display: "flex",
            flexDirection: "column",
            gap: { xs: 2.5, sm: 3, md: 4 },
            opacity: 1,
            pt: { xs: 3, sm: 4, md: 5, lg: "60px" },
            pr: { xs: 2, sm: 3, md: 4, lg: "50px" },
            pb: { xs: 3, sm: 4, md: 5, lg: "60px" },
            pl: { xs: 2, sm: 3, md: 4, lg: "50px" },
            borderRadius: { xs: "10px", sm: "12px", md: "14px" },
            border: "1px solid #E0E0E0",
            boxShadow: {
              xs: "0px 2px 8px rgba(0, 0, 0, 0.04)",
              sm: "0px 3px 12px rgba(0, 0, 0, 0.05)",
              md: "0px 4px 20px rgba(0, 0, 0, 0.05)",
            },
            mx: "auto",
            backgroundColor: "#FFFFFF",
            overflow: "hidden",
          }}
        >
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: 2, sm: 2.5, md: 3 },
              width: "100%",
              flex: 1,
            }}
          >
            {privacyPoints.map((point, index) => (
              <ListItem
                key={index}
                sx={{
                  alignItems: "flex-start",
                  p: 0,
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: { xs: 1, sm: 0 },
                }}
              >
                {index !== 0 && (
                  <ListItemIcon 
                    sx={{ 
                      minWidth: { xs: "24px", sm: "30px" },
                      mt: { xs: "3px", sm: "3px" },
                      width: { xs: "24px", sm: "auto" },
                      display: "flex",
                      justifyContent: { xs: "flex-start", sm: "center" },
                    }}
                  >
                    <FiberManualRecordIcon
                      sx={{ 
                        fontSize: { xs: "8px", sm: "10px" },
                        color: "#000000",
                      }}
                    />
                  </ListItemIcon>
                )}
                {index === 0 && (
                  <Box
                    sx={{
                      minWidth: { xs: "0px", sm: "0px" },
                      width: "0px",
                    }}
                  />
                )}
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: index === 0 ? 600 : 400, 
                    fontSize: {
                      xs: index === 0 ? "16px" : "14px",
                      sm: index === 0 ? "18px" : "15px",
                      md: index === 0 ? "19px" : "16px",
                    },
                    lineHeight: {
                      xs: index === 0 ? "140%" : 1.5,
                      sm: index === 0 ? "145%" : 1.6,
                    },
                    color: "#333333",
                    flex: 1,
                    wordBreak: "break-word",
                    overflowWrap: "break-word",
                  }}
                >
                  {point}
                </Typography>

              </ListItem>
            ))}
          </List>

          {/* Blue Contact Card */}
          <Box
            sx={{
              width: "100%",
              maxWidth: { xs: "100%", sm: "674px" },
              display: "flex",
              flexDirection: "column",
              gap: { xs: 1.5, sm: 2, md: "17px" },
              opacity: 1,
              pt: { xs: 2, sm: 3, md: "21px" },
              pr: { xs: 2, sm: 3, md: "22px" },
              pb: { xs: 2, sm: 3, md: "21px" },
              pl: { xs: 2, sm: 3, md: "22px" },
              borderRadius: { xs: "7px", sm: "7px" },
              border: "1px solid #3B97FF",
              backgroundColor: "#F2F8FF",
              mt: { xs: 2, sm: 3 },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: { xs: 500, sm: 600 },
                fontSize: { 
                  xs: "18px", 
                  sm: "16px", 
                  md: "20px" 
                },
                color: "#3B3C3D",
                textAlign: { xs: "center", sm: "left" },
                mb: { xs: 1, sm: 0 },
              }}
            >
              Nirmal Health Care
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 1.5, sm: 2, md: 3 },
              }}
            >
              {/* Address Section */}
              <Box 
                sx={{ 
                  display: "flex", 
                  flexDirection: { xs: "column", sm: "row" },
                  gap: { xs: 0.5, sm: 2 },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: { xs: 400, sm: 300 },
                    fontSize: { xs: "13px", sm: "14px" },
                    color: "#2C2C2D",
                    whiteSpace: { xs: "normal", sm: "nowrap" },
                    minWidth: { xs: "auto", sm: "60px" },
                    width: { xs: "100%", sm: "auto" },
                  }}
                >
                  Address
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: { xs: 300, sm: 300 },
                    fontSize: { xs: "12px", sm: "13px", md: "14px" },
                    color: "#2C2C2D",
                    lineHeight: 1.5,
                    flex: 1,
                    wordBreak: "break-word",
                    overflowWrap: "break-word",
                  }}
                >
                  Arthashilp, 1349/50, Bajirao Rd, below hotel Ganraj, Natu Baag, Shukrawar Peth, Pune, Maharashtra 411002
                </Typography>
              </Box>

              {/* Email Section */}
              <Box 
                sx={{ 
                  display: "flex", 
                  flexDirection: { xs: "column", sm: "row" },
                  gap: { xs: 0.5, sm: 2 },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: { xs: 400, sm: 300 },
                    fontSize: { xs: "13px", sm: "14px" },
                    color: "#2C2C2D",
                    whiteSpace: { xs: "normal", sm: "nowrap" },
                    minWidth: { xs: "auto", sm: "60px" },
                    width: { xs: "100%", sm: "auto" },
                  }}
                >
                  Email
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: { xs: 300, sm: 300 },
                    fontSize: { xs: "12px", sm: "13px", md: "14px" },
                    color: "#2C2C2D",
                    wordBreak: "break-all",
                    overflowWrap: "break-word",
                  }}
                >
                  drdardasnirmalhealthcare@gmail.com
                </Typography>
              </Box>

              {/* Phone Section */}
              <Box 
                sx={{ 
                  display: "flex", 
                  flexDirection: { xs: "column", sm: "row" },
                  gap: { xs: 0.5, sm: 2 },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: { xs: 400, sm: 300 },
                    fontSize: { xs: "13px", sm: "14px" },
                    color: "#2C2C2D",
                    whiteSpace: { xs: "normal", sm: "nowrap" },
                    minWidth: { xs: "auto", sm: "60px" },
                    width: { xs: "100%", sm: "auto" },
                  }}
                >
                  Phone
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: { xs: 300, sm: 300 },
                    fontSize: { xs: "12px", sm: "13px", md: "14px" },
                    color: "#2C2C2D",
                  }}
                >
                  +91 9822141851
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}