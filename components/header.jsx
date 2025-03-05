"use client";

import React from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LayoutDashboard } from "lucide-react";

const Header = () => {
  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 flex items-center justify-between">
        <header className="flex items-center justify-between p-4">
          <nav className="flex items-center gap-4">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="logo"
                width={200}
                height={60}
                className="h-12 py-1 w-auto object-contain"
              />
            </Link>

            <SignedIn>
              <Link href="/insights">
                <Button variant="ghost">
                  <LayoutDashboard className="h-4 w-4 mr-2" />
                  Industry Insights
                </Button>
              </Link>
            </SignedIn>
          </nav>

          <div className="flex items-center gap-4">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </header>
      </nav>
    </div>
  );
};

export default Header;
