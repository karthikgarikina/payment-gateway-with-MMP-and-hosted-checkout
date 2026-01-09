# Payment Gateway with Hosted Checkout & Dashboard

## 🚀 Overview
This project is a fully containerized **payment gateway system** built as part of an evaluation task.  
It includes:

- Backend API (Node.js + Express + Prisma)
- Dashboard frontend (React + NGINX) for merchants
- Hosted checkout page (React + NGINX) for customers
- PostgreSQL database
- Deterministic test mode for automated evaluation

All services start with **one command** using Docker Compose.

---

## 🧱 Architecture Overview

```
Dashboard (React + NGINX) :3000
        |
        | Authenticated APIs
        v
Backend API (Node + Express) :8000
        |
        | Prisma ORM
        v
PostgreSQL (Docker)

Checkout Page (React + NGINX) :3001
        |
        | Public APIs
        v
Backend API
```

---

## 📦 Tech Stack

- **Backend**: Node.js, Express, Prisma ORM
- **Frontend**: React (Vite)
- **Database**: PostgreSQL
- **Containerization**: Docker, Docker Compose
- **Web Server**: NGINX

---

## ⚙️ Setup Instructions

### Prerequisites
- Docker
- Docker Compose

### Run the project

```bash
docker compose up -d --build
```

That’s it ✅  
No manual steps, no local installs.

---

## 🌱 Test Merchant (Auto-Seeded)

The database is automatically seeded on startup with this merchant:

- **Email**: test@example.com
- **API Key**: key_test_abc123
- **API Secret**: secret_test_xyz789

---

## 🔑 Service URLs

| Service       |         URL           |
|---------------|-----------------------|
| Backend API   | http://localhost:8000 |
| Dashboard     | http://localhost:3000 |
| Checkout Page | http://localhost:3001 |

---

## 📘 API Documentation

Detailed API documentation is available here:

- 📄 `docs/api-docs.md`

Includes:
- Order creation
- Payment creation (UPI & Card)
- Public checkout APIs
- Test merchant endpoint

---

## 🗂 Database Schema

Database schema and relationships are documented here:

- 📄 `docs/database-schema.md`

---

## 🧪 Test Mode (Required for Evaluation)

The system supports deterministic testing using environment variables.

Relevant variables (see `.env.example`):

```
TEST_MODE=true
TEST_PAYMENT_SUCCESS=true
TEST_PROCESSING_DELAY=1000
```

When enabled:
- Payment success/failure becomes deterministic
- Processing delay is fixed
- Randomness is disabled

---

## 🖥 Dashboard Features

- Login page (email-based, simplified for evaluation)
- Display of API credentials
- Transaction statistics:
  - Total transactions
  - Total successful amount
  - Success rate
- Transactions list with real-time data

---

## 💳 Checkout Flow

- Accepts `order_id` via query parameter
- Displays order summary
- Supports:
  - UPI payments
  - Card payments (Luhn validation, expiry validation, network detection)
- Shows:
  - Processing state
  - Success state
  - Failure state
- Polls backend every 2 seconds for payment status

---
## URLs

### Backend API
http://localhost:8000/health

### Dashboard
http://localhost:3000/login  
http://localhost:3000/dashboard  
http://localhost:3000/dashboard/transactions  

### Checkout 
http://localhost:3001/checkout?order_id=ORDER_ID

### Public APIs (No Auth)
GET  http://localhost:8000/api/v1/orders/{order_id}/public  
POST http://localhost:8000/api/v1/payments/public  
GET  http://localhost:8000/api/v1/payments/{payment_id}/public  

### Merchant APIs (Auth Required)
POST http://localhost:8000/api/v1/orders  
POST http://localhost:8000/api/v1/payments  
GET  http://localhost:8000/api/v1/payments  
GET  http://localhost:8000/api/v1/payments/{payment_id}  

### Test Endpoint
GET http://localhost:8000/api/v1/test/merchant

---

## 📸 Screenshots

All required screenshots are available in:

```
screenshots/
├── dashboard/
└── checkout/
```

Includes:
- Login page
- Dashboard home
- Transactions page
- Checkout flow (UPI & Card)
- Processing, success, and failure states

---

## 🎥 Demo Video

A complete end-to-end demo video is available here:

👉 **[Demo Video Link](https://youtu.be/dQivk0AFsI0?si=8LwM0TvydcrwSt6V)**

The video shows:
1. Order creation via API
2. Checkout payment flow
3. Successful payment
4. Transaction reflected in dashboard

---

## 🔐 Security Notes

- Card numbers and CVV are **never stored**
- Only card network and last 4 digits are saved
- Authentication is enforced for merchant APIs
- Public APIs are limited to checkout use-cases only

---

## ✅ Submission Checklist

- [x] Single `docker compose up -d` startup
- [x] All services containerized
- [x] Test merchant auto-seeded
- [x] Deterministic test mode supported
- [x] Required frontend `data-test-id` attributes implemented
- [x] API validation logic implemented
- [x] Documentation included

---

## 🏁 Conclusion

This project demonstrates a production-grade, containerized payment gateway system with:

- Clean architecture
- Strong validation logic
- End-to-end integration
- Evaluation-friendly deterministic behavior