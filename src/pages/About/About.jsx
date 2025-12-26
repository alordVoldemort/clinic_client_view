import { Container, Typography, Box, Paper } from "@mui/material";
import AboutHeroSection from "./HeroSection";
import VisionMission from "./VisionMission";
import MeetExpertTeamSection from "./MeetExpertTeamSection";
import CallToActionSection from "./CallToActionSection";
import CoreValuesSection from "./CoreValuesSection";
import OurAchievementSection from "./OurAchievementSection";

const About = () => {
  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      <AboutHeroSection />
      <VisionMission />
      <CoreValuesSection />

      <OurAchievementSection />
      <MeetExpertTeamSection />
      <CallToActionSection />
    </Box>
  );
};

export default About;
