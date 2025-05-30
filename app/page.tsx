"use client"

import { motion } from "framer-motion"
import { Facebook, Github, Linkedin, Mail, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Cloud } from "@/components/cloud"
import { EducationTimeline } from "@/components/education-timeline"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { FloatingNav } from "@/components/floating-nav"
import { PaperAirplane } from "@/components/paper-airplane"
import { ProjectCard } from "@/components/project-card"
import { ResumeDownload } from "@/components/resume-download"
import { SkillsSection } from "@/components/skills-section"
import { TopNav } from "@/components/top-nav"
import { TypewriterEffect } from "@/components/typewriter-effect"

export default function Page() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <TopNav />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden pt-16">
        {/* Animated background */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />

        {/* Decorative Elements */}
        <Cloud className="absolute left-[10%] top-[15%] text-blue-500/20 hidden sm:block" />
        <Cloud className="absolute right-[15%] top-[25%] text-purple-500/20 hidden sm:block" />
        <Cloud className="absolute left-[20%] top-[45%] text-green-500/20 hidden sm:block" />
        <PaperAirplane className="absolute right-[30%] top-[20%] text-[#4BC6B9] hidden sm:block" />

        {/* Hero Content */}
        <div className="flex min-h-screen items-center justify-center px-4">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4 inline-block"
            >
              <h1 className="bg-gradient-to-r from-[#4BC6B9] via-[#38A3F1] to-[#4BC6B9] bg-clip-text font-handwriting text-4xl font-bold text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                Sandeep Mewara
              </h1>
            </motion.div>
            <div className="mb-8 text-xl font-medium text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] sm:text-2xl md:text-3xl lg:text-4xl">
              <span className="text-white">I am a </span>
              <TypewriterEffect words={["Full Stack Developer.", "Software Engineer.", "Problem Solver."]} />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Button
                asChild
                variant="outline"
                className="rounded-full border-2 border-[#4BC6B9] bg-transparent px-6 py-4 text-base font-medium sm:px-8 sm:py-6 sm:text-lg text-[#4BC6B9] transition-all duration-300 ease-in-out hover:bg-[#4BC6B9] hover:text-gray-900 hover:shadow-lg hover:shadow-[#4BC6B9]/50 backdrop-blur-sm"
              >
                <Link href="#contact" className="tracking-wider">CONNECT WITH ME</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24">
        <div className="container px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-12 sm:mb-16 text-center text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#4BC6B9] to-[#38A3F1] bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-48 w-48 sm:h-64 sm:w-64 overflow-hidden rounded-full border-4 border-[#4BC6B9] shadow-lg shadow-[#4BC6B9]/20"
            >
              <Image src="/sandeep1.jpg" alt="Sandeep Mewara" fill className="object-cover" />
            </motion.div>
            <div className="max-w-xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8 text-base sm:text-lg text-gray-300"
              >
                Passionate Full Stack Software Engineer with 3 years of experience in JavaScript, React.js, Node.js, MySQL, Next.js, and AWS. I aim to contribute to a progressive organization where I can apply my expertise to build innovative, high-quality solutions.
              </motion.p>
              <div className="flex gap-4">
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="rounded-full text-[#4BC6B9] hover:bg-[#4BC6B9] hover:text-gray-900 transition-all duration-300"
                >
                  <Link href="https://github.com/Sandeep-tech0">
                    <Github className="h-5 w-5 sm:h-6 sm:w-6" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="rounded-full text-[#4BC6B9] hover:bg-[#4BC6B9] hover:text-gray-900 transition-all duration-300"
                >
                  <Link href="https://www.linkedin.com/in/sandeep-mewara-595106211">
                    <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="rounded-full text-[#4BC6B9] hover:bg-[#4BC6B9] hover:text-gray-900 transition-all duration-300"
                >
                  <Link href="mailto:sandeepmewara121@gmail.com">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-24 bg-gray-800/50">
        <div className="container px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-12 sm:mb-16 text-center text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#4BC6B9] to-[#38A3F1] bg-clip-text text-transparent"
          >
            Skills
          </motion.h2>
          <SkillsSection />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-24">
        <div className="container px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-12 sm:mb-16 text-center text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#4BC6B9] to-[#38A3F1] bg-clip-text text-transparent"
          >
            Experience
          </motion.h2>
          <ExperienceTimeline />
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 sm:py-24 bg-gray-800/50">
        <div className="container px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-12 sm:mb-16 text-center text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#4BC6B9] to-[#38A3F1] bg-clip-text text-transparent"
          >
            Education
          </motion.h2>
          <EducationTimeline />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-24">
        <div className="container px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-12 sm:mb-16 text-center text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#4BC6B9] to-[#38A3F1] bg-clip-text text-transparent"
          >
            Projects
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2">
            <ProjectCard
              title="Uniteam"
              description="Uniteam is a cutting-edge task management tool designed to streamline workflows, organize tasks, and enhance productivity through the power of artificial intelligence. It offers a simple yet powerful interface that significantly boosts team efficiency by integrating task assignment, meeting scheduling, and AI-driven assistance into a cohesive platform."
              tech={[".NET Core", "MS SQL", "React.js"]}
              role="Full-Stack Developer"
              responsibilities={[
                "Task Management System Development",
                "AI Integration for Voice/Text Commands",
                "Meeting Scheduling System",
                "AWS Infrastructure and Security Implementation",
              ]}
              link="https://uniteam.ai"
            />
            <ProjectCard
              title="Talentizo"
              description="Talentizo is a professional learning network platform designed for learners to book sessions with mentors. Mentors have the flexibility to offer learning sessions either for free or at a cost. For paid sessions, mentors can set their own rates, which can vary by skill or topic, or apply a single rate for all sessions."
              tech={["MongoDB", "Express.js", "Node.js", "React.js", "Bootstrap"]}
              role="Full-Stack Developer"
              responsibilities={[
                "Frontend Development with React",
                "Backend Development with Node.js and Express",
                "Database Integration with MongoDB",
                "Zoom Integration for Video Sessions",
              ]}
              link="https://learnet.ai"
            />
            <ProjectCard
              title="Kwikbot"
              description="The Kwikbot Project is an advanced platform designed to streamline communication and management through intelligent bots. The system incorporates three primary modules—Bot, Admin, and Super Admin."
              tech={["React", "Node.js", "Express", "MongoDB"]}
              role="Full-Stack Developer"
              responsibilities={[
                "UI/UX Implementation",
                "Bot Logic Development",
                "Admin Panel Creation",
                "System Integration",
              ]}
            />
            <ProjectCard
              title="Employee Management"
              description="A comprehensive employee management system to optimize and streamline human resources operations, including record keeping, attendance tracking, and performance evaluations."
              tech={["React.js", "Node.js", "Bootstrap", "Ant Design"]}
              role="Full-Stack Developer"
              responsibilities={[
                "Frontend UI Design",
                "API Development",
                "Authentication System",
                "Database Schema Design",
              ]}
            />
            <ProjectCard
              title="Online Bazaar"
              description="An innovative online marketplace platform connecting buyers and sellers, featuring secure transactions and comprehensive e-commerce functionality."
              tech={["React.js", "Node.js", "Bootstrap", "Ant Design"]}
              role="Full-Stack Developer"
              responsibilities={["Frontend Development", "API Integration", "Authentication", "Role Management"]}
            />
          </div>
        </div>
      </section>

      {/* Resume Download Section */}
      <section id="resume" className="py-16 sm:py-24 bg-gray-800/50">
        <div className="container px-4 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-12 sm:mb-16 text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#4BC6B9] to-[#38A3F1] bg-clip-text text-transparent"
          >
            Resume
          </motion.h2>
          <p className="mb-8 text-base sm:text-lg text-gray-300">
            Download my resume to learn more about my qualifications and experience.
          </p>
          <ResumeDownload />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-12 sm:mb-16 text-center text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#4BC6B9] to-[#38A3F1] bg-clip-text text-transparent"
          >
            Let&apos;s Connect
          </motion.h2>
          <div className="mx-auto max-w-md text-center">
            <p className="mb-8 text-base sm:text-lg text-gray-300">
              I&apos;m always excited to do business with like-minded people. Let&apos;s discuss over coffee!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-2 border-[#4BC6B9] bg-transparent text-[#4BC6B9] transition-all duration-300 ease-in-out hover:bg-[#4BC6B9] hover:text-gray-900 hover:shadow-lg hover:shadow-[#4BC6B9]/50"
              >
                <Link href="mailto:sandeepmewara121@gmail.com">Email Me</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-2 border-[#4BC6B9] bg-transparent text-[#4BC6B9] transition-all duration-300 ease-in-out hover:bg-[#4BC6B9] hover:text-gray-900 hover:shadow-lg hover:shadow-[#4BC6B9]/50"
              >
                <Link href="tel:7223956779">Call Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

