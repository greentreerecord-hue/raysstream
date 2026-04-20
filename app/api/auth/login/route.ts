import { NextResponse } from "next/server";
import { prisma } from "@/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ ok: false, error: "Email required" }, { status: 400 });
    }

    // find or create user
    let user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      user = await prisma.user.create({
        data: { email },
      });
    }

    return NextResponse.json({
      ok: true,
      user: {
        id: user.id,
        email: user.email,
      },
    });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
} 
