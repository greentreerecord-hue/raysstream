"use client";

import { useState, useTransition } from "react";
import { createComment } from "@/app/actions/comments";

export function CommentForm() {
  const [body, setBody] = useState("");
  const [isPending, startTransition] = useTransition();

  function submitComment() {
    if (!body.trim()) return;

    startTransition(async () => {
      await createComment();
      setBody("");
    });
  }

  return (
    <div>
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Write a comment..."
      />

      <button onClick={submitComment} disabled={isPending}>
        {isPending ? "Posting..." : "Post comment"}
      </button>
    </div>
  );
} 