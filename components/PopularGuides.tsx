"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Eye, FileText, ThumbsUp } from "lucide-react"

// Sample data - in a real application, this would come from an API
const optGuides = [
  {
    id: 1,
    title: "Complete OPT Application Guide 2023",
    description: "Step-by-step instructions for filing your OPT application with USCIS",
    category: "OPT",
    readTime: "15 min",
    views: 12500,
    likes: 945,
  },
  {
    id: 2,
    title: "STEM OPT Extension: Everything You Need to Know",
    description: "Detailed guide on qualifying for and applying for the 24-month STEM extension",
    category: "STEM OPT",
    readTime: "20 min",
    views: 9800,
    likes: 820,
  },
  {
    id: 3,
    title: "OPT Job Search Strategies for International Students",
    description: "Effective strategies to find OPT-eligible positions in your field",
    category: "OPT",
    readTime: "12 min",
    views: 8200,
    likes: 710,
  },
]

const cptGuides = [
  {
    id: 4,
    title: "CPT Application Process Explained",
    description: "How to apply for CPT through your university's international student office",
    category: "CPT",
    readTime: "10 min",
    views: 7500,
    likes: 630,
  },
  {
    id: 5,
    title: "Part-time vs. Full-time CPT: Making the Right Choice",
    description: "Understanding the differences and implications for your F-1 status",
    category: "CPT",
    readTime: "8 min",
    views: 6200,
    likes: 540,
  },
  {
    id: 6,
    title: "Finding CPT-Eligible Internships and Co-ops",
    description: "Resources and tips for securing internships that qualify for CPT authorization",
    category: "CPT",
    readTime: "12 min",
    views: 5800,
    likes: 490,
  },
]

export default function PopularGuides() {
  return (
    <div className="space-y-4">
      <Tabs defaultValue="opt" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="opt">OPT Guides</TabsTrigger>
          <TabsTrigger value="cpt">CPT Guides</TabsTrigger>
        </TabsList>
        <TabsContent value="opt" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {optGuides.map((guide) => (
              <Card key={guide.id} className="flex flex-col h-full">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="mb-2">
                      {guide.category}
                    </Badge>
                    <div className="flex items-center text-muted-foreground text-xs">
                      <Clock className="mr-1 h-3 w-3" />
                      {guide.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{guide.title}</CardTitle>
                  <CardDescription>{guide.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="flex items-center mr-4">
                      <Eye className="mr-1 h-4 w-4" />
                      {guide.views.toLocaleString()}
                    </div>
                    <div className="flex items-center">
                      <ThumbsUp className="mr-1 h-4 w-4" />
                      {guide.likes.toLocaleString()}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <FileText className="mr-2 h-4 w-4" />
                    Read Guide
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="cpt" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {cptGuides.map((guide) => (
              <Card key={guide.id} className="flex flex-col h-full">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="mb-2">
                      {guide.category}
                    </Badge>
                    <div className="flex items-center text-muted-foreground text-xs">
                      <Clock className="mr-1 h-3 w-3" />
                      {guide.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{guide.title}</CardTitle>
                  <CardDescription>{guide.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="flex items-center mr-4">
                      <Eye className="mr-1 h-4 w-4" />
                      {guide.views.toLocaleString()}
                    </div>
                    <div className="flex items-center">
                      <ThumbsUp className="mr-1 h-4 w-4" />
                      {guide.likes.toLocaleString()}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <FileText className="mr-2 h-4 w-4" />
                    Read Guide
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      <div className="flex justify-center mt-6">
        <Button>View All Guides</Button>
      </div>
    </div>
  )
}

