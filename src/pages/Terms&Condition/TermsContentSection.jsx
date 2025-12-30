import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function TermsContentSection() {
  const terms = [
    "Please review and acknowledge the terms below.",
    "By booking or using our services, you agree to our clinic policies.",
    "Consultation timing may vary depending on doctor availability and patient flow.",
    "Treatment plans are personalized and results may vary from person to person.",
    "Fees and service charges may change without prior notice.",
    "If you choose Pay at Clinic, your appointment is not reserved online and must be confirmed manually at the reception.",
    "All medical records and personal information are kept confidential and used only for treatment purposes.",
    "For any clarification, please contact our clinic reception.",
  ];

  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 2, sm: 3, md: 4, lg: 6, xl: 8 },
        px: { xs: 1, sm: 2, md: 3 },
        backgroundColor: "#F2F2F2",
        display: "flex",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          px: { xs: 0.5, sm: 1, md: 2, lg: 0 },
        }}
      >
        {/* Main White Card Container */}
        <Box
          sx={{
            width: { xs: "100%", sm: "95%", md: "90%", lg: "780px" },
            maxWidth: "780px",
            height: { xs: "auto", sm: "auto", md: "auto", lg: "auto" },
            display: "flex",
            flexDirection: "column",
            gap: { xs: 2.5, sm: "32px", md: 4, lg: "35px" },
            opacity: 1,
            pt: { xs: 3, sm: 4, md: 5, lg: "60px" },
            pr: { xs: 2, sm: 3, md: 4, lg: "50px" },
            pb: { xs: 2, sm: "80px", md: 4, lg: "50px" },
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
            {terms.map((term, index) => (
              <ListItem
                key={index}
                sx={{
                  alignItems: "flex-start",
                  p: 0,
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                {index !== 0 && (
                  <ListItemIcon
                    sx={{
                      minWidth: { xs: "24px", sm: "28px", md: "30px" },
                      mt: {
                        xs: "2px",
                        sm: "2px",
                        md: "3px",
                      },
                      width: { xs: "24px", sm: "auto" },
                      display: "flex",
                      justifyContent: { xs: "flex-start", sm: "center" },
                    }}
                  >
                    <FiberManualRecordIcon
                      sx={{
                        fontSize: { xs: "8px", sm: "9px", md: "10px" },
                        color: "#000000",
                      }}
                    />
                  </ListItemIcon>
                )}
                {index === 0 && (
                  <Box
                    sx={{
                      minWidth: { xs: "0px", sm: "0px", md: "0px" },
                      width: "0px",
                    }}
                  />
                )}
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight:
                      index === 0 ? { xs: 600, sm: 600 } : { xs: 400, sm: 400 },
                    fontSize: {
                      xs: index === 0 ? "15px" : "13px",
                      sm: index === 0 ? "17px" : "14px",
                      md: index === 0 ? "18px" : "15px",
                      lg: index === 0 ? "19px" : "16px",
                    },
                    lineHeight: {
                      xs: index === 0 ? "140%" : 1.5,
                      sm: index === 0 ? "142%" : 1.55,
                      md: index === 0 ? "144%" : 1.58,
                      lg: index === 0 ? "145%" : 1.6,
                    },
                    letterSpacing: index === 0 ? "0%" : "inherit",
                    color: "#333333",
                    flex: 1,
                    wordBreak: "break-word",
                    overflowWrap: "break-word",
                    hyphens: "auto",
                  }}
                >
                  {term}
                </Typography>
              </ListItem>
            ))}
          </List>

          {/* Blue Contact Card */}
          <Box
            sx={{
              width: "100%",
              maxWidth: { xs: "100%", sm: "674px" },
              height: { xs: "auto", md: "auto" },
              display: "flex",
              flexDirection: "column",
              gap: { xs: 1.5, sm: 2, md: "17px" },
              opacity: 1,
              pt: { xs: 2, sm: 3, md: "21px" },
              pr: { xs: 2, sm: 3, md: "22px" },
              pb: { xs: 2, sm: 3, md: "21px" },
              pl: { xs: 2, sm: 3, md: "22px" },
              borderRadius: { xs: "6px", sm: "7px" },
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
                  xs: "17px",
                  sm: "16px",
                  md: "16px",
                  lg: "16px",
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
                  gap: { xs: 0.5, sm: 1.5, md: 2 },
                  alignItems: { xs: "flex-start", sm: "flex-start" },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: { xs: 500, sm: 400, md: 300 },
                    fontSize: { xs: "13px", sm: "13.5px", md: "16px" },
                    color: "#2C2C2D",
                    whiteSpace: { xs: "normal", sm: "nowrap" },
                    minWidth: { xs: "auto", sm: "60px" },
                    width: { xs: "100%", sm: "auto" },
                    flexShrink: 0,
                  }}
                >
                  Address
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: { xs: 400, sm: 300 },
                    fontSize: { xs: "12px", sm: "13px", md: "16px" },
                    color: "#2C2C2D",
                    lineHeight: 1.5,
                    flex: 1,
                    wordBreak: "break-word",
                    overflowWrap: "break-word",
                  }}
                >
                  Arthashilp, 1349/50, Bajirao Rd, below hotel Ganraj, Natu
                  Baag, Shukrawar Peth, Pune, Maharashtra 411002
                </Typography>
              </Box>

              {/* Email Section */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: { xs: 0.5, sm: 1.5, md: 2 },
                  alignItems: { xs: "flex-start", sm: "flex-start" },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: { xs: 500, sm: 400, md: 300 },
                    fontSize: { xs: "13px", sm: "13.5px", md: "16px" },
                    color: "#2C2C2D",
                    whiteSpace: { xs: "normal", sm: "nowrap" },
                    minWidth: { xs: "auto", sm: "60px" },
                    width: { xs: "100%", sm: "auto" },
                    flexShrink: 0,
                  }}
                >
                  Email
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: { xs: 400, sm: 300 },
                    fontSize: { xs: "12px", sm: "13px", md: "16px" },
                    color: "#2C2C2D",
                    wordBreak: "break-all",
                    overflowWrap: "break-word",
                    flex: 1,
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
                  gap: { xs: 0.5, sm: 1.5, md: 2 },
                  alignItems: { xs: "flex-start", sm: "flex-start" },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: { xs: 500, sm: 400, md: 300 },
                    fontSize: { xs: "13px", sm: "13.5px", md: "16px" },
                    color: "#2C2C2D",
                    whiteSpace: { xs: "normal", sm: "nowrap" },
                    minWidth: { xs: "auto", sm: "60px" },
                    width: { xs: "100%", sm: "auto" },
                    flexShrink: 0,
                  }}
                >
                  Phone
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: { xs: 400, sm: 300 },
                    fontSize: { xs: "12px", sm: "13px", md: "16px" },
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
