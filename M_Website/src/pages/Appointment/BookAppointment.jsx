import React, { useState } from 'react';
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
  FormHelperText
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Import SVG icons from assets
import UserIcon from '../../assets/Appointment/fullName.svg';
import EmailIcon from '../../assets/Appointment/email.svg';
import PhoneIcon from '../../assets/Appointment/phone.svg';
import TreatmentIcon from '../../assets/Appointment/treatment.svg';
import CalendarIcon from '../../assets/Appointment/calendar.svg';
import TimeIcon from '../../assets/Appointment/time.svg';
import NoteIcon from '../../assets/Appointment/notes.svg';

// SVG Icon Components using imported assets
const UserIconComponent = () => (
  <Box
    component="img"
    src={UserIcon}
    alt="User Icon"
    sx={{
      width: '20px',
      height: '20px',
      display: 'flex',
      alignItems: 'center'
    }}
  />
);

const EmailIconComponent = () => (
  <Box
    component="img"
    src={EmailIcon}
    alt="Email Icon"
    sx={{
      width: '20px',
      height: '20px',
      display: 'flex',
      alignItems: 'center'
    }}
  />
);

const PhoneIconComponent = () => (
  <Box
    component="img"
    src={PhoneIcon}
    alt="Phone Icon"
    sx={{
      width: '20px',
      height: '20px',
      display: 'flex',
      alignItems: 'center'
    }}
  />
);

const TreatmentIconComponent = () => (
  <Box
    component="img"
    src={TreatmentIcon}
    alt="Treatment Icon"
    sx={{
      width: '20px',
      height: '20px',
      display: 'flex',
      alignItems: 'center'
    }}
  />
);

const CalendarIconComponent = () => (
  <Box
    component="img"
    src={CalendarIcon}
    alt="Calendar Icon"
    sx={{
      width: '20px',
      height: '20px',
      display: 'flex',
      alignItems: 'center'
    }}
  />
);

const TimeIconComponent = () => (
  <Box
    component="img"
    src={TimeIcon}
    alt="Time Icon"
    sx={{
      width: '20px',
      height: '20px',
      display: 'flex',
      alignItems: 'center'
    }}
  />
);

const NoteIconComponent = () => (
  <Box
    component="img"
    src={NoteIcon}
    alt="Note Icon"
    sx={{
      width: '20px',
      height: '20px',
      display: 'flex',
      alignItems: 'center'
    }}
  />
);

const SERVICES = [
  "General Consultation",
  "Dental Checkup",
  "Cardiology",
  "Dermatology",
  "Pediatrics",
  "Orthopedics",
  "Neurology",
  "Gynecology",
  "ENT",
  "Ophthalmology",
  "Psychiatry",
  "Physiotherapy",
  "Spine Treatment Consultation",
];

const TIME_SLOTS = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
  "08:00 PM",
  "09:00 PM",
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

    navigate("/payment/PaymentPage", {  // Change this line
    state: {
      appointmentData: formData,
      amount: 800
    }
    });
  };

  // Date calculations
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);
  const maxDateStr = maxDate.toISOString().split("T")[0];

  return (
    <Box sx={{ 
      backgroundColor: '#ffffff', 
      minHeight: '100vh',
      py: 4,
      fontFamily: 'Arial, sans-serif'
    }}>
      <Container maxWidth="sm">
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography 
            variant="h1" 
            sx={{ 
              fontSize: '28px', 
              fontWeight: 600, 
              color: '#000000',
              mb: 1
            }}
          >
            Book Your Appointment
          </Typography>
          <Typography 
            sx={{ 
              fontSize: '16px', 
              color: '#666666',
              mb: 3
            }}
          >
            Schedule a consultation with our expert medical team
          </Typography>
        </Box>

        <Paper
          elevation={0}
          sx={{
            borderRadius: '14px',
            backgroundColor: '#FFFFFF',
            border: '1px solid #e0e0e0',
            overflow: 'hidden',
            boxShadow: 'none',
            p: 4,
            margin: '0 auto'
          }}
        >
          <Box component="form" onSubmit={handleSubmit}>
            {/* Personal Information Section */}
            <Box sx={{ mb: 4 }}>
              <Typography 
                sx={{ 
                  fontSize: '18px', 
                  fontWeight: 600, 
                  color: '#000000',
                  mb: 3
                }}
              >
                Personal Information
              </Typography>
              
              {/* Full Name */}
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                  <Box sx={{ mr: 1.5, display: 'flex', alignItems: 'center' }}>
                    <UserIconComponent />
                  </Box>
                  <Typography sx={{ 
                    fontSize: '14px', 
                    color: '#000000', 
                    fontWeight: 500 
                  }}>
                    Full Name <span style={{ color: '#FD0000', marginLeft: '2px' }}>*</span>
                  </Typography>
                </Box>
                <TextField
                  fullWidth
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={!!formErrors.name}
                  helperText={formErrors.name}
                  placeholder="Enter Your Full Name"
                  variant="outlined"
                  size="small"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      height: '48px',
                      borderRadius: '8px',
                      backgroundColor: '#FAFAFA',
                      '& fieldset': {
                        borderColor: '#E0E0E0',
                        borderWidth: '1px',
                      },
                      '&:hover fieldset': {
                        borderColor: '#1976d2',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#1976d2',
                        borderWidth: '1px',
                      },
                    },
                    '& .MuiInputBase-input': {
                      padding: '12px 16px',
                      fontSize: '16px',
                      color: '#333333',
                      height: '48px',
                      '&::placeholder': {
                        color: '#999999',
                      },
                    },
                  }}
                />
              </Box>

              {/* Email and Phone in single line */}
              <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={12} md={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                    <Box sx={{ mr: 1.5, display: 'flex', alignItems: 'center' }}>
                      <EmailIconComponent />
                    </Box>
                    <Typography sx={{ 
                      fontSize: '14px', 
                      color: '#000000', 
                      fontWeight: 500 
                    }}>
                      Email Address <span style={{ color: '#FD0000', marginLeft: '2px' }}>*</span>
                    </Typography>
                  </Box>
                  <TextField
                    fullWidth
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
                      '& .MuiOutlinedInput-root': {
                        height: '48px',
                        borderRadius: '8px',
                        backgroundColor: '#FAFAFA',
                        '& fieldset': {
                          borderColor: '#E0E0E0',
                          borderWidth: '1px',
                        },
                        '&:hover fieldset': {
                          borderColor: '#1976d2',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#1976d2',
                          borderWidth: '1px',
                        },
                      },
                      '& .MuiInputBase-input': {
                        padding: '12px 16px',
                        fontSize: '16px',
                        color: '#333333',
                        height: '48px',
                        '&::placeholder': {
                          color: '#999999',
                        },
                      },
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                    <Box sx={{ mr: 1.5, display: 'flex', alignItems: 'center' }}>
                      <PhoneIconComponent />
                    </Box>
                    <Typography sx={{ 
                      fontSize: '14px', 
                      color: '#000000', 
                      fontWeight: 500 
                    }}>
                      Phone Number <span style={{ color: '#FD0000', marginLeft: '2px' }}>*</span>
                    </Typography>
                  </Box>
                  <TextField
                    fullWidth
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    error={!!formErrors.phone}
                    helperText={formErrors.phone}
                    placeholder="+91 123 456 7890"
                    variant="outlined"
                    size="small"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        height: '48px',
                        borderRadius: '8px',
                        backgroundColor: '#FAFAFA',
                        '& fieldset': {
                          borderColor: '#E0E0E0',
                          borderWidth: '1px',
                        },
                        '&:hover fieldset': {
                          borderColor: '#1976d2',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#1976d2',
                          borderWidth: '1px',
                        },
                      },
                      '& .MuiInputBase-input': {
                        padding: '12px 16px',
                        fontSize: '16px',
                        color: '#333333',
                        height: '48px',
                        '&::placeholder': {
                          color: '#999999',
                        },
                      },
                    }}
                  />
                </Grid>
              </Grid>
            </Box>

            {/* Divider */}
            <Box sx={{ borderBottom: '1px solid #e0e0e0', my: 3 }} />

            {/* Appointment Details Section */}
            <Box sx={{ mb: 4 }}>
              <Typography 
                sx={{ 
                  fontSize: '18px', 
                  fontWeight: 600, 
                  color: '#000000',
                  mb: 3
                }}
              >
                Appointment Details
              </Typography>

              {/* Select Treatment */}
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                  <Box sx={{ mr: 1.5, display: 'flex', alignItems: 'center' }}>
                    <TreatmentIconComponent />
                  </Box>
                  <Typography sx={{ 
                    fontSize: '14px', 
                    color: '#000000', 
                    fontWeight: 500 
                  }}>
                    Select Treatment <span style={{ color: '#FD0000', marginLeft: '2px' }}>*</span>
                  </Typography>
                </Box>
                <FormControl 
                  fullWidth 
                  error={!!formErrors.service}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      height: '48px',
                      borderRadius: '8px',
                      backgroundColor: '#FAFAFA',
                      '& fieldset': {
                        borderColor: '#E0E0E0',
                        borderWidth: '1px',
                      },
                      '&:hover fieldset': {
                        borderColor: '#1976d2',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#1976d2',
                        borderWidth: '1px',
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
                      height: '48px',
                      fontSize: '16px',
                      color: formData.service ? '#333333' : '#999999',
                      '& .MuiSelect-select': {
                        padding: '12px 16px',
                        display: 'flex',
                        alignItems: 'center',
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
                    <FormHelperText sx={{ color: '#d32f2f', marginLeft: 0 }}>
                      {formErrors.service}
                    </FormHelperText>
                  )}
                </FormControl>
              </Box>

              {/* Date and Time in single line */}
              <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={12} md={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                    <Box sx={{ mr: 1.5, display: 'flex', alignItems: 'center' }}>
                      <CalendarIconComponent />
                    </Box>
                    <Typography sx={{ 
                      fontSize: '14px', 
                      color: '#000000', 
                      fontWeight: 500 
                    }}>
                      Preferred Date <span style={{ color: '#FD0000', marginLeft: '2px' }}>*</span>
                    </Typography>
                  </Box>
                  <TextField
                    fullWidth
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
                      '& .MuiOutlinedInput-root': {
                        height: '48px',
                        borderRadius: '8px',
                        backgroundColor: '#FAFAFA',
                        '& fieldset': {
                          borderColor: '#E0E0E0',
                          borderWidth: '1px',
                        },
                        '&:hover fieldset': {
                          borderColor: '#1976d2',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#1976d2',
                          borderWidth: '1px',
                        },
                      },
                      '& .MuiInputBase-input': {
                        padding: '12px 16px',
                        fontSize: '16px',
                        color: formData.date ? '#333333' : '#999999',
                        height: '48px',
                      },
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                    <Box sx={{ mr: 1.5, display: 'flex', alignItems: 'center' }}>
                      <TimeIconComponent />
                    </Box>
                    <Typography sx={{ 
                      fontSize: '14px', 
                      color: '#000000', 
                      fontWeight: 500 
                    }}>
                      Preferred Time <span style={{ color: '#FD0000', marginLeft: '2px' }}>*</span>
                    </Typography>
                  </Box>
                  <FormControl 
                    fullWidth 
                    error={!!formErrors.time}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        height: '48px',
                        borderRadius: '8px',
                        backgroundColor: '#FAFAFA',
                        '& fieldset': {
                          borderColor: '#E0E0E0',
                          borderWidth: '1px',
                        },
                        '&:hover fieldset': {
                          borderColor: '#1976d2',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#1976d2',
                          borderWidth: '1px',
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
                        height: '48px',
                        fontSize: '16px',
                        color: formData.time ? '#333333' : '#999999',
                        '& .MuiSelect-select': {
                          padding: '12px 16px',
                          display: 'flex',
                          alignItems: 'center',
                        },
                      }}
                    >
                      <MenuItem value="" disabled>
                        Select Time
                      </MenuItem>
                      {TIME_SLOTS.map((time) => (
                        <MenuItem key={time} value={time}>
                          {time}
                        </MenuItem>
                      ))}
                    </Select>
                    {formErrors.time && (
                      <FormHelperText sx={{ color: '#d32f2f', marginLeft: 0 }}>
                        {formErrors.time}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>

              {/* Additional Notes */}
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                  <Box sx={{ mr: 1.5, display: 'flex', alignItems: 'center' }}>
                    <NoteIconComponent />
                  </Box>
                  <Typography sx={{ 
                    fontSize: '14px', 
                    color: '#000000', 
                    fontWeight: 500 
                  }}>
                    Additional Notes (Optional)
                  </Typography>
                </Box>
                <TextField
                  fullWidth
                  name="notes"
                  multiline
                  rows={4}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Any Specific concerns or questions you'd like to discuss..."
                  variant="outlined"
                  size="small"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                      backgroundColor: '#FAFAFA',
                      alignItems: 'flex-start',
                      '& fieldset': {
                        borderColor: '#E0E0E0',
                        borderWidth: '1px',
                      },
                      '&:hover fieldset': {
                        borderColor: '#1976d2',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#1976d2',
                        borderWidth: '1px',
                      },
                    },
                    '& .MuiInputBase-input': {
                      padding: '16px',
                      fontSize: '16px',
                      color: '#333333',
                      '&::placeholder': {
                        color: '#999999',
                      },
                    },
                  }}
                />
              </Box>
            </Box>

            {/* Divider */}
            <Box sx={{ borderBottom: '1px solid #e0e0e0', my: 3 }} />

            {/* Important Information Section */}
            <Box sx={{ mb: 4 }}>
              <Box 
                sx={{ 
                  backgroundColor: '#F2F6FF',
                  borderRadius: '8px',
                  padding: '20px',
                  border: '1px solid #C6D7FF',
                }}
              >
                <Typography 
                  sx={{ 
                    fontSize: '18px', 
                    fontWeight: 600, 
                    color: '#000000',
                    mb: 3
                  }}
                >
                  Important Information
                </Typography>
                <Typography 
                  sx={{ 
                    fontSize: '14px', 
                    color: '#000000', 
                    mb: 1.5, 
                    display: 'flex', 
                    alignItems: 'flex-start',
                    lineHeight: '1.5'
                  }}
                >
                  <Box component="span" sx={{ mr: 1.5, fontWeight: 600 }}>•</Box>
                  <Box component="span">
                    Consultation fee:
                    <Box component="span" sx={{ ml: 0.5 }}>
                      <svg 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '2px' }}
                      >
                        <path d="" />
                      </svg>
                      500 (payable at checkout)
                    </Box>
                  </Box>
                </Typography>
                <Typography 
                  sx={{ 
                    fontSize: '14px', 
                    color: '#000000', 
                    mb: 1.5, 
                    display: 'flex', 
                    alignItems: 'flex-start',
                    lineHeight: '1.5'
                  }}
                >
                  <Box component="span" sx={{ mr: 1.5, fontWeight: 600 }}>•</Box>
                  <Box component="span">
                    Please arrive 15 minutes before your appointment
                  </Box>
                </Typography>
                <Typography 
                  sx={{ 
                    fontSize: '14px', 
                    color: '#000000', 
                    mb: 1.5, 
                    display: 'flex', 
                    alignItems: 'flex-start',
                    lineHeight: '1.5'
                  }}
                >
                  <Box component="span" sx={{ mr: 1.5, fontWeight: 600 }}>•</Box>
                  <Box component="span">
                    Bring any relevant medical records or test results
                  </Box>
                </Typography>
                <Typography 
                  sx={{ 
                    fontSize: '14px', 
                    color: '#000000', 
                    display: 'flex', 
                    alignItems: 'flex-start',
                    lineHeight: '1.5'
                  }}
                >
                  <Box component="span" sx={{ mr: 1.5, fontWeight: 600 }}>•</Box>
                  <Box component="span">
                    Cancellations must be made 24 hours in advance
                  </Box>
                </Typography>
              </Box>
            </Box>

            {/* Divider */}
            <Box sx={{ borderBottom: '1px solid #e0e0e0', my: 3 }} />

            {/* Submit Button */}
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: '#1976d2',
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: 500,
                  padding: '12px 40px',
                  borderRadius: '8px',
                  textTransform: 'none',
                  width: '100%',
                  maxWidth: '400px',
                  '&:hover': {
                    backgroundColor: '#1565c0',
                  }
                }}
              >
                Proceed to payment
              </Button>
            </Box>
          </Box>
        </Paper>
        
        {/* Footer Note - Inside Paper */}
        <Box sx={{ 
          textAlign: 'center',
          pt: 1, 
          borderTop: '1px solid #e0e0e0',
          mt: 2
        }}>
          <Typography sx={{ fontSize: '14px', color: '#666666', mb: 0.5 }}>
            Need help booking? Call us at <span style={{ fontWeight: 600, color: '#1976d2' }}>+123 456 7890</span>
          </Typography>
          <Typography sx={{ fontSize: '14px', color: '#666666' }}>
            Our team is available Monday – Saturday, 8:00 AM – 6:00 PM
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default BookAppointment;