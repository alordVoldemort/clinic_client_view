import { Box } from "@mui/material";
import PrivacyHeroSection from "./PrivacyHeroSection";
import PrivacyContentSection from "./PrivacyContentSection";

const Privacy = () => {
  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      <PrivacyHeroSection />
      <PrivacyContentSection />
    </Box>
  );
};

export default Privacy;