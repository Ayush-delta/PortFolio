import { NextResponse } from "next/server";

// GET /api/users — example Route Handler
export async function GET() {
  // Replace with real DB query via _lib/db.ts
  const users = [{ id: 1, name: "Demo User", email: "demo@example.com" }];
  return NextResponse.json({ success: true, data: users });
}

// POST /api/users
export async function POST(request: Request) {
  const body = await request.json();
  // Validate and persist via _lib/db.ts
  return NextResponse.json({ success: true, data: body }, { status: 201 });
}
