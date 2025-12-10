import { Box } from "@mui/material";
import TermsHeroSection from "./TermsHeroSection";
import TermsContentSection from "./TermsContentSection";


const Terms = () => {
  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      <TermsHeroSection />
      <TermsContentSection/>
    </Box>
  );
};

export default Terms;