import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import NavItems from './NavItems'


const Navbar = () => {
  return (
    <nav className="navbar">
        <Link href="/" className="Navbar">
            <Image src="/images/logo.svg" alt="Logo" width={46} height={44} />
        </Link>
        <div className="flex items-center gap-8">
          <NavItems />
          <SignedOut>
            <SignInButton>
              <button className="btn-signin">Sign In</button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
    </nav>
  )
}
export default Navbar;