import React from 'react';
import { Box, Typography, Paper, Divider } from '@mui/material';

const AppointmentSummaryCard = ({ appointmentData, amount = 500 }) => {
  return (
    <Box sx={{ 
      width: '525px', 
      height: '338px', 
      mb: 6, // Changed from mt:1 to mb:3 to create space below the card
      display: 'flex', 
      flexDirection: 'column' 
    }}>


      <Paper elevation={0} sx={{ 
        width: '100%', 
        height: '100%', 
        borderRadius: '12px', 
        border: '1px solid #E0E0E0', 
        backgroundColor: '#F8F9FA', 
        p: '9px 16px', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between' 
      }}>
        {/* Header */}
        <Box>
          <Typography sx={{ 
            fontSize: '17px', 
            fontWeight: 500, 
            color: '#000000', 
            mb: 3 
          }}>
            Appointment Summary
          </Typography>

          {/* Details Section */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 1.5, // 12px gap
            mb: 2 
          }}>
            {appointmentData && (
              <>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography sx={{ fontSize: '16px', color: '#666666' }}>
                    Patient Name:
                  </Typography>
                  <Typography sx={{ fontSize: '16px', fontWeight: 300, color: '#000000' }}>
                    {appointmentData.name}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography sx={{ fontSize: '16px', color: '#666666' }}>
                    Email:
                  </Typography>
                  <Typography sx={{ fontSize: '16px', fontWeight: 300, color: '#000000' }}>
                    {appointmentData.email}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography sx={{ fontSize: '16px', color: '#666666' }}>
                    Phone:
                  </Typography>
                  <Typography sx={{ fontSize: '16px', fontWeight: 300, color: '#000000' }}>
                    {appointmentData.phone}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography sx={{ fontSize: '16px', color: '#666666' }}>
                    Treatment:
                  </Typography>
                  <Typography sx={{ fontSize: '16px', fontWeight: 300, color: '#000000' }}>
                    {appointmentData.service}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography sx={{ fontSize: '16px', color: '#666666' }}>
                    Date & Time:
                  </Typography>
                  <Typography sx={{ fontSize: '16px', fontWeight: 300, color: '#000000' }}>
                    {appointmentData.date} at {appointmentData.time}
                  </Typography>
                </Box>

                {appointmentData.notes && (
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: '16px', color: '#666666' }}>
                      Notes:
                    </Typography>
                    <Typography sx={{ fontSize: '16px', fontWeight: 300, color: '#000000' }}>
                      {appointmentData.notes}
                    </Typography>
                  </Box>
                )}
              </>
            )}
          </Box>
        </Box>

        {/* Divider */}
        <Divider sx={{ my: 1 }} />

        {/* Footer - Total Amount */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography sx={{ fontSize: '17px', fontWeight: 400, color: '#000000' }}>
            Total Amount
          </Typography>
          <Typography sx={{ fontSize: '17px', fontWeight: 400, color: '#151414' }}>
            ₹{amount}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default AppointmentSummaryCard;