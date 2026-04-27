import { Worker } from "bullmq";
import { transcodeVideo } from "./jobs/transcode";

const connection = { url: process.env.REDIS_URL };

new Worker(
  "video-queue",
  async (job) => {
    if (job.name === "transcode-video") {
      const videoId = (job.data as any).videoId;
      await transcodeVideo(videoId);
    }
  },
  { connection }
); 