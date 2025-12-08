import React from 'react';
import { Box, Typography } from '@mui/material';
import confirmation from '../../assets/Appointment/confirmation.svg';

const SecurePaymentGateway = () => {
  return (
    <Box sx={{ 
      width: '525px',
      height: '333px',
      display: 'flex',
      flexDirection: 'column',
      gap: '19px',
      borderRadius: '8px',
      border: '1px solid #C6D7FF',
      backgroundColor: '#F2F6FF',
      p: '17px 16px 16px 16px'
    }}>
      {/* Header */}
      <Typography sx={{ 
        fontSize: '16px', 
        fontWeight: 600, 
        color: '#302F2F',
        mb: 2
      }}>
        Secure Payment Gateway
      </Typography>

      {/* Razorpay Description */}
      <Typography sx={{ 
        fontSize: '14px', 
        color: '#302F2F',
        mb: 3,
        lineHeight: 1.5
      }}>
        Payment powered by Razorpay - India's most trusted payment gateway
      </Typography>

      {/* Feature Items */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {/* Feature 1 */}
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
          <Box sx={{ 
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor: '#4CAF50',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            mt: '1px'
          }}>
            <Box
              component="img"
              src={confirmation}
              alt="check"
              sx={{
                width: '12px',
                height: '12px',
                filter: 'brightness(0) invert(1)' // Makes SVG white
              }}
            />
          </Box>
          <Typography sx={{ 
            fontSize: '14px', 
            color: '#155DFC',
            lineHeight: 1.5
          }}>
            256-bit SSL encrypted transactions
          </Typography>
        </Box>

        {/* Feature 2 */}
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
          <Box sx={{ 
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor: '#4CAF50',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            mt: '1px'
          }}>
            <Box
              component="img"
              src={confirmation}
              alt="check"
              sx={{
                width: '12px',
                height: '12px',
                filter: 'brightness(0) invert(1)'
              }}
            />
          </Box>
          <Typography sx={{ 
            fontSize: '14px', 
            color: '#155DFC',
            lineHeight: 1.5
          }}>
            PCI DSS Level 1 compliant
          </Typography>
        </Box>

        {/* Feature 3 */}
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
          <Box sx={{ 
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor: '#4CAF50',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            mt: '1px'
          }}>
            <Box
              component="img"
              src={confirmation}
              alt="check"
              sx={{
                width: '12px',
                height: '12px',
                filter: 'brightness(0) invert(1)'
              }}
            />
          </Box>
          <Typography sx={{ 
            fontSize: '14px', 
            color: '#155DFC',
            lineHeight: 1.5
          }}>
            Instant payment confirmation via SMS & Email
          </Typography>
        </Box>

        {/* Feature 4 */}
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
          <Box sx={{ 
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor: '#4CAF50',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            mt: '1px'
          }}>
            <Box
              component="img"
              src={confirmation}
              alt="check"
              sx={{
                width: '12px',
                height: '12px',
                filter: 'brightness(0) invert(1)'
              }}
            />
          </Box>
          <Typography sx={{ 
            fontSize: '14px', 
            color: '#155DFC',
            lineHeight: 1.5
          }}>
            Pay at Clinic does not reserve your slot. Manual registration required
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SecurePaymentGateway;