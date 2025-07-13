"use client";

import Image from "next/image";
import { memo } from "react";

import ActiveUsers from "./users/ActiveUsers";

import React from 'react'
import { NavbarProps } from "@/types/type";

export const Navbar = ({
  activeElement,
  imageInputRef,
  handleImageUpload,
  handleActiveElement
}: NavbarProps) => {
  return (
    <nav 
      className="flex select-none items-center justify-between bg-primary-black px-5 text-white"
    >
      <Image 
        src="/assets/logo.svg" alt="FigPro Logo"
        width={58} height={20}
      />
      
      <div className="flex items-center gap-2">
        <div className="text-sm">
          Current Tool: <span className="font-semibold">{activeElement?.name || 'Select'}</span>
        </div>
      </div>

      <ActiveUsers />
    </nav>
  )
}
