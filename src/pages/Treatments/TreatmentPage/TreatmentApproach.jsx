import { Box, Container, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { getTreatmentByRoute } from "../../../utils/treatmentsData";

const TreatmentApproach = ({ symptoms, treatmentApproach }) => {
  const location = useLocation();
  const treatmentData = getTreatmentByRoute(location.pathname);

  const finalSymptoms =
    symptoms ||
    treatmentData?.symptoms ||
    treatmentData?.benefits ||
    treatmentData?.when_to_consult ||
    {};

  const finalTreatmentApproach =
    treatmentApproach || treatmentData?.treatmentApproach || [];

  const symptomsList =
    finalSymptoms.symptoms || finalSymptoms.expectations || [];

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#F4F9FF",
        py: { xs: "40px", sm: "60px", md: "80px" },
        px: { xs: "16px", sm: "24px", md: 0 },
      }}
    >
      {/* Figma container */}
      <Container
        maxWidth={false}
        sx={{
          width: { xs: "100%", sm: "100%", md: "100%", lg: "1219px" },
          mx: "auto",
          px: { xs: 0, sm: "24px", md: "32px", lg: 0 },
        }}
      >
        {/* Two-column layout */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "40px", sm: "50px", md: "30px", lg: "60px", xl: "108px" },
          }}
        >
          {/* LEFT COLUMN */}
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "48%", lg: "45%" },
              flexShrink: 0,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: { xs: "16px", sm: "17px", md: "18px" },
                fontWeight: 600,
                mb: { xs: "6px", md: "8px" },
              }}
            >
              {finalSymptoms.title || "When to Seek Treatment"}
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "14px", sm: "15px" },
                color: "#555",
                lineHeight: 1.6,
                mb: { xs: "20px", md: "24px" },
              }}
            >
              {finalSymptoms.description}
            </Typography>

            {/* Symptoms Card */}
            <Box
              sx={{
                width: "100%",
                maxWidth: { md: "100%", lg: "533px" },
                backgroundColor: "#FFFFFF",
                borderRadius: "8px",
                border: "1px solid #E6EAF0",
                p: { xs: "12px", sm: "15px" },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: { xs: "15px", sm: "16px", md: "17px" },
                  mb: { xs: "15px", md: "19px" },
                  mt: { xs: "10px", md: "15px" },
                  ml: { xs: "12px", sm: "18px", md: "22px" },
                }}
              >
                {finalSymptoms.cardTitle ||
                  (finalSymptoms.expectations
                    ? "Treatment Benefits"
                    : "Common Symptoms")}
              </Typography>

              <Box
                component="ul"
                sx={{
                  listStyle: "none",
                  p: 0,
                  m: { xs: 2, sm: 2.5, md: 3 },
                }}
              >
                {symptomsList.map((sym, i) => (
                  <Box
                    key={i}
                    component="li"
                    sx={{
                      display: "flex",
                      gap: { xs: "10px", sm: "13px" },
                      mb: { xs: "16px", md: "20px" },
                    }}
                  >
                    <Box
                      sx={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: "#155DFC",
                        mt: { xs: "6px", md: "7px" },
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", sm: "15px" },
                        color: "#333",
                        lineHeight: 1.6,
                      }}
                    >
                      {sym}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          {/* RIGHT COLUMN */}
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "52%", lg: "55%" },
              flexShrink: 0,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: { xs: "16px", sm: "17px", md: "18px" },
                fontWeight: 600,
                mb: { xs: "30px", sm: "35px", md: "40px" },
              }}
            >
              Our Treatment Approach
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: "12px", sm: "13px" },
              }}
            >
              {finalTreatmentApproach.map((step, i) => (
                <Box
                  key={i}
                  sx={{
                    width: "100%",
                    minHeight: { xs: "auto", md: "128px" },
                    height: { xs: "auto", md: "128px" },
                    display: "flex",
                    alignItems: { xs: "flex-start", md: "center" },
                    gap: { xs: "20px", sm: "25px", md: "20px", lg: "30px", xl: "39px" },
                    backgroundColor: "#FFFFFF",
                    borderRadius: { xs: "12px", md: "14px" },
                    border: "1px solid #E6EAF0",
                    paddingTop: { xs: "20px", md: "26px" },
                    paddingBottom: { xs: "20px", md: "26px" },
                    paddingLeft: { xs: "16px", md: "20px" },
                    paddingRight: { xs: "12px", md: "14px" },
                  }}
                >
                  {/* Number Circle */}
                  <Box
                    sx={{
                      width: { xs: "40px", sm: "44px", md: "46px" },
                      height: { xs: "40px", sm: "44px", md: "46px" },
                      borderRadius: "50px",
                      backgroundColor: "#155DFC",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#FFFFFF",
                      fontWeight: 600,
                      fontSize: { xs: "14px", md: "16px" },
                      flexShrink: 0,
                    }}
                  >
                    {step.step || i + 1}
                  </Box>

                  {/* Text Content */}
                  <Box
                    sx={{
                      width: { xs: "calc(100% - 60px)", sm: "calc(100% - 74px)", md: "calc(100% - 66px)", lg: "calc(100% - 76px)", xl: "calc(100% - 85px)" },
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      gap: { xs: "12px", sm: "15px" },
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontSize: { xs: "15px", sm: "16px" },
                        fontWeight: 400,
                        color: "#1A1A1A",
                      }}
                    >
                      {step.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: { xs: "13px", sm: "14px" },
                        color: "#555555",
                        lineHeight: 1.6,
                        fontWeight: 300,
                      }}
                    >
                      {step.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TreatmentApproach;
