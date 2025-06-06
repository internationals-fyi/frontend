"use client"

import { Search, GraduationCap, Filter, MapPin, Users, DollarSign, Award, Percent, Building2, Globe, TrendingUp, BookOpen, Microscope } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { College } from "@/app/types/college"
import { CollegeDetailsModal } from "../components/CollegeDetailsModal"
import { useState, useMemo } from "react"
import { PageLayout } from "@/app/components/PageLayout"
import { mockColleges } from "./mockData"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function CollegesPage() {
  const [selectedCollege, setSelectedCollege] = useState<College | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedState, setSelectedState] = useState<string>("all")
  const [selectedAcceptanceRate, setSelectedAcceptanceRate] = useState<string>("all")
  const [selectedSalary, setSelectedSalary] = useState<string>("all")

  const stats = useMemo(() => {
    const totalColleges = mockColleges.length
    const avgAcceptanceRate = mockColleges.reduce((acc, college) => acc + college.admissions.acceptanceRate.current, 0) / totalColleges
    const avgInternationalStudents = mockColleges.reduce((acc, college) => acc + college.enrollment.international.percentage, 0) / totalColleges
    const avgStartingSalary = mockColleges.reduce((acc, college) => acc + college.outcomes.medianStartingSalary.overall, 0) / totalColleges

    return {
      totalColleges,
      avgAcceptanceRate,
      avgInternationalStudents,
      avgStartingSalary
    }
  }, [])

  const filteredColleges = useMemo(() => {
    return mockColleges.filter(college => {
      const matchesSearch = college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        college.location.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        college.location.state.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesState = selectedState === "all" || college.location.state === selectedState
      
      const matchesAcceptanceRate = selectedAcceptanceRate === "all" || (() => {
        const rate = college.admissions.acceptanceRate.current
        const [min, max] = selectedAcceptanceRate.split("-").map(Number)
        return rate >= min && (!max || rate <= max)
      })()

      const matchesSalary = selectedSalary === "all" || (() => {
        const salary = college.outcomes.medianStartingSalary.overall
        const [min, max] = selectedSalary.split("-").map(Number)
        return salary >= min && (!max || salary <= max)
      })()

      return matchesSearch && matchesState && matchesAcceptanceRate && matchesSalary
    })
  }, [searchQuery, selectedState, selectedAcceptanceRate, selectedSalary])

  const FilterContent = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
          <CardDescription>Refine your search</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Location</label>
            <Select value={selectedState} onValueChange={setSelectedState}>
              <SelectTrigger>
                <SelectValue placeholder="Select state" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All States</SelectItem>
                <SelectItem value="CA">California</SelectItem>
                <SelectItem value="NY">New York</SelectItem>
                <SelectItem value="MA">Massachusetts</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Acceptance Rate</label>
            <Select value={selectedAcceptanceRate} onValueChange={setSelectedAcceptanceRate}>
              <SelectTrigger>
                <SelectValue placeholder="Select range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any</SelectItem>
                <SelectItem value="0-10">0-10%</SelectItem>
                <SelectItem value="10-20">10-20%</SelectItem>
                <SelectItem value="20-30">20-30%</SelectItem>
                <SelectItem value="30-100">30%+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Average Salary</label>
            <Select value={selectedSalary} onValueChange={setSelectedSalary}>
              <SelectTrigger>
                <SelectValue placeholder="Select range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any</SelectItem>
                <SelectItem value="0-50000">$0-50k</SelectItem>
                <SelectItem value="50000-75000">$50-75k</SelectItem>
                <SelectItem value="75000-100000">$75-100k</SelectItem>
                <SelectItem value="100000-999999">$100k+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quick Stats</CardTitle>
          <CardDescription>Key metrics for filtered results</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Results</span>
              <span className="text-sm font-medium">{filteredColleges.length} universities</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Avg. Acceptance Rate</span>
              <span className="text-sm font-medium">
                {(filteredColleges.reduce((acc, college) => acc + college.admissions.acceptanceRate.current, 0) / filteredColleges.length).toFixed(1)}%
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Avg. Starting Salary</span>
              <span className="text-sm font-medium">
                ${(filteredColleges.reduce((acc, college) => acc + college.outcomes.medianStartingSalary.overall, 0) / filteredColleges.length).toLocaleString()}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  return (
    <PageLayout>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Find Your Perfect University
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Compare universities based on international student support, employment outcomes, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          {/* Statistics Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Universities</CardTitle>
                <Building2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalColleges}</div>
                <p className="text-xs text-muted-foreground">Universities in our database</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Acceptance Rate</CardTitle>
                <Percent className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.avgAcceptanceRate.toFixed(1)}%</div>
                <p className="text-xs text-muted-foreground">Average acceptance rate</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. International Students</CardTitle>
                <Globe className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.avgInternationalStudents.toFixed(1)}%</div>
                <p className="text-xs text-muted-foreground">Average international student population</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Starting Salary</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${stats.avgStartingSalary.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">Average starting salary</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-[1fr_300px] gap-6">
            <div className="space-y-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search universities..."
                    className="w-full pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" className="gap-2 lg:hidden">
                        <Filter className="h-4 w-4" />
                        Filters
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                      <SheetHeader>
                        <SheetTitle>Filters & Stats</SheetTitle>
                      </SheetHeader>
                      <div className="mt-6">
                        <FilterContent />
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>

              <Tabs defaultValue="grid" className="w-full">
                <TabsList>
                  <TabsTrigger value="grid">Grid View</TabsTrigger>
                  <TabsTrigger value="list">List View</TabsTrigger>
                </TabsList>
                <TabsContent value="grid" className="mt-6">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {filteredColleges.map((college) => (
                      <Card 
                        key={college.id} 
                        className="hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => setSelectedCollege(college)}
                      >
                        <CardHeader className="pb-2">
                          <div className="flex items-center gap-3">
                            <img
                              src={college.logoUrl}
                              alt={`${college.name} logo`}
                              className="w-12 h-12 object-contain"
                            />
                            <div>
                              <CardTitle className="text-lg">{college.name}</CardTitle>
                              <CardDescription>
                                <div className="flex items-center gap-1">
                                  <MapPin className="h-3 w-3" />
                                  {college.location.city}, {college.location.state}
                                </div>
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center gap-2">
                              <Award className="h-4 w-4 text-muted-foreground" />
                              <span>Rank #{college.overallRanking}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Building2 className="h-4 w-4 text-muted-foreground" />
                              <span>{college.enrollment.total.toLocaleString()} students</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Percent className="h-4 w-4 text-muted-foreground" />
                              <span>{college.admissions.acceptanceRate.current}% acceptance</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <DollarSign className="h-4 w-4 text-muted-foreground" />
                              <span>${college.costs.tuition.international.toLocaleString()} tuition</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <DollarSign className="h-4 w-4 text-muted-foreground" />
                              <span>${college.outcomes.medianStartingSalary.overall.toLocaleString()} avg. salary</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <GraduationCap className="h-4 w-4 text-muted-foreground" />
                              <span>{college.matchScore}% match</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="list" className="mt-6">
                  <div className="space-y-4">
                    {filteredColleges.map((college) => (
                      <Card 
                        key={college.id} 
                        className="hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => setSelectedCollege(college)}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4">
                            <img
                              src={college.logoUrl}
                              alt={`${college.name} logo`}
                              className="w-16 h-16 object-contain"
                            />
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold">{college.name}</h3>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <MapPin className="h-4 w-4" />
                                <span>{college.location.city}, {college.location.state}</span>
                                <span>•</span>
                                <span>Rank #{college.overallRanking}</span>
                                <span>•</span>
                                <span>{college.enrollment.total.toLocaleString()} students</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="text-right">
                                <div className="text-sm font-medium">{college.admissions.acceptanceRate.current}% acceptance</div>
                                <div className="text-sm text-muted-foreground">${college.costs.tuition.international.toLocaleString()} tuition</div>
                              </div>
                              <Button variant="ghost" size="icon">
                                <TrendingUp className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="hidden lg:block">
              <FilterContent />
            </div>
          </div>
        </div>
      </section>

      {selectedCollege && (
        <CollegeDetailsModal
          college={selectedCollege}
          isOpen={!!selectedCollege}
          onClose={() => setSelectedCollege(null)}
        />
      )}
    </PageLayout>
  )
} 