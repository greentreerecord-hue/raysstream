"use client"

import { useState, useTransition } from "react"
import { createComment } from "@/actions/create-comment"

export default function CommentForm({ videoId }: { videoId: string }) {
  const [body, setBody] = useState("")
  const [isPending, startTransition] = useTransition()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!body.trim()) return

    startTransition(async () => {
      try {
        await createComment({
          data: {
            videoId: videoId,
            body: body,
          },
        })

        setBody("")
      } catch (err) {
        console.error("Failed to create comment:", err)
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
      <input
        type="text"
        placeholder="Add a comment..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="flex-1 border px-3 py-2 rounded"
      />
      <button
        type="submit"
        disabled={isPending}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {isPending ? "Posting..." : "Post"}
      </button>
    </form>
  )
} 
