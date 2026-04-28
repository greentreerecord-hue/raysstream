"use client";

import { useState, useTransition } from "react";
import { createComment } from "../actions/comments";

export function CommentForm({ videoId }: { videoId: string }) {
  const [body, setBody] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    startTransition(async () => {
      try {
        await createComment({
          videoId: videoId,
          body: body,
        });

        setBody("");
      } catch (err) {
        console.error(err);
      }
    });
  };

  return (
    <div style={{ marginTop: 20 }}>
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Write a comment..."
        style={{
          width: "100%",
          height: 80,
          padding: 10,
          borderRadius: 8,
          border: "1px solid #ccc",
        }}
      />

      <button
        onClick={handleSubmit}
        disabled={isPending}
        style={{
          marginTop: 10,
          padding: "10px 20px",
          borderRadius: 8,
          background: "black",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        {isPending ? "Posting..." : "Post Comment"}
      </button>
    </div>
  );
} 
