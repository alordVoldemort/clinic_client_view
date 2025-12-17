import React from 'react';
import { 
  Box, 
  Button
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

// Import custom components
import ConsultationFeeCard from './ConsultationFeeCard';
import AppointmentSummaryCard from './AppointmentSummaryCard';
import SelectPaymentMethod from './SelectPaymentMethod';
import SecurePaymentGateway from './SecurePaymentGateway';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { appointmentData, amount = 500 } = location.state || {};

  const handlePaymentMethodSelect = (method) => {
    console.log('Selected payment method:', method);
    navigate('/payment/appointment-confirmation', {
      state: { 
        appointmentData,
        paymentMethod: method,
        amount: amount
      }
    });
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Box sx={{ 
      backgroundColor: '#FBF9FA', 
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      py: { xs: 2, sm: 3, md: 4 },
      px: { xs: 1.5, sm: 2, md: 3 }
    }}>
      <Box
        sx={{
          width: '100%',
          maxWidth: { 
            xs: '100%', 
            sm: '600px', 
            md: '780px',
            lg: '800px'
          },
          backgroundColor: '#FFFFFF',
          borderRadius: { xs: '8px', sm: '12px', md: '14px' },
          border: '1px solid #E0E0E0',
          py: { xs: 3, sm: 4, md: 5 },
          px: { xs: 2, sm: 3, md: 4 },
          mx: 'auto',
          boxShadow: { xs: '0px 2px 8px rgba(0, 0, 0, 0.05)', md: '0px 4px 20px rgba(0, 0, 0, 0.05)' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 2, sm: 3, md: 4}
        }}
      >
        {/* Consultation Fee Card */}
        <ConsultationFeeCard amount={amount} />

        {/* Appointment Summary */}
        <AppointmentSummaryCard appointmentData={appointmentData} amount={amount} />

        {/* Select Payment Method Card */}
        <SelectPaymentMethod 
          onPaymentMethodSelect={handlePaymentMethodSelect}
        />

        {/* Secure Payment Gateway Card */}
        <SecurePaymentGateway />

        {/* Action Buttons */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: 2, sm: 3 },
          justifyContent: 'center',
          width: '100%',
          maxWidth: { xs: '100%', sm: '525px', md: '525px' },
          mt: { xs: 1, sm: 2 }
        }}>
          <Button
  variant="outlined"
  onClick={handleBack}
  sx={{
    borderColor: '#155DFC',
    color: '#155DFC',
    backgroundColor: '#EFEFEF',
    fontSize: { xs: '14px', sm: '15px', md: '16px' },
    fontWeight: 500,
    padding: { xs: '10px 20px', sm: '12px 30px', md: '14px 40px' },
    borderRadius: '8px',
    textTransform: 'none',
    width: { xs: '100%', sm: 'auto' },
    minWidth: { xs: '100%', sm: '150px', md: '180px' },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px', // spacing between arrow and text
    '&:hover': {
      borderColor: '#155DFC',
      color: '#155DFC',
      backgroundColor: '#EFEFEF',
    }
  }}
>
  <span style={{ color: '#155DFC', fontWeight: 600 }}>←</span>
  Back
</Button>

          
          <Button
            variant="contained"
            onClick={() => handlePaymentMethodSelect('clinic')}
            sx={{
              backgroundColor: '#1976d2',
              color: 'white',
              fontSize: { xs: '14px', sm: '15px', md: '16px' },
              fontWeight: 600,
              padding: { xs: '10px 20px', sm: '12px 30px', md: '14px 40px' },
              borderRadius: '8px',
              textTransform: 'none',
              width: { xs: '100%', sm: 'auto' },
              minWidth: { xs: '100%', sm: '150px', md: '180px' },
              '&:hover': {
                backgroundColor: '#1565c0',
              }
            }}
          >
             Proceed to Pay ₹500
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PaymentPage;