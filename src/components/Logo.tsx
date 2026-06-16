"use client";

import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`relative flex items-center select-none ${className}`}>
      <Image
        src="/Images/Logo.png"
        alt="Seren Education Consultants Logo"
        width={160}
        height={65}
        className="w-auto h-10 sm:h-12 object-contain"
        priority
      />
    </div>
  );
}

