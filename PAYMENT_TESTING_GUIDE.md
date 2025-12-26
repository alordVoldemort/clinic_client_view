# Payment Testing Guide

## Overview
This guide explains how the payment amount flows through the system and how to test with 1 rupee for live API testing.

**⚠️ IMPORTANT: Backend is the single source of truth for payment amount. Frontend only displays the amount and never sends it to the backend.**

## Payment Amount Flow

### 1. **Backend - PaymentController.php** (Source of Truth)
- **Location**: `25th_decClinic_Website_Backend_PHP-/src/controllers/PaymentController.php`
- **Method**: `getPaymentAmount()`
- **Logic**: 
  ```php
  $testMode = $_ENV['PAYMENT_TEST_MODE'] ?? getenv('PAYMENT_TEST_MODE');
  return ($testMode === 'true' || $testMode === '1') ? 1 : 500;
  ```
- **Action**: 
  - Determines payment amount (₹500 production, ₹1 test mode)
  - Creates Razorpay order with backend-defined amount
  - Ignores any amount sent from frontend

### 2. **Backend - AppointmentController.php** (Source of Truth)
- **Location**: `25th_decClinic_Website_Backend_PHP-/src/controllers/AppointmentController.php`
- **Method**: `getPaymentAmount()`
- **Logic**: Uses same method as PaymentController
- **Action**: 
  - Sets `amount` and `consultation_fee` when creating appointments
  - Ignores any amount sent from frontend

### 3. **Frontend - BookAppointment.jsx** (Display Only)
- **Location**: `src/pages/Appointment/BookAppointment.jsx`
- **Action**: 
  - Navigates to PaymentPage with appointment data only
  - **Does NOT send amount** to backend

### 4. **Frontend - PaymentPage.jsx** (Display Only)
- **Location**: `src/pages/Payments/PaymentPage.jsx`
- **Logic**:
  - Uses `PAYMENT_AMOUNT` constant (₹500) for display only
  - **Does NOT send amount** in API requests:
    - `/payment/order` - no amount field
    - `/payment/verify` - no amount field
    - `/appointments` - no amount field
  - Displays amount in "Proceed to Pay" button and cards

### 5. **Frontend - Constants**
- **Location**: `src/constants/payment.js`
- **Constant**: `PAYMENT_AMOUNT = 500`
- **Purpose**: Display-only constant for UI

## How to Test with 1 Rupee

### Backend Configuration (Required)

1. **Create/Edit `.env` file** in `25th_decClinic_Website_Backend_PHP-/` directory:
   ```env
   PAYMENT_TEST_MODE=true
   ```

2. **Restart the PHP backend server

3. **Test the payment flow**:
   - Book an appointment
   - Backend will use ₹1 for payment
   - Frontend will still display ₹500 (display constant)
   - Complete the payment with Razorpay test cards
   - Actual payment will be ₹1 (100 paise)

4. **To switch back to production (₹500)**:
   - Set `PAYMENT_TEST_MODE=false` or remove the line from backend `.env`
   - Restart the backend server

### Frontend Display (Optional)

The frontend uses a constant `PAYMENT_AMOUNT = 500` for display purposes only. This is just for UI consistency. The actual payment amount is determined by the backend.

**Note**: Frontend display amount does not affect the actual payment. Backend always determines the real payment amount.

## Test Payment Cards (Razorpay)

When testing with 1 rupee, use these Razorpay test cards:

### Success Cards:
- **Card Number**: `4111 1111 1111 1111`
- **CVV**: Any 3 digits (e.g., `123`)
- **Expiry**: Any future date (e.g., `12/25`)
- **Name**: Any name

### Failure Cards:
- **Card Number**: `4000 0000 0000 0002` (for payment failure)

## Amount Flow Diagram

```
Backend (Source of Truth)
    ↓
PaymentController.getPaymentAmount()
    ├─→ Checks PAYMENT_TEST_MODE env var
    ├─→ Returns ₹1 (test) or ₹500 (production)
    └─→ Used in:
        ├─→ createOrder() - Razorpay order amount
        └─→ verifyPayment() - Appointment amount & consultation_fee

Frontend (Display Only)
    ↓
BookAppointment.jsx
    ↓ (navigates with appointmentData only, NO amount)
    ↓
PaymentPage.jsx
    ↓ (uses PAYMENT_AMOUNT constant = 500 for display)
    ↓
    ├─→ ConsultationFeeCard (displays ₹500)
    ├─→ AppointmentSummaryCard (displays ₹500)
    ├─→ "Proceed to Pay" button (shows ₹500)
    └─→ handleOnlinePayment()
        ↓
        ├─→ POST /payment/order { booking: {...}, currency: "INR" }
        │   ↓ (NO amount field)
        │   PaymentController.php
        │   ↓
        │   Uses getPaymentAmount() → Creates Razorpay order
        │
        └─→ POST /payment/verify { booking: {...}, ... }
            ↓ (NO amount field)
            PaymentController.php
            ↓
            Uses getPaymentAmount() → Creates appointment
```

