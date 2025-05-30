"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    title: "Full Stack Software Engineer",
    company: "Acompworld",
    period: "08/2023 – present",
    location: "Bhopal, India",
    description:
      "As a Full Stack Software Engineer at Acompworld, I continue to expand my expertise in a diverse range of technologies and frameworks.",
    responsibilities: [
      "Collaborated within a dynamic team environment to develop and maintain innovative solutions using the MERN and Next.js stacks.",
      "Leveraged SQL Server for efficient data management and retrieval.",
      "Contributed to the development and enhancement of .NET applications.",
      "Utilized WordPress to design and customize websites.",
      "Worked closely with project managers and stakeholders.",
      "Actively participated in code reviews and continuous learning.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "MicroTechnologies",
    period: "02/2022 – 07/2023",
    location: "Bhopal, India",
    description:
      "As a Full Stack Developer at MicroTechnologies, I played a pivotal role in developing robust web applications.",
    responsibilities: [
      "Implemented RESTful APIs for efficient communication between frontend and backend systems.",
      "Worked closely with designers and project managers on requirements gathering.",
      "Contributed to website updates and new feature development.",
      "Deployed applications to AWS cloud services.",
      "Specialized in crafting top-notch UI architectures and interface designs.",
    ],
  },
]

export function ExperienceTimeline() {
  return (
    <div className="space-y-8">
      {experiences.map((experience, index) => (
        <motion.div
          key={experience.title}
          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="overflow-hidden bg-gray-800">
            <CardHeader className="bg-gradient-to-r from-[#4BC6B9] to-[#38A3F1] p-6">
              <CardTitle className="flex items-center gap-4 text-white">
                <Briefcase className="h-6 w-6" />
                <div>
                  <h3 className="text-xl font-bold">{experience.title}</h3>
                  <p className="text-sm">
                    {experience.company} | {experience.period} | {experience.location}
                  </p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-4 text-gray-300">{experience.description}</p>
              <ul className="list-inside list-disc space-y-2 text-sm text-gray-300">
                {experience.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

