import { Code, Database, Globe, GitBranch, Palette } from "lucide-react";

export default function TechStackSection() {
  const technologies = [
    { name: "React", icon: Code, category: "Frontend" },
    { name: "Next.js", icon: Globe, category: "Framework" },
    { name: "JavaScript", icon: Code, category: "Language" },
    { name: "MySQL", icon: Database, category: "Database" },
    { name: "Git", icon: GitBranch, category: "Version Control" },
    { name: "Tailwind CSS", icon: Palette, category: "Styling" },
  ];

  return (
    <section
      id="tech-stack"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f0a1a] to-[#1b0e2f] text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">
          Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/10"
              >
                <IconComponent className="w-12 h-12 text-[#baa6da] mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">{tech.name}</h3>
                <p className="text-gray-400 text-sm">{tech.category}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
