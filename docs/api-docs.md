# API Documentation – Payment Gateway

## Authentication
Merchant APIs require:
X-Api-Key: key_test_abc123  
X-Api-Secret: secret_test_xyz789  

---

## Create Order
POST /api/v1/orders

Request:
{
  "amount": 50000,
  "currency": "INR"
}

Response 201:
{
  "id": "order_xxx",
  "amount": 50000,
  "currency": "INR",
  "status": "created"
}

---

## Create Payment (Authenticated)
POST /api/v1/payments

UPI:
{
  "order_id": "order_xxx",
  "method": "upi",
  "vpa": "user@paytm"
}

Card:
{
  "order_id": "order_xxx",
  "method": "card",
  "card": {
    "number": "4111111111111111",
    "expiry_month": "12",
    "expiry_year": "2026",
    "cvv": "123",
    "holder_name": "John Doe"
  }
}

---

## Public Order (Checkout)
GET /api/v1/orders/{order_id}/public

---

## Public Payment
POST /api/v1/payments/public  
GET /api/v1/payments/{payment_id}/public

---

## Test Merchant
GET /api/v1/test/merchant
