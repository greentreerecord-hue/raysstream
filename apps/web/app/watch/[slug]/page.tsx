export const dynamic = "force-dynamic";

import { prisma } from "@raysstream/db";
import { getCurrentUser } from "@/lib/auth";
import { notFound } from "next/navigation";

export default async function WatchPage({ params }: any) {
  const user = await getCurrentUser();
  const slug = params.slug;

  const video: any = await prisma.video.findUnique({
    where: { slug },
    include: {
      channel: true,
    },
  });

  if (!video) notFound();
  if (video.status !== "PUBLISHED") notFound();
  if (video.visibility === "PREMIUM" && !user) notFound();

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-3xl font-bold">{video.title}</h1>

      <div className="mt-4">
        <video
          src={video.videoUrl}
          controls
          className="w-full rounded-xl bg-black"
        />
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">
          {video.channel?.name || "Channel"}
        </h2>
        {video.description ? (
          <p className="mt-2 text-sm text-gray-300">{video.description}</p>
        ) : null}
      </div>
    </main>
  );
} 