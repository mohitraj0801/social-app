import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../components/Header";
import News from "./News";
import SocialFeed from "./SocialFeed";

export default function Home() {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onProfileClick={() => setProfileOpen(true)} />

      <main className="max-w-5xl mx-auto py-6">
        <Routes>
          <Route path="/" element={<Navigate to="news" replace />} />
          <Route path="news" element={<News />} />
          <Route path="feed" element={<SocialFeed />} />
        </Routes>
      </main>

      {/* Simple profile drawer */}
      {profileOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 flex justify-start">
          <div className="w-80 bg-white p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-semibold">M</div>
                <div className="font-bold mt-2">Mohit Raj</div>
                <div className="text-sm text-gray-500">@mohitraj</div>
              </div>
              <button onClick={() => setProfileOpen(false)} className="text-lg">✕</button>
            </div>

            <div className="mt-6 space-y-3">
              <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100">Profile</button>
              <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100">Settings</button>
              <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100">Logout</button>
            </div>
          </div>
          <div className="flex-1" onClick={() => setProfileOpen(false)}></div>
        </div>
      )}
    </div>
  );
}
