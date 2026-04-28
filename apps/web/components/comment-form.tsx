"use client";

import { useState, useTransition } from "react";
import { createComment } from "../actions/comments";

export function CommentForm() {
  const [body, setBody] = useState("");
  const [isPending, startTransition] = useTransition();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    startTransition(async () => {
      await createComment();
      setBody("");
    });
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Add a comment..."
        className="flex-1 rounded border px-3 py-2"
      />

      <button
        type="submit"
        disabled={isPending}
        className="rounded bg-black px-4 py-2 text-white"
      >
        {isPending ? "Posting..." : "Comment"}
      </button>
    </form>
  );
} 
