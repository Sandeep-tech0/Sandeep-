"use client"

import { motion } from "framer-motion"
import { BookOpen, Briefcase, Home, Lightbulb, User } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function FloatingNav() {
  const [active, setActive] = useState("home")
  const [visible, setVisible] = useState(true)
  const [lastScroll, setLastScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const top = section.offsetTop
        const height = section.offsetHeight
        const id = section.getAttribute("id")

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActive(id || "home")
        }
      })

      setVisible(lastScroll > window.scrollY)
      setLastScroll(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScroll])

  return (
    <motion.div
      className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2"
      animate={{ y: visible ? 0 : 100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex gap-1 rounded-full border border-gray-700 bg-gray-900/80 p-2 backdrop-blur-sm">
        <Button
          asChild
          variant="ghost"
          size="icon"
          className={cn(
            "rounded-full transition-all duration-300",
            active === "home" && "bg-[#4BC6B9] text-gray-900 hover:bg-[#4BC6B9] hover:text-gray-900",
          )}
        >
          <Link href="#home">
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>
        </Button>
        <Button
          asChild
          variant="ghost"
          size="icon"
          className={cn(
            "rounded-full transition-all duration-300",
            active === "about" && "bg-[#4BC6B9] text-gray-900 hover:bg-[#4BC6B9] hover:text-gray-900",
          )}
        >
          <Link href="#about">
            <User className="h-4 w-4" />
            <span className="sr-only">About</span>
          </Link>
        </Button>
        <Button
          asChild
          variant="ghost"
          size="icon"
          className={cn(
            "rounded-full transition-all duration-300",
            active === "skills" && "bg-[#4BC6B9] text-gray-900 hover:bg-[#4BC6B9] hover:text-gray-900",
          )}
        >
          <Link href="#skills">
            <Lightbulb className="h-4 w-4" />
            <span className="sr-only">Skills</span>
          </Link>
        </Button>
        <Button
          asChild
          variant="ghost"
          size="icon"
          className={cn(
            "rounded-full transition-all duration-300",
            active === "projects" && "bg-[#4BC6B9] text-gray-900 hover:bg-[#4BC6B9] hover:text-gray-900",
          )}
        >
          <Link href="#projects">
            <BookOpen className="h-4 w-4" />
            <span className="sr-only">Projects</span>
          </Link>
        </Button>
        <Button
          asChild
          variant="ghost"
          size="icon"
          className={cn(
            "rounded-full transition-all duration-300",
            active === "experience" && "bg-[#4BC6B9] text-gray-900 hover:bg-[#4BC6B9] hover:text-gray-900",
          )}
        >
          <Link href="#experience">
            <Briefcase className="h-4 w-4" />
            <span className="sr-only">Experience</span>
          </Link>
        </Button>
      </div>
    </motion.div>
  )
}

