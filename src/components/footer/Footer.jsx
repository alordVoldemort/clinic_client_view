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
import { useTheme, useMediaQuery } from "@mui/material";

import logo from "../../assets/clinic/logo/Group 1686550958.svg";
import facebookIcon from "../../assets/clinic/Footer/Facebook.svg";
import instagramIcon from "../../assets/clinic/Footer/Instagram.svg";
import linkedInIcon from "../../assets/clinic/Footer/LinkedIn.svg";
import emailIcon from "../../assets/clinic/Footer/Email.svg";
import phoneIcon from "../../assets/clinic/Footer/PhoneFooter.svg";
import locationIcon from "../../assets/clinic/Footer/Location.svg";

export default function Footer() {
  const theme = useTheme();
  const isIPad = useMediaQuery(theme.breakpoints.between("sm", "lg"));

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        backgroundColor: "#e9eef6",
        color: "#1a1a1a",
        pt: { xs: 4, sm: 5, md: 6, lg: 8 },
        pb: { xs: 3, sm: 4, md: 5, lg: 6 },
        px: { xs: 2, sm: 3, md: 4, lg: 6 },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          width: "100%",
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Grid
          container
          spacing={{ xs: 3, sm: 4, md: 4, lg: 10 }}
          sx={{
            flexWrap: "nowrap", // default (desktop & tablet)
            "@media (max-width:700px)": {
              flexWrap: "wrap", // 📱 below 700px only
            },
          }}
        >
          {/* ============================
              1️⃣ COMPANY INFO
          ============================ */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "flex-start", sm: "flex-start" },
                gap: { xs: 0.8, sm: 1, md: 1.2 },
                mb: { xs: 2, sm: 2.5, md: 3 },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center", // ONLY this part is centered
                  width: "153px",
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
                <Box>
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 500,
                      color: "#0057B7",
                      fontSize: { xs: "12px", sm: "13px", md: "13px" },
                      mb: { xs: "-10px", md: "-10px", lg: "-10px" },
                    }}
                  >
                    Dr Darda's
                  </Typography>
                </Box>
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 500,
                    color: "#0057B7",
                    fontSize: { xs: "12px", sm: "13px", md: "13px" },
                    mb: { xs: "-20px", md: "-20px", lg: "-20px" },
                  }}
                >
                  Nirmal Health Care
                </Typography>
              </Box>
            </Box>

            <Typography
              sx={{
                color: "#555",
                fontSize: {
                  xs: "0.8rem",
                  sm: "0.85rem",
                  md: "0.9rem",
                  lg: "0.95rem",
                },
                lineHeight: 1.7,
                mb: { xs: 2, sm: 2.5, md: 3 },
              }}
            >
              Providing excellence in healthcare <br></br> with compassion and
              expertise. Your <br></br>health and well-being are our top
              priorities.
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
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              sx={{
                fontWeight: 600,
                mb: { xs: 1.5, sm: 2, md: 2.5 },
                fontSize: {
                  xs: "0.95rem",
                  sm: "1rem",
                  md: "1.05rem",
                  lg: "1.1rem",
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
                    to="/"
                    underline="none"
                    sx={{
                      color: "#555",
                      fontSize: {
                        xs: "0.8rem",
                        sm: "0.85rem",
                        md: "0.9rem",
                        lg: "0.95rem",
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
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              sx={{
                fontWeight: 600,
                mb: { xs: 1.5, sm: 2, md: 2.5 },
                fontSize: {
                  xs: "0.95rem",
                  sm: "1rem",
                  md: "1.05rem",
                  lg: "1.1rem",
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
                "Gynecologist Treatment",
                "Migraine Treatment",
                "ENT Treatments",
                "Joint Treatments",
                "Child Treatments",
              ].map((item) => (
                <Typography
                  key={item}
                  sx={{
                    color: "#555",
                    fontSize: {
                      xs: "0.8rem",
                      sm: "0.85rem",
                      md: "0.9rem",
                      lg: "0.95rem",
                    },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* ============================
              4️⃣ CONTACT US
          ============================ */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              sx={{
                fontWeight: 600,
                mb: { xs: 1.5, sm: 2, md: 2.5 },
                fontSize: {
                  xs: "0.95rem",
                  sm: "1rem",
                  md: "1.05rem",
                  lg: "1.1rem",
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
              {/* Location - UPDATED WITH ACTUAL ADDRESS */}
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
                    color: "#555",
                    fontSize: {
                      xs: "0.8rem",
                      sm: "0.85rem",
                      md: "0.9rem",
                      lg: "0.95rem",
                    },
                    lineHeight: 1.6,
                  }}
                >
                  {isIPad ? (
                    <>
                      Arthashilp, 1349/50, Bajirao Rd,
                      <br />
                      below hotel Ganraj, Natu Baag,
                      <br />
                      Shukrawar Peth, Pune,
                      <br />
                      Maharashtra 411002
                    </>
                  ) : (
                    <>
                      Arthashilp, 1349/50, Bajirao Rd,
                      <br />
                      below hotel Ganraj, Natu Baag,
                      <br />
                      Shukrawar Peth, Pune, Maharashtra 411002
                    </>
                  )}
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
                    color: "#555",
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
                    color: "#555",
                    fontSize: {
                      xs: "0.8rem",
                      sm: "0.85rem",
                      md: "0.9rem",
                      lg: "0.95rem",
                    },
                    wordBreak: "break-word",
                  }}
                >
                  info@healingtouch.com
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
