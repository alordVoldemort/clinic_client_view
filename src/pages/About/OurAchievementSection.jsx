import { Box, Typography, Container } from "@mui/material";
import checkIcon from "../../assets/clinic/HeroSectionIcon/check 1.svg";

export default function OurAchievementSection() {
  const achievements = [
    {
      id: 1,
      title: "Excellence in Homeopathic Research ",
    },
    {
      id: 2,
      title: "National Recognition in Homeopathic Care",
    },
    {
      id: 3,
      title: "Featured for Trusted Homeopathic Expertise",
    },
    {
      id: 4,
      title: "26+ Years of Homeopathic Excellence",
    },
    {
      id: 5,
      title: "15,000+ Patients Healed with Homeopathy",
    },
    {
      id: 6,
      title: "98% Patient Satisfaction Rate",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "auto", sm: "auto", md: "400px" },
        minHeight: { xs: "300px", sm: "350px", md: "400px" },
        backgroundColor: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 4, sm: 5, md: 6, lg: 0 },
        px: { xs: 1, sm: 2, md: 3, lg: 0 },
      }}
    >
      <Container
        maxWidth="lg"
        disableGutters
        sx={{
          width: "100%",
          maxWidth: {
            xs: "100%",
            sm: "600px",
            md: "900px",
            lg: "1200px",
            xl: "1319px",
          },
          height: { xs: "auto", md: "auto", lg: "340px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 3, sm: 4, md: "34px" },
        }}
      >
        {/* Header Section */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: { xs: 0.5, sm: 2, md: 3 },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 500,
              fontSize: {
                xs: "26px",
                sm: "30px",
                md: "36px",
                lg: "36px",
                xl: "48px",
              },
              color: "#000000",
              lineHeight: { xs: 1.3, sm: 1.2, md: 1.2 },
              px: { xs: 1, sm: 0 },
            }}
          >
            Our Achievements
          </Typography>

          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 500,
              fontSize: {
                xs: "16px",
                sm: "17px",
                md: "18px",
                lg: "19px",
                xl: "20px",
              },
              color: "#000000",
              lineHeight: { xs: 1.4, sm: 1.5, md: 1.5 },
              maxWidth: { xs: "90%", sm: "85%", md: "800px" },
              opacity: 0.8,
            }}
          >
            Milestones that reflect our commitment to excellence
          </Typography>
        </Box>

        {/* Achievements Grid */}
        <Box
          sx={{
            width: "100%",
            height: { xs: "auto", md: "auto", lg: "175px" },
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            },
            gap: { xs: 2, sm: 3, md: 3, lg: "20px", xl: "30px" },
            rowGap: { xs: 2, sm: 2.5, md: 3, lg: 3 },
            justifyContent: "center",
            alignItems: "center",
            justifyItems: "stretch",
            px: { xs: 1, sm: 2, md: 3, lg: 0 },
          }}
        >
          {achievements.map((achievement) => (
            <Box
              key={achievement.id}
              sx={{
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "100%",
                  lg: "100%",
                },
                maxWidth: { xs: "100%", sm: "280px", md: "300px", lg: "100%" },
                height: { xs: "auto", sm: "auto", md: "auto", lg: "60px" },
                minHeight: { xs: "45px", sm: "50px", md: "55px", lg: "60px" },
                display: "flex",
                alignItems: "center",
                gap: { xs: "8px", sm: "10px", md: "10px", lg: "10px" },
                backgroundColor: "#F4F9FF",
                borderRadius: { xs: "6px", sm: "7px", md: "8px", lg: "9px" },
                border: "1px solid #155DFC",
                p: {
                  xs: "6px 10px",
                  sm: "8px 12px",
                  md: "9px 14px",
                  lg: "10px 16px",
                },
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  transform: "translateY(-2px)",
                  borderColor: "#155DFC",
                },
              }}
            >
              {/* Check Icon */}
              <Box
                component="img"
                src={checkIcon}
                alt="check"
                sx={{
                  width: { xs: "20px", sm: "22px", md: "23px", lg: "24px" },
                  height: { xs: "20px", sm: "22px", md: "23px", lg: "24px" },
                  minWidth: { xs: "20px", sm: "22px", md: "23px", lg: "24px" },
                }}
              />

              {/* Achievement Text */}
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 500,
                  fontSize: {
                    xs: "13px",
                    sm: "14px",
                    md: "15px",
                    lg: "16px",
                  },
                  color: "#333333",
                  lineHeight: { xs: 1.3, sm: 1.4, md: 1.4, lg: 1.4 },
                  flex: 1,
                }}
              >
                {achievement.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
