'use client';

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

// Simple cn function to join class names conditionally
function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

const navItems: { label: string; href: string }[] = [
    { label: 'Home', href: '/' },
    { label: 'Companions', href: '/companions' },
    { label: 'My Journey', href: '/my-journey' },
];

const NavItems = () => {
    const pathname = usePathname();
    // block where I can add stuff
  return (
    <nav className="flex items-center gap-4">
        {navItems.map(({label, href}) => (
        <Link 
            href={href} 
            key={label} 
            className={cn(pathname === href && 'text/primary font-semibold')}
            >
            {label}
        </Link>
    ))}
        </nav>
  )
}

export default NavItems
