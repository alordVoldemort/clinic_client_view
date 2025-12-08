import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Paper,
  Divider
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
    // Navigate to confirmation after payment method is selected
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
      backgroundColor: '#ffffff', 
      minHeight: '1298px',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      py: 4
    }}>
      <Box
        sx={{
          width: '780px',
          minHeight: '1298px',
          backgroundColor: '#FFFFFF',
          borderRadius: '14px',
          border: '1px solid #E0E0E0',
          py: '58px',
          px: 4,
          position: 'relative',
          margin: '58px auto',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {/* Consultation Fee Card */}
        <Box sx={{ mb: 6 }}>
          <ConsultationFeeCard amount={amount} />
        </Box>

        {/* Appointment Summary */}
        <Box sx={{ mb: 6 }}>
          <AppointmentSummaryCard 
            appointmentData={appointmentData} 
            amount={amount} 
          />
        </Box>

        {/* Select Payment Method Card */}
        <Box sx={{ mb: 6 }}>
          <SelectPaymentMethod 
            onPaymentMethodSelect={handlePaymentMethodSelect}
          />
        </Box>

        {/* Secure Payment Gateway Card */}
        <Box sx={{ mb: 6 }}>
          <SecurePaymentGateway />
        </Box>

        {/* Action Buttons */}
        <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', mb: 8 }}>
          <Button
            variant="outlined"
            onClick={handleBack}
            sx={{
              borderColor: '#666666',
              color: '#666666',
              fontSize: '16px',
              fontWeight: 500,
              padding: '14px 40px',
              borderRadius: '8px',
              textTransform: 'none',
              minWidth: '180px',
              '&:hover': {
                borderColor: '#000000',
                color: '#000000',
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              }
            }}
          >
            Edit Details
          </Button>
          
          <Button
            variant="contained"
            onClick={() => handlePaymentMethodSelect('clinic')}
            sx={{
              backgroundColor: '#1976d2',
              color: 'white',
              fontSize: '16px',
              fontWeight: 600,
              padding: '14px 40px',
              borderRadius: '8px',
              textTransform: 'none',
              minWidth: '180px',
              '&:hover': {
                backgroundColor: '#1565c0',
              }
            }}
          >
            Confirm & Pay ₹{amount}
          </Button>
        </Box>

      
      </Box>
    </Box>
  );
};

export default PaymentPage;