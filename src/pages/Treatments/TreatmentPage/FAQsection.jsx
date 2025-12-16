import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Collapse,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useLocation } from "react-router-dom";
import { getTreatmentByRoute } from "../../../utils/treatmentsData";

const FAQSection = ({ title, subtitle, faqs }) => {
  const location = useLocation();
  const [openIndex, setOpenIndex] = useState(null);

  // Auto-detect treatment data from route if props are not provided
  const treatmentData = getTreatmentByRoute(location.pathname);

  // Use provided props or fall back to route-based data or defaults
  const finalTitle = title || "Frequently Asked Questions";
  const finalSubtitle =
    subtitle || "Find answers to common questions about our treatments";
  const finalFaqs = faqs || treatmentData?.faqs || [];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Don't render if no FAQs available
  if (!finalFaqs || finalFaqs.length === 0) {
    return null;
  }

  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        {/* Title */}
        <Typography
          align="center"
          sx={{
            fontFamily: "Poppins",
            fontSize: { xs: "22px", md: "26px" },
            fontWeight: 700,
            mb: 1,
          }}
        >
          {finalTitle}
        </Typography>

        {/* Subtitle */}
        <Typography
          align="center"
          sx={{
            fontFamily: "Poppins",
            fontSize: "15px",
            color: "#666",
            mb: 5,
          }}
        >
          {finalSubtitle}
        </Typography>

        {/* FAQ LIST */}
        <Box
          sx={{
            maxWidth: "760px",
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {finalFaqs.map((item, index) => (
            <Box
              key={index}
              sx={{
                border: "1.5px solid rgba(21, 93, 252, 0.35)", // light blue border
                backgroundColor: "#F0F6FF",
                borderRadius: "12px",
                padding: "16px 20px",
                cursor: "pointer",
              }}
              onClick={() => toggleFAQ(index)}
            >
              {/* FAQ HEADER */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {/* Left Section: ? Icon + Question */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  {/* Circle Icon */}
                  <Box
                    sx={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      border: "2px solid #155DFC",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#155DFC",
                      fontSize: "13px",
                      fontWeight: 600,
                      fontFamily: "Poppins",
                    }}
                  >
                    ?
                  </Box>

                  {/* Question Text */}
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "15px",
                      color: "#1a1a1a",
                      fontWeight: 500,
                    }}
                  >
                    {item.question}
                  </Typography>
                </Box>

                {/* Expand/Collapse Icon */}
                <IconButton disableRipple>
                  {openIndex === index ? (
                    <RemoveIcon sx={{ color: "#155DFC" }} />
                  ) : (
                    <AddIcon sx={{ color: "#155DFC" }} />
                  )}
                </IconButton>
              </Box>

              {/* Answer */}
              <Collapse in={openIndex === index}>
                <Typography
                  sx={{
                    mt: 2,
                    ml: "38px", // aligns text under the question correctly
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    color: "#555",
                    lineHeight: 1.7,
                  }}
                >
                  {item.answer}
                </Typography>
              </Collapse>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FAQSection;
