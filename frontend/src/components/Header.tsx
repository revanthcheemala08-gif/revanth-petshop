'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // For demo, assume not logged in

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="Revanth Pet World" className="h-10 mr-2" />
          <h1 className="text-xl font-bold">Revanth Pet World</h1>
        </div>
        <nav className="flex space-x-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          {isLoggedIn ? (
            <Link href="/dashboard" className="hover:underline">Dashboard</Link>
          ) : (
            <Link href="/login" className="hover:underline">Login</Link>
          )}
        </nav>
      </div>
    </header>
  );
}