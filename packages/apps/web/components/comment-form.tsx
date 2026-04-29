"use client";

import { useState, useTransition } from "react";

export default function CommentForm() {
  const [body, setBody] = useState("");
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    startTransition(async () => {
      try {
        console.log("Comment:", body);
        setBody("");
        setError("");
      } catch {
        setError("Comment failed.");
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-3">
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Add a comment..."
        className="w-full rounded-xl border border-white/10 bg-black/40 p-3 text-sm text-white outline-none"
        rows={3}
      />

      {error ? <p className="text-sm text-red-400">{error}</p> : null}

      <button
        type="submit"
        disabled={isPending || body.trim().length === 0}
        className="rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white disabled:opacity-50"
      >
        {isPending ? "Posting..." : "Comment"}
      </button>
    </form>
  );
}
