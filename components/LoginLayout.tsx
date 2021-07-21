import React from "react"

export default function LoginLayout({ children }) {
  return (
    <div className="h-screen bg-white overflow-hidden flex">
      {children}
    </div>
  )
}
