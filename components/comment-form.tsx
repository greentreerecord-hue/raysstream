"use client";

import { useState, useTransition } from "react";
import { createComment } from "@/app/actions/comments";

type Props = {
  videoId: string;
};

export default function CommentForm({ videoId }: Props) {
  const [body, setBody] = useState("");
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!body.trim()) return;

    startTransition(async () => {
      try {
        await createComment({
          videoId: videoId,
          body: body,
        });

        setBody("");
      } catch (err) {
        setError("Failed to post comment");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Write a comment..."
      />

      {error && <p>{error}</p>}

      <button type="submit" disabled={isPending}>
        {isPending ? "Posting..." : "Post Comment"}
      </button>
    </form>
  );
} 