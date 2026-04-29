import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-4xl font-bold">Ray&apos;sStream</h1>
        <p className="mt-3 text-gray-300">
          Watch, upload, and grow your audience.
        </p>

        <div className="mt-8 flex gap-4">
          <Link href="/upload" className="rounded-xl bg-red-600 px-5 py-3 font-semibold">
            Upload
          </Link>
          <Link href="/search" className="rounded-xl bg-white px-5 py-3 font-semibold text-black">
            Search
          </Link>
        </div>
      </section>
    </main>
  );
}
