"use client"

import { motion } from "framer-motion"
import { Code2 } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  tech: string[]
  role: string
  responsibilities: string[]
  link?: string
}

export function ProjectCard({ title, description, tech, role, responsibilities, link }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <Card 
        className={`h-full overflow-hidden bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:bg-gray-700/50 hover:shadow-lg hover:shadow-[#4BC6B9]/20 ${link ? 'cursor-pointer' : ''}`}
        onClick={() => link && window.open(link, '_blank')}
      >
        <CardHeader className="bg-gradient-to-r from-[#4BC6B9] to-[#38A3F1] p-4 sm:p-6">
          <CardTitle className="flex items-center gap-2 text-white text-lg sm:text-xl">
            <Code2 className="h-5 w-5 sm:h-6 sm:w-6" />
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <p className="mb-4 text-sm sm:text-base text-gray-300">{description}</p>
          <div className="mb-4 flex flex-wrap gap-2">
            {tech.map((t) => (
              <Badge key={t} variant="secondary" className="bg-[#4BC6B9]/20 text-[#4BC6B9] text-xs sm:text-sm">
                {t}
              </Badge>
            ))}
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-[#4BC6B9] text-sm sm:text-base">Role</h4>
              <p className="text-xs sm:text-sm text-gray-300">{role}</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#4BC6B9] text-sm sm:text-base">Responsibilities</h4>
              <ul className="list-inside list-disc text-xs sm:text-sm text-gray-300">
                {responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

