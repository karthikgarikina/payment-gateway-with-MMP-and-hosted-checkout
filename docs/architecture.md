┌───────────────┐
│ Dashboard UI  │  (React + NGINX)  :3000
└───────▲───────┘
        │
        │ Auth APIs
        ▼
┌───────────────┐
│ Backend API   │  (Node + Express) :8000
│               │
│ - Auth        │
│ - Orders      │
│ - Payments    │
│ - Validation  │
└───────▲───────┘
        │
        │ Prisma ORM
        ▼
┌───────────────┐
│ PostgreSQL    │
│ (Docker)      │
└───────────────┘

┌───────────────┐
│ Checkout UI   │  (React + NGINX)  :3001
└───────▲───────┘
        │
        │ Public APIs
        ▼
┌───────────────┐
│ Backend API   │
└───────────────┘
