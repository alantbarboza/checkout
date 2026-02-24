import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString: connectionString,
  statement_timeout: 30000,
});

const adapter = new PrismaPg(pool);

export const PrismaFactory = new PrismaClient({
  adapter,
  log: ["query", "error", "warn"],
});