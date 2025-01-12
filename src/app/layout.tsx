import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import React from 'react'
import ClientSplashWrapper from './components/ClientSplashWrapper'
import ContactForm from './components/ContactForm'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Seismic Labs - Transforming Societies Through Technology',
  description: 'Seismic Labs is dedicated to transforming societies through innovative technology solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0f172a]`}>
        <ClientSplashWrapper>
          <nav className="bg-[#0f172a] border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <Link href="/" className="text-2xl font-bold text-white">
                    Seismic Labs
                  </Link>
                </div>
                <div className="flex items-center space-x-8">
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
              </div>
            </div>
          </nav>

          <main>{children}</main>

          <footer className="border-t border-gray-800 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="text-2xl font-bold text-white">Seismic Labs</h3>
                  <p className="mt-2 text-gray-300">Transforming societies through technology</p>
                  <p className="text-gray-300 mt-8">© {new Date().getFullYear()} Seismic Labs. All rights reserved.</p>
                </div>
                <div className="flex flex-col space-y-2">
                  <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
                  <ContactForm recipientEmail="hellodaries@gmail.com" />
                </div>
              </div>
            </div>
          </footer>
        </ClientSplashWrapper>
      </body>
    </html>
  )
}
