export const dynamic = "force-dynamic";

import { prisma } from "@raysstream/db";
import { getCurrentUser } from "@/lib/auth";
import { notFound } from "next/navigation";

export default async function WatchPage({
  params,
}: {
  params: { slug: string };
}) {
  const user = await getCurrentUser();
  const slug = params.slug;

  const video = await prisma.video.findUnique({
    where: { slug },
    include: {
      channel: true,
    },
  });

  if (!video) notFound();

  if ((video as any).status && (video as any).status !== "PUBLISHED") {
    notFound();
  }

  if ((video as any).visibility === "PREMIUM" && !user) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-3xl font-bold">{video.title}</h1>

      <div className="mt-4 overflow-hidden rounded-xl bg-black">
        <video
          src={(video as any).videoUrl || (video as any).url}
          controls
          className="w-full"
        />
      </div>

      <div className="mt-6 rounded-xl border p-4">
        <h2 className="text-xl font-semibold">
          {video.channel?.name || "Channel"}
        </h2>

        {(video as any).description ? (
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            {(video as any).description}
          </p>
        ) : null}
      </div>
    </main>
  );
}
     