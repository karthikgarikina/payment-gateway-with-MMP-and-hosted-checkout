# Database Schema

## Merchant
- id (UUID, PK)
- email
- api_key
- api_secret
- created_at

## Order
- id (order_xxx)
- merchant_id (FK → Merchant)
- amount
- currency
- status
- created_at

## Payment
- id (pay_xxx)
- order_id (FK → Order)
- merchant_id (FK → Merchant)
- method (upi/card)
- status (processing/success/failed)
- vpa (nullable)
- card_network (nullable)
- card_last4 (nullable)
- error_code
- created_at
- updated_at

⚠️ Card number & CVV are never stored.
