import React, { useState } from "react";

export default function FeedItem({ item, onUpdate }) {
  const [commentText, setCommentText] = useState("");

  function like() {
    onUpdate({ ...item, likes: item.likes + 1 });
  }
  function dislike() {
    onUpdate({ ...item, dislikes: item.dislikes + 1 });
  }
  function addComment(e) {
    e.preventDefault();
    if (!commentText.trim()) return;
    const newComments = [
      ...item.comments,
      { id: Date.now(), author: "You", text: commentText.trim(), createdAt: new Date().toISOString() },
    ];
    onUpdate({ ...item, comments: newComments });
    setCommentText("");
  }

  return (
    <article className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold">
          {item.author[0]}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold text-gray-800">{item.author}</div>
              <div className="text-xs text-gray-500">
                {new Date(item.createdAt).toLocaleString()}
              </div>
            </div>
          </div>

          <p className="mt-3 text-gray-800">{item.text}</p>

          {item.imageUrl && (
            <img
              src={item.imageUrl}
              alt="post media"
              className="mt-3 max-h-80 w-full object-cover rounded-md border"
            />
          )}

          <div className="mt-3 flex items-center gap-3 text-sm text-gray-600">
            <button onClick={like} className="px-2 py-1 rounded hover:bg-gray-100">👍 {item.likes}</button>
            <button onClick={dislike} className="px-2 py-1 rounded hover:bg-gray-100">👎 {item.dislikes}</button>
            <div className="px-2 py-1 rounded">{item.comments.length} comments</div>
          </div>

          {/* Comments list */}
          {item.comments.length > 0 && (
            <div className="mt-3 space-y-2">
              {item.comments.map((c) => (
                <div key={c.id} className="text-sm bg-gray-50 p-2 rounded">
                  <div className="font-semibold text-xs">{c.author}</div>
                  <div className="text-gray-700">{c.text}</div>
                </div>
              ))}
            </div>
          )}

          {/* Add comment */}
          <form onSubmit={addComment} className="mt-3 flex gap-2">
            <input
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Write a comment..."
              className="flex-1 p-2 border rounded"
            />
            <button type="submit" className="px-3 rounded bg-blue-500 text-white">Reply</button>
          </form>
        </div>
      </div>
    </article>
  );
}
