import React from "react";
import { Box, Typography } from "@mui/material";
import confirmation from "../../assets/Appointment/confirmation.svg";

const SecurePaymentGateway = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", sm: "450px", md: "525px" },
        height: { xs: "auto", sm: "auto", md: "333px" },
        display: "flex",
        flexDirection: "column",
        gap: { xs: "12px", sm: "16px", md: "19px" },
        borderRadius: { xs: "6px", sm: "7px", md: "8px" },
        border: "1px solid #C6D7FF",
        backgroundColor: "#F2F6FF",
        p: { xs: "12px", sm: "14px", md: "16px" },
      }}
    >
      {/* Header */}
      <Typography
        sx={{
          fontSize: { xs: "14px", sm: "15px", md: "16px" },
          fontWeight: 600,
          color: "#302F2F",
          mb: { xs: 1, sm: 1.5, md: 2 },
        }}
      >
        Secure Payment Gateway
      </Typography>

      {/* Razorpay Description */}
      <Typography
        sx={{
          fontSize: { xs: "12px", sm: "13px", md: "14px" },
          color: "#302F2F",
          mb: { xs: 2, sm: 2.5, md: 3 },
          lineHeight: 1.5,
        }}
      >
        Payment powered by Razorpay - India's most trusted payment gateway
      </Typography>

      {/* Feature Items */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: "10px", sm: "12px", md: "14px" },
        }}
      >
        {/* Feature 1 */}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: { xs: "8px", sm: "10px", md: "12px" },
          }}
        >
          <Box
            component="img"
            src={confirmation}
            alt="check"
            sx={{
              width: { xs: "10px", sm: "11px", md: "20px" },
              height: { xs: "10px", sm: "11px", md: "20px" },
              mt: { xs: "3px", sm: "3.5px", md: "4px" },
              flexShrink: 0,
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "13px", md: "14px" },
              color: "#155DFC",
              lineHeight: 1.5,
            }}
          >
            256-bit SSL encrypted transactions
          </Typography>
        </Box>

        {/* Feature 2 */}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: { xs: "8px", sm: "10px", md: "12px" },
          }}
        >
          <Box
            component="img"
            src={confirmation}
            alt="check"
            sx={{
              width: { xs: "10px", sm: "11px", md: "20px" },
              height: { xs: "10px", sm: "11px", md: "20px" },
              mt: { xs: "3px", sm: "3.5px", md: "4px" },
              flexShrink: 0,
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "13px", md: "14px" },
              color: "#155DFC",
              lineHeight: 1.5,
            }}
          >
            PCI DSS Level 1 compliant
          </Typography>
        </Box>

        {/* Feature 3 */}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: { xs: "8px", sm: "10px", md: "12px" },
          }}
        >
          <Box
            component="img"
            src={confirmation}
            alt="check"
            sx={{
              width: { xs: "10px", sm: "11px", md: "20px" },
              height: { xs: "10px", sm: "11px", md: "20px" },
              mt: { xs: "3px", sm: "3.5px", md: "4px" },
              flexShrink: 0,
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "13px", md: "14px" },
              color: "#155DFC",
              lineHeight: 1.5,
            }}
          >
            Instant payment confirmation via SMS & Email
          </Typography>
        </Box>

        {/* Feature 4 */}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: { xs: "8px", sm: "10px", md: "12px" },
          }}
        >
          <Box
            component="img"
            src={confirmation}
            alt="check"
            sx={{
              width: { xs: "10px", sm: "11px", md: "20px" },
              height: { xs: "10px", sm: "11px", md: "20px" },
              mt: { xs: "3px", sm: "3.5px", md: "4px" },
              flexShrink: 0,
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "13px", md: "14px" },
              color: "#155DFC",
              lineHeight: 1.5,
            }}
          >
            Pay at Clinic does not reserve your slot. Manual registration
            required
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SecurePaymentGateway;
