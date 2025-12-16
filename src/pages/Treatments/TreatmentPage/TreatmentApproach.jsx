import { Box, Container, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { getTreatmentByRoute } from "../../../utils/treatmentsData";

const TreatmentApproach = ({ symptoms, treatmentApproach }) => {
  const location = useLocation();
  const treatmentData = getTreatmentByRoute(location.pathname);

  // Handle different data structures: symptoms, benefits (cosmetology), or when_to_consult (child)
  const finalSymptoms =
    symptoms ||
    treatmentData?.symptoms ||
    treatmentData?.benefits ||
    treatmentData?.when_to_consult ||
    {};
  const finalTreatmentApproach =
    treatmentApproach || treatmentData?.treatmentApproach || [];

  // Get the symptoms/expectations array
  const symptomsList =
    finalSymptoms.symptoms || finalSymptoms.expectations || [];

  return (
    <Box
      sx={{ width: "100%", py: { xs: 6, md: 10 }, backgroundColor: "#F4F9FF" }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 6, md: 8 },
          }}
        >
          {/* LEFT SECTION */}
          <Box sx={{ flex: 1 }}>
            {/* Title */}
            <Typography
              sx={{
                fontSize: { xs: "20px", md: "22px" },
                fontWeight: 700,
                mb: 1,
                fontFamily: "Poppins",
              }}
            >
              {finalSymptoms.title || "When to Seek Treatment"}
            </Typography>

            {/* Intro text */}
            {finalSymptoms.description && (
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "#555",
                  lineHeight: 1.6,
                  maxWidth: "90%",
                  mb: 3,
                }}
              >
                {finalSymptoms.description}
              </Typography>
            )}

            {/* White Card */}
            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: "12px",
                p: { xs: 3, md: 4 },
                boxShadow: "0px 2px 6px rgba(0,0,0,0.05)",
              }}
            >
              {symptomsList.length > 0 && (
                <Typography
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    fontSize: "17px",
                    fontFamily: "Poppins",
                  }}
                >
                  {finalSymptoms.expectations
                    ? "Treatment Benefits"
                    : "Common Symptoms"}
                </Typography>
              )}

              <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none" }}>
                {symptomsList.map((sym, i) => (
                  <Box
                    key={i}
                    component="li"
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    {/* Bullet */}
                    <Box
                      sx={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        backgroundColor: "#155DFC",
                        mt: "6px",
                        flexShrink: 0,
                      }}
                    />

                    {/* Text */}
                    <Typography
                      sx={{ fontSize: "15px", color: "#333", lineHeight: 1.6 }}
                    >
                      {sym}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          {/* RIGHT SECTION */}
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontSize: { xs: "20px", md: "22px" },
                fontWeight: 700,
                mb: 3,
                fontFamily: "Poppins",
              }}
            >
              Our Treatment Approach
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {finalTreatmentApproach.map((step, i) => (
                <Box
                  key={i}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                    backgroundColor: "#fff",
                    borderRadius: "12px",
                    p: 2.5,
                    boxShadow: "0px 2px 6px rgba(0,0,0,0.05)",
                  }}
                >
                  {/* Blue number circle */}
                  <Box
                    sx={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      backgroundColor: "#155DFC",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontWeight: "600",
                      fontSize: "18px",
                      flexShrink: 0,
                    }}
                  >
                    {step.step || i + 1}
                  </Box>

                  {/* Step Content */}
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: "17px",
                        mb: 0.5,
                        fontFamily: "Poppins",
                      }}
                    >
                      {step.title}
                    </Typography>

                    <Typography
                      sx={{ fontSize: "15px", color: "#555", lineHeight: 1.6 }}
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
