"use client"
import { useState } from "react";
import LandingPage from "./components/LandingPage";

import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import TechStackSection from "./components/TechStackSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/FooterSection";

import { Suspense } from "react";

export default function Home() {
  const [landingComplete, setLandingComplete] = useState(false);

  return (
    <>
      {!landingComplete ? (
        <LandingPage
          onComplete={() => setLandingComplete(true)}
          blastVideoSrc="/blast.mp4"
        />
      ) : (
        <div
          className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900
          animate-fadeIn"
          style={{ animationDuration: "1s", animationFillMode: "forwards" }}
        >
          <Navigation />
          <main>
            <HeroSection />
            <Suspense fallback={<div>Loading 3D Model...</div>}></Suspense>
            <AboutSection />
            <TechStackSection />
            <ProjectSection />
            <Suspense fallback={<div>Loading...</div>}>
              <ContactSection />
            </Suspense>
            <Footer />
          </main>
        </div>
      )}
    </>
  );
}
