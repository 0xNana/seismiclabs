'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#0f172a] border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/seismic-icon.svg" alt="Seismic Labs" className="w-8 h-8" />
              <span className="text-2xl font-bold text-white">Seismic Labs</span>
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="/team" className="text-gray-300 hover:text-white transition-colors">
              Team
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div onClick={() => setIsMenuOpen(false)}>
                <Link href="/" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </div>
              <div onClick={() => setIsMenuOpen(false)}>
                <Link href="/services" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </div>
              <div onClick={() => setIsMenuOpen(false)}>
                <Link href="/projects" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">
                  Projects
                </Link>
              </div>
              <div onClick={() => setIsMenuOpen(false)}>
                <Link href="/team" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">
                  Team
                </Link>
              </div>
              <div onClick={() => setIsMenuOpen(false)}>
                <Link href="/about" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 