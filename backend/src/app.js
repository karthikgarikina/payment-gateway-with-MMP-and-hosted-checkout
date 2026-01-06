import express from "express";
import healthRoutes from "./routes/health.routes.js";
import orderRoutes from "./routes/order.routes.js";
import paymentRoutes from "./routes/payment.routes.js";
import testRoutes from "./routes/test.routes.js";

const app = express();
app.use(express.json());

app.use(healthRoutes);
app.use(orderRoutes);
app.use(paymentRoutes);
app.use(testRoutes);

export default app;
