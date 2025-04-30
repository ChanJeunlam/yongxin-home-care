"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Heart } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"
import { usePathname } from "next/navigation"

const navItems = [
  { label: "首页", href: "/" },
  { label: "关于我们", href: "/about" },
  { label: "招工信息", href: "/jobs" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const isMobile = useMobile()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleContactClick = () => {
    // 如果在首页，滚动到联系我们部分
    if (pathname === "/") {
      document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" })
    } else {
      // 如果不在首页，跳转到首页的联系我们部分
      window.location.href = "/#contact-section"
    }
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-[#FF7F50] to-[#4A90E2]">
            <Heart className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-xl">永馨家政</span>
        </Link>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">打开菜单</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-10">
                {navItems.map((item, i) => (
                  <Link key={i} href={item.href} className="text-lg font-medium px-4 py-2 rounded-md hover:bg-accent">
                    {item.label}
                  </Link>
                ))}
                <div className="mt-auto pt-4 border-t">
                  <Button
                    className="w-full bg-gradient-to-r from-[#FF7F50] to-[#4A90E2] hover:from-[#FF9F70] hover:to-[#6AA7E8] text-white"
                    onClick={handleContactClick}
                  >
                    联系我们
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item, i) => (
              <Link key={i} href={item.href} className="text-sm font-medium transition-colors hover:text-[#FF7F50]">
                {item.label}
              </Link>
            ))}
            <Button
              className="bg-gradient-to-r from-[#FF7F50] to-[#4A90E2] hover:from-[#FF9F70] hover:to-[#6AA7E8] text-white"
              onClick={handleContactClick}
            >
              联系我们
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
