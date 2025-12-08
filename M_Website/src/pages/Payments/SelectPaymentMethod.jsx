import React from 'react';
import {
  Box,
  Typography,
  Paper
} from '@mui/material';

// Import SVG icon
import ClinicIcon from '../../assets/Appointment/pay-at-clinic.svg';

const SelectPaymentMethod = () => {
  return (
    <Box sx={{ 
      width: '525px',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '14px',
      border: '1px solid #E0E0E0',
      backgroundColor: '#FFFFFF',
      overflow: 'hidden'
    }}>
      {/* Header */}
      <Box sx={{ 
        p: '24px 24px 16px 24px',
        borderBottom: '1px solid #E0E0E0'
      }}>
        <Typography sx={{ 
          fontSize: '20px', 
          fontWeight: 600, 
          color: '#000000',
          mb: 1
        }}>
          Select Payment Method
        </Typography>
      </Box>

      {/* Payment Method - Only one option */}
      <Box sx={{ 
        p: '24px 16px'
      }}>
        <Paper
          elevation={0}
          sx={{
            width: '100%',
            border: '2px solid #1976d2',
            borderRadius: '8px',
            backgroundColor: '#F0F7FF',
            transition: 'all 0.2s ease',
          }}
        >
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            py: '16px',
           
            width: '100%'
          }}>
            {/* Icon */}
            <Box sx={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '48px',
              height: '48px',
              borderRadius: '8px',
              backgroundColor: '#E3F2FD',
              mr: 3,
              ml: 2
            }}>
              <img src={ClinicIcon} />
            </Box>

            {/* Text Content */}
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ 
                fontSize: '16px', 
                fontWeight: 500, 
                color: '#000000',
                mb: 0.5
              }}>
                Pay at Clinic
              </Typography>
              <Typography sx={{ 
                fontSize: '14px', 
                color: '#666666',
                lineHeight: 1.4
              }}>
                Cash or Card at reception
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default SelectPaymentMethod;