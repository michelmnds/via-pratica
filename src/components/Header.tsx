"use client";

import Image from "next/image";
import { useState } from "react";
import { Dropdown } from "./_partials";
import { Arrow } from "./_partials/Arrow";
import { Links } from "./_partials/Links";

export const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="w-full h-[60px] xl:h-[80px] xl:px-20 px-3 fixed top-0 left-0 flex flex-row justify-between items-center bg-white/5 z-20 shadow-md ring-2 ring-black/5 backdrop-blur-md">
      <div className="flex flex-row items-center gap-2">
        <Image src="/icons/logo.png" alt="Via Prática" width={30} height={30} />
        <h1 className="text-md font-extrabold">VIA PRÁTICA</h1>
      </div>
      <div className="relative">
        <Arrow
          isDropdownOpen={isDropdownOpen}
          toggleDropdown={toggleDropdown}
        />
        <Dropdown isDropdownOpen={isDropdownOpen} />
        <Links />
      </div>
    </header>
  );
};

