import React from 'react';
import { Box, Typography, Paper, Divider } from '@mui/material';

const AppointmentSummaryCard = ({ appointmentData, amount = 500 }) => {
  // Format date from YYYY-MM-DD to dd/mm/yyyy
  const formatDate = (dateString) => {
    if (!dateString) return '-';
    try {
      const parts = dateString.split('-');
      if (parts.length === 3) {
        const year = parts[0];
        const month = parts[1];
        const day = parts[2];
        return `${day}/${month}/${year}`;
      }
      return dateString;
    } catch (error) {
      return dateString;
    }
  };

  const formattedDate = appointmentData?.date ? formatDate(appointmentData.date) : '-';

  return (
    <Box sx={{ 
      width: '100%',
      maxWidth: { xs: '100%', sm: '450px', md: '525px' },
      height: { xs: 'auto', sm: 'auto', md: '338px' },
      display: 'flex', 
      flexDirection: 'column',
    }}>
      <Paper elevation={0} sx={{ 
        width: '100%', 
        height: '100%', 
        borderRadius: { xs: '8px', sm: '10px', md: '12px' }, 
        border: '1px solid #E0E0E0', 
        backgroundColor: '#F8F9FA', 
        p: { xs: '12px', sm: '14px', md: '16px' }, 
        display: 'flex', 
        flexDirection: 'column', 
        gap: { xs: 1, sm: 1.5, md: 2} 
      }}>
        {/* Header */}
        <Box>
          <Typography sx={{ 
            fontSize: { xs: '15px', sm: '16px', md: '17px' }, 
            fontWeight: 500, 
            color: '#000000', 
            mb: { xs: 1, sm: 2, md: 3 }
          }}>
            Appointment Summary
          </Typography>

          {/* Details Section */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: { xs: 1, sm: 1.25, md: 1.5 },
          }}>
            {appointmentData && (
              <>
                <Row label="Patient Name" value={appointmentData.name} />
                <Row label="Treatment" value={appointmentData.service} />
                <Row label="Date" value={formattedDate} />
                <Row label="Time" value={appointmentData.time} />
              </>
            )}
          </Box>
        </Box>

        {/* Divider */}
        <Divider sx={{ my: { xs: 1, sm: 1.25, md: 1.5 } }} />

        {/* Footer - Total Amount */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography sx={{ fontSize: { xs: '15px', sm: '16px', md: '17px' }, fontWeight: 400, color: '#000000' }}>
            Total Amount
          </Typography>
          <Typography sx={{ fontSize: { xs: '15px', sm: '16px', md: '17px' }, fontWeight: 400, color: '#151414' }}>
            ₹ {amount} {/* <- always 500 now */}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};


const Row = ({ label, value }) => (
  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
    <Typography sx={{ 
      fontSize: { xs: '13px', sm: '14px', md: '16px' }, 
      color: '#666666' 
    }}>
      {label}:
    </Typography>
    <Typography sx={{ 
      fontSize: { xs: '13px', sm: '14px', md: '16px' }, 
      fontWeight: 300, 
      color: '#000000',
      textAlign: 'right',
      ml: 1
    }}>
      {value || '-'}
    </Typography>
  </Box>
);

export default AppointmentSummaryCard;
