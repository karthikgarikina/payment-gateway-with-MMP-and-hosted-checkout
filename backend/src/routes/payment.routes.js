import express from "express";
import { authenticate } from "../middleware/auth.js";
import { createPayment, getPayment } from "../controllers/payment.controller.js";

const router = express.Router();

router.post("/api/v1/payments", authenticate, createPayment);
router.get("/api/v1/payments/:payment_id", authenticate, getPayment);

export default router;
