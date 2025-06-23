"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
          Hi I'm{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Kanishk
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Full-Stack Developer passionate about creating beautiful, functional
          web applications that solve real-world problems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
           <Button
            onClick={scrollToProjects}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
          >
            View My Work
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button  onClick={()=>document.getElementById("Contact")?.scrollIntoView({behavior:"smooth"})}
            variant = "outline"
            size="lg"
            className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
