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
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      >
        <source src="/spiral.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Purple + Black Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1b0e2f] via-black/70 to-transparent z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto text-center text-white">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
          Hi Myself{" "}
          <span className="bg-gradient-to-r from-[#2e194d] to-[#baa6da] bg-clip-text text-transparent typewriter inline-block relative top-1">
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
            className="bg-gradient-to-r from-[#1e1b2e] to-[#6e4e9e] hover:from-[#151226] hover:to-[#8a6acb] text-white"
          >
            View My Work
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>


          <Button
            onClick={() =>
              document
                .getElementById("Contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            variant="outline"
            size="lg"
            className="bg-white/10 text-white border-white/20 hover:bg-white/20"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
