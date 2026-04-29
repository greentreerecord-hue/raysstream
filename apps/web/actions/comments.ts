"use server"

export async function createComment({ data }: any) {
  console.log("Creating comment:", data)

  // TEMP fake success (so build passes)
  return { success: true }
} 
