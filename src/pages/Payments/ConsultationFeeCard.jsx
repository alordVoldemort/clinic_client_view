import React from 'react';
import { Box, Typography } from '@mui/material';
import RupeeIcon from '../../assets/Appointment/Rupees.svg';
import CompletedIcon from '../../assets/Appointment/completed-booking.svg';

const ConsultationFeeCard = ({ amount = 500 }) => { 
  return (
    <Box sx={{ 
      width: '100%',
      top:'18px',
      maxWidth: { xs: '200px', sm: '220px', md: '239px' },
      height: 'auto',
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center' 
    }}>
      
      {/* SVG Icon */}
      <Box 
        component="img" 
        src={CompletedIcon} 
        alt="Completed" 
        sx={{ 
          width: { xs: '100px', sm: '56px', md: '64px' }, 
          height: { xs: '100px', sm: '56px', md: '64px' } 
        }} 
      />

      {/* Complete Your Booking Text */}
      <Typography sx={{ 
        width: '100%',
        fontFamily: 'Poppins',
        fontWeight: 300,
        fontSize: { xs: '14px', sm: '15px', md: '17px' },
        lineHeight: '145%',
        textAlign: 'center',
        color: '#000000',
        mt: { xs: '8px', sm: '10px', md: '11px' }
      }}>
        Complete Your Booking
      </Typography>

      {/* Consultation Fee Text */}
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        mt: { xs: '8px', sm: '9px', md: '10px' }
      }}>
        <Typography sx={{ 
          fontSize: { xs: '14px', sm: '15px', md: '17px' }, 
          fontWeight: 300, 
          color: '#666666',
          mr: { xs: '8px', sm: '9px', md: '10px' }
        }}>
          Consultation Fee:
        </Typography>
        
        <Box 
          component="img" 
          src={RupeeIcon} 
          alt="₹" 
          sx={{ 
            width: { xs: '9px', sm: '10px', md: '11px' }, 
            height: { xs: '11px', sm: '12px', md: '13px' }, 
            mr: { xs: '3px', sm: '4px', md: '5px' } 
          }} 
        />
        
        <Typography sx={{ 
          fontSize: { xs: '14px', sm: '15px', md: '17px' }, 
          fontWeight: 500, 
          color: '#646464'
        }}>
          {amount}
        </Typography>
      </Box>
    </Box>
  );
};

export default ConsultationFeeCard;