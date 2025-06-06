import Link from "next/link"
import { Search, GraduationCap, Briefcase, FileText, Globe, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { NavBar } from "@/components/NavBar"
import SchoolComparisonChart from "@/components/SchoolComparisonChart"
import H1BDataTable from "@/components/H1BDataTable"
import PopularGuides from "@/components/PopularGuides"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Navigate Your International Journey in the US
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Comprehensive data on schools, H1B sponsorships, and expert guides on CPT/OPT to help international
                    students and workers make informed decisions.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">Explore School Data</Button>
                  <Button variant="outline" size="lg">
                    H1B Insights
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <form className="w-full max-w-sm space-y-2">
                  <div className="space-y-1">
                    <h2 className="text-xl font-semibold">Quick Search</h2>
                    <p className="text-sm text-muted-foreground">Find the information you need instantly</p>
                  </div>
                  <div className="space-y-3">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search schools, companies, or guides..."
                        className="w-full pl-8 bg-background"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" className="justify-start">
                        <GraduationCap className="mr-2 h-4 w-4" />
                        Schools
                      </Button>
                      <Button variant="outline" className="justify-start">
                        <Briefcase className="mr-2 h-4 w-4" />
                        Companies
                      </Button>
                      <Button variant="outline" className="justify-start">
                        <FileText className="mr-2 h-4 w-4" />
                        OPT/CPT
                      </Button>
                      <Button variant="outline" className="justify-start">
                        <Globe className="mr-2 h-4 w-4" />
                        Visas
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Key Insights for International Students
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore data-driven insights to help you make informed decisions about your education and career in
                  the US.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">School Rankings</CardTitle>
                  <CardDescription>Compare universities by key metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center py-4">
                    <GraduationCap className="h-12 w-12 text-primary" />
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      International student population
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      Scholarship opportunities
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      Post-graduation employment rates
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Explore Schools</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">H1B Visa Data</CardTitle>
                  <CardDescription>Companies that sponsor international workers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center py-4">
                    <Briefcase className="h-12 w-12 text-primary" />
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      Sponsorship rates by industry
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      Salary data for H1B holders
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      Top employers for international talent
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">View H1B Data</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">OPT/CPT Guides</CardTitle>
                  <CardDescription>Navigate work authorization processes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center py-4">
                    <FileText className="h-12 w-12 text-primary" />
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      Step-by-step application guides
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      Timeline and deadlines
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      STEM extension information
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Read Guides</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="schools" className="w-full">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Explore Our Data</h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Interactive data visualizations to help you compare and analyze key information.
                  </p>
                </div>
                <TabsList className="grid w-full max-w-md grid-cols-3">
                  <TabsTrigger value="schools">Schools</TabsTrigger>
                  <TabsTrigger value="h1b">H1B Data</TabsTrigger>
                  <TabsTrigger value="guides">Guides</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="schools" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Top Universities for International Students</CardTitle>
                    <CardDescription>
                      Compare universities based on international student population, programs, and post-graduation
                      outcomes.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <SchoolComparisonChart />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="h1b" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>H1B Visa Sponsorship Data</CardTitle>
                    <CardDescription>
                      Explore companies with the highest H1B visa approval rates and average salaries.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <H1BDataTable />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="guides" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Popular OPT/CPT Guides</CardTitle>
                    <CardDescription>
                      Step-by-step guides to help you navigate work authorization processes.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PopularGuides />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Hear from international students who found success
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform has helped thousands of international students and workers navigate their journey in the
                  US.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button variant="outline">Read More Stories</Button>
                </div>
              </div>
              <div className="grid gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <GraduationCap className="h-4 w-4 text-primary" />
                      </div>
                      <div className="grid gap-1">
                        <p className="text-sm leading-loose">
                          "This platform was instrumental in helping me find the right university with strong support
                          for international students. The H1B data also helped me target companies for internships that
                          were more likely to sponsor me later."
                        </p>
                        <div className="font-semibold">Priya S.</div>
                        <div className="text-xs text-muted-foreground">MS Computer Science, Stanford University</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Briefcase className="h-4 w-4 text-primary" />
                      </div>
                      <div className="grid gap-1">
                        <p className="text-sm leading-loose">
                          "The OPT guide was incredibly detailed and helped me navigate the complex process without any
                          issues. I'm now working at a tech company in Silicon Valley thanks to the resources I found
                          here."
                        </p>
                        <div className="font-semibold">Miguel L.</div>
                        <div className="text-xs text-muted-foreground">
                          Software Engineer, Former International Student
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Stay Updated</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get the latest updates on immigration policies, school rankings, and job opportunities.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row gap-2">
                  <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                  <Button type="submit">Subscribe</Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  We'll never share your email with anyone else.{" "}
                  <Link href="/privacy" className="underline underline-offset-2">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} GlobalStudentFYI. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/about" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              About
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Terms
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

