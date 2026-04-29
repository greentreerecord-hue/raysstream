
 
"use client";

import { useState, useTransition } from "react";
import { createComment } from "../actions/create-comment";

export default function CommentForm({ videoId }: { videoId: string }) {
  const [body, setBody] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("body", body);
    formData.append("videoId", videoId);

    startTransition(async () => {
      const res = await createComment(formData);

      if (res?.success) {
        setBody("");
      } else {
        alert(res?.error || "Something went wrong");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Add a comment..."
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />

      <button
        type="submit"
        disabled={isPending}
        style={{
          marginTop: "10px",
          padding: "8px 16px",
          borderRadius: "6px",
          background: "black",
          color: "white",
        }}
      >
        {isPending ? "Posting..." : "Post Comment"}
      </button>
    </form>
  );
} 
