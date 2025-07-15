"use client";


import React, { useState, useRef } from "react";

interface LandingPageProps {
    onComplete: () => void;
    blastVideoSrc: string;
}

export default function LandingPage({ onComplete, blastVideoSrc }: LandingPageProps) {
    const [holding, setHolding] = useState(false);
    const [progress, setProgress] = useState(0);
    const [showVideo, setShowVideo] = useState(false);
    const holdInterval = useRef<NodeJS.Timeout | null>(null);
    const progressDuration = 3000; // 3 seconds to complete

    // Handle holding the button
    const startHold = () => {
        setHolding(true);
        let startTime = Date.now();
        holdInterval.current = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const newProgress = Math.min(elapsed / progressDuration, 1);
            setProgress(newProgress);
            if (newProgress >= 1) {
                clearInterval(holdInterval.current!);
                setHolding(false);
                setShowVideo(true);
            }
        }, 16); // ~60fps
    };

    const stopHold = () => {
        setHolding(false);
        setProgress(0);
        if (holdInterval.current) clearInterval(holdInterval.current);
    };

    // After video ends, trigger onComplete to show main page
    const handleVideoEnded = () => {
        setShowVideo(false);
        onComplete();
    };

    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-purple-950 text-white overflow-hidden">
            {/* Background particles effect */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="animate-twinkle bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 h-full w-full" />
            </div>

            {!showVideo ? (
                <>
                    <button
                        onMouseDown={startHold}
                        onTouchStart={startHold}
                        onMouseUp={stopHold}
                        onMouseLeave={stopHold}
                        onTouchEnd={stopHold}
                        className="
                                    relative 
                                    px-6 py-4
                                    sm:px-10 sm:py-5
                                    bg-gradient-to-r from-purple-600 to-indigo-600 
                                    rounded-full 
                                    text-lg sm:text-xl 
                                    font-extrabold 
                                    tracking-wide uppercase 
                                    select-none 
                                    shadow-lg 
                                    hover:shadow-xl 
                                    hover:scale-105 
                                    transform 
                                    transition-all 
                                    duration-300 
                                    ease-in-out 
                                    border border-purple-400/50 
                                    glow-effect
                                    w-full max-w-xs sm:max-w-none
                                    mx-4">
                        Welcome to the NX Universe
                        <div
                            className="absolute left-0 bottom-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-100"
                            style={{ width: `${progress * 100}%` }}
                        />
                    </button>

                    <p className="mt-4 sm:mt-6 text-base sm:text-lg font-medium tracking-wide text-gray-300 animate-pulse text-center px-4 sm:px-0">
                        Hold for 3 seconds to launch into the future portfolio
                    </p>
                </>
            ) : (
                <video
                    src={blastVideoSrc}
                    autoPlay
                    onEnded={handleVideoEnded}
                    className="w-full h-screen object-cover object-center"
                />
            )}
        </div>
    );
}
