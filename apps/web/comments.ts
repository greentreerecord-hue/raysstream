export async function createComment(data: { body: string }) {
  console.log("Comment:", data.body);
  return { success: true };
} 
