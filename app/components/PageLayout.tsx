"use client"

import { NavBar } from "@/components/NavBar"
import { ReactNode } from "react"

interface PageLayoutProps {
  children: ReactNode
  className?: string
}

export function PageLayout({ children, className = "" }: PageLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="flex-1">
        <div className={`container px-4 py-8 ${className}`}>
          {children}
        </div>
      </main>
    </div>
  )
} 