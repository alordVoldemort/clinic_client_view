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
    "Gynecology Treatment": "/treatments/gynecologist-treatment",
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
        pt: { xs: 3, sm: 4, md: 5, lg: 6 },
        pb: { xs: 2, sm: 3, md: 4, lg: 5 },
      }}
    >
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          maxWidth: "1440px",
          mx: "auto",
          px: {
            xs: "16px", // Better mobile padding
            sm: "24px", // Tablet padding
            md: "32px", // Desktop padding
            lg: "48px", // Large desktop padding
          },
        }}
      >
        <Grid
          container
          spacing={{ xs: 3, sm: 4, md: 5, lg: 6 }}
          sx={{
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          {/* ============================
              1️⃣ COMPANY INFO
          ============================ */}
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              mb: { xs: 2, sm: 0 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", sm: "flex-start" },
                mb: 3,
              }}
            >
              {/* Logo */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 1,
                }}
              >
                <Box
                  component="img"
                  src={logo}
                  sx={{
                    width: { xs: 40, sm: 42, md: 45 },
                    height: "auto",
                  }}
                />
              </Box>

              {/* Company Name */}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: "#0057B7",
                  fontSize: { xs: "14px", sm: "15px", md: "16px" },
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                Nirmal Health Care
              </Typography>
            </Box>

            <Typography
              sx={{
                color: "#808080",
                fontSize: {
                  xs: "14px",
                  sm: "15px",
                  md: "16px",
                },
                lineHeight: 1.6,
                mb: { xs: 2, sm: 3 },
                textAlign: { xs: "center", sm: "left" },
                maxWidth: { xs: "100%", sm: "280px" },
              }}
            >
              Providing excellence in healthcare with compassion and expertise.
              Your health and well-being are our top priorities.
            </Typography>

            {/* SOCIAL ICONS */}
            <Box 
              sx={{ 
                display: "flex", 
                gap: { xs: 1, sm: 1.5 },
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
            >
              {[
                { icon: facebookIcon, link: "https://www.facebook.com/share/1Jb6gTmuwf/" },
                { icon: instagramIcon, link: "https://www.instagram.com/drdardasnirmalhealthcare?igsh=MTd4MnpnZXZzNGlwaw" },
                { icon: linkedInIcon, link: null },
              ].map((social, i) => (
                <IconButton
                  key={i}
                  component={social.link ? "a" : "button"}
                  href={social.link || undefined}
                  target={social.link ? "_blank" : undefined}
                  rel={social.link ? "noopener noreferrer" : undefined}
                  sx={{
                    width: { xs: 36, sm: 40, md: 44 },
                    height: { xs: 36, sm: 40, md: 44 },
                    p: 0.5,
                    "&:hover": {
                      backgroundColor: "rgba(0, 87, 183, 0.1)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={social.icon}
                    sx={{
                      width: { xs: "20px", sm: "24px", md: "26px" },
                      height: { xs: "20px", sm: "24px", md: "26px" },
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
            md={6}
            lg={2}
            sx={{
              mb: { xs: 2, sm: 0 },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: { xs: 2, sm: 2.5 },
                fontSize: {
                  xs: "16px",
                  sm: "17px",
                  md: "18px",
                },
                color: "#1a1a1a",
              }}
            >
              Quick Links
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 1.5, sm: 2 },
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
            md={6}
            lg={3}
            sx={{
              mb: { xs: 2, sm: 0 },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: { xs: 2, sm: 2.5 },
                fontSize: {
                  xs: "16px",
                  sm: "17px",
                  md: "18px",
                },
                color: "#1a1a1a",
              }}
            >
              Our Treatments
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 1.5, sm: 2 },
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
            sm={12}
            md={12}
            lg={4}
            sx={{
              mb: { xs: 2, sm: 0 },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: { xs: 2, sm: 2.5 },
                fontSize: {
                  xs: "16px",
                  sm: "17px",
                  md: "18px",
                },
                color: "#1a1a1a",
              }}
            >
              Contact Us
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 2, sm: 2.5 },
              }}
            >
              {/* Location */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: { xs: 1, sm: 1.5 },
                }}
              >
                <Box
                  component="img"
                  src={locationIcon}
                  sx={{
                    width: { xs: "18px", sm: "20px" },
                    height: { xs: "18px", sm: "20px" },
                    mt: 0.2,
                    flexShrink: 0,
                  }}
                />

                <Typography
                  sx={{
                    color: "#404246",
                    fontSize: {
                      xs: "14px",
                      sm: "15px",
                      md: "16px",
                    },
                    lineHeight: 1.5,
                    wordBreak: "break-word",
                    maxWidth: { xs: "100%", sm: "300px", lg: "280px" },
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
                  gap: { xs: 1, sm: 1.5 },
                }}
              >
                <Box
                  component="img"
                  src={phoneIcon}
                  sx={{
                    width: { xs: "18px", sm: "20px" },
                    height: { xs: "18px", sm: "20px" },
                    flexShrink: 0,
                  }}
                />
                <Typography
                  sx={{
                    color: "#404246",
                    fontSize: {
                      xs: "14px",
                      sm: "15px",
                      md: "16px",
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
                  gap: { xs: 1, sm: 1.5 },
                }}
              >
                <Box
                  component="img"
                  src={emailIcon}
                  sx={{
                    width: { xs: "18px", sm: "20px" },
                    height: { xs: "18px", sm: "20px" },
                    flexShrink: 0,
                  }}
                />
                <Typography
                  sx={{
                    color: "#404246",
                    fontSize: {
                      xs: "14px",
                      sm: "15px",
                      md: "16px",
                    },
                    wordBreak: "break-all",
                    lineHeight: 1.4,
                  }}
                >
                  drdardasnirmalhealthcare@gmail.com
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* DIVIDER */}
        <Divider
          sx={{
            mt: { xs: 4, sm: 5, md: 6 },
            mb: { xs: 3, sm: 4 },
            borderColor: "rgba(0, 0, 0, 0.1)",
          }}
        />

        {/* BOTTOM BAR */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "center", md: "space-between" },
            alignItems: "center",
            gap: { xs: 2, md: 0 },
            textAlign: "center",
          }}
        >
          {/* Copyright */}
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "15px" },
              color: "#666",
              order: { xs: 2, md: 1 },
            }}
          >
            © 2025 zonixtec. All rights reserved.
          </Typography>

          {/* Links */}
          <Box
            sx={{
              display: "flex",
              gap: { xs: 3, sm: 4 },
              flexWrap: "wrap",
              justifyContent: "center",
              order: { xs: 1, md: 2 },
            }}
          >
            <MuiLink
              component={Link}
              to="/privacy-policy"
              underline="none"
              sx={{
                color: "#666",
                fontSize: { xs: "14px", sm: "15px" },
                "&:hover": { 
                  color: "#0057B7",
                  textDecoration: "underline",
                },
              }}
            >
              Privacy Policy
            </MuiLink>

            <MuiLink
              component={Link}
              to="/terms"
              underline="none"
              sx={{
                color: "#666",
                fontSize: { xs: "14px", sm: "15px" },
                "&:hover": { 
                  color: "#0057B7",
                  textDecoration: "underline",
                },
              }}
            >
              Terms & Conditions
            </MuiLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
