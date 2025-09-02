// src/App.tsx
import React from "react";
import Access from "./components/Access"; // ←まず1個だけ

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Access />
    </main>
  );
}
