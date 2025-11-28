import React, { useState } from "react";

export default function PostBox({ onAddPost }) {
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  function submit(e) {
    e.preventDefault();
    if (!text.trim() && !imageUrl.trim()) return;
    onAddPost({
      id: Date.now(),
      author: "You",
      text: text.trim(),
      imageUrl: imageUrl.trim() || null,
      createdAt: new Date().toISOString(),
      likes: 0,
      dislikes: 0,
      comments: [],
    });
    setText("");
    setImageUrl("");
  }

  return (
    <form onSubmit={submit} className="bg-white p-4 rounded-lg shadow-sm">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={3}
        placeholder="What's happening?"
        className="w-full p-3 border rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-200"
      ></textarea>

      <input
        type="url"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="Optional image URL (paste link)"
        className="w-full p-2 border rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-200"
      />

      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={() => {
            setText("");
            setImageUrl("");
          }}
          className="px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200"
        >
          Clear
        </button>
        <button
          type="submit"
          className="px-4 py-2 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600"
        >
          Post
        </button>
      </div>
    </form>
  );
}
