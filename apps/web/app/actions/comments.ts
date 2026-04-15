"use server";

import { prisma } from "@raysstream/db";

export async function createComment({
  videoId,
  body,
}: {
  videoId: string;
  body: string;
}) {
  return await prisma.comment.create({
    data: {
      videoId,
      authorId: "temp-user", // TEMP FIX
      content: body.trim(),
    },
  });
} 
