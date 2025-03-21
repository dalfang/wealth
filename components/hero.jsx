"use client";

import { Link } from "lucide-react";
import { Button } from "react-day-picker";

const HeroSection = () => {
  return (
    <div className="pb-20 px-4">
      <h1>
        Manage Your Finances
        <br />
        With AI
      </h1>
      <p>
        An AI-powered financial management platform that helps you track,
        analyze, and optimize your spending with real-time insights.
      </p>

      <div>
        <Link href="/dashboard">
          <Button size="lg" className="px-8">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
