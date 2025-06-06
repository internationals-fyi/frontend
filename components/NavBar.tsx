import Link from "next/link"
import { Search, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Globe className="h-6 w-6" />
          <Link href="/" className="text-xl font-bold">
            internationals.fyi
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="/colleges" className="text-sm font-medium transition-colors hover:text-primary">
            Colleges
          </Link>
          <Link href="/h1b-data" className="text-sm font-medium transition-colors hover:text-primary">
            H1B Data
          </Link>
          <Link href="/opt-cpt" className="text-sm font-medium transition-colors hover:text-primary">
            OPT/CPT Guides
          </Link>
          <Link href="/resources" className="text-sm font-medium transition-colors hover:text-primary">
            Resources
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <form className="hidden md:flex relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-[200px] pl-8 md:w-[300px] rounded-full bg-muted"
            />
          </form>
          <Button>Sign In</Button>
        </div>
      </div>
    </header>
  )
} 