import React from 'react';
import { Box, Typography } from '@mui/material';
import RupeeIcon from '../../assets/Appointment/Rupees.svg';
import CompletedIcon from '../../assets/Appointment/completed-booking.svg';

const ConsultationFeeCard = ({ amount = 500 }) => {
  return (
    <Box sx={{ 
      width: '239px', 
      height: '192px', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center' 
    }}>
      
      {/* SVG Icon */}
      <Box 
        component="img" 
        src={CompletedIcon} 
        alt="Completed" 
        sx={{ width: '64px', height: '64px' }} 
      />

      {/* Complete Your Booking Text */}
      <Typography sx={{ 
        width: '239px', 
        height: '25px',
        fontFamily: 'Poppins',
        fontWeight: 300,
        fontSize: '17px',
        lineHeight: '145%',
        textAlign: 'center',
        color: '#000000',
        mt: '11px' // Gap from icon
      }}>
        Complete Your Booking
      </Typography>

      {/* Consultation Fee Text - Single line with 10px gap above */}
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        mt: '10px' // 10px gap from above text
      }}>
        <Typography sx={{ 
          fontSize: '17px', 
          fontWeight: 300, 
          color: '#666666',
          mr: '10px'
        }}>
          Consultation Fee:
        </Typography>
        
        <Box 
          component="img" 
          src={RupeeIcon} 
          alt="₹" 
          sx={{ width: '11px', height: '13px', mr: '5px' }} 
        />
        
        <Typography sx={{ 
          fontSize: '17px', 
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