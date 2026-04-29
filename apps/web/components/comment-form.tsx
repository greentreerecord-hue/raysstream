"use client";

import { useState, useTransition } from "react";

export default function CommentForm({ videoId }: { videoId: string }) {
  const [body, setBody] = useState("");
  const [isPending, startTransition] = useTransition();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    startTransition(() => {
      console.log("New comment:", { body, videoId });
      setBody("");
    });
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Add a comment..."
        style={{
          width: "100%",
          minHeight: "90px",
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />

      <button
        type="submit"
        disabled={isPending || body.trim() === ""}
        style={{
          marginTop: "10px",
          padding: "8px 16px",
          borderRadius: "6px",
          background: "black",
          color: "white",
          border: "none",
        }}
      >
        {isPending ? "Posting..." : "Post Comment"}
      </button>
    </form>
  );
} 
