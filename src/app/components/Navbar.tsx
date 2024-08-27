"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { NAV_LINKS } from "../constants";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="grid gap-y-10 place-items-center grid-cols-2 md:flex md:justify-between md:items-center md:px-20 md:py-10 px-4 py-8">
      <Link href="/">
        <Image src={"/logo.png"} alt={"ZimPak logo"} width={200} height={50} />
      </Link>
      {/* Burger menu icon */}
      <div className="md:hidden place-self-end self-center mr-4">
        {isOpen ? (
          <ClearIcon onClick={() => setIsOpen(false)}></ClearIcon>
        ) : (
          <MenuIcon onClick={() => setIsOpen(true)}></MenuIcon>
        )}
      </div>
      <ul
        className={`md:flex-1 col-span-2 md:space-x-12 md:justify-end md:flex grid place-items-center gap-y-4 mr-4 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="hover:text-accent text-lg font-semibold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
