import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Divider
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

// Import SVG icons
import CheckCircleIcon from '../../assets/Appointment/confirmation.svg';
import TreatmentIcon from '../../assets/Appointment/treatment.svg';
import CalendarIcon from '../../assets/Appointment/calendar.svg';
import EmailIcon from '../../assets/Appointment/email.svg';

// SVG Icon Components
const CheckCircleIconComponent = () => (
  <Box
    component="img"
    src={CheckCircleIcon}
    alt="Success Icon"
    sx={{
      width: '80px',
      height: '80px',
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

const AppointmentConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const appointmentData = location.state?.appointmentData || {};

  // Get patient name from appointment data
  const patientName = appointmentData.name || 'kahilji Sanjay Sonnwanahi';
  const patientEmail = appointmentData.email || 'kahilji.sonnwanahi201@gmail.com';
  const treatment = appointmentData.service || 'Spine Treatment Consultation';
  const appointmentDate = appointmentData.date || '2026-02-22';
  const appointmentTime = appointmentData.time || '01:00 PM';

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <Box sx={{ 
      backgroundColor: '#ffffff', 
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Navbar (Simple version matching your image) */}
      <Box 
        sx={{ 
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e0e0e0',
          py: 2,
          px: 4
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography 
              sx={{ 
                fontSize: '24px', 
                fontWeight: 600, 
                color: '#000000'
              }}
            >
              Nirmal Health Care
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <Typography sx={{ fontSize: '16px', color: '#000000' }}>Home</Typography>
              <Typography sx={{ fontSize: '16px', color: '#000000' }}>About</Typography>
              <Typography sx={{ fontSize: '16px', color: '#000000' }}>Treatments</Typography>
              <Typography sx={{ fontSize: '16px', color: '#000000' }}>Contact</Typography>
              <Typography 
                sx={{ 
                  fontSize: '16px', 
                  color: '#1976d2',
                  fontWeight: 500
                }}
              >
                +91-982241851
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Divider line under navbar */}
      <Box sx={{ borderBottom: '1px solid #e0e0e0' }} />

      {/* Main Content */}
      <Container maxWidth="sm" sx={{ py: 8 }}>
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <CheckCircleIconComponent />
          <Typography 
            variant="h1" 
            sx={{ 
              fontSize: '28px', 
              fontWeight: 600, 
              color: '#000000',
              mb: 3,
              mt: 4
            }}
          >
            Appointment Confirmed
          </Typography>
          
          <Typography 
            sx={{ 
              fontSize: '18px', 
              color: '#000000',
              mb: 6,
              lineHeight: '1.6'
            }}
          >
            Thank you, <span style={{ fontWeight: 600 }}>{patientName}</span>. 
            <br />
            Your appointment has been successfully booked and payment confirmed.
          </Typography>
        </Box>

        {/* Main Content Box */}
        <Box 
          sx={{ 
            backgroundColor: '#FFFFFF',
            borderRadius: '8px',
            border: '1px solid #E0E0E0',
            padding: '32px',
            mb: 6,
            boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)'
          }}
        >
          {/* Treatment Section */}
          <Box sx={{ mb: 4 }}>
            <Typography 
              sx={{ 
                fontSize: '20px', 
                color: '#000000', 
                fontWeight: 600,
                mb: 3
              }}
            >
              Treatment
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Box sx={{ mr: 2 }}>
                <TreatmentIconComponent />
              </Box>
              <Typography sx={{ 
                fontSize: '18px', 
                color: '#000000',
                fontWeight: 500
              }}>
                {treatment}
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* Date & Time Section */}
          <Box sx={{ mb: 4 }}>
            <Typography 
              sx={{ 
                fontSize: '20px', 
                color: '#000000', 
                fontWeight: 600,
                mb: 3
              }}
            >
              Date & Time
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ mr: 2 }}>
                <CalendarIconComponent />
              </Box>
              <Typography sx={{ 
                fontSize: '18px', 
                color: '#000000',
                fontWeight: 500
              }}>
                {appointmentDate} {appointmentTime}
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* Email Confirmation Section */}
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Box sx={{ mr: 2 }}>
                <EmailIconComponent />
              </Box>
              <Typography sx={{ 
                fontSize: '16px', 
                color: '#000000', 
                fontWeight: 500 
              }}>
                A confirmation email has been sent to
              </Typography>
            </Box>
            <Typography sx={{ 
              fontSize: '16px', 
              color: '#1976d2',
              fontWeight: 500,
              ml: 6
            }}>
              {patientEmail}
            </Typography>
          </Box>
        </Box>

        {/* Action Button */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 8 }}>
          <Button
            variant="contained"
            onClick={handleBackToHome}
            sx={{
              backgroundColor: '#1976d2',
              color: 'white',
              fontSize: '16px',
              fontWeight: 500,
              padding: '12px 40px',
              borderRadius: '8px',
              textTransform: 'none',
              minWidth: '200px',
              '&:hover': {
                backgroundColor: '#1565c0',
              }
            }}
          >
            Back to Homepage
          </Button>
        </Box>
      </Container>

      {/* Footer */}
      <Box 
        sx={{ 
          backgroundColor: '#f5f5f5',
          borderTop: '1px solid #e0e0e0',
          py: 4,
          mt: 'auto'
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Typography sx={{ fontSize: '16px', color: '#666666' }}>
              © 2025 Nirmal Health Care. All rights reserved.
            </Typography>
            <Box sx={{ display: 'flex', gap: 3 }}>
              <Typography sx={{ fontSize: '14px', color: '#666666' }}>Privacy Policy</Typography>
              <Typography sx={{ fontSize: '14px', color: '#666666' }}>Terms of Service</Typography>
              <Typography sx={{ fontSize: '14px', color: '#666666' }}>Contact Us</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default AppointmentConfirmation;