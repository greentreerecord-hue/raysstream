import { NextResponse } from "next/server";

export async function POST() {
  console.log("Checkout temporarily disabled");

  return NextResponse.json({
    success: true,
    message: "Checkout temporarily disabled until Stripe is connected.",
  });
} 
