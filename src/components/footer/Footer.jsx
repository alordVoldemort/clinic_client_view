import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
  IconButton,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";

import logo from "../../assets/clinic/logo/Group 1686550958.svg";
import facebookIcon from "../../assets/clinic/Footer/Facebook.svg";
import instagramIcon from "../../assets/clinic/Footer/Instagram.svg";
import linkedInIcon from "../../assets/clinic/Footer/LinkedIn.svg";
import emailIcon from "../../assets/clinic/Footer/Email.svg";
import phoneIcon from "../../assets/clinic/Footer/PhoneFooter.svg";
import locationIcon from "../../assets/clinic/Footer/Location.svg";

export default function Footer() {
  // Map Quick Links to their routes
  const quickLinksMap = {
    Home: "/",
    "About Us": "/about",
    "Book Appointment": "/appointment",
    "Contact Us": "/contact",
  };

  // Map treatment names to their routes
  const treatmentRouteMap = {
    "Spine Treatments": "/treatments/spine-treatments",
    "GIT Treatments": "/treatments/git-treatments",
    Cosmetology: "/treatments/cosmetology",
    "Kidney Treatment": "/treatments/kidney-treatment",
    "Gynecologist Treatment": "/treatments/gynecologist-treatment",
    "Migraine Treatment": "/treatments/migraine-treatment",
    "ENT Treatments": "/treatments/ent-treatments",
    "Joint Treatments": "/treatments/joint-treatments",
    "Child Treatments": "/treatments/child-treatments",
  };

  return (
    <Box
      component="footer"
      sx={{
        border: "1px solid",
        borderColor: "#E4E4E4",
        width: "100%",
        backgroundColor: "#F2F8FF",
        color: "#1a1a1a",
        pt: { xs: 4, sm: 5, md: 6, lg: 8 },
        pb: { xs: 3, sm: 4, md: 5, lg: 6 },
        px: { xs: 2, sm: 3, md: 4, lg: 6 },
      }}
    >
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          maxWidth: "1440px",
          mx: "auto",
          px: {
            xs: "5px", // phones → no padding
            sm: "5px", // small tablets → no padding
            md: "15px", // desktop and up → exact Figma spacing
            lg: "32px",
          },
        }}
      >
        <Grid
          container
          spacing={{ xs: 3, sm: 4, md: 4, lg: 10 }}
          sx={{
            flexWrap: { xs: "wrap", sm: "nowrap", md: "nowrap", lg: "nowrap" },
          }}
        >
          {/* ============================
              1️⃣ COMPANY INFO
          ============================ */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              width: { xs: "100%", sm: "200px", md: "300px" },
              mr: { lg: "110px" },
              ml: { lg: "0px" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: { xs: "153px", sm: "153px", md: "153px" },
                mb: "15px",
              }}
            >
              {/* Logo — CENTERED */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  ml: { xs: "-15px", sm: "-35px", md: "-5px", lg: "-2px" },
                }}
              >
                <Box
                  component="img"
                  src={logo}
                  sx={{
                    width: { xs: 40, sm: 45, md: 45 },
                    height: "auto",
                  }}
                />
              </Box>

              {/* Text — LEFT ALIGNED */}
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 500,
                  color: "#0057B7",
                  fontSize: { xs: "12px", sm: "15px", md: "15px" },
                  textAlign: "left",
                  mt: 0.5,
                }}
              >
                Nirmal Health Care
              </Typography>
            </Box>

            <Typography
              sx={{
                color: "#808080",
                fontSize: {
                  xs: "0.8rem",
                  sm: "0.85rem",
                  md: "0.9rem",
                  lg: "0.95rem",
                },
                lineHeight: 1.7,
                mb: { xs: 2, sm: 2.5, md: 3 },
                display: { xs: "block", sm: "block", md: "block" },
              }}
            >
              Providing excellence in healthcare with compassion and expertise.
              Your health and well-being are our top priorities.
            </Typography>

            {/* SOCIAL ICONS */}
            <Box sx={{ display: "flex", gap: { xs: 1, sm: 1.2, md: 1.5 } }}>
              {[facebookIcon, instagramIcon, linkedInIcon].map((icon, i) => (
                <IconButton
                  key={i}
                  sx={{
                    width: { xs: 32, sm: 36, md: 40, lg: 45 },
                    height: { xs: 32, sm: 36, md: 40, lg: 45 },
                    p: { xs: 0.5, sm: 0.75 },
                  }}
                >
                  <Box
                    component="img"
                    src={icon}
                    sx={{
                      width: { xs: "24px", sm: "26px", md: "28px", lg: "29px" },
                      height: {
                        xs: "24px",
                        sm: "26px",
                        md: "28px",
                        lg: "28px",
                      },
                    }}
                  />
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* ============================
              2️⃣ QUICK LINKS
          ============================ */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{ width: { xs: "100%", sm: "150px", md: "180px" } }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                mb: { xs: 1.5, sm: 2, md: 2.5 },
                fontSize: {
                  xs: "16px",
                  sm: "16px",
                  md: "17px",
                  lg: "17px",
                },
              }}
            >
              Quick Links
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 1, sm: 1.5, md: 2, lg: 2.5 },
              }}
            >
              {["Home", "About Us", "Book Appointment", "Contact Us"].map(
                (item) => (
                  <MuiLink
                    key={item}
                    component={Link}
                    to={quickLinksMap[item] || "/"}
                    underline="none"
                    sx={{
                      color: "#0C0E11",
                      fontWeight: 300,
                      fontSize: {
                        xs: "16px",
                        sm: "16px",
                        md: "16px",
                        lg: "16px",
                      },
                      "&:hover": { color: "#1976d2" },
                    }}
                  >
                    {item}
                  </MuiLink>
                )
              )}
            </Box>
          </Grid>

          {/* ============================
              3️⃣ TREATMENTS
          ============================ */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{ width: { xs: "100%", sm: "157px", md: "220px" } }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                mb: { xs: 1.5, sm: 2, md: 2.5 },
                fontSize: {
                  xs: "17px",
                  sm: "17px",
                  md: "17px",
                  lg: "17px",
                },
              }}
            >
              Our Treatments
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 1, sm: 1.5, md: 2, lg: 2.5 },
              }}
            >
              {[
                "Spine Treatments",
                "GIT Treatments",
                "Cosmetology",
                "Kidney Treatment",
                "Gynecology Treatment",
                "Migraine Treatment",
                "ENT Treatments",
                "Joint Treatments",
                "Child Treatments",
              ].map((item) => (
                <MuiLink
                  key={item}
                  component={Link}
                  to={treatmentRouteMap[item] || "/"}
                  underline="none"
                  sx={{
                    color: "#0C0E11",
                    fontSize: {
                      xs: "16px",
                      sm: "16px",
                      md: "16px",
                      lg: "16px",
                    },
                    fontWeight: 300,
                    "&:hover": { color: "#1976d2" },
                  }}
                >
                  {item}
                </MuiLink>
              ))}
            </Box>
          </Grid>

          {/* ============================
              4️⃣ CONTACT US
          ============================ */}
          <Grid
            item
            xs={12}
            sm={3}
            md={3}
            sx={{
              width: { xs: "100%", sm: "170px", md: "394px" },
              maxWidth: { xs: "100%", sm: "175px", md: "394px" },
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                mb: { xs: 1.5, sm: 2, md: 2.5 },
                fontSize: {
                  xs: "17px",
                  sm: "17px",
                  md: "17px",
                  lg: "17px",
                },
              }}
            >
              Contact Us
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 1.5, sm: 2, md: 2.5, lg: 3 },
              }}
            >
              {/* Location */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: { xs: 0.75, sm: 1 },
                }}
              >
                <Box
                  component="img"
                  src={locationIcon}
                  sx={{
                    width: { xs: "18px", sm: "20px" },
                    mt: 0.5,
                    flexShrink: 0,
                  }}
                />

                <Typography
                  sx={{
                    color: "#404246",
                    fontSize: {
                      xs: "16px",
                      sm: "16px",
                      md: "16px",
                      lg: "16px",
                    },
                    lineHeight: 1.6,
                    wordBreak: "break-word",
                  }}
                >
                  Arthashilp, 1349/50, Bajirao Rd, below hotel Ganraj, Natu
                  Baag, Shukrawar Peth, Pune, Maharashtra 411002
                </Typography>
              </Box>

              {/* Phone */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 0.75, sm: 1 },
                }}
              >
                <Box
                  component="img"
                  src={phoneIcon}
                  sx={{
                    width: { xs: "18px", sm: "20px" },
                    flexShrink: 0,
                  }}
                />
                <Typography
                  sx={{
                    color: "#404246",
                    fontSize: {
                      xs: "0.8rem",
                      sm: "0.85rem",
                      md: "0.9rem",
                      lg: "0.95rem",
                    },
                  }}
                >
                  +91 9822141851
                </Typography>
              </Box>

              {/* Email */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 0.75, sm: 1 },
                }}
              >
                <Box
                  component="img"
                  src={emailIcon}
                  sx={{
                    width: { xs: "18px", sm: "20px" },
                    flexShrink: 0,
                  }}
                />
                <Typography
                  sx={{
                    color: "#404246",
                    fontSize: {
                      xs: "0.8rem",
                      sm: "0.85rem",
                      md: "0.9rem",
                      lg: "0.95rem",
                    },
                    wordBreak: "break-word",
                  }}
                >
                  drdardasnirmalhealthcare@gmail.com{" "}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* DIVIDER */}
        <Divider
          sx={{
            mt: { xs: 3, sm: 4, md: 5 },
            mb: { xs: 2, sm: 3, md: 4 },
            borderColor: "rgba(0, 0, 0, 0.1)",
          }}
        />

        {/* BOTTOM BAR */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: { xs: "center", sm: "space-between" },
            alignItems: "center",
            gap: { xs: 2, sm: 0 },
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem" },
              color: "#555",
            }}
          >
            © 2025 zonixtec. All rights reserved.
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: { xs: 2, sm: 3 },
              flexWrap: "wrap",
              justifyContent: { xs: "center", sm: "flex-end" },
            }}
          >
            {/* Privacy Policy Link */}
            <MuiLink
              component={Link}
              to="/privacy-policy"
              underline="none"
              sx={{
                color: "#555",
                fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem" },
                "&:hover": { color: "#1976d2" },
              }}
            >
              Privacy Policy
            </MuiLink>

            {/* Terms & Conditions Link */}
            <MuiLink
              component={Link}
              to="/terms"
              underline="none"
              sx={{
                color: "#555",
                fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem" },
                "&:hover": { color: "#1976d2" },
              }}
              onClick={() => console.log("Terms link clicked")}
            >
              Terms & Conditions
            </MuiLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
