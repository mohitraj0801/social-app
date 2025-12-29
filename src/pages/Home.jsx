import React, { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "../components/Header";
import News from "./News";
import SocialFeed from "./SocialFeed";

export default function Home() {
  const [profileOpen, setProfileOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen relative bg-[#f8fafc] overflow-x-hidden">
      {/* Decorative Blobs - Yeh whitespace ko "designed" dikhayenge */}
      <div className="absolute top-0 -left-10 w-80 h-80 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute top-20 -right-10 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse delay-700"></div>
      <div className="absolute -bottom-20 left-20 w-96 h-96 bg-pink-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>

      <div className="relative z-10">
        <Header onProfileClick={() => setProfileOpen(true)} />

        <main className="max-w-5xl mx-auto px-6 py-10">
          {/* Header Section */}
          <div className="mb-10">
            <h1 className="text-4xl font-black tracking-tight text-slate-900 capitalize">
              {location.pathname.split("/").pop()}
            </h1>
            <p className="text-slate-500 text-sm mt-2 font-medium">
              Stay updated with what's happening around you.
            </p>
          </div>

          <Routes>
            <Route path="/" element={<Navigate to="news" replace />} />
            <Route path="news" element={<News />} />
            <Route path="feed" element={<SocialFeed />} />
          </Routes>
        </main>

        {/* --- Side Drawer --- */}
        {profileOpen && (
          <div className="fixed inset-0 z-50 flex overflow-hidden">
            <div 
              className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm transition-opacity" 
              onClick={() => setProfileOpen(false)}
            ></div>

            <div className="relative w-full max-w-xs bg-white shadow-2xl flex flex-col h-full">
              <div className="p-8 border-b border-slate-50">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Account</span>
                  <button onClick={() => setProfileOpen(false)} className="p-2 hover:bg-slate-50 rounded-full text-slate-400">✕</button>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-indigo-100">
                    M
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">Mohit Raj</div>
                    <div className="text-xs text-indigo-500 font-semibold">@mohitraj</div>
                  </div>
                </div>
              </div>

              <nav className="flex-1 p-4 space-y-2 mt-4">
                <DrawerItem icon="👤" label="Profile" />
                <DrawerItem icon="⚙️" label="Settings" />
                <DrawerItem icon="🔔" label="Notifications" />
                <div className="my-6 border-t border-slate-50"></div>
                <button className="w-full flex items-center space-x-4 px-5 py-3 rounded-2xl text-rose-500 hover:bg-rose-50 transition-all font-bold text-sm">
                  <span>🚪</span>
                  <span>Logout</span>
                </button>
              </nav>

              <div className="p-8 bg-slate-50/50 text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest">
                Zero v1.0.4 • 2025
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Fixed DrawerItem Component
function DrawerItem({ icon, label }) {
  return (
    <button className="w-full flex items-center space-x-4 px-5 py-3.5 rounded-2xl text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-all font-bold text-sm">
      <span className="text-xl">{icon}</span>
      <span>{label}</span>
    </button>
  );
}