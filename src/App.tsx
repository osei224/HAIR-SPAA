// src/App.tsx
import React from "react"
import Access from "./components/Access"
// 他のコンポーネントは一旦コメントアウトでOK（原因切り分け用）
import { salon } from "./salonData"

export default function App() {
  return (
    <main className="min-h-screen bg-white">
      {/* まずは Access だけ表示して原因を潰す */}
      <Access salon={salon} />
    </main>
  )
}
