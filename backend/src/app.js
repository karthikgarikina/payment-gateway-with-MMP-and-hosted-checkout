import express from "express";
import healthRoutes from "./routes/health.routes.js";
import orderRoutes from "./routes/order.routes.js";

const app = express();

app.use(express.json());

app.use(healthRoutes);
app.use(orderRoutes);

export default app;
