"use server";

import { prisma } from "@raysstream/db";

export async function createComment({
  videoId,
  body,
}: {
  videoId: string;
  body: string;
}) {
  return await (prisma as any).comment.create({
    data: {
      videoId,
      authorId: "temp-user",
      content: body,
    },
  });
} 
