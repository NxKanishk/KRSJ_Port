"use client"

import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      liveUrl: "https://example.com",
      codeUrl: "https://github.com/example",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard that displays current conditions and forecasts with beautiful data visualizations.",
      liveUrl: "https://example.com",
      codeUrl: "https://github.com/example",
      tags: ["React", "Chart.js", "Weather API", "Tailwind CSS"],
    },
    {
      title: "Learning Management System",
      description:
        "A comprehensive LMS with course creation, student progress tracking, and interactive learning modules.",
      liveUrl: "https://example.com",
      codeUrl: "https://github.com/example",
      tags: ["React", "Express.js", "MySQL", "AWS S3"],
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <CardHeader>
                <CardTitle className="text-white">{project.title}</CardTitle>
                <CardDescription className="text-gray-300">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-purple-600/30 text-purple-300 rounded-md text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white flex-1"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-white/10 text-white border-white/20 hover:bg-white/20 flex-1"
                    onClick={() => window.open(project.codeUrl, "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
