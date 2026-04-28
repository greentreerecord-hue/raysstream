"use client";

import { useState, useTransition } from "react";
import { createComment } from "../actions/comments";

export function CommentForm({ videoId }: any) {
  const [body, setBody] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    startTransition(async () => {
      await createComment({
        videoId,
        body,
      });

      setBody("");
    });
  };

  return (
    <div style={{ marginTop: 20 }}>
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Write a comment..."
      />

      <button onClick={handleSubmit} disabled={isPending}>
        {isPending ? "Posting..." : "Post Comment"}
      </button>
    </div>
  );
} 
