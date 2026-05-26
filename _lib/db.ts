// _lib/db.ts — Database connection
// Replace with your ORM / DB driver of choice.
// Example below uses Prisma. Swap for Drizzle, Mongoose, etc.

// import { PrismaClient } from "@prisma/client";

// const globalForPrisma = globalThis as unknown as {
//   prisma: PrismaClient | undefined;
// };

// export const db =
//   globalForPrisma.prisma ??
//   new PrismaClient({
//     log: process.env.NODE_ENV === "development" ? ["query"] : [],
//   });

// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;

// ── Placeholder export until Prisma is configured ──────────────────────────────
export const db = null; // replace with real client
