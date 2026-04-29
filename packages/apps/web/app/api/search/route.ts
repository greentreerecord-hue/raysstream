import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get("q");

  console.log("Search query:", q);

  return NextResponse.json({
    results: [],
    query: q,
  });
} 
