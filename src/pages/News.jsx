import React, { useState } from "react";

const sample = {
  district: [
    { id: 1, title: "District: Road repairs begin", body: "Potholes to be fixed in 2 weeks." },
    { id: 2, title: "District: New school approved", body: "Local education board approved new plan." },
  ],
  state: [
    { id: 1, title: "State: Power grid upgrade", body: "State to invest in grid improvements." },
    { id: 2, title: "State: Health initiative", body: "New vaccination drive launched." },
  ],
  national: [
    { id: 1, title: "National: Budget announced", body: "Major changes to taxation proposed." },
    { id: 2, title: "National: International summit", body: "Leaders to meet next month." },
  ],
};

export default function News() {
  const [tab, setTab] = useState("district");

  const list = sample[tab];

  return (
    <div className="p-6 space-y-6">
      <div className="flex gap-2">
        <button onClick={() => setTab("district")} className={`px-3 py-2 rounded ${tab === "district" ? "bg-blue-500 text-white" : "bg-gray-100"}`}>District</button>
        <button onClick={() => setTab("state")} className={`px-3 py-2 rounded ${tab === "state" ? "bg-blue-500 text-white" : "bg-gray-100"}`}>State</button>
        <button onClick={() => setTab("national")} className={`px-3 py-2 rounded ${tab === "national" ? "bg-blue-500 text-white" : "bg-gray-100"}`}>National</button>
      </div>

      <div className="space-y-4">
        {list.map((item) => (
          <article key={item.id} className="p-4 bg-white rounded shadow-sm">
            <h4 className="font-semibold">{item.title}</h4>
            <p className="text-sm text-gray-600 mt-1">{item.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
