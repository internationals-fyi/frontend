"use client"

import { CollegeDetailsModal } from "@/app/components/CollegeDetailsModal"
import { mockColleges } from "@/app/colleges/mockData"
import { notFound } from "next/navigation"
import { PageLayout } from "@/app/components/PageLayout"
import { use } from "react"

export default function CollegePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const college = mockColleges.find(c => c.id === id)

  if (!college) {
    notFound()
  }

  return (
    <PageLayout>
      <CollegeDetailsModal
        college={college}
        isOpen={true}
        onClose={() => {}}
        isFullPage={true}
      />
    </PageLayout>
  )
} 