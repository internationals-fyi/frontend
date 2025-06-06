"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Search } from "lucide-react"

// Sample data - in a real application, this would come from an API
const h1bData = [
  {
    company: "Google",
    industry: "Technology",
    approvalRate: 98,
    averageSalary: 145000,
    totalApplications: 5240,
  },
  {
    company: "Microsoft",
    industry: "Technology",
    approvalRate: 96,
    averageSalary: 140000,
    totalApplications: 4800,
  },
  {
    company: "Amazon",
    industry: "Technology",
    approvalRate: 94,
    averageSalary: 135000,
    totalApplications: 6300,
  },
  {
    company: "Goldman Sachs",
    industry: "Finance",
    approvalRate: 92,
    averageSalary: 150000,
    totalApplications: 2100,
  },
  {
    company: "Deloitte",
    industry: "Consulting",
    approvalRate: 90,
    averageSalary: 125000,
    totalApplications: 3500,
  },
  {
    company: "Apple",
    industry: "Technology",
    approvalRate: 95,
    averageSalary: 148000,
    totalApplications: 4200,
  },
  {
    company: "JPMorgan Chase",
    industry: "Finance",
    approvalRate: 91,
    averageSalary: 140000,
    totalApplications: 1900,
  },
  {
    company: "Meta",
    industry: "Technology",
    approvalRate: 93,
    averageSalary: 142000,
    totalApplications: 3800,
  },
]

export default function H1BDataTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [industry, setIndustry] = useState("All")

  const filteredData = h1bData.filter((item) => {
    const matchesSearch = item.company.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesIndustry = industry === "All" || item.industry === industry
    return matchesSearch && matchesIndustry
  })

  const industries = ["All", ...Array.from(new Set(h1bData.map((item) => item.industry)))]

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search companies..."
            className="pl-8 w-full sm:w-[260px]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full sm:w-auto">
              Industry: {industry} <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {industries.map((ind) => (
              <DropdownMenuItem key={ind} onClick={() => setIndustry(ind)}>
                {ind}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Company</TableHead>
              <TableHead>Industry</TableHead>
              <TableHead className="text-right">Approval Rate</TableHead>
              <TableHead className="text-right">Avg. Salary</TableHead>
              <TableHead className="text-right">Applications</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((item) => (
              <TableRow key={item.company}>
                <TableCell className="font-medium">{item.company}</TableCell>
                <TableCell>{item.industry}</TableCell>
                <TableCell className="text-right">{item.approvalRate}%</TableCell>
                <TableCell className="text-right">${item.averageSalary.toLocaleString()}</TableCell>
                <TableCell className="text-right">{item.totalApplications.toLocaleString()}</TableCell>
              </TableRow>
            ))}
            {filteredData.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-4">
                  No results found. Try adjusting your search.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <p className="text-xs text-muted-foreground">
        Data based on publicly available H1B visa application information. Updated quarterly.
      </p>
    </div>
  )
}

