"use client";

import { useState, useTransition } from "react";
import { createComment } from "@/app/actions/comments";

type CommentFormProps = {
  videoId: string;
  userId?: string;
};

export default function CommentForm({
  videoId,
  userId = "temp-user",
}: CommentFormProps) {
  const [body, setBody] = useState("");
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!body.trim()) return;

    startTransition(async () => {
      try {
        await createComment({
          videoId,
          userId,
          body,
        });

        setBody("");
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to create comment");
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Write a comment..."
        className="w-full rounded-lg border p-3"
        rows={4}
      />

      {error ? <p className="text-sm text-red-500">{error}</p> : null}

      <button
        type="submit"
        disabled={isPending || !body.trim()}
        className="rounded-lg bg-black px-4 py-2 text-white disabled:opacity-50"
      >
        {isPending ? "Posting..." : "Post Comment"}
      </button>
    </form>
  );
}