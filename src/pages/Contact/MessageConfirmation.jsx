import React from "react";
import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import MessageSentIcon from "../../assets/Appointment/confirmation.svg";

const MessageConfirmation = () => {
  const location = useLocation();

  const { messageData = {} } = location.state || {};

  const defaultMessageData = {
    name: "Kshitij Sanjay Somwanshi",
    email: "kshitij.somwanshi2001@gmail.com",
    subject: "General Inquiry",
    message: "Your message content here...",
    timestamp: new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }),
  };

  const finalMessageData = {
    ...defaultMessageData,
    ...messageData,
  };

  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        fontFamily: "Poppins, sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 4,
      }}
    >
      <Box
        sx={{
          width: { xs: "95%", sm: "90%", md: "686px" },
          minHeight: { xs: "auto", md: "385px" },
          backgroundColor: "#FFFFFF",
          borderRadius: "14px",
          border: "1px solid #E0E0E0",
          py: { xs: 3, md: "58px" },
          px: { xs: 2, sm: 3, md: 4 },
          margin: { xs: "20px auto", md: "48px auto" },
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 2, md: "10px" },
        }}
      >
        {/* Success Icon */}
        <Box sx={{ textAlign: "center" }}>
          <Box component="img" src={MessageSentIcon} />
        </Box>

        <Typography
          sx={{
            fontWeight: 500,
            color: "#302F2F",
            fontSize: { xs: "17px", sm: "20px", md: "24px" },
            textAlign: "center",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Message Sent
        </Typography>

        <Typography
          sx={{
            color: "#666666",
            textAlign: "center",

            lineHeight: 1.6,
            fontSize: { xs: "14px", sm: "15px", md: "16px" },
            maxWidth: { xs: "90%", sm: "85%", md: "500px" },
            fontFamily: "Poppins, sans-serif",
            px: { xs: 1, sm: 0 },
          }}
        >
          Thank you for contacting us. We'll get back to you within 24 hours.
        </Typography>

        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            sx={{
              fontSize: "14px",
              color: "#4F46E5",
              fontWeight: 570,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            {finalMessageData.email}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MessageConfirmation;
