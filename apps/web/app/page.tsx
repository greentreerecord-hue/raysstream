import Link from "next/link";

export default function HomePage() {
  const videos = [
    {
      id: "1",
      title: "Welcome to Ray'sStream",
      creator: "Ray'sStream",
      views: "1.2K views",
      href: "/watch/demo-1",
    },
    {
      id: "2",
      title: "Creator Dashboard Preview",
      creator: "Ray'sStream Studio",
      views: "845 views",
      href: "/watch/demo-2",
    },
    {
      id: "3",
      title: "Upload Flow Demo",
      creator: "Ray'sStream",
      views: "532 views",
      href: "/watch/demo-3",
    },
    {
      id: "4",
      title: "Trending on Ray'sStream",
      creator: "Community",
      views: "3.8K views",
      href: "/watch/demo-4",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-white/10 px-6 py-10">
        <h1 className="text-4xl font-bold">Ray&apos;sStream</h1>
        <p className="mt-3 max-w-2xl text-white/70">
          Premium video streaming for creators, fans, and viral content.
        </p>

        <div className="mt-6 flex gap-3">
          <Link
            href="/api/videos/upload"
            className="rounded-xl bg-white px-4 py-2 text-black font-medium"
          >
            Test Upload API
          </Link>
          <Link
            href="/studio"
            className="rounded-xl border border-white/20 px-4 py-2 font-medium"
          >
            Open Studio
          </Link>
        </div>
      </section>

      <section className="px-6 py-8">
        <h2 className="mb-5 text-2xl font-semibold">Featured Videos</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {videos.map((video) => (
            <Link
              key={video.id}
              href={video.href}
              className="block overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:bg-white/10"
            >
              <div className="aspect-video bg-zinc-800" />
              <div className="p-4">
                <h3 className="line-clamp-2 font-semibold">{video.title}</h3>
                <p className="mt-2 text-sm text-white/60">{video.creator}</p>
                <p className="text-sm text-white/50">{video.views}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
} 