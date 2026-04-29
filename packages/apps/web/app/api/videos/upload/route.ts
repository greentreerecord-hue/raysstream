import { NextResponse } from "next/server";

export async function POST() {
  console.log("Video upload temporarily disabled");

  return NextResponse.json({
    success: true,
    message: "Upload temporarily disabled until database and transcoding are connected.",
  });
} 
