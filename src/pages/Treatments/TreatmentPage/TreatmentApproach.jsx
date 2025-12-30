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

  const treatmentApproachDescription =
    treatmentData?.treatmentApproachDescription || "";

  const symptomsList =
    finalSymptoms.symptoms || finalSymptoms.expectations || [];

  // ✅ Shared description height to align cards
  const DESCRIPTION_HEIGHT = {
    xs: "auto",
    md: "96px",
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#F4F9FF",
        py: { xs: "40px", sm: "60px", md: "80px" },
        px: { xs: "16px", sm: "24px", md: 0 },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: { lg: "1400px", xl: "1219px" },
          width: "100%",
          mx: "auto",
          px: {
            xs: 0,
            sm: "24px",
            md: "32px",
            lg: "48px",
            xl: "20px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: {
              xs: "40px",
              sm: "50px",
              md: "30px",
              lg: "40px",
              xl: "108px",
            },
          }}
        >
          {/* LEFT COLUMN */}
          <Box
            sx={{
              width: { xs: "100%", md: "48%", lg: "46%", xl: "45%" },
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

            {/* ✅ FIXED HEIGHT DESCRIPTION */}
            <Box
              sx={{
                minHeight: DESCRIPTION_HEIGHT,
                mb: { xs: "20px", md: "24px" },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "14px", sm: "15px" },
                  color: "#555",
                  lineHeight: 1.6,
                }}
              >
                {finalSymptoms.description}
              </Typography>
            </Box>

            {/* Symptoms Card */}
            <Box
              sx={{
                width: "100%",
                maxWidth: { xl: "533px" },
                backgroundColor: "#FFFFFF",
                borderRadius: "8px",
                border: "1px solid #E6EAF0",
                pt: { xs: "20px", md: "26px" },
                pb: { xs: "20px", md: "26px" },
                pl: { xs: "16px", md: "20px", lg: "24px" },
                pr: { xs: "12px", md: "14px", lg: "18px" },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: { xs: "15px", sm: "16px", md: "17px" },
                  mb: { xs: "15px", md: "19px" },
                }}
              >
                {finalSymptoms.cardTitle ||
                  (finalSymptoms.expectations
                    ? "Treatment Benefits"
                    : "Common Symptoms")}
              </Typography>

              <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
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
              width: { xs: "100%", md: "52%", lg: "54%", xl: "55%" },
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
              Our Treatment Approach
            </Typography>

            {/* ✅ FIXED HEIGHT DESCRIPTION */}
            <Box
              sx={{
                minHeight: DESCRIPTION_HEIGHT,
                mb: { xs: "20px", md: "24px" },
              }}
            >
              {treatmentApproachDescription && (
                <Typography
                  sx={{
                    fontSize: { xs: "14px", sm: "15px" },
                    color: "#555",
                    lineHeight: 1.6,
                  }}
                >
                  {treatmentApproachDescription}
                </Typography>
              )}
            </Box>

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
                    minHeight: { md: "128px" },
                    display: "flex",
                    alignItems: { xs: "flex-start", md: "center" },
                    gap: { xs: "20px", md: "24px", xl: "39px" },
                    backgroundColor: "#FFFFFF",
                    borderRadius: { xs: "12px", md: "14px" },
                    border: "1px solid #E6EAF0",
                    pt: { xs: "20px", md: "26px" },
                    pb: { xs: "20px", md: "26px" },
                    pl: { xs: "16px", md: "20px", lg: "24px" },
                    pr: { xs: "12px", md: "14px", lg: "18px" },
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: "40px", md: "46px" },
                      height: { xs: "40px", md: "46px" },
                      borderRadius: "50%",
                      backgroundColor: "#155DFC",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#FFF",
                      fontWeight: 600,
                      fontSize: { xs: "14px", md: "16px" },
                      flexShrink: 0,
                    }}
                  >
                    {step.step || i + 1}
                  </Box>

                  <Box sx={{ flex: 1 }}>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontSize: { xs: "15px", sm: "16px" },
                        fontWeight: 400,
                        color: "#1A1A1A",
                        mb: "6px",
                      }}
                    >
                      {step.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: { xs: "13px", sm: "14px" },
                        color: "#555",
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
