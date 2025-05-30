"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"

import { Button } from "@/components/ui/button"

export function ResumeDownload() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Button
        asChild
        variant="outline"
        size="lg"
        className="group rounded-full border-2 border-[#4BC6B9] bg-transparent px-8 py-6 text-lg text-[#4BC6B9] hover:bg-[#4BC6B9] hover:text-white"
      >
        <a href="/Sandeep_Mewara_Resume.pdf" download="Sandeep_Mewara_Resume.pdf">
          <Download className="mr-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
          Download Resume
        </a>
      </Button>
    </motion.div>
  )
}

