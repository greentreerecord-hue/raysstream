import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  console.log("Login:", { email, password });

  return NextResponse.json({
    success: true,
    user: {
      id: "1",
      email,
    },
  });
} 
