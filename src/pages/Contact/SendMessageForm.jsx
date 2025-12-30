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

// Reusable validation functions
const validators = {
  // Name: Required, min 2 chars, only alphabets and spaces
  validateName: (name) => {
    const trimmed = name.trim();
    if (!trimmed) {
      return "Name is required";
    }
    if (trimmed.length < 2) {
      return "Name must be at least 2 characters";
    }
    if (!/^[a-zA-Z\s]+$/.test(trimmed)) {
      return "Name can only contain alphabets and spaces";
    }
    return "";
  },

  // Phone: Required, exactly 10 digits, must start with 6, 7, 8, or 9
  validatePhone: (phone) => {
    if (!phone) {
      return "Phone number is required";
    }
    // Remove any non-digit characters for validation
    const digitsOnly = phone.replace(/\D/g, "");
    if (digitsOnly.length !== 10) {
      return "Phone number must be 10 digits";
    }
    const firstDigit = parseInt(digitsOnly[0]);
    if (![6, 7, 8, 9].includes(firstDigit)) {
      return "Indian numbers must start with 6, 7, 8, or 9";
    }
    return "";
  },

  // Email: Required, valid format, only .com, .in, or .org domains
  validateEmail: (email) => {
    const trimmed = email.trim();
    if (!trimmed) {
      return "Email address is required";
    }
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) {
      return "Invalid email format";
    }
    // Check TLD
    const tld = trimmed.split(".").pop().toLowerCase();
    if (!["com", "in", "org"].includes(tld)) {
      return "Only .com, .in, or .org domains are allowed";
    }
    return "";
  },

  // Subject: Required, cannot be empty
  validateSubject: (subject) => {
    if (!subject || !subject.trim()) {
      return "Please select a subject";
    }
    return "";
  },

  // Message: Required, minimum 10 characters (after trim)
  validateMessage: (message) => {
    const trimmed = message.trim();
    if (!trimmed) {
      return "Message is required";
    }
    if (trimmed.length < 10) {
      return "Message must be at least 10 characters";
    }
    return "";
  },
};

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
  const [showValidationError, setShowValidationError] = useState(false);
  const [validationErrorMessage, setValidationErrorMessage] = useState("");

  // Field-specific error states
  const [fieldErrors, setFieldErrors] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // Track which fields have been touched
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    subject: false,
    message: false,
  });

  // Validate a single field
  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "name":
        error = validators.validateName(value);
        break;
      case "email":
        error = validators.validateEmail(value);
        break;
      case "phone":
        error = validators.validatePhone(value);
        break;
      case "subject":
        error = validators.validateSubject(value);
        break;
      case "message":
        error = validators.validateMessage(value);
        break;
      default:
        break;
    }
    return error;
  };

  // Check if form is valid
  const isFormValid = () => {
    const nameError = validators.validateName(formData.name);
    const emailError = validators.validateEmail(formData.email);
    const phoneError = validators.validatePhone(formData.phone);
    const subjectError = validators.validateSubject(formData.subject);
    const messageError = validators.validateMessage(formData.message);

    return (
      !nameError && !emailError && !phoneError && !subjectError && !messageError
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Special handling for phone: only allow digits
    if (name === "phone") {
      // Remove any non-digit characters
      const digitsOnly = value.replace(/\D/g, "");
      // Limit to 10 digits
      const limitedDigits = digitsOnly.slice(0, 10);

      setFormData((prev) => ({
        ...prev,
        [name]: limitedDigits,
      }));

      // Validate phone in real-time
      if (touched.phone) {
        const error = validators.validatePhone(limitedDigits);
        setFieldErrors((prev) => ({
          ...prev,
          phone: error,
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));

      // Real-time validation for other fields if touched
      if (touched[name]) {
        const error = validateField(name, value);
        setFieldErrors((prev) => ({
          ...prev,
          [name]: error,
        }));
      }
    }

    // Clear general error when user starts typing
    if (error) setError("");
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    // Mark field as touched
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    // Validate field
    const fieldError = validateField(name, value);
    setFieldErrors((prev) => ({
      ...prev,
      [name]: fieldError,
    }));
  };

  const validateForm = () => {
    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      phone: true,
      subject: true,
      message: true,
    });

    // Validate all fields
    const errors = {
      name: validators.validateName(formData.name),
      email: validators.validateEmail(formData.email),
      phone: validators.validatePhone(formData.phone),
      subject: validators.validateSubject(formData.subject),
      message: validators.validateMessage(formData.message),
    };

    setFieldErrors(errors);

    // Check if any errors exist
    const hasErrors = Object.values(errors).some((error) => error !== "");

    if (hasErrors) {
      // Show first error as general error
      const firstError = Object.values(errors).find((error) => error !== "");
      setError(firstError);
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setShowValidationError(false);
    setValidationErrorMessage("");

    // Validate form
    if (!validateForm()) {
      // Get list of missing required fields
      const missingFields = [];
      if (fieldErrors.name) missingFields.push("Name");
      if (fieldErrors.email) missingFields.push("Email");
      if (fieldErrors.phone) missingFields.push("Phone Number");
      if (fieldErrors.subject) missingFields.push("Subject");
      if (fieldErrors.message) missingFields.push("Message");

      const errorMessage =
        missingFields.length > 0
          ? `Please fill in all required fields: ${missingFields.join(", ")}`
          : "Please fill in all required fields";

      setValidationErrorMessage(errorMessage);
      setShowValidationError(true);

      // Scroll to first error field
      const firstErrorField = document.querySelector('[class*="Mui-error"]');
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" });
      }

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
        // Reset errors and touched state
        setFieldErrors({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setTouched({
          name: false,
          email: false,
          phone: false,
          subject: false,
          message: false,
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
            onBlur={handleBlur}
            error={touched.name && !!fieldErrors.name}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                height: { xs: "42px", md: "44px" },
                "& fieldset": {
                  borderColor:
                    touched.name && fieldErrors.name ? "#FF0000" : "#E0E0E0",
                },
                "&:hover fieldset": {
                  borderColor:
                    touched.name && fieldErrors.name ? "#FF0000" : "#BDBDBD",
                },
                "&.Mui-focused fieldset": {
                  borderColor:
                    touched.name && fieldErrors.name ? "#FF0000" : "#4F46E5",
                  borderWidth: "1px",
                },
              },
              "& .MuiInputBase-input": {
                fontSize: "14px",
                padding: "12px 16px",
                fontFamily: "Poppins, sans-serif",
                "&:-webkit-autofill": {
                  WebkitBoxShadow: "0 0 0 1000px #FFFFFF inset",
                  WebkitTextFillColor: "#000000",
                  transition: "background-color 5000s ease-in-out 0s",
                },
                "&:-webkit-autofill:hover": {
                  WebkitBoxShadow: "0 0 0 1000px #FFFFFF inset",
                  WebkitTextFillColor: "#000000",
                },
                "&:-webkit-autofill:focus": {
                  WebkitBoxShadow: "0 0 0 1000px #FFFFFF inset",
                  WebkitTextFillColor: "#000000",
                },
              },
            }}
          />
          {touched.name && fieldErrors.name && (
            <Typography
              sx={{
                fontSize: "12px",
                color: "#FF0000",
                mt: 0.5,
                ml: 1,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              {fieldErrors.name}
            </Typography>
          )}
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
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && !!fieldErrors.email}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  height: { xs: "42px", md: "44px" },

                  "& fieldset": {
                    borderColor:
                      touched.email && fieldErrors.email
                        ? "#FF0000"
                        : "#E0E0E0",
                  },
                  "&:hover fieldset": {
                    borderColor:
                      touched.email && fieldErrors.email
                        ? "#FF0000"
                        : "#BDBDBD",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor:
                      touched.email && fieldErrors.email
                        ? "#FF0000"
                        : "#4F46E5",
                    borderWidth: "1px",
                  },
                },
                "& .MuiInputBase-input": {
                  fontSize: "14px",
                  padding: "12px 16px",
                  fontFamily: "Poppins, sans-serif",
                  "&:-webkit-autofill": {
                    WebkitBoxShadow: "0 0 0 1000px #FFFFFF inset",
                    WebkitTextFillColor: "#000000",
                    transition: "background-color 5000s ease-in-out 0s",
                  },
                  "&:-webkit-autofill:hover": {
                    WebkitBoxShadow: "0 0 0 1000px #FFFFFF inset",
                    WebkitTextFillColor: "#000000",
                  },
                  "&:-webkit-autofill:focus": {
                    WebkitBoxShadow: "0 0 0 1000px #FFFFFF inset",
                    WebkitTextFillColor: "#000000",
                  },
                },
              }}
            />
            {touched.email && fieldErrors.email && (
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#FF0000",
                  mt: 0.5,
                  ml: 1,
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                {fieldErrors.email}
              </Typography>
            )}
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
              placeholder="Enter 10-digit phone number"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.phone && !!fieldErrors.phone}
              inputProps={{
                inputMode: "numeric",
                pattern: "[0-9]*",
                maxLength: 10,
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  height: { xs: "42px", md: "44px" },
                  "& fieldset": {
                    borderColor:
                      touched.phone && fieldErrors.phone
                        ? "#FF0000"
                        : "#E0E0E0",
                  },
                  "&:hover fieldset": {
                    borderColor:
                      touched.phone && fieldErrors.phone
                        ? "#FF0000"
                        : "#BDBDBD",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor:
                      touched.phone && fieldErrors.phone
                        ? "#FF0000"
                        : "#4F46E5",
                    borderWidth: "1px",
                  },
                },
                "& .MuiInputBase-input": {
                  fontSize: "14px",
                  padding: "12px 16px",
                  fontFamily: "Poppins, sans-serif",
                  "&:-webkit-autofill": {
                    WebkitBoxShadow: "0 0 0 1000px #FFFFFF inset",
                    WebkitTextFillColor: "#000000",
                    transition: "background-color 5000s ease-in-out 0s",
                  },
                  "&:-webkit-autofill:hover": {
                    WebkitBoxShadow: "0 0 0 1000px #FFFFFF inset",
                    WebkitTextFillColor: "#000000",
                  },
                  "&:-webkit-autofill:focus": {
                    WebkitBoxShadow: "0 0 0 1000px #FFFFFF inset",
                    WebkitTextFillColor: "#000000",
                  },
                },
              }}
            />
            {touched.phone && fieldErrors.phone && (
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#FF0000",
                  mt: 0.5,
                  ml: 1,
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                {fieldErrors.phone}
              </Typography>
            )}
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
          <FormControl
            fullWidth
            error={touched.subject && !!fieldErrors.subject}
          >
            <Select
              displayEmpty
              name="subject"
              value={formData.subject}
              onChange={(e) => {
                handleChange(e);
                // Mark as touched and validate immediately for select
                setTouched((prev) => ({ ...prev, subject: true }));
                const error = validators.validateSubject(e.target.value);
                setFieldErrors((prev) => ({ ...prev, subject: error }));
              }}
              onBlur={handleBlur}
              MenuProps={{
                disableScrollLock: true,
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left",
                },
                transformOrigin: {
                  vertical: "top",
                  horizontal: "left",
                },
              }}
              sx={{
                height: { xs: "44px", md: "47px" },
                borderRadius: "8px",
                fontSize: { xs: "14px", md: "16px" },
                fontFamily: "Poppins, sans-serif",

                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor:
                    touched.subject && fieldErrors.subject
                      ? "#FF0000"
                      : "#E0E0E0",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor:
                    touched.subject && fieldErrors.subject
                      ? "#FF0000"
                      : "#BDBDBD",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor:
                    touched.subject && fieldErrors.subject
                      ? "#FF0000"
                      : "#4F46E5",
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
              {/* Placeholder */}
              <MenuItem value="" disabled>
                Select Subject
              </MenuItem>

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
          {touched.subject && fieldErrors.subject && (
            <Typography
              sx={{
                fontSize: "12px",
                color: "#FF0000",
                mt: 0.5,
                ml: 1,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              {fieldErrors.subject}
            </Typography>
          )}
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
              <Box component="span" sx={{ color: "#FF0000" }}>
                {" "}
                *
              </Box>
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
            onBlur={handleBlur}
            error={touched.message && !!fieldErrors.message}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                minHeight: { xs: "120px", md: "147px" },

                alignItems: "flex-start",
                "& fieldset": {
                  borderColor:
                    touched.message && fieldErrors.message
                      ? "#FF0000"
                      : "#E0E0E0",
                },
                "&:hover fieldset": {
                  borderColor:
                    touched.message && fieldErrors.message
                      ? "#FF0000"
                      : "#BDBDBD",
                },
                "&.Mui-focused fieldset": {
                  borderColor:
                    touched.message && fieldErrors.message
                      ? "#FF0000"
                      : "#4F46E5",
                  borderWidth: "1px",
                },
              },
              "& .MuiInputBase-input": {
                fontSize: { xs: "14px", md: "16px" },
                padding: "16px",
                lineHeight: 1.5,
                fontFamily: "Poppins, sans-serif",
                "&:-webkit-autofill": {
                  WebkitBoxShadow: "0 0 0 1000px #FFFFFF inset",
                  WebkitTextFillColor: "#000000",
                  transition: "background-color 5000s ease-in-out 0s",
                },
                "&:-webkit-autofill:hover": {
                  WebkitBoxShadow: "0 0 0 1000px #FFFFFF inset",
                  WebkitTextFillColor: "#000000",
                },
                "&:-webkit-autofill:focus": {
                  WebkitBoxShadow: "0 0 0 1000px #FFFFFF inset",
                  WebkitTextFillColor: "#000000",
                },
              },
            }}
          />
          {touched.message && fieldErrors.message && (
            <Typography
              sx={{
                fontSize: "12px",
                color: "#FF0000",
                mt: 0.5,
                ml: 1,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              {fieldErrors.message}
            </Typography>
          )}
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
