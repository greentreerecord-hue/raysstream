"use server";

import { prisma } from "@/lib/prisma";

export async function createComment({
  videoId,
  userId,
  text,
}: {
  videoId: string;
  userId: string;
  text: string;
}) {
  try {
    const comment = await prisma.comment.create({
      data: {
        videoId,
        authorId: userId,
        text,
      },
    });

    return { success: true, comment };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
} 
