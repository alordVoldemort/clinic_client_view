import React from 'react';
import {
  Box,
  Typography,
  Button,
} from '@mui/material';
import { useLocation, } from 'react-router-dom';
import ConfirmationIcon from '../../assets/Appointment/confirmation.svg'; 

const AppointmentConfirmation = () => {
  const location = useLocation();
  
  // Get data from payment page
  const { appointmentData = {} } = location.state || {};

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
          border: '1px solid #E0E0E0',
          py: { xs: '30px', md: '48px' },
          px: { xs: 3, md: 6 },
          position: 'relative',
          margin: { xs: '20px auto', md: '48px auto' },
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
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
          Appointment Confirmed
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
          Thank you , {finalAppointmentData.patientName}! Your appointment has been successfully booked and payment confirmed.
        </Typography>

        {/* Appointment Details Card */}
        <Box
          sx={{
            width: '100%',
            backgroundColor: '#FFFFFF',
            borderRadius: '8px',
            border: '1px solid #E0E0E0',
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
                  {finalAppointmentData.date} at {finalAppointmentData.time}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
  <Typography
    sx={{
      fontSize: '14px',
      color: '#666666',
      lineHeight: 1.5
    }}
  >
    A confirmation email has been sent to
  </Typography>
  <Typography
    sx={{
      fontSize: '14px',
      color: '#155DFC',
      fontWeight: 300
    }}
  >
    {finalAppointmentData.email}
  </Typography>
</Box>
      </Box>
    </Box>
  );
};

export default AppointmentConfirmation;