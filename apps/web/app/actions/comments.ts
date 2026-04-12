"use server";

import { prisma } from "@/prisma";
import { getCurrentUser } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function createComment(videoId: string, body: string, slug?: string) {
  const user = await getCurrentUser();

  if (!user) throw new Error("Unauthorized");
  if (!body.trim()) throw new Error("Comment cannot be empty");

  await (prisma as any).comment.create({
    data: {
      videoId,
      authorId: user.id,
      content: body.trim(),
    },
  });

  if (slug) {
    revalidatePath(`/watch/${slug}`);
  }
} 
