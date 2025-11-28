import React, { useState } from "react";
import PostBox from "../components/PostBox";
import FeedItem from "../components/FeedItem";

const initialPosts = [
  {
    id: 111,
    author: "Alice",
    text: "Hello from Alice — enjoying the new app!",
    imageUrl: null,
    createdAt: new Date().toISOString(),
    likes: 2,
    dislikes: 0,
    comments: [{ id: 1, author: "Bob", text: "Nice!", createdAt: new Date().toISOString() }],
  },
  {
    id: 222,
    author: "CityNews",
    text: "Quick photo from downtown parade.",
    imageUrl: "https://placehold.co/600x300",
    createdAt: new Date().toISOString(),
    likes: 5,
    dislikes: 0,
    comments: [],
  },
];

export default function SocialFeed() {
  const [posts, setPosts] = useState(initialPosts);

  function addPost(post) {
    // newest first
    setPosts((p) => [post, ...p]);
  }

  function updatePost(updated) {
    setPosts((p) => p.map((x) => (x.id === updated.id ? updated : x)));
  }

  return (
    <div className="p-6 space-y-6">
      <PostBox onAddPost={addPost} />
      <div className="space-y-4">
        {posts.map((p) => (
          <FeedItem key={p.id} item={p} onUpdate={updatePost} />
        ))}
      </div>
    </div>
  );
}
