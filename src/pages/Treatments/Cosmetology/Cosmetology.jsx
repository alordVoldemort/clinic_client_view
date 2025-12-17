import { Box } from "@mui/material";
import HeroSection from "../TreatmentPage/HeroSection";
import ServiceSection from "../TreatmentPage/ServiceSection";
import TreatmentApproach from "../TreatmentPage/TreatmentApproach";
import FAQSection from "../TreatmentPage/FAQsection";
import CallToActionSection from "../TreatmentPage/CallToActionSection";
import TreatmentCareGuidelines from "./TreatmentCareGuidelines";
const Cosmetology = () => {
  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      <HeroSection />
      <ServiceSection />
      <TreatmentApproach />
      <TreatmentCareGuidelines></TreatmentCareGuidelines>
      <FAQSection />
      <CallToActionSection />
    </Box>
  );
};

export default Cosmetology;
