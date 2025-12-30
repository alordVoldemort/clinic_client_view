import { Box, Container, Grid, Typography, Button } from "@mui/material";
import heroImage from "../../assets/clinic/HeroSectionImg/Rectangle 5511.jpg";
import calendarIcon from "../../assets/clinic/HeroSectionIcon/calendar1.svg";
import checkIcon from "../../assets/clinic/HeroSectionIcon/check 1.svg";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 4, sm: 6, md: 8, lg: 10 },
        backgroundColor: "#f0f4f8",
        minHeight: { xs: "auto", md: "500px" },
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          maxWidth: "1440px",
          px: { xs: 2, sm: 3, md: 4 },
          mx: "auto",
          margin: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            columnGap: { md: "67px" }, // exact gap
            alignItems: "center",
          }}
        >
          {/* LEFT CONTENT */}
          <Box
            sx={{
              flex: "1 1 0",
              minWidth: 0,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
                fontSize: "40px",
                lineHeight: "145%",
                letterSpacing: "0px",
                color: "#1a1a1a",
                mb: 3,
              }}
            >
              Your Journey to{" "}
              <Box component="span" sx={{ color: "#155DFC" }}>
                Better Health
              </Box>{" "}
              Starts Here
              <br />
            </Typography>

            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                mb: 3,
                color: "#343434",
                fontSize: { xs: "14px", sm: "16px", md: "18px" },
                lineHeight: 1.7,
              }}
            >
              Welcome to Nirmal Health Care, where we provide comprehensive care
              tailored to your individual needs. Our team of experienced
              professionals is dedicated to ensuring your well-being and
              comfort.
            </Typography>

            {/* Feature List */}
            <Box sx={{ mb: 4 }}>
              {[
                "Board-Certified Specialists",
                "State-of-the-Art Facilities",
                "Personalized Treatment Plans",
              ].map((feature, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: { xs: 2, sm: 2.5, md: 3 },
                  }}
                >
                  <Box
                    component="img"
                    src={checkIcon}
                    alt="Check"
                    sx={{
                      width: { xs: "19px", md: "19px" },
                      height: "auto",
                      mr: 1.5,
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 500,
                      fontSize: { xs: "14px", sm: "17px", md: "17px" },
                      lineHeight: "145%",
                      color: "#155DFC",
                    }}
                  >
                    {feature}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Action Buttons */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
              }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate("/appointment")}
                startIcon={
                  <Box
                    component="img"
                    src={calendarIcon}
                    alt="Calendar"
                    sx={{
                      color: "white",
                      width: "20px",
                      height: "auto",
                    }}
                  />
                }
                sx={{
                  borderRadius: "8px",

                  fontFamily: "Poppins, sans-serif",
                  px: { xs: 3, sm: 4 },
                  py: 1.5,
                  textTransform: "none",
                  fontWeight: 500,
                  fontSize: { xs: "15px", sm: "15px" },
                  backgroundColor: "#155DFC",
                  minWidth: { xs: "100%", sm: "230px" },
                  "&:hover": {
                    backgroundColor: "#155DFC",
                  },
                }}
              >
                Book Appointment
              </Button>

              <Button
                variant="outlined"
                size="large"
                onClick={() => navigate("/contact")}
                sx={{
                  borderRadius: "8px",
                  fontFamily: "Poppins, sans-serif",
                  px: { xs: 3, sm: 4 },
                  py: 1.5,
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  borderColor: "#155DFC",
                  textTransform: "none",
                  backgroundColor: "#ffffff",

                  color: "#155DFC",
                  minWidth: { xs: "100%", sm: "230px" },
                  "&:hover": {
                    borderColor: "#155DFC",
                  },
                }}
              >
                Contact Us
              </Button>
            </Box>
          </Box>

          {/* RIGHT IMAGE */}
          <Box
            sx={{
              flex: { xs: "1 1 100%", md: "0 0 554px" },
              width: { xs: "100%", md: "auto" },
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              mt: { xs: 4, md: 0 },
            }}
          >
            <Box
              component="img"
              src={heroImage}
              alt="Healthcare"
              sx={{
                width: { xs: "100%", sm: "90%", md: "554px" },
                maxWidth: { xs: "100%", md: "554px" },
                height: { xs: "auto", md: "514px" },
                aspectRatio: { xs: "16/9", md: "auto" },
                objectFit: "cover",
                borderRadius: "12px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
