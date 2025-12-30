import React, { useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import ConfirmationIcon from '../../assets/Appointment/confirmation.svg'; 

const AppointmentConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get data from payment page
  const { appointmentData = {}, paymentMethod = 'ONLINE', amount = 0 } = location.state || {};

  // Default data structure
  const defaultAppointmentData = {
    patientName: 'Kshitij Sanjay Somwanshi',
    treatment: 'Spine Treatment Consultation',
    date: '2026-02-22',
    time: '04:00 PM',
    email: 'kshitij.somwanshi2001@gmail.com',
  };


  const finalAppointmentData = { 
    ...defaultAppointmentData, 
    ...appointmentData
  };

  // Check if Pay at Clinic was selected
  const isPayAtClinic = paymentMethod === 'CLINIC' || paymentMethod === 'clinic';

  // Format date from YYYY-MM-DD to dd/mm/yyyy
  const formatDate = (dateString) => {
    if (!dateString) return '';
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        // If dateString is already in a different format, try to parse it
        const parts = dateString.split('-');
        if (parts.length === 3) {
          const year = parts[0];
          const month = parts[1];
          const day = parts[2];
          return `${day}/${month}/${year}`;
        }
        return dateString;
      }
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    } catch (error) {
      // If parsing fails, try to format the string directly
      const parts = dateString.split('-');
      if (parts.length === 3) {
        const year = parts[0];
        const month = parts[1];
        const day = parts[2];
        return `${day}/${month}/${year}`;
      }
      return dateString;
    }
  };

  const formattedDate = formatDate(finalAppointmentData.date);

  // Auto-navigate to home page after 7 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 7000); // 7 seconds

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Box sx={{ 
      backgroundColor: '#FBF9FA', 
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      py: 4
    }}>
      <Box
        sx={{
          width: { xs: '95%', sm: '90%', md: '680px' },
          backgroundColor: '#FFFFFF',
          borderRadius: '14px',
          boxShadow: {
  xs: `
    0px 4px 12px rgba(0, 0, 0, 0.18),
    0px 12px 32px rgba(0, 0, 0, 0.24)
  `,
  sm: `
    0px 6px 16px rgba(0, 0, 0, 0.18),
    0px 16px 40px rgba(0, 0, 0, 0.24)
  `,
},
border: '1px solid #E0E0E0',

          py: { xs: '30px', md: '48px' },
          px: { xs: 3, md: 6 },
          position: 'relative',
          margin: { xs: '20px auto', md: '48px auto' },
          
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {/* Success Icon */}
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Box
            component="img"
            src={ConfirmationIcon}
            alt="Appointment Confirmed"
            sx={{
              width: { xs: 80, md: 100 },
              height: { xs: 80, md: 100 },
              mb: 2
            }}
          />
        </Box>

        {/* Main Title */}
        <Typography 
          variant="h4" 
          sx={{ 
            fontWeight: 300,
            color: '#302F2F',
            mb: 2,
            fontSize: "24px",
            textAlign: 'center'
          }}
        >
          {isPayAtClinic ? 'Appointment Not Confirmed' : 'Appointment Confirmed'}
        </Typography>

        {/* Thank you message */}
        <Typography 
          sx={{ 
            color: '#666666',
            textAlign: 'center',
            mb: 4,
            lineHeight: 1.6,
            fontSize: "16px",
            maxWidth: '500px'
          }}
        >
          {isPayAtClinic ? (
            <>
              Thanks for choosing Pay at Clinic.
              <br />
              <br />
              You selected Pay at Clinic. Your appointment has not been booked yet. Please visit the clinic and complete manual registration at the reception to confirm your appointment.
            </>
          ) : (
            <>
              Thank you, {finalAppointmentData.patientName}! Your appointment has been successfully booked.
              {paymentMethod === 'ONLINE' ? ' Payment confirmed.' : ' Please pay at the clinic reception.'}
            </>
          )}
        </Typography>

        {/* Appointment Details Card */}
        <Box
          sx={{
            width: '100%',
            backgroundColor: '#F9FAFB',
            borderRadius: '8px',
            border: 'none',
            mb: 4,
            overflow: 'hidden'
          }}
        >
          
          {/* Treatment and Date/Time Section */}
          <Box sx={{ p: 2 }}>
            <Box sx={{ 
              display: 'flex',
               
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between', 
              mb: 2,
              gap: { xs: 2, sm: 0 }
            }}>
              {/* Treatment */}
              <Box sx={{ flex: 1 }}>
                <Typography
                  sx={{
                    fontSize: '17px',
                    color: '#000000',
                    mb: 1
                  }}
                >
                  Treatment
                </Typography>
                <Typography
                  sx={{
                    fontSize: '17px',
                    fontWeight: 400,
                    color: '#000000'
                  }}
                >
                  {finalAppointmentData.treatment}
                </Typography>
              </Box>

              {/* Date & Time */}
              <Box sx={{ flex: 1 }}>
                <Typography
                  sx={{
                    fontSize: '17px',
                    color: '#000000',
                    mb: 1,
                    textAlign: { xs: 'left', sm: 'right' }
                  }}
                >
                  Date & Time
                </Typography>
                <Typography
                  sx={{
                    fontSize: '17px',
                    fontWeight: 400,
                    color: '#000000',
                    textAlign: { xs: 'left', sm: 'right' }
                  }}
                >
                  {formattedDate} at {finalAppointmentData.time}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AppointmentConfirmation;