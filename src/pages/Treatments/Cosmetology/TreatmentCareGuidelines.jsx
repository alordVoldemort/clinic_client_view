import { Box, Container, Typography, Paper } from "@mui/material";

const TreatmentCareGuidelines = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FBF9FA", // light background like Figma
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        {/* SECTION TITLE */}
        <Typography
          align="center"
          sx={{
            fontFamily: "Poppins",
            fontSize: { xs: "18px", md: "24px" },
            fontWeight: 600,
            mb: { xs: 4, md: 6 },
            color: "#000000",
          }}
        >
          Treatment Care Guidelines
        </Typography>

        {/* CARDS WRAPPER */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: { xs: 3, md: 6 },
            flexWrap: { xs: "wrap", sm: "nowrap" },
          }}
        >
          {/* BEFORE TREATMENT */}
          <Paper
            elevation={0}
            sx={{
              width: { xs: "100%", sm: "411px" },
              borderRadius: "10px",
              border: "1px solid #E5EAF4",
              p: { xs: 3, md: 4 },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: { xs: "18px", md: "18px" },
                fontWeight: 400,
                mb: 2,
              }}
            >
              Before Treatment
            </Typography>

            <Box
              component="ul"
              sx={{
                pl: 2,
                m: 0,
                fontFamily: "Poppins",
                fontSize: { xs: "14px", md: "18px" },
                lineHeight: "22px",
                color: "#000000",
                "& li": {
                  mb: "36px", // 👈 vertical gap between bullets
                },

                "& li:last-child": {
                  mb: 0, // optional: remove gap after last item
                },
              }}
            >
              <li>Avoid blood thinners and alcohol 24 hours prior</li>
              <li>Come with clean, makeup-free skin</li>
              <li>Inform us of any medications or allergies</li>
              <li>Stay hydrated and get adequate rest</li>
            </Box>
          </Paper>

          {/* AFTER TREATMENT */}
          <Paper
            elevation={0}
            sx={{
              width: { xs: "100%", sm: "411px" },
              borderRadius: "10px",
              border: "1px solid #E5EAF4",
              p: { xs: 3, md: 4 },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "19px",
                fontWeight: 400,
                mb: 2,
              }}
            >
              After Treatment
            </Typography>

            <Box
              component="ul"
              sx={{
                pl: 2,
                m: 0,
                fontFamily: "Poppins",
                fontSize: { xs: "14px", md: "18px" },
                lineHeight: "22px",
                color: "#000000",
                "& li": {
                  mb: "36px", // 👈 vertical gap between bullets
                },

                "& li:last-child": {
                  mb: 0, // optional: remove gap after last item
                },
              }}
            >
              <li>Follow all post-treatment instructions carefully</li>
              <li>Use recommended skincare products</li>
              <li>Protect skin from sun exposure</li>
              <li>Avoid strenuous exercise for 24–48 hours</li>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default TreatmentCareGuidelines;
