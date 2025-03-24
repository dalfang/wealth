"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect } from "react";

export const Hero = () => {
  const imageRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrolled = window.scrollY > 50;
        imageRef.current.classList.toggle("scrolled", scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col items-center gap-8 text-center py-12">
      <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
        Manage Your Finances With AI
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-muted-foreground">
        An AI-powered financial management platform that helps you track,
        analyze, and optimize your spending with real-time insights.
      </p>

      <div className="flex gap-4">
        <Link href="/dashboard">
          <Button size="lg" className="px-8">
            Get Started
          </Button>
        </Link>

        <Link href="https://youtu.be/egS6fnZAdzk?si=sZS1Q78t4qWeLkfn">
          <Button size="lg" variant="outline" className="px-8">
            Watch Demo
          </Button>
        </Link>
      </div>

      <div className="hero-image-wrapper relative w-full h-[500px]">
        <div ref={imageRef} className="hero-image relative w-full h-full">
          <Image
            src="/banner.jpeg"
            alt="Banner"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};
