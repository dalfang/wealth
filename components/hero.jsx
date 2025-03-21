"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center gap-8 text-center py-12">
      <h1>
        Manage Your Finances
        <br />
        With AI
      </h1>
      <p className="text-lg text-muted-foreground">
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

      <div className="relative w-full max-w-[1280px] aspect-video">
        <Image
          src="/banner.jpeg"
          alt="Banner"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
};
