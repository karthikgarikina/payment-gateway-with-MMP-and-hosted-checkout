import express from "express";
import { authenticate } from "../middleware/auth.js";
import {
  createPayment,
  getPayment,
  listPayments,
} from "../controllers/payment.controller.js";

const router = express.Router();

router.post("/api/v1/payments", authenticate, createPayment);
router.get("/api/v1/payments", authenticate, listPayments);
router.get("/api/v1/payments/:payment_id", authenticate, getPayment);
router.post("/api/v1/payments/public", async (req, res) => {
  const { order_id } = req.body;

  const order = await prisma.order.findUnique({
    where: { id: order_id },
  });

  if (!order) {
    return res.status(404).json({
      error: { code: "NOT_FOUND", description: "Order not found" },
    });
  }

  // Reuse existing controller logic safely
  req.merchant = { id: order.merchant_id };
  return createPayment(req, res);
});

export default router;
