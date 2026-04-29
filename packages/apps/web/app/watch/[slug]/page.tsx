import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export default function VideoPage({ params }: Props) {
  const { slug } = params;

  if (!slug) return notFound();

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-2xl font-bold">Video: {slug}</h1>

      <div className="mt-6 rounded-xl bg-gray-800 p-6">
        <p>Video player will go here.</p>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold">Comments</h2>
        <p className="text-gray-400 mt-2">
          Comments will load here.
        </p>
      </div>
    </main>
  );
} 
