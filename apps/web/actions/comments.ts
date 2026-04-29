"use server";

export async function createComment(formData: FormData) {
  const body = formData.get("body") as string;
  const videoId = formData.get("videoId") as string;

  console.log("New comment:", { body, videoId });

  // TODO: save to database later
  return { success: true };
} 
