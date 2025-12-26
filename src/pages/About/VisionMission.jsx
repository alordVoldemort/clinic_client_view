import { Box, Typography } from "@mui/material";
import boySvg from "../../assets/vision-mission/boy.svg";
import girlSvg from "../../assets/vision-mission/girl.svg";

export default function VisionMission() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 4, sm: 5, md: 6, lg: 8 },
        px: { xs: 2, sm: 3, md: 4, lg: 0 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: {
            xs: "100%",
            sm: "540px",
            md: "720px",
            lg: "940px",
            xl: "1140px",
          },
          background: "#FFFFFF",
          borderRadius: { xs: "12px", sm: "14px", md: "16px" },
          boxShadow: "none",
          padding: {
            xs: "30px 20px",
            sm: "35px 25px",
            md: "40px 30px",
            lg: "50px 40px",
          },
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* BOY SVG - LEFT - Desktop only (absolute positioning) */}
        <Box
          sx={{
            display: { xs: "none", md: "none", lg: "flex" },
            position: "absolute",
            left: { lg: "40px", xl: "50px" },
            top: "25%",
            transform: "translateY(-50%)",
            width: { lg: "200px", xl: "230px" },
            height: { lg: "170px", xl: "200px" },
            zIndex: 0,
          }}
        >
          <img
            src={boySvg}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            alt="boy illustration"
          />
        </Box>

        {/* GIRL SVG - RIGHT - Desktop only (absolute positioning) */}
        <Box
          sx={{
            display: { xs: "none", md: "none", lg: "flex" },
            position: "absolute",
            right: { lg: "40px", xl: "50px" },
            bottom: "25%",
            transform: "translateY(50%)",
            width: { lg: "200px", xl: "230px" },
            height: { lg: "170px", xl: "200px" },
            zIndex: 0,
          }}
        >
          <img
            src={girlSvg}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            alt="girl illustration"
          />
        </Box>

        {/* MISSION SECTION WITH BOY SVG FOR MOBILE/TABLET */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "column", lg: "row" },
            alignItems: { xs: "center", md: "center", lg: "flex-start" },
            textAlign: { xs: "center", md: "center", lg: "left" },
            position: "relative",
            zIndex: 1,
            mb: { xs: 4, sm: 4.5, md: 5, lg: 0 },
          }}
        >
          {/* Boy SVG for Mobile/Tablet - ABOVE Mission text */}
          <Box
            sx={{
              display: { xs: "flex", md: "flex", lg: "none" },
              justifyContent: "center",
              mb: { xs: 2, sm: 2.5, md: 3 },
              width: { xs: "120px", sm: "140px", md: "160px" },
              height: { xs: "100px", sm: "120px", md: "140px" },
            }}
          >
            <img
              src={boySvg}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              alt="boy illustration"
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              maxWidth: { xs: "100%", lg: "620px" },
              ml: { lg: "auto" },
              pr: { lg: "40px" },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: { xs: "24px", sm: "26px", md: "24px", lg: "32px" },
                color: "#155DFC",
                lineHeight: 1.2,
              }}
            >
              Our Mission
            </Typography>

            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontSize: { xs: "14px", sm: "15px", md: "16px" },
                color: "#666",
                mt: { xs: 1.5, sm: 1.75, md: 2 },
                lineHeight: { xs: "1.5", md: "1.6" },
                textAlign: { xs: "center", md: "center", lg: "left" },
              }}
            >
              To offer compassionate, patient-focused homeopathic care that
              supports true well-being. We aim to enhance the quality of life
              for every individual through holistic healing, gentle natural
              treatments, and personalized care plans that encourage long-term
              wellness.
            </Typography>
          </Box>
        </Box>

        {/* LINE DIVIDER */}
        <Box
          sx={{
            width: "100%",
            borderTop: {
              xs: "4px solid #D8E4FF",
              sm: "5px solid #D8E4FF",
              md: "6px solid #D8E4FF",
              lg: "7px solid #D8E4FF",
            },
            opacity: 1,
            my: { xs: 4, sm: 4.5, md: 5, lg: 5 },
          }}
        />

        {/* VISION SECTION WITH GIRL SVG FOR MOBILE/TABLET */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "column", lg: "row" },
            alignItems: { xs: "center", md: "center", lg: "flex-start" },
            textAlign: { xs: "center", md: "center", lg: "left" },
            position: "relative",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              maxWidth: { xs: "100%", lg: "620px" },
              pl: { lg: "40px" },
              order: { xs: 2, md: 2, lg: 1 },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: { xs: "24px", sm: "26px", md: "28px", lg: "32px" },
                color: "#155DFC",
                mb: { xs: 1.5, sm: 1.75, md: 2 },
                lineHeight: 1.2,
              }}
            >
              Our Vision
            </Typography>

            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontSize: { xs: "14px", sm: "15px", md: "16px" },
                color: "#666",
                lineHeight: { xs: "1.5", md: "1.6" },
                textAlign: { xs: "center", md: "center", lg: "left" },
              }}
            >
              To grow into a trusted network of holistic homeopathy clinics that
              offer accessible, empathetic, and modern care. We aim to support
              long-term wellness for individuals and families through
              compassionate healing and thoughtfully guided homeopathic
              practices.
            </Typography>
          </Box>

          {/* Girl SVG for Mobile/Tablet - ABOVE Vision text */}
          <Box
            sx={{
              display: { xs: "flex", md: "flex", lg: "none" },
              justifyContent: "center",
              mb: { xs: 2, sm: 2.5, md: 3 },
              width: { xs: "120px", sm: "140px", md: "160px" },
              height: { xs: "100px", sm: "120px", md: "140px" },
              order: { xs: 1, md: 1, lg: 2 },
            }}
          >
            <img
              src={girlSvg}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              alt="girl illustration"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
