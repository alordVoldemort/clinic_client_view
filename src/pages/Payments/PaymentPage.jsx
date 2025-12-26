import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../api/axios";
import { PAYMENT_AMOUNT } from "../../constants/payment";

import ConsultationFeeCard from "./ConsultationFeeCard";
import AppointmentSummaryCard from "./AppointmentSummaryCard";
import SelectPaymentMethod from "./SelectPaymentMethod";
import SecurePaymentGateway from "./SecurePaymentGateway";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { appointmentData } = location.state || {};
  const [isProcessing, setIsProcessing] = useState(false);
  // Display amount constant (backend determines actual payment amount)
  const displayAmount = PAYMENT_AMOUNT;

  useEffect(() => {
    if (window.Razorpay) {
      return;
    }

    const existingScript = document.querySelector(
      'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
    );
    if (existingScript) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (script && script.parentNode === document.body) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleOnlinePayment = async () => {
    if (!appointmentData) {
      toast.error("Appointment data is missing");
      return;
    }

    setIsProcessing(true);

    try {
      // Map appointmentData to booking format expected by backend
      // Note: Do NOT include amount or consultation_fee - backend determines these
      const bookingData = {
        name: appointmentData.name,
        email: appointmentData.email,
        phone: appointmentData.phone,
        service: appointmentData.service,
        date: appointmentData.date,
        time: appointmentData.time,
        notes: appointmentData.notes || "",
      };

      // Create Razorpay order
      // Backend will determine the payment amount
      const createOrderResponse = await api.post("/payment/order", {
        currency: "INR",
        booking: bookingData,
      });

      // Check if response is successful
      if (!createOrderResponse.data || !createOrderResponse.data.success) {
        throw new Error(
          createOrderResponse.data?.message || "Failed to create payment order"
        );
      }

      const orderData = createOrderResponse.data.data;
      const { order_id, key_id, booking: returnedBooking } = orderData;

      if (!order_id) {
        throw new Error("Order ID not received from server");
      }

      if (!window.Razorpay) {
        toast.error("Razorpay SDK not loaded. Please refresh the page.");
        setIsProcessing(false);
        return;
      }

      // Use key_id from backend response (preferred) or fallback to env variable
      const razorpayKeyId = key_id || import.meta.env.VITE_RAZORPAY_KEY_ID;
      if (!razorpayKeyId) {
        toast.error("Razorpay key ID is not configured");
        setIsProcessing(false);
        return;
      }

      const options = {
        key: razorpayKeyId,
        amount: orderData.amount, // Use amount from backend (already in paise)
        currency: orderData.currency || "INR",
        name: "Clinic",
        description: "Appointment Payment",
        order_id: order_id,
        handler: async function (response) {
          try {
            // Verify payment with booking data (appointment is created after payment verification)
            const verifyResponse = await api.post("/payment/verify", {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              booking: returnedBooking || bookingData, // Send booking data for appointment creation
            });

            if (
              verifyResponse.data &&
              verifyResponse.data.success &&
              verifyResponse.status === 200
            ) {
              // Map backend appointment data to frontend format
              const backendAppointment =
                verifyResponse.data.data?.appointment || {};
              const mappedAppointmentData = {
                patientName: backendAppointment.name || appointmentData.name,
                treatment:
                  backendAppointment.service || appointmentData.service,
                date: backendAppointment.date || appointmentData.date,
                time: backendAppointment.time || appointmentData.time,
                email: backendAppointment.email || appointmentData.email,
                phone: backendAppointment.phone || appointmentData.phone,
                appointmentId: verifyResponse.data.data?.appointment_id,
              };

              // Get amount from backend response (backend is source of truth)
              const backendAmount = verifyResponse.data.data?.payment_details?.amount || displayAmount;
              
              // Navigate to confirmation page with appointment details
              navigate("/payment/appointment-confirmation", {
                state: {
                  appointmentData: mappedAppointmentData,
                  paymentMethod: "ONLINE",
                  amount: backendAmount,
                  paymentDetails: response,
                  appointmentId: verifyResponse.data.data?.appointment_id,
                },
              });
            } else {
              const errorMsg =
                verifyResponse.data?.message ||
                "Payment verification failed. Please contact support.";
              toast.error(errorMsg);
              setIsProcessing(false);
            }
          } catch (error) {
            console.error("Payment verification error:", error);
            const errorMsg =
              error.response?.data?.message ||
              "Payment verification failed. Please contact support.";
            toast.error(errorMsg);
            setIsProcessing(false);
          }
        },
        prefill: {
          name: appointmentData.name || "",
          email: appointmentData.email || "",
          contact: appointmentData.phone || "",
        },
        theme: {
          color: "#1976d2",
        },
        modal: {
          ondismiss: function () {
            setIsProcessing(false);
          },
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
      razorpay.on("payment.failed", function (response) {
        console.error("Payment failed:", response);
        toast.error(
          `Payment failed: ${
            response.error?.description || "Please try again."
          }`
        );
        setIsProcessing(false);
      });
    } catch (error) {
      console.error("Payment initiation error:", error);
      const errorMsg =
        error.response?.data?.message ||
        error.message ||
        "Failed to initiate payment. Please try again.";
      toast.error(errorMsg);
      setIsProcessing(false);
    }
  };

  const handlePaymentMethodSelect = async (method) => {
    console.log("Selected payment method:", method);
    
    if (method === 'clinic') {
      // Pay at Clinic - Create appointment immediately
      setIsProcessing(true);
      
      try {
        // Create appointment with payment_mode = 'clinic'
        // Note: Do NOT include amount or consultation_fee - backend determines these
        const bookingData = {
          name: appointmentData.name,
          email: appointmentData.email,
          phone: appointmentData.phone,
          service: appointmentData.service,
          date: appointmentData.date,
          time: appointmentData.time,
          notes: appointmentData.notes || "",
          payment_mode: 'clinic'
        };

        // baseURL already includes /api, so use /appointments
        const response = await api.post("/appointments", bookingData);

        if (response.data && response.data.success) {
          const backendAppointment = response.data.data?.appointment || {};
          const mappedAppointmentData = {
            patientName: backendAppointment.name || appointmentData.name,
            treatment: backendAppointment.service || appointmentData.service,
            date: backendAppointment.date || appointmentData.date,
            time: backendAppointment.time || appointmentData.time,
            email: backendAppointment.email || appointmentData.email,
            phone: backendAppointment.phone || appointmentData.phone,
            appointmentId: backendAppointment.id,
          };

          toast.success("Appointment booked successfully!");
          
          // Get amount from backend response (backend is source of truth)
          const backendAmount = backendAppointment.amount || displayAmount;
          
          // Navigate to confirmation page
          navigate("/payment/appointment-confirmation", {
            state: {
              appointmentData: mappedAppointmentData,
              paymentMethod: "CLINIC",
              amount: backendAmount,
              appointmentId: backendAppointment.id,
            },
          });
        } else {
          throw new Error(response.data?.message || "Failed to book appointment");
        }
      } catch (error) {
        console.error("Pay at clinic error:", error);
        const errorMsg =
          error.response?.data?.message ||
          error.message ||
          "Failed to book appointment. Please try again.";
        toast.error(errorMsg);
        setIsProcessing(false);
      }
    } else {
      // Other payment methods (if any)
      navigate("/payment/appointment-confirmation", {
        state: {
          appointmentData,
          paymentMethod: method,
          amount: displayAmount, // Display amount only
        },
      });
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#FBF9FA",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        py: { xs: 2, sm: 3, md: 4 },
        px: { xs: 1.5, sm: 2, md: 3 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: {
            xs: "100%",
            sm: "600px",
            md: "780px",
            lg: "800px",
          },
          backgroundColor: "#FFFFFF",
          borderRadius: { xs: "8px", sm: "12px", md: "14px" },
          border: "1px solid #E0E0E0",
          py: { xs: 3, sm: 4, md: 5 },
          px: { xs: 2, sm: 3, md: 4 },
          mx: "auto",
          boxShadow: {
            xs: "0px 2px 8px rgba(0, 0, 0, 0.05)",
            md: "0px 4px 20px rgba(0, 0, 0, 0.05)",
          },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <ConsultationFeeCard amount={displayAmount} />

        <AppointmentSummaryCard
          appointmentData={appointmentData}
          amount={displayAmount}
        />

        <SelectPaymentMethod
          onPaymentMethodSelect={handlePaymentMethodSelect}
        />

        <SecurePaymentGateway />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 2, sm: 3 },
            justifyContent: "center",
            width: "100%",
            maxWidth: { xs: "100%", sm: "525px", md: "525px" },
            mt: { xs: 1, sm: 2 },
          }}
        >
          <Button
<<<<<<< HEAD
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
            onClick={() => navigate('https://rzp.io/rzp/oYQ5mtE')}
=======
            variant="outlined"
            onClick={handleBack}
            disabled={isProcessing}
>>>>>>> 73529526feb9c1b21c39ee08d770b58059cebfb1
            sx={{
              borderColor: "#155DFC",
              color: "#155DFC",
              backgroundColor: "#EFEFEF",
              fontSize: { xs: "14px", sm: "15px", md: "16px" },
              fontWeight: 500,
              padding: { xs: "10px 20px", sm: "12px 30px", md: "14px 40px" },
              borderRadius: "8px",
              textTransform: "none",
              width: { xs: "100%", sm: "auto" },
              minWidth: { xs: "100%", sm: "150px", md: "180px" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              "&:hover": {
                borderColor: "#155DFC",
                color: "#155DFC",
                backgroundColor: "#EFEFEF",
              },
            }}
          >
            <span style={{ color: "#155DFC", fontWeight: 600 }}>←</span>
            Back
          </Button>

          <Button
            variant="contained"
            onClick={handleOnlinePayment}
            disabled={isProcessing}
            sx={{
              backgroundColor: "#1976d2",
              color: "white",
              fontSize: { xs: "14px", sm: "15px", md: "16px" },
              fontWeight: 600,
              padding: { xs: "10px 20px", sm: "12px 30px", md: "14px 40px" },
              borderRadius: "8px",
              textTransform: "none",
              width: { xs: "100%", sm: "auto" },
              minWidth: { xs: "100%", sm: "150px", md: "180px" },
              "&:hover": {
                backgroundColor: "#1565c0",
              },
              "&:disabled": {
                backgroundColor: "#90caf9",
                color: "white",
              },
            }}
          >
            {isProcessing ? "Processing..." : `Proceed to Pay ₹${displayAmount}`}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PaymentPage;
