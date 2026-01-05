import express from "express";
import pkg from "pg";

const { Pool } = pkg;

const app = express();
const PORT = process.env.PORT || 8000;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.get("/health", async (req, res) => {
  let dbStatus = "disconnected";

  try {
    await pool.query("SELECT 1");
    dbStatus = "connected";
  } catch (err) {
    dbStatus = "disconnected";
  }

  return res.status(200).json({
    status: "healthy",
    database: dbStatus,
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
