import { Box } from "@mui/material";
import HeroSection from "../TreatmentPage/HeroSection";
import ServiceSection from "../TreatmentPage/ServiceSection";
import TreatmentApproach from "../TreatmentPage/TreatmentApproach";
import FAQSection from "../TreatmentPage/FAQsection";
import CallToActionSection from "../TreatmentPage/CallToActionSection";

const GIT = () => {
  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      <HeroSection />
      <ServiceSection />
      <TreatmentApproach />
      <FAQSection />
      <CallToActionSection />
    </Box>
  );
};

export default GIT;
