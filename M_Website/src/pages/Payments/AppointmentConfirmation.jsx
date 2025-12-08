import React from 'react';
import {
  Box,
  Typography,
  Button,
  Paper,
  Divider,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const AppointmentConfirmation = () => {

  
  // Get data from payment page
  const { appointmentData = {}, paymentMethod = 'Online', amount = 500 } = location.state || {};

  // Default data structure
  const defaultAppointmentData = {
    patientName: 'Kshitij Sanjay Somwanshi',
    treatment: 'Spine Treatment Consultation',
    date: '2026-02-22',
    time: '04:00 PM',
    email: 'kshitij.somwanshi2001@gmail.com',
    doctorName: 'Dr. Sarah Johnson',
    clinicName: 'Advanced Spine Care Center',
    address: '123 Medical Center, Suite 456, New Delhi, 110001',
    amountPaid: `₹${amount}`,
    duration: '30 minutes',
    paymentMethod: paymentMethod,
    paymentStatus: 'Confirmed'
  };

  // Merge with actual data if available
  const finalAppointmentData = { ...defaultAppointmentData, ...appointmentData };
  return (
    <Box sx={{ 
      backgroundColor: '#ffffff', 
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      py: 4
    }}>
      <Box
        sx={{
          width: { xs: '95%', sm: '90%', md: '780px' },
          backgroundColor: '#FFFFFF',
          borderRadius: '14px',
          border: '1px solid #E0E0E0',
          py: { xs: '30px', md: '58px' },
          px: { xs: 2, md: 4 },
          position: 'relative',
          margin: { xs: '20px auto', md: '58px auto' },
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {/* Success Icon and Header */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <CheckCircleIcon 
            sx={{ 
              fontSize: { xs: 60, md: 80 }, 
              color: '#4CAF50',
              mb: 2
            }} 
          />
          
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 300,
              color: '#302F2F',
              mb: 2,
              fontSize: "17px"
            }}
          >
            Appointment Confirmed
          </Typography>
          
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#666666',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: "17px"
            }}
          >
            Thank you, {finalAppointmentData.patientName}! Your appointment has been successfully booked and payment confirmed.
          </Typography>
        </Box>

        {/* Confirmation Card */}
        <Paper
          elevation={0}
          sx={{
            width: '100%',
            borderRadius: '12px',
            border: '1px solid #E0E0E0',
            backgroundColor: '#F8F9FA',
            mb: 4,
            overflow: 'hidden'
          }}
        >
        </Paper>
      </Box>
    </Box>
  );
};

export default AppointmentConfirmation;