"use client";

import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import Usermenu from "./Usermenu";

import { SafeUser } from "@/app/types";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  console.log(currentUser);
  return (
    <div className="fixed z-10 w-full bg-white shadow-sm">
      <div className="border-b-[1px] py-4">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <Usermenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
