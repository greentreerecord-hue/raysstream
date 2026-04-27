"use server";

export async function createComment({
  videoId,
  body,
}: {
  videoId: string;
  body: string;
}) {
  if (!videoId || !body) return null;

  return null;
}

export async function getComments(videoId: string) {
  if (!videoId) return [];

  return [];
} 