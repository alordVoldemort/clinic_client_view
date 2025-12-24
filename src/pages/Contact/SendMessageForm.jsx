import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  FormControl,
  Select,
  MenuItem,
  CircularProgress,
  Alert,
} from "@mui/material";
import { sendContactMessage } from "../../api/contact.api";

import UserIcon from "../../assets/Appointment/fullName.svg";
import EmailIcon from "../../assets/Appointment/email.svg";
import PhoneIcon from "../../assets/Appointment/Phone-number.svg";
import SubjectIcon from "../../assets/Appointment/treatment.svg";
import MessageIcon from "../../assets/Appointment/notes.svg";
import sendIcon from "../../assets/Appointment/send-message.svg";

const UserIconComponent = () => (
  <Box
    component="img"
    src={UserIcon}
    alt="User Icon"
    sx={{
      width: { xs: "18px", md: "20px" },
      height: { xs: "18px", md: "20px" },
      display: "flex",
      alignItems: "center",
    }}
  />
);

const EmailIconComponent = () => (
  <Box
    component="img"
    src={EmailIcon}
    alt="Email Icon"
    sx={{
      width: "20px",
      height: "20px",
      display: "flex",
      alignItems: "center",
    }}
  />
);

const PhoneIconComponent = () => (
  <Box
    component="img"
    src={PhoneIcon}
    alt="Phone Icon"
    sx={{
      width: "20px",
      height: "20px",
      display: "flex",
      alignItems: "center",
    }}
  />
);

const SubjectIconComponent = () => (
  <Box
    component="img"
    src={SubjectIcon}
    alt="Subject Icon"
    sx={{
      width: "20px",
      height: "20px",
      display: "flex",
      alignItems: "center",
    }}
  />
);

const MessageIconComponent = () => (
  <Box
    component="img"
    src={MessageIcon}
    alt="Message Icon"
    sx={{
      width: "20px",
      height: "20px",
      display: "flex",
      alignItems: "center",
    }}
  />
);

const SendIconComponent = () => (
  <Box
    component="img"
    src={sendIcon}
    alt="Send Icon"
    sx={{
      width: "20px",
      height: "20px",
      display: "flex",
      alignItems: "center",
    }}
  />
);

const SendMessageForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (error) setError("");
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError("Name is required");
      return false;
    }
    if (!formData.email.trim()) {
      setError("Email is required");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please enter a valid email address");
      return false;
    }
    if (!formData.phone.trim()) {
      setError("Phone number is required");
      return false;
    }
    if (!formData.subject) {
      setError("Please select a subject");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    // Validate form
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        subject: formData.subject,
        message: formData.message.trim() || "",
      };

      const response = await sendContactMessage(payload);

      if (response.data && response.data.success) {
        setSuccess(true);
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });

        // Navigate to confirmation page after a short delay
        setTimeout(() => {
          navigate("/contact/MessageConfirmation", {
            state: {
              messageData: response.data.data.contact,
            },
          });
        }, 1500);
      } else {
        setError(
          response.data?.message || "Failed to send message. Please try again."
        );
      }
    } catch (err) {
      console.error("Error sending message:", err);
      setError(
        err.response?.data?.message ||
          err.message ||
          "An error occurred while sending your message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const subjects = [
    "Select Subject",
    "General Inquiry ",
    "Appointment Inquiry",
    "Treatment Information",
    "Feedback",
    "Other",
  ];

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        backgroundColor: "#FFFFFF",
        borderRadius: "14px",
        p: 0,
        width: {
          xs: "280px", // mobile
          sm: "100%", // tablet
          md: "650px", // desktop
        },
        maxWidth: "650px",
        minHeight: { xs: "auto", md: "840px" },
        display: "flex",
        flexDirection: "column",
        border: "1px solid #E0E0E0",
        boxShadow: "0px 2.58px 7.74px rgba(0, 0, 0, 0.1)",
        mx: "auto",
      }}
    >
      <Box
        sx={{
          p: { xs: "20px 20px 10px", md: "30px 40px 15px" },
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 300,
            fontSize: { xs: "17px", md: "24px" },
            color: "#000000",
            lineHeight: "145%",
            letterSpacing: "0%",
            mb: 0.5,
          }}
        >
          Send Us a Message
        </Typography>
      </Box>

      <Box
        sx={{
          p: { xs: "16px", sm: "20px", md: "30px" },
          gap: { xs: 3, md: 4.5 },
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Error Message */}
        {error && (
          <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError("")}>
            {error}
          </Alert>
        )}

        {/* Success Message */}
        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            Message sent successfully! Redirecting...
          </Alert>
        )}
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
            <Box sx={{ mr: 1.5, display: "flex", alignItems: "center" }}>
              <UserIconComponent />
            </Box>
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                fontWeight: 400,
                color: "#000000",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Your Name
              <Box component="span" sx={{ color: "#FF0000" }}>
                {" "}
                *
              </Box>
            </Typography>
          </Box>
          <TextField
            name="name"
            fullWidth
            placeholder="Enter Your Full Name"
            value={formData.name}
            onChange={handleChange}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                height: { xs: "42px", md: "44px" },
                "& fieldset": {
                  borderColor: "#E0E0E0",
                },
                "&:hover fieldset": {
                  borderColor: "#BDBDBD",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#4F46E5",
                  borderWidth: "1px",
                },
              },
              "& .MuiInputBase-input": {
                fontSize: "14px",
                padding: "12px 16px",
                fontFamily: "Poppins, sans-serif",
              },
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 3,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
              <Box sx={{ mr: 1.5, display: "flex", alignItems: "center" }}>
                <EmailIconComponent />
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: "14px", md: "16px" },
                  fontWeight: 400,
                  color: "#000000",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Email Address
                <Box component="span" sx={{ color: "#FF0000" }}>
                  {" "}
                  *
                </Box>
              </Typography>
            </Box>
            <TextField
              name="email"
              fullWidth
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  height: { xs: "42px", md: "44px" },

                  "& fieldset": {
                    borderColor: "#E0E0E0",
                  },
                  "&:hover fieldset": {
                    borderColor: "#BDBDBD",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#4F46E5",
                    borderWidth: "1px",
                  },
                },
                "& .MuiInputBase-input": {
                  fontSize: "14px",
                  padding: "12px 16px",
                  fontFamily: "Poppins, sans-serif",
                },
              }}
            />
          </Box>

          {/* Phone Field */}
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
              <Box sx={{ mr: 1.5, display: "flex", alignItems: "center" }}>
                <PhoneIconComponent />
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: "14px", md: "16px" },
                  fontWeight: 400,
                  color: "#000000",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Phone Number
                <Box component="span" sx={{ color: "#FF0000" }}>
                  {" "}
                  *
                </Box>
              </Typography>
            </Box>
            <TextField
              name="phone"
              fullWidth
              placeholder="+91 1234567890"
              value={formData.phone}
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  height: { xs: "42px", md: "44px" },
                  "& fieldset": {
                    borderColor: "#E0E0E0",
                  },
                  "&:hover fieldset": {
                    borderColor: "#BDBDBD",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#4F46E5",
                    borderWidth: "1px",
                  },
                },
                "& .MuiInputBase-input": {
                  fontSize: "14px",
                  padding: "12px 16px",
                  fontFamily: "Poppins, sans-serif",
                },
              }}
            />
          </Box>
        </Box>

        {/* Subject Field with icon NEXT to label */}
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
            <Box sx={{ mr: 1.5, display: "flex", alignItems: "center" }}>
              <SubjectIconComponent />
            </Box>
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                fontWeight: 400,
                color: "#000000",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Select Subject
              <Box component="span" sx={{ color: "#FF0000" }}>
                {" "}
                *
              </Box>
            </Typography>
          </Box>
          <FormControl fullWidth>
            <Select
              displayEmpty
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              sx={{
                height: { xs: "44px", md: "47px" },
                borderRadius: "8px",
                fontSize: { xs: "14px", md: "16px" },
                fontFamily: "Poppins, sans-serif",

                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#E0E0E0",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#BDBDBD",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#4F46E5",
                  borderWidth: "1px",
                },
                "& .MuiSelect-select": {
                  padding: "12px 16px",
                  display: "flex",
                  alignItems: "center",
                  color: formData.subject === "" ? "#A8A8A8" : "#000000",
                },
              }}
            >
              {subjects.map((sub) => (
                <MenuItem
                  key={sub}
                  value={sub === "Select Subject" ? "" : sub}
                  sx={{
                    fontSize: "14px",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  {sub}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        {/* Message Field with icon NEXT to label */}
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
            <Box sx={{ mr: 1.5, display: "flex", alignItems: "center" }}>
              <MessageIconComponent />
            </Box>
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                fontWeight: 400,
                color: "#000000",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Message
            </Typography>
          </Box>
          <TextField
            name="message"
            fullWidth
            multiline
            rows={5}
            placeholder="Any Specific concerns or questions you'd like to discuss..."
            value={formData.message}
            onChange={handleChange}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                minHeight: { xs: "120px", md: "147px" },

                alignItems: "flex-start",
                "& fieldset": {
                  borderColor: "#E0E0E0",
                },
                "&:hover fieldset": {
                  borderColor: "#BDBDBD",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#4F46E5",
                  borderWidth: "1px",
                },
              },
              "& .MuiInputBase-input": {
                fontSize: { xs: "14px", md: "16px" },
                padding: "16px",
                lineHeight: 1.5,
                fontFamily: "Poppins, sans-serif",
              },
            }}
          />
        </Box>

        {/* Send Message Button */}
        <Box sx={{ mt: 2 }}>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            disabled={loading}
            sx={{
              height: { xs: "46px", md: "50px" },
              backgroundColor: "#155DFC",
              borderRadius: "9px",
              fontSize: { xs: "14px", md: "16px" },
              fontWeight: 570,
              fontFamily: "Poppins, sans-serif",
              textTransform: "none",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#4338CA",
                boxShadow: "none",
              },
              "&:disabled": {
                backgroundColor: "#9E9E9E",
              },
            }}
            startIcon={
              loading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                <SendIconComponent />
              )
            }
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SendMessageForm;
