import express from "express";
import { authenticate } from "../middleware/auth.js";
import { createOrder, getOrder } from "../controllers/order.controller.js";

const router = express.Router();

router.post("/api/v1/orders", authenticate, createOrder);
router.get("/api/v1/orders/:order_id", authenticate, getOrder);

export default router;
