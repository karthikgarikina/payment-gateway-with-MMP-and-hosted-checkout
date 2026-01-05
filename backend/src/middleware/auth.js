import { prisma } from "../config/db.js";

export async function authenticate(req, res, next) {
  const apiKey = req.header("X-Api-Key");
  const apiSecret = req.header("X-Api-Secret");

  if (!apiKey || !apiSecret) {
    return res.status(401).json({
      error: {
        code: "AUTHENTICATION_ERROR",
        description: "Invalid API credentials",
      },
    });
  }

  const merchant = await prisma.merchant.findFirst({
    where: {
      api_key: apiKey,
      api_secret: apiSecret,
      is_active: true,
    },
  });

  if (!merchant) {
    return res.status(401).json({
      error: {
        code: "AUTHENTICATION_ERROR",
        description: "Invalid API credentials",
      },
    });
  }

  req.merchant = merchant;
  next();
}
