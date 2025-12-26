import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  MenuItem,
  Grid,
  Paper,
  Select,
  FormControl,
  InputLabel,
  FormHelperText,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import api from "../../api/axios";

import UserIcon from "../../assets/Appointment/fullName.svg";
import EmailIcon from "../../assets/Appointment/email.svg";
import PhoneIcon from "../../assets/Appointment/Phone-number.svg";
import TreatmentIcon from "../../assets/Appointment/treatment.svg";
import CalendarIcon from "../../assets/Appointment/calendar.svg";
import TimeIcon from "../../assets/Appointment/time.svg";
import NoteIcon from "../../assets/Appointment/notes.svg";
import RupeesIcon from "../../assets/Appointment/Rupees.svg";

const UserIconComponent = () => (
  <Box
    component="img"
    src={UserIcon}
    alt="User Icon"
    sx={{
      width: "20px",
      height: "20px",
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

const TreatmentIconComponent = () => (
  <Box
    component="img"
    src={TreatmentIcon}
    alt="Treatment Icon"
    sx={{
      width: "20px",
      height: "20px",
      display: "flex",
      alignItems: "center",
    }}
  />
);

const CalendarIconComponent = () => (
  <Box
    component="img"
    src={CalendarIcon}
    alt="Calendar Icon"
    sx={{
      width: "20px",
      height: "20px",
      display: "flex",
      alignItems: "center",
    }}
  />
);

const TimeIconComponent = () => (
  <Box
    component="img"
    src={TimeIcon}
    alt="Time Icon"
    sx={{
      width: "20px",
      height: "20px",
      display: "flex",
      alignItems: "center",
    }}
  />
);

const NoteIconComponent = () => (
  <Box
    component="img"
    src={NoteIcon}
    alt="Note Icon"
    sx={{
      width: "20px",
      height: "20px",
      display: "flex",
      alignItems: "center",
    }}
  />
);

const RupeesIconComponent = () => (
  <Box
    component="img"
    src={RupeesIcon}
    alt="Rupees Icon"
    sx={{
      width: "12px",
      height: "12px",
      display: "inline-block",
      verticalAlign: "middle",
      marginRight: "2px",
    }}
  />
);

const SERVICES = [
  "Spine Treatment",
  "GIT Treatments",
  "Cosmetology",
  "Kidney Treatment",
  "Gynecologist Treatment",
  "Migraine Treatment",
  "ENT Treatments",
  "Joint Treatments",
  "Child Treatments",
];

const TIME_SLOTS = [
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
  "07:00 PM",
];

const BookAppointment = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    notes: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [bookedSlots, setBookedSlots] = useState([]);
  const [, setLoadingSlots] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
    
    // When date changes, fetch booked slots
    if (name === 'date' && value) {
      fetchBookedSlots(value);
      // Clear selected time if date changes
      setFormData((prev) => ({
        ...prev,
        time: "",
      }));
    }
  };
  
  // Fetch booked time slots for a specific date
  const fetchBookedSlots = async (date) => {
    if (!date) {
      setBookedSlots([]);
      return;
    }
    
    setLoadingSlots(true);
    try {
      // baseURL already includes /api, so use /appointments/availability
      const response = await api.get(`/appointments/availability?date=${date}`);
      if (response.data && response.data.success) {
        setBookedSlots(response.data.data?.booked_slots || []);
      } else {
        setBookedSlots([]);
      }
    } catch (error) {
      console.error("Error fetching booked slots:", error);
      setBookedSlots([]);
    } finally {
      setLoadingSlots(false);
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) errors.phone = "Phone is required";
    if (!formData.date) errors.date = "Date is required";
    if (!formData.time) errors.time = "Time is required";
    if (!formData.service) errors.service = "Treatment is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Note: Amount is determined by backend, not frontend
    // Frontend only displays the amount for UI purposes
    navigate("/payment/PaymentPage", {
      state: {
        appointmentData: formData,
      },
    });
  };


  // Date calculations - allow today's date for future time slots
  const today = new Date();
  const minDate = today.toISOString().split("T")[0];


  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);
  const maxDateStr = maxDate.toISOString().split("T")[0];
  
  // Helper function to check if a time slot is in the past for today
  const isTimeSlotInPast = (timeSlot) => {
    if (formData.date !== minDate) return false; // Not today, so not in past
    
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    
    // Parse time slot (e.g., "6:00 PM" or "06:00 PM")
    const timeMatch = timeSlot.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
    if (!timeMatch) return false;
    
    let hour = parseInt(timeMatch[1]);
    const minute = parseInt(timeMatch[2]);
    const period = timeMatch[3].toUpperCase();
    
    // Convert to 24-hour format
    if (period === 'PM' && hour !== 12) hour += 12;
    if (period === 'AM' && hour === 12) hour = 0;
    
    // Check if this time is in the past
    if (hour < currentHour) return true;
    if (hour === currentHour && minute <= currentMinute) return true;
    
    return false;
  };

  return (
    <Box
      sx={{
        backgroundColor: "#FBF9FA",
        minHeight: "100vh",
        py: 4,
        pb: { xs: 6, md: 8 },
        fontFamily: "Arial, sans-serif",

      }}
    >
      <Container
        disableGutters
        sx={{
          maxWidth: { xs: "100%", md: "841px" },
          px: { xs: 2, sm: 3, md: 0 },
          margin: "0 auto",
        }}
      >
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "26px", sm: "30px", md: "36px" },
              fontWeight: 500,
              color: "#000000",
              mb: 1,
            }}
          >
            Book Your Appointment
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: 500,
              color: "#666666",
              mb: 3,
            }}
          >
            Schedule a consultation with our expert medical team
          </Typography>
        </Box>

        <Paper
          elevation={0}
          sx={{
            width: { xs: "100%", md: "841px" },
            minHeight: "1245px",
            borderRadius: "14px",
            backgroundColor: "#FFFFFF",
            border: "1px solid #E0E0E0",
            padding: { xs: "20px", md: "32px" },
             mb: { xs: 4, md: 6 }, 
          }}
        >
          <Box component="form" onSubmit={handleSubmit}>
            {/* Personal Information Section */}
            <Box sx={{ mb: 6 }}>
              <Typography
                sx={{
                  fontSize: "17px",
                  fontWeight: 300,
                  color: "#000000",
                  mb: 4,
                }}
              >
                Personal Information
              </Typography>

              {/* Full Name - FIXED TO MATCH WIDTH OF OTHER FIELDS */}
              <Box sx={{ mb: 3.75, width: { xs: "100%", md: "738px" } }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1.75 }}>
                  <Box sx={{ mr: 1.5, display: "flex", alignItems: "center" }}>
                    <UserIconComponent />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      color: "#000000",
                      fontWeight: 400,
                    }}
                  >
                    Full Name{" "}
                    <span style={{ color: "#FD0000", marginLeft: "2px" }}>
                      *
                    </span>
                  </Typography>
                </Box>
                <TextField
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={!!formErrors.name}
                  helperText={formErrors.name}
                  placeholder="Enter Your Full Name"
                  variant="outlined"
                  size="small"
                  sx={{
                    width: { xs: "100%", md: "738px" },
                    "& .MuiOutlinedInput-root": {
                      height: "47px",
                      borderRadius: "8px",
                      backgroundColor: "#FAFAFA",
                      "& fieldset": {
                        borderColor: "#E0E0E0",
                        borderWidth: "1px",
                      },
                      "&:hover fieldset": {
                        borderColor: "#1976d2",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#1976d2",
                        borderWidth: "1px",
                      },
                    },
                    "& .MuiInputBase-input": {
                      padding: "12px 16px",
                      fontSize: "16px",
                      color: "#333333",
                      height: "47px",
                      "&::placeholder": {
                        color: "#999999",
                      },
                    },
                  }}
                />
              </Box>

              {/* Email and Phone in single line */}
              <Box
                sx={{
                  mb: 3.75,
                  width: { xs: "100%", md: "738px" },
                  height: { md: "99px" },
                }}
              >
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{ height: { xs: "auto", md: "100%" } }}
                  >
                    <Box sx={{ height: { xs: "100%", md: "100%" } }}>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 1.75 }}
                      >
                        <Box
                          sx={{
                            mr: 1.5,
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <EmailIconComponent />
                        </Box>
                        <Typography
                          sx={{
                            fontSize: "16px",
                            color: "#000000",
                            fontWeight: 400,
                          }}
                        >
                          Email Address{" "}
                          <span style={{ color: "#FD0000", marginLeft: "2px" }}>
                            *
                          </span>
                        </Typography>
                      </Box>
                      <TextField
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={!!formErrors.email}
                        helperText={formErrors.email}
                        placeholder="Rahul.Joshi@email.com"
                        variant="outlined"
                        size="small"
                        sx={{
                          width: { xs: "100%", md: "358px" },
                          "& .MuiOutlinedInput-root": {
                            height: "47px",
                            borderRadius: "8px",
                            backgroundColor: "#FAFAFA",
                            gap: "10px",
                            "& fieldset": {
                              borderColor: "#E0E0E0",
                              borderWidth: "1px",
                            },
                            "&:hover fieldset": {
                              borderColor: "#1976d2",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#1976d2",
                              borderWidth: "1px",
                            },
                          },
                          "& .MuiInputBase-input": {
                            padding: "12px 16px",
                            fontSize: "16px",
                            color: "#333333",
                            height: "47px",
                            boxSizing: "border-box",
                            "&::placeholder": {
                              color: "#999999",
                            },
                          },
                          "& .MuiFormHelperText-root": {
                            marginLeft: 0,
                            marginTop: "4px",
                          },
                        }}
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={6} sx={{ height: "100%" }}>
                    <Box sx={{ height: "100%" }}>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 1.75 }}
                      >
                        <Box
                          sx={{
                            mr: 1.5,
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <PhoneIconComponent />
                        </Box>
                        <Typography
                          sx={{
                            fontSize: "16px",
                            color: "#000000",
                            fontWeight: 400,
                          }}
                        >
                          Phone Number{" "}
                          <span style={{ color: "#FD0000", marginLeft: "2px" }}>
                            *
                          </span>
                        </Typography>
                      </Box>
                      <TextField
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        error={!!formErrors.phone}
                        helperText={formErrors.phone}
                        placeholder="+91 123 456 7890"
                        variant="outlined"
                        size="small"
                        sx={{
                          width: { xs: "100%", md: "358px" },
                          "& .MuiOutlinedInput-root": {
                            height: "47px",
                            borderRadius: "8px",
                            backgroundColor: "#FAFAFA",
                            gap: "10px",
                            "& fieldset": {
                              borderColor: "#E0E0E0",
                              borderWidth: "1px",
                            },
                            "&:hover fieldset": {
                              borderColor: "#1976d2",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#1976d2",
                              borderWidth: "1px",
                            },
                          },
                          "& .MuiInputBase-input": {
                            padding: "12px 16px",
                            fontSize: "16px",
                            color: "#333333",
                            height: "47px",
                            boxSizing: "border-box",
                            "&::placeholder": {
                              color: "#999999",
                            },
                          },
                          "& .MuiFormHelperText-root": {
                            marginLeft: 0,
                            marginTop: "4px",
                          },
                        }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>

            {/* Divider */}
            <Box sx={{ borderBottom: "1px solid #e0e0e0", mb: 4, mt: 0 }} />

            {/* Appointment Details Section */}
            <Box sx={{ mb: 2 }}>
              <Typography
                sx={{
                  fontSize: "17px",
                  fontWeight: 300,
                  color: "#000000",
                  mb: 4,
                }}
              >
                Appointment Details
              </Typography>

              {/* Select Treatment - FIXED TO MATCH WIDTH */}
              <Box sx={{ mb: 3.75, width: { xs: "100%", md: "738px" } }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1.75 }}>
                  <Box sx={{ mr: 1.5, display: "flex", alignItems: "center" }}>
                    <TreatmentIconComponent />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      color: "#000000",
                      fontWeight: 400,
                    }}
                  >
                    Select Treatment{" "}
                    <span style={{ color: "#FD0000", marginLeft: "2px" }}>
                      *
                    </span>
                  </Typography>
                </Box>
                <FormControl
                  error={!!formErrors.service}
                  sx={{
                    width: { xs: "100%", md: "738px" },
                    "& .MuiOutlinedInput-root": {
                      height: "47px",
                      borderRadius: "8px",
                      backgroundColor: "#FAFAFA",
                      "& fieldset": {
                        borderColor: "#E0E0E0",
                        borderWidth: "1px",
                      },
                      "&:hover fieldset": {
                        borderColor: "#1976d2",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#1976d2",
                        borderWidth: "1px",
                      },
                    },
                  }}
                >
                  <Select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    displayEmpty
                    sx={{
                      height: "47px",
                      fontSize: "16px",
                      color: formData.service ? "#333333" : "#999999",
                      "& .MuiSelect-select": {
                        padding: "12px 16px",
                        display: "flex",
                        alignItems: "center",
                      },
                    }}
                  >
                    <MenuItem value="" disabled>
                      Select Treatment
                    </MenuItem>
                    {SERVICES.map((service) => (
                      <MenuItem key={service} value={service}>
                        {service}
                      </MenuItem>
                    ))}
                  </Select>
                  {formErrors.service && (
                    <FormHelperText sx={{ color: "#d32f2f", marginLeft: 0 }}>
                      {formErrors.service}
                    </FormHelperText>
                  )}
                </FormControl>
              </Box>

              {/* Date and Time in single line */}
              <Box
                sx={{
                  mb: 3.75,
                  width: { xs: "100%", md: "738px" },
                  height: { md: "99px" },
                }}
              >
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{ height: { xs: "auto", md: "100%" } }}
                  >
                    <Box sx={{ height: { xs: "auto", md: "100%" } }}>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 1.75 }}
                      >
                        <Box
                          sx={{
                            mr: 1.5,
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <CalendarIconComponent />
                        </Box>
                        <Typography
                          sx={{
                            fontSize: "16px",
                            color: "#000000",
                            fontWeight: 400,
                          }}
                        >
                          Preferred Date{" "}
                          <span style={{ color: "#FD0000", marginLeft: "2px" }}>
                            *
                          </span>
                        </Typography>
                      </Box>
                      <TextField
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                        error={!!formErrors.date}
                        helperText={formErrors.date}
                        variant="outlined"
                        size="small"
                        InputLabelProps={{ shrink: true }}
                        inputProps={{ min: minDate, max: maxDateStr }}
                        sx={{
                          width: { xs: "100%", md: "358px" },
                          "& .MuiOutlinedInput-root": {
                            height: "47px",
                            borderRadius: "8px",
                            backgroundColor: "#FAFAFA",
                            gap: "10px",
                            "& fieldset": {
                              borderColor: "#E0E0E0",
                              borderWidth: "1px",
                            },
                            "&:hover fieldset": {
                              borderColor: "#1976d2",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#1976d2",
                              borderWidth: "1px",
                            },
                          },
                          "& .MuiInputBase-input": {
                            padding: "12px 16px",
                            fontSize: "16px",
                            color: formData.date ? "#333333" : "#999999",
                            height: "47px",
                            boxSizing: "border-box",
                          },
                          "& .MuiFormHelperText-root": {
                            marginLeft: 0,
                            marginTop: "4px",
                          },
                        }}
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={6} sx={{ height: "100%" }}>
                    <Box sx={{ height: "100%" }}>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 1.75 }}
                      >
                        <Box
                          sx={{
                            mr: 1.5,
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <TimeIconComponent />
                        </Box>
                        <Typography
                          sx={{
                            fontSize: "16px",
                            color: "#000000",
                            fontWeight: 400,
                          }}
                        >
                          Preferred Time{" "}
                          <span style={{ color: "#FD0000", marginLeft: "2px" }}>
                            *
                          </span>
                        </Typography>
                      </Box>
                      <FormControl
                        error={!!formErrors.time}
                        sx={{
                          width: { xs: "100%", md: "358px" },
                          "& .MuiOutlinedInput-root": {
                            height: "47px",
                            borderRadius: "8px",
                            backgroundColor: "#FAFAFA",
                            gap: "10px",
                            "& fieldset": {
                              borderColor: "#E0E0E0",
                              borderWidth: "1px",
                            },
                            "&:hover fieldset": {
                              borderColor: "#1976d2",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#1976d2",
                              borderWidth: "1px",
                            },
                          },
                        }}
                      >
                        <Select
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          displayEmpty
                          sx={{
                            height: "47px",
                            fontSize: "16px",
                            color: formData.time ? "#333333" : "#999999",
                            "& .MuiSelect-select": {
                              padding: "12px 16px",
                              display: "flex",
                              alignItems: "center",
                              height: "47px",
                              boxSizing: "border-box",
                            },
                          }}
                        >
                          <MenuItem value="" disabled>
                            Select Time
                          </MenuItem>
                          {TIME_SLOTS.map((time) => {
                            // Check if this time slot is booked
                            const isBooked = bookedSlots.includes(time);
                            // Check if this time slot is in the past (for today's date)
                            const isPast = isTimeSlotInPast(time);
                            const isDisabled = isBooked || isPast;
                            
                            return (
                              <MenuItem 
                                key={time} 
                                value={time}
                                disabled={isDisabled}
                                sx={{
                                  opacity: isDisabled ? 0.5 : 1,
                                  cursor: isDisabled ? 'not-allowed' : 'pointer'
                                }}
                              >
                                {time} {isBooked ? '(Booked)' : isPast ? '(Past)' : ''}
                              </MenuItem>
                            );
                          })}
                        </Select>
                        {formErrors.time && (
                          <FormHelperText
                            sx={{ color: "#d32f2f", marginLeft: 0 }}
                          >
                            {formErrors.time}
                          </FormHelperText>
                        )}
                      </FormControl>
                    </Box>
                  </Grid>
                </Grid>
              </Box>

              {/* Additional Notes - FIXED TO MATCH WIDTH */}
              <Box sx={{ mb: 3, width: { xs: "100%", md: "738px" } }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1.75 }}>
                  <Box sx={{ mr: 1.5, display: "flex", alignItems: "center" }}>
                    <NoteIconComponent />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      color: "#000000",
                      fontWeight: 400,
                    }}
                  >
                    Additional Notes (Optional)
                  </Typography>
                </Box>
                <TextField
                  name="notes"
                  multiline
                  rows={4}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Any Specific concerns or questions you'd like to discuss..."
                  variant="outlined"
                  size="small"
                  sx={{
                    width: { xs: "100%", md: "738px" },
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      backgroundColor: "#FAFAFA",
                      alignItems: "flex-start",
                      "& fieldset": {
                        borderColor: "#E0E0E0",
                        borderWidth: "1px",
                      },
                      "&:hover fieldset": {
                        borderColor: "#1976d2",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#1976d2",
                        borderWidth: "1px",
                      },
                    },
                    "& .MuiInputBase-input": {
                      padding: "16px",
                      fontSize: "16px",
                      color: "#333333",
                      "&::placeholder": {
                        color: "#999999",
                      },
                    },
                  }}
                />
              </Box>
            </Box>

            {/* Divider */}
            <Box sx={{ borderBottom: "1px solid #e0e0e0", my: 4.5 }} />

            {/* Important Information Section */}
            <Box sx={{ mb: 4.5, width: { xs: "100%", md: "738px" } }}>
              <Box
                sx={{
                  backgroundColor: "#F2F6FF",
                  borderRadius: "8px",
                  padding: "20px",
                  border: "1px solid #C6D7FF",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#000000",
                    mb: 3,
                  }}
                >
                  Important Information
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#000000",
                    mb: 1.5,
                    display: "flex",
                    alignItems: "flex-start",
                    lineHeight: "1.5",
                  }}
                >
                  <Box component="span" sx={{ mr: 1.5, fontWeight: 600 }}>
                    •
                  </Box>
                  <Box component="span">
                    Consultation fee:
                    <Box component="span" sx={{ ml: 0.5 }}>
                      <RupeesIconComponent />
                      500 (payable at checkout)
                    </Box>
                  </Box>
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#000000",
                    mb: 1.5,
                    display: "flex",
                    alignItems: "flex-start",
                    lineHeight: "1.5",
                  }}
                >
                  <Box component="span" sx={{ mr: 1.5, fontWeight: 600 }}>
                    •
                  </Box>
                  <Box component="span">
                    Please arrive 15 minutes before your appointment
                  </Box>
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#000000",
                    mb: 1.5,
                    display: "flex",
                    alignItems: "flex-start",
                    lineHeight: "1.5",
                  }}
                >
                  <Box component="span" sx={{ mr: 1.5, fontWeight: 600 }}>
                    •
                  </Box>
                  <Box component="span">
                    Bring any relevant medical records or test results
                  </Box>
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#000000",
                    display: "flex",
                    alignItems: "flex-start",
                    lineHeight: "1.5",
                  }}
                >
                  <Box component="span" sx={{ mr: 1.5, fontWeight: 600 }}>
                    •
                  </Box>
                  <Box component="span">
                    Cancellations must be made 24 hours in advance
                  </Box>
                </Typography>
              </Box>
            </Box>

            {/* Submit Button */}
            <Box
              sx={{
                textAlign: "center",
                mb: 4,
                width: { xs: "100%", md: "738px" },
              }}
            >
              <Button
                type="submit"
                variant="contained"
                // navigate="https://rzp.io/rzp/oYQ5mtE"
                sx={{
                  backgroundColor: "#1976d2",
                  color: "white",
                  fontSize: "16px",
                  fontWeight: 500,
                  padding: "12px 40px",
                  borderRadius: "8px",
                  textTransform: "none",
                  width: { xs: "100%", md: "738px" },
                  maxWidth: "738px",
                  "&:hover": {
                    backgroundColor: "#155DFC",
                  },
                }}
              >
                Proceed to payment
              </Button>
            </Box>
          </Box>
        </Paper>

        <Box
          sx={{
            textAlign: "center",
            pt: 1,
            mt: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: { xs: "14px", sm: "16px" },
              color: "#000000",
              mb: 0.5,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Need help booking? Call us at{" "}
            <Box
              component="span"
              sx={{
                fontWeight: 400,
                color: "#155DFC",
                ml: 0.5,
                whiteSpace: "nowrap", // prevents number from breaking into 2 lines
              }}
            >
              +91 9822141851
            </Box>
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "14px" }, // responsive font size
              color: "#666666",
              textAlign: "center",
            }}
          >
            Our team is available Monday – Saturday, 9:00 AM – 6:00 PM
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default BookAppointment;
