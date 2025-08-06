import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navitems from "./NavItems";
import { ClerkProvider, SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image 
            src="/images/logo.svg" 
            alt="Logo" 
            width={46}
            height={44} 
          />
        </div>
      </Link>
      <div className="flex items-center gap-6">
        <Navitems/>
        <SignedOut>
              <SignInButton>
                <button className="btn-signin">Sign In</button>
              </SignInButton>
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
