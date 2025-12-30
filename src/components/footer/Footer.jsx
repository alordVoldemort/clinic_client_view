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
              {[
                { icon: facebookIcon, link: "https://www.facebook.com/share/1Jb6gTmuwf/" },
                { icon: instagramIcon, link: "https://www.instagram.com/drdardasnirmalhealthcare?igsh=MTd4MnpnZXZzNGlwaw==" },
                { icon: linkedInIcon, link: null },
              ].map((social, i) => (
                <IconButton
                  key={i}
                  component={social.link ? "a" : "button"}
                  href={social.link || undefined}
                  target={social.link ? "_blank" : undefined}
                  rel={social.link ? "noopener noreferrer" : undefined}
                  sx={{
                    width: { xs: 32, sm: 36, md: 40, lg: 45 },
                    height: { xs: 32, sm: 36, md: 40, lg: 45 },
                    p: { xs: 0.5, sm: 0.75 },
                    "&:hover": {
                      backgroundColor: "rgba(0, 87, 183, 0.1)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={social.icon}
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
              <MuiLink
                href="tel:+919822141851"
                underline="none"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 1, sm: 1.5 },
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    "& .phone-text": {
                      color: "#0057B7",
                      textDecoration: "underline",
                    },
                    "& .phone-icon": {
                      opacity: 0.8,
                    },
                  },
                }}
              >
                <Box
                  component="img"
                  src={phoneIcon}
                  className="phone-icon"
                  sx={{
                    width: { xs: "18px", sm: "20px" },
                    height: { xs: "18px", sm: "20px" },
                    flexShrink: 0,
                    transition: "opacity 0.2s ease",
                  }}
                />
                <Typography
                  className="phone-text"
                  sx={{
                    color: "#404246",
                    fontSize: {
                      xs: "14px",
                      sm: "15px",
                      md: "16px",
                    },
                    transition: "color 0.2s ease",
                  }}
                >
                  +91 9822141851
                </Typography>
              </MuiLink>

              {/* Email */}
              <MuiLink
                href="mailto:drdardasnirmalhealthcare@gmail.com"
                underline="none"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 1, sm: 1.5 },
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    "& .email-text": {
                      color: "#0057B7",
                      textDecoration: "underline",
                    },
                    "& .email-icon": {
                      opacity: 0.8,
                    },
                  },
                }}
              >
                <Box
                  component="img"
                  src={emailIcon}
                  className="email-icon"
                  sx={{
                    width: { xs: "18px", sm: "20px" },
                    height: { xs: "18px", sm: "20px" },
                    flexShrink: 0,
                    transition: "opacity 0.2s ease",
                  }}
                />
                <Typography
                  className="email-text"
                  sx={{
                    color: "#404246",
                    fontSize: {
                      xs: "14px",
                      sm: "15px",
                      md: "16px",
                    },
                    wordBreak: "break-all",
                    lineHeight: 1.4,
                    transition: "color 0.2s ease",
                  }}
                >
                  drdardasnirmalhealthcare@gmail.com
                </Typography>
              </MuiLink>
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
          <MuiLink
            href="https://www.zonixtec.com/Home/home"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            sx={{
              fontSize: { xs: "14px", sm: "15px" },
              color: "#666",
              order: { xs: 2, md: 1 },
              "&:hover": {
                color: "#0057B7",
                textDecoration: "underline",
              },
            }}
          >
            © 2025 zonixtec. All rights reserved.
          </MuiLink>

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
