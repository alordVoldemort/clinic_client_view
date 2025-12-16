import { Box } from "@mui/material";
import HeroSection from "../TreatmentPage/HeroSection";
import ServiceSection from "../TreatmentPage/ServiceSection";
import TreatmentApproach from "../TreatmentPage/TreatmentApproach";
import FAQSection from "../TreatmentPage/FAQsection";

const ChildTreatments = () => {
  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      <HeroSection />
      <ServiceSection />
      <TreatmentApproach />
      <FAQSection />
    </Box>
  );
};

export default ChildTreatments;
