"use client"

import { motion } from "framer-motion"
import { Code2, Database, Layout, Server, Settings } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Layout,
    skills: [
      "React.js",
      "Next.js",
      "JavaScript",
      "HTML",
      "CSS",
      "WordPress",
      "MUI",
      "Ant Design",
      "React Bootstrap",
      "Chakra UI",
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Node.js", "Express.js", "JWT", "Role Management", "NodeMailer", "Cron-Job", "Multer"],
  },
  {
    title: "Database & API",
    icon: Database,
    skills: ["MySQL", "SQL", "MongoDB", "Swagger-docs", "RESTful APIs"],
  },
  {
    title: "Tools & Technologies",
    icon: Settings,
    skills: ["AWS EC2", "AWS S3", "AWS RDS", "Load Balancer", "Git", "GitHub", "Figma", "Postman"],
  },
]

export function SkillsSection() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {skillCategories.map((category, index) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="h-full overflow-hidden bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:bg-gray-700/50 hover:shadow-lg hover:shadow-[#4BC6B9]/20">
            <CardHeader className="bg-gradient-to-r from-[#4BC6B9] to-[#38A3F1] p-4">
              <CardTitle className="flex items-center gap-2 text-white">
                <category.icon className="h-6 w-6" />
                {category.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="grid grid-cols-2 gap-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <Code2 className="h-4 w-4 text-[#4BC6B9]" />
                    <span className="text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

