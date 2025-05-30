"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const educationData = [
  // {
  //   degree: "MCA",
  //   institution: "Scope college Of Engineering",
  //   year: "2022",
  //   grade: "6.7 CGPA",
  //   location: "Bhopal, India",
  // },
  {
    degree: "B.Sc",
    institution: "Institute For Excellence In Higher Education",
    year: "2019",
    grade: "62.66%",
    location: "Bhopal, India",
  },
  {
    degree: "Senior High School (12th)",
    institution: "Central Board Of Secondary Education",
    year: "2016",
    grade: "78%",
    location: "Bhopal, India",
  },
  {
    degree: "High School (10th)",
    institution: "Central Board Of Secondary Education",
    year: "2014",
    grade: "8.4 CGPA",
    location: "Bhopal, India",
  },
]

export function EducationTimeline() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {educationData.map((education, index) => (
        <motion.div
          key={education.degree}
          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="overflow-hidden bg-gray-800 h-full">
            <CardHeader className="bg-gradient-to-r from-[#4BC6B9] to-[#38A3F1] p-6">
              <CardTitle className="flex items-center gap-4 text-white">
                <GraduationCap className="h-6 w-6" />
                <div>
                  <h3 className="text-xl font-bold">{education.degree}</h3>
                  <p className="text-sm">
                    {education.institution} | {education.year} | {education.location}
                  </p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-lg font-semibold text-gray-300">Grade: {education.grade}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