## Important Notes

1. **Backend is Source of Truth**: 
   - Payment amount is **always** determined by backend
   - Frontend **never** sends amount to backend
   - Frontend only displays amount for UI purposes

2. **Razorpay Amount**: Backend multiplies by 100 to convert rupees to paise
   - 1 rupee = 100 paise
   - 500 rupees = 50,000 paise

3. **Minimum Amount**: Razorpay minimum is 1 rupee (100 paise)

4. **Test Mode**: 
   - Set `PAYMENT_TEST_MODE=true` in **backend** `.env` for ₹1 testing
   - Set `PAYMENT_TEST_MODE=false` or unset for production (₹500)
   - Frontend display constant does not affect actual payment

5. **Environment Variables**: 
   - Backend: `PAYMENT_TEST_MODE` (in `25th_decClinic_Website_Backend_PHP-/.env`)
   - Frontend: `PAYMENT_AMOUNT` constant (display only, in `src/constants/payment.js`)
   - Changes require backend server restart

6. **Security**: 
   - Client-side tampering of payment amount is prevented
   - Backend ignores any amount sent from frontend
   - All payment amounts are server-side validated

## Files Modified for Backend-Controlled Amount

### Backend Files:
1. ✅ `25th_decClinic_Website_Backend_PHP-/src/controllers/PaymentController.php`
   - Added `getPaymentAmount()` method
   - Removed amount validation from frontend
   - Uses backend-defined amount for Razorpay orders
   - Uses backend-defined amount for appointments

2. ✅ `25th_decClinic_Website_Backend_PHP-/src/controllers/AppointmentController.php`
   - Added `getPaymentAmount()` method
   - Uses backend-defined amount for appointments
   - Ignores amount from frontend

### Frontend Files:
1. ✅ `Clinic_Frontend_New/src/constants/payment.js` - NEW FILE
   - Contains `PAYMENT_AMOUNT = 500` constant (display only)

2. ✅ `src/pages/Appointment/BookAppointment.jsx`
   - Removed amount from navigation state
   - No longer sends amount to backend

3. ✅ `src/pages/Payments/PaymentPage.jsx`
   - Removed amount from all API payloads
   - Uses `PAYMENT_AMOUNT` constant for display only
   - Gets actual amount from backend responses

4. ✅ `src/pages/Payments/ConsultationFeeCard.jsx` - Receives amount as prop (display only)
5. ✅ `src/pages/Payments/AppointmentSummaryCard.jsx` - Receives amount as prop (display only)

## Quick Reference

| Mode | Backend Amount | Backend Env Var | Frontend Display |
|------|----------------|-----------------|------------------|
| Production | ₹500 | `PAYMENT_TEST_MODE=false` or unset | ₹500 (constant) |
| Testing | ₹1 | `PAYMENT_TEST_MODE=true` | ₹500 (constant, display only) |

## Troubleshooting

**Q: Frontend still shows ₹500 even after setting backend test mode**
- This is expected! Frontend uses a display constant (₹500) for UI consistency
- The actual payment amount is determined by backend
- Check backend `.env` file for `PAYMENT_TEST_MODE=true`
- Restart backend server after changing `.env`
- Verify actual payment amount in Razorpay dashboard or appointment records

**Q: Payment fails with 1 rupee**
- Ensure you're using Razorpay test mode keys
- Check that backend `.env` has `PAYMENT_TEST_MODE=true`
- Restart backend server after changing `.env`
- Verify Razorpay account allows 1 rupee transactions

**Q: Where is the amount stored in database?**
- Stored in `appointments` table in `amount` and `consultation_fee` columns
- Both are set by backend using `getPaymentAmount()` method
- Frontend never sends amount to backend

**Q: How do I verify the actual payment amount?**
- Check Razorpay dashboard for order amount
- Check database `appointments` table for `amount` and `consultation_fee` columns
- Check backend logs for payment order creation
- Frontend display is for UI only and may differ from actual payment

