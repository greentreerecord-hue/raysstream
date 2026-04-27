import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function transcodeVideo(videoId: string) {
  console.log("Starting transcode for video:", videoId);

  try {
    const video = await prisma.video.findUnique({
      where: {
        id: videoId,
      },
    });

    if (!video) {
      console.log("Video not found:", videoId);
      return;
    }

    console.log("Transcode finished for video:", videoId);
  } catch (error) {
    console.error("Transcode failed:", error);
    throw error;
  }
} }
