"use client"

import { useEffect, useState } from "react"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample data - in a real application, this would come from an API
const schoolData = [
  {
    name: "MIT",
    internationalStudents: 3755,
    scholarshipAvailability: 85,
    employmentRate: 92,
  },
  {
    name: "Stanford",
    internationalStudents: 4750,
    scholarshipAvailability: 80,
    employmentRate: 94,
  },
  {
    name: "UC Berkeley",
    internationalStudents: 6580,
    scholarshipAvailability: 75,
    employmentRate: 90,
  },
  {
    name: "Harvard",
    internationalStudents: 5200,
    scholarshipAvailability: 90,
    employmentRate: 93,
  },
  {
    name: "Columbia",
    internationalStudents: 7100,
    scholarshipAvailability: 70,
    employmentRate: 88,
  },
]

export default function SchoolComparisonChart() {
  const [metric, setMetric] = useState("internationalStudents")
  const [chartData, setChartData] = useState(schoolData)

  // Format the data based on the selected metric
  useEffect(() => {
    setChartData(schoolData)
  }, [metric])

  const metricLabels = {
    internationalStudents: "International Student Population",
    scholarshipAvailability: "Scholarship Availability (%)",
    employmentRate: "Post-Graduation Employment Rate (%)",
  }

  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        <div className="mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h3 className="text-lg font-medium">University Comparison</h3>
          <Select value={metric} onValueChange={setMetric}>
            <SelectTrigger className="w-full sm:w-[220px]">
              <SelectValue placeholder="Select metric" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="internationalStudents">International Students</SelectItem>
              <SelectItem value="scholarshipAvailability">Scholarship Availability</SelectItem>
              <SelectItem value="employmentRate">Employment Rate</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis
                label={{ value: metricLabels[metric as keyof typeof metricLabels], angle: -90, position: "insideLeft" }}
              />
              <Tooltip />
              <Legend />
              <Bar dataKey={metric} fill="#3b82f6" name={metricLabels[metric as keyof typeof metricLabels]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

