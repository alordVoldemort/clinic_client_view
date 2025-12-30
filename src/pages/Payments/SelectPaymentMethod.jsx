import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import ClinicIcon from "../../assets/Appointment/pay-at-clinic.svg";

const SelectPaymentMethod = ({ onPaymentMethodSelect }) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", sm: "450px", md: "525px" },
        display: "flex",
        flexDirection: "column",
        borderRadius: { xs: "8px", sm: "10px", md: "14px" },
        border: "1px solid #E0E0E0",
        backgroundColor: "#FFFFFF",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          p: { xs: "16px", sm: "20px", md: "24px" },
          borderBottom: "1px solid #E0E0E0",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "16px", sm: "18px", md: "20px" },
            fontWeight: 600,
            color: "#000000",
            mb: { xs: 0.5, sm: 1, md: 1 },
          }}
        >
          Select Payment Method
        </Typography>
      </Box>

      {/* Payment Method */}
      <Box
        sx={{
          p: { xs: "16px", sm: "20px", md: "24px" },
        }}
      >
        <Paper
          elevation={0}
          sx={{
            width: "100%",
            border: "2px solid #A7A7A7",
            borderRadius: { xs: "6px", sm: "7px", md: "8px" },
            backgroundColor: "#FFFFFF",
            transition: "all 0.2s ease",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#E3F2FD",
              transform: "translateY(-2px)",
            },
          }}
          onClick={() => onPaymentMethodSelect("clinic")}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              py: { xs: "14px", sm: "14px", md: "16px" },
              px: { xs: "8px", sm: 0, md: 0 },
              width: "100%",
            }}
          >
            {/* Icon */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: { xs: "48px", sm: "52px", md: "56px" },
                height: { xs: "48px", sm: "52px", md: "56px" },
                minWidth: { xs: "48px", sm: "52px", md: "56px" },
                minHeight: { xs: "48px", sm: "52px", md: "56px" },
                borderRadius: { xs: "6px", sm: "7px", md: "8px" },
                backgroundColor: "#E3F2FD",
                mr: { xs: 1, sm: 2.5, md: 3 },
                ml: { xs: 1, sm: 2, md: 2 },
                flexShrink: 0,
              }}
            >
              <Box
                component="img"
                src={ClinicIcon}
                alt="Pay at Clinic"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>

            {/* Text Content */}
            <Box sx={{ flex: 1 }}>
              <Typography
                sx={{
                  fontSize: { xs: "14px", sm: "15px", md: "16px" },
                  fontWeight: 500,
                  color: "#000000",
                  mb: { xs: 0.25, sm: 0.5, md: 0.5 },
                }}
              >
                Pay at Clinic
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "12px", sm: "13px", md: "14px" },
                  color: "#666666",
                  lineHeight: 1.4,
                }}
              >
                Cash or Card at reception
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default SelectPaymentMethod;
