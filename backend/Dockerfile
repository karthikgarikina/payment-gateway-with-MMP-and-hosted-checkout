FROM node:18-slim

WORKDIR /app

# 🔴 REQUIRED for Prisma
RUN apt-get update -y \
  && apt-get install -y openssl \
  && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json* ./
RUN npm install

COPY prisma ./prisma
RUN npx prisma generate

COPY src ./src

EXPOSE 8000

CMD ["node", "src/server.js"]
