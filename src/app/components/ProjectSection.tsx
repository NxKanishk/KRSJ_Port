"use client";

import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Daily Darshan",
      description:
        "A collaborative darshan application with real-time updates, of Lord Jaganath",
      liveUrl: "https://mandir-nine.vercel.app/",
      codeUrl: "https://github.com/example",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    },
    {
      title: "Personal Portfolio",
      description: "A responsive Portfolio website for my own use.",
      liveUrl: "https://example.com",
      codeUrl: "https://github.com/example",
      tags: ["React", "Chart.js", "Weather API", "Tailwind CSS"],
    },
  ];

  return (
    <section
    id="projects"
    className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1b0e2f] to-[#0f0a1a] text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <CardHeader>
                <CardTitle className="text-white">{project.title}</CardTitle>
                <CardDescription className="text-gray-300">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gradient-to-r from-[#6e4e9e]/30 to-[#2e194d]/30 text-purple-200 rounded-md text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-[#1e1b2e] to-[#6e4e9e] hover:from-[#151226] hover:to-[#8a6acb] text-white flex-1"
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
  );
}
