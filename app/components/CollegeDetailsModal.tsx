"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Globe, Phone, Mail, Building2, Users, GraduationCap, DollarSign, Award, BookOpen, Calendar, Microscope, Home, Percent, Maximize2, TrendingUp, BarChart3, PieChart, LineChart, Facebook, Twitter, Instagram, School, Library, Beaker, Users2, Heart, Shield, Target, ArrowUpRight } from "lucide-react"
import { College } from "@/app/types/college"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface CollegeDetailsModalProps {
  college: College
  isOpen: boolean
  onClose: () => void
  isFullPage?: boolean
}

export function CollegeDetailsModal({ college, isOpen, onClose, isFullPage = false }: CollegeDetailsModalProps) {
  const router = useRouter()

  const handleExpand = () => {
    router.push(`/colleges/${college.id}`)
  }

  const content = (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={college.logoUrl}
            alt={`${college.name} logo`}
            className="w-16 h-16 object-contain"
          />
          <div>
            <h1 className="text-2xl font-bold">{college.name}</h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{college.location.city}, {college.location.state}</span>
              <Badge variant="secondary" className="ml-2">
                {college.location.publicOrPrivate}
              </Badge>
              <Badge variant="outline" className="ml-2">
                {college.location.campusType}
              </Badge>
            </div>
          </div>
        </div>
        {!isFullPage && (
          <Button variant="ghost" size="icon" onClick={handleExpand}>
            <Maximize2 className="h-4 w-4" />
          </Button>
        )}
      </div>

      <Tabs defaultValue="overview" className="w-full mt-6">
        <TabsList className="grid w-full grid-cols-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="academics">Academics</TabsTrigger>
          <TabsTrigger value="admissions">Admissions</TabsTrigger>
          <TabsTrigger value="costs">Costs</TabsTrigger>
          <TabsTrigger value="outcomes">Outcomes</TabsTrigger>
          <TabsTrigger value="research">Research</TabsTrigger>
          <TabsTrigger value="campus">Campus</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Key Metrics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Overall Ranking</span>
                    <span className="font-medium">#{college.overallRanking}</span>
                  </div>
                  <Progress value={100 - (college.overallRanking / 100) * 100} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Match Score</span>
                    <span className="font-medium">{college.matchScore}%</span>
                  </div>
                  <Progress value={college.matchScore} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Acceptance Rate</span>
                    <span className="font-medium">{college.admissions.acceptanceRate.current}%</span>
                  </div>
                  <Progress value={100 - college.admissions.acceptanceRate.current} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">ROI Score</span>
                    <span className="font-medium">{Math.round((college.outcomes.medianStartingSalary.overall / college.costs.tuition.international) * 100)}%</span>
                  </div>
                  <Progress value={Math.round((college.outcomes.medianStartingSalary.overall / college.costs.tuition.international) * 100)} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Student Body
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <div className="text-sm text-muted-foreground">Total Students</div>
                    <div className="text-2xl font-bold">{college.enrollment.total.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">
                      {college.enrollment.undergraduate.toLocaleString()} undergrad
                      <br />
                      {college.enrollment.graduate.toLocaleString()} graduate
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-muted-foreground">International</div>
                    <div className="text-2xl font-bold">{college.enrollment.international.percentage}%</div>
                    <div className="text-xs text-muted-foreground">
                      {Math.round(college.enrollment.international.percentage * college.enrollment.total / 100)} students
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Demographics</div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span>First Generation</span>
                      <span className="font-medium">{college.enrollment.firstGenPercentage}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Pell Grant</span>
                      <span className="font-medium">{college.enrollment.pellGrantPercentage}%</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Top Countries</div>
                  <div className="space-y-1">
                    {college.enrollment.international.topCountries.map((country, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <span>{country.country}</span>
                        <span className="font-medium">{country.percentage}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Tuition & Aid
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">International Tuition</span>
                    <span className="font-medium">${college.costs.tuition.international.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Room & Board</span>
                    <span className="font-medium">${college.costs.roomAndBoard.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Avg. Need-Based Aid</span>
                    <span className="font-medium">${college.costs.financialAid.needBasedAid.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Avg. Merit Aid</span>
                    <span className="font-medium">${college.costs.financialAid.meritAid.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Median Debt</span>
                    <span className="font-medium">${college.costs.financialAid.medianDebtAtGraduation.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  Outcomes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">4-Year Graduation</span>
                    <span className="font-medium">{college.outcomes.graduationRate.fourYear}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">6-Year Graduation</span>
                    <span className="font-medium">{college.outcomes.graduationRate.sixYear}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Employment Rate</span>
                    <span className="font-medium">{college.outcomes.employmentRate}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Avg. Starting Salary</span>
                    <span className="font-medium">${college.outcomes.medianStartingSalary.overall.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">ROI (5 years)</span>
                    <span className="font-medium">{Math.round((college.outcomes.medianStartingSalary.overall * 5 / college.costs.tuition.international) * 100)}%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Academics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Student-Faculty Ratio</span>
                    <span className="font-medium">{college.academics.studentFacultyRatio}:1</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Avg. Class Size</span>
                    <span className="font-medium">{college.academics.avgClassSize} students</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Degrees Offered</span>
                    <span className="font-medium">{college.academics.degreesOffered.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Research Expenditure</span>
                    <span className="font-medium">${(college.research.expenditure / 1000000).toFixed(1)}M</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Library Size</span>
                    <span className="font-medium">{college.research.librarySize.toLocaleString()} volumes</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="academics" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Popular Majors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {college.academics.popularMajors.map((major, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{major.name}</span>
                        <span className="text-sm text-muted-foreground">{major.enrollment.toLocaleString()} students</span>
                      </div>
                      <Progress value={(major.enrollment / college.academics.popularMajors[0].enrollment) * 100} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  Department Rankings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(college.academics.departmentalRankings).map(([dept, rank]) => (
                    <div key={dept} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{dept}</span>
                        <span className="text-sm text-muted-foreground">Rank #{rank}</span>
                      </div>
                      <Progress value={100 - (rank / 10) * 100} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <School className="h-4 w-4" />
                  Degrees & Programs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    {college.academics.degreesOffered.map((degree, index) => (
                      <Badge key={index} variant="secondary" className="w-full justify-center">
                        {degree}
                      </Badge>
                    ))}
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Global Exchange Programs</div>
                    <div className="grid grid-cols-2 gap-2">
                      {college.research.exchangePrograms.map((program: string, index: number) => (
                        <div key={index} className="text-sm">
                          {program}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Beaker className="h-4 w-4" />
                  Research & Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Research Expenditure</span>
                      <span className="font-medium">${(college.research.expenditure / 1000000).toFixed(1)}M</span>
                    </div>
                    <Progress value={(college.research.expenditure / 1000000000) * 100} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Library Size</span>
                      <span className="font-medium">{college.research.librarySize.toLocaleString()} volumes</span>
                    </div>
                    <Progress value={(college.research.librarySize / 1000000) * 100} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Research Labs</span>
                      <span className="font-medium">{college.research.labsCount}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="admissions" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Percent className="h-4 w-4" />
                  Acceptance Rate Trend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {college.admissions.acceptanceRate.trend.map((year, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{year.year}</span>
                        <span className="text-sm text-muted-foreground">{year.rate}%</span>
                      </div>
                      <Progress value={100 - year.rate} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  Test Scores
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-sm font-medium">SAT Scores (25th-75th percentile)</div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-muted-foreground">Math</div>
                        <div className="font-medium">{college.admissions.testScores.sat?.math}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Evidence-Based Reading</div>
                        <div className="font-medium">{college.admissions.testScores.sat?.reading}</div>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <div className="text-sm font-medium">ACT Scores (25th-75th percentile)</div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-muted-foreground">Composite</div>
                        <div className="font-medium">{college.admissions.testScores.act?.composite}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">English</div>
                        <div className="font-medium">{college.admissions.testScores.act?.english}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Application Deadlines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(college.admissions.applicationDeadlines).map(([term, date]) => (
                    <div key={term} className="flex items-center justify-between">
                      <span className="font-medium capitalize">{term}</span>
                      <span className="text-sm text-muted-foreground">{date}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Application Fees
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Undergraduate</span>
                    <span className="font-medium">${college.admissions.applicationFee.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Graduate</span>
                    <span className="font-medium">${college.admissions.applicationFee.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">International</span>
                    <span className="font-medium">${college.admissions.applicationFee.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="campus" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  Housing & Living
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Housing Options</div>
                    <div className="grid grid-cols-2 gap-4">
                      {college.campusLife.housing.onCampus && (
                        <Badge variant="secondary" className="w-full justify-center">
                          On-Campus
                        </Badge>
                      )}
                      {college.campusLife.housing.offCampus && (
                        <Badge variant="secondary" className="w-full justify-center">
                          Off-Campus
                        </Badge>
                      )}
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Average Housing Costs</div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-muted-foreground">On-Campus</div>
                        <div className="font-medium">${college.costs.roomAndBoard.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Off-Campus</div>
                        <div className="font-medium">${college.costs.roomAndBoard.toLocaleString()}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users2 className="h-4 w-4" />
                  Student Life
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Clubs & Organizations</span>
                      <span className="font-medium">{college.campusLife.clubsAndOrgs}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Athletics Division</span>
                      <span className="font-medium">{college.campusLife.athletics.division}</span>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Social Media</div>
                    <div className="flex gap-4">
                      {college.campusLife.socialMedia.facebook && (
                        <a href={college.campusLife.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          <Facebook className="h-5 w-5" />
                        </a>
                      )}
                      {college.campusLife.socialMedia.twitter && (
                        <a href={college.campusLife.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                          <Twitter className="h-5 w-5" />
                        </a>
                      )}
                      {college.campusLife.socialMedia.instagram && (
                        <a href={college.campusLife.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline">
                          <Instagram className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Student Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Student Support Services</div>
                    <div className="grid grid-cols-2 gap-2">
                      {college.campusLife.supportServices.map((service: string, index: number) => (
                        <div key={index} className="text-sm">
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  Student Wellness
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Support Services</div>
                    <div className="grid grid-cols-2 gap-4">
                      {college.campusLife.supportServices
                        .filter((service: string) => 
                          service.toLowerCase().includes('health') || 
                          service.toLowerCase().includes('counseling')
                        )
                        .map((service: string, index: number) => (
                          <div key={index} className="text-sm">
                            {service}
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="contact" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Location & Contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Address</div>
                    <div className="text-sm">
                      {college.contact.streetAddress}
                      <br />
                      {college.location.city}, {college.location.state}
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Contact Information</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{college.contact.admissionsPhone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{college.contact.admissionsEmail}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-muted-foreground" />
                        <a href={college.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
                          {college.websiteUrl}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Library className="h-4 w-4" />
                  Campus Map
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video w-full bg-muted rounded-lg">
                  {/* Add map embed here */}
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    Map Embed Placeholder
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="costs" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Tuition & Fees
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">International Tuition</span>
                    <span className="font-medium">${college.costs.tuition.international.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Domestic Tuition</span>
                    <span className="font-medium">${college.costs.tuition.outOfState.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Room & Board</span>
                    <span className="font-medium">${college.costs.roomAndBoard.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Books & Supplies</span>
                    <span className="font-medium">${college.costs.booksAndSupplies.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Fees</span>
                    <span className="font-medium">${college.costs.fees.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Financial Aid
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Need-Based Aid</span>
                    <span className="font-medium">${college.costs.financialAid.needBasedAid.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Merit Aid</span>
                    <span className="font-medium">${college.costs.financialAid.meritAid.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">International Aid</span>
                    <span className="font-medium">${college.costs.financialAid.needBasedAid.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Median Debt at Graduation</span>
                    <span className="font-medium">${college.costs.financialAid.medianDebtAtGraduation.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4" />
                  Cost Comparison
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Total Cost of Attendance</span>
                      <span className="font-medium">${(college.costs.tuition.international + college.costs.roomAndBoard + college.costs.booksAndSupplies + college.costs.fees).toLocaleString()}</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">After Average Aid</span>
                      <span className="font-medium">${(college.costs.tuition.international + college.costs.roomAndBoard + college.costs.booksAndSupplies + college.costs.fees - college.costs.financialAid.needBasedAid - college.costs.financialAid.meritAid).toLocaleString()}</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="outcomes" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  Graduation & Retention
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">4-Year Graduation Rate</span>
                      <span className="font-medium">{college.outcomes.graduationRate.fourYear}%</span>
                    </div>
                    <Progress value={college.outcomes.graduationRate.fourYear} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">6-Year Graduation Rate</span>
                      <span className="font-medium">{college.outcomes.graduationRate.sixYear}%</span>
                    </div>
                    <Progress value={college.outcomes.graduationRate.sixYear} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Return on Investment</span>
                      <span className="font-medium">{college.outcomes.returnOnInvestment}%</span>
                    </div>
                    <Progress value={college.outcomes.returnOnInvestment} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Career Outcomes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Employment Rate</span>
                      <span className="font-medium">{college.outcomes.employmentRate}%</span>
                    </div>
                    <Progress value={college.outcomes.employmentRate} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Median Starting Salary</span>
                      <span className="font-medium">${college.outcomes.medianStartingSalary.overall.toLocaleString()}</span>
                    </div>
                    <Progress value={(college.outcomes.medianStartingSalary.overall / 100000) * 100} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">ROI (5 years)</span>
                      <span className="font-medium">{Math.round((college.outcomes.medianStartingSalary.overall * 5 / college.costs.tuition.international) * 100)}%</span>
                    </div>
                    <Progress value={Math.round((college.outcomes.medianStartingSalary.overall * 5 / college.costs.tuition.international) * 100)} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="h-4 w-4" />
                  Salary by Major
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(college.outcomes.medianStartingSalary.byMajor).map(([major, salary]) => (
                    <div key={major} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium capitalize">{major}</span>
                        <span className="text-sm text-muted-foreground">${salary.toLocaleString()}</span>
                      </div>
                      <Progress value={(salary / college.outcomes.medianStartingSalary.overall) * 100} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="research" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Microscope className="h-4 w-4" />
                  Research Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Research Expenditure</span>
                      <span className="font-medium">${(college.research.expenditure / 1000000).toFixed(1)}M</span>
                    </div>
                    <Progress value={(college.research.expenditure / 1000000000) * 100} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Research Labs</span>
                      <span className="font-medium">{college.research.labsCount}</span>
                    </div>
                    <Progress value={(college.research.labsCount / 50) * 100} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Library Size</span>
                      <span className="font-medium">{college.research.librarySize.toLocaleString()} volumes</span>
                    </div>
                    <Progress value={(college.research.librarySize / 1000000) * 100} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  Global Exchange Programs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    {college.research.exchangePrograms.map((program: string, index: number) => (
                      <Badge key={index} variant="secondary" className="w-full justify-center">
                        {program}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </>
  )

  if (isFullPage) {
    return content
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400">
        <DialogHeader>
          <DialogTitle className="sr-only">College Details</DialogTitle>
        </DialogHeader>
        {content}
      </DialogContent>
    </Dialog>
  )
} 