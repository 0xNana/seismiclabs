import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'
import ClientSplashWrapper from './components/ClientSplashWrapper'
import ContactForm from './components/ContactForm'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Seismic Labs - Transforming Societies Through Technology',
  description: 'Seismic Labs is dedicated to transforming societies through innovative technology solutions.',
  icons: {
    icon: { url: '/seismic-icon.svg', type: 'image/svg+xml' },
    apple: { url: '/seismic-icon.svg', type: 'image/svg+xml' }
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-full flex flex-col bg-[#0f172a]`}>
        <ClientSplashWrapper>
          <Navigation />
          <main className="flex-grow">{children}</main>

          <footer className="border-t border-gray-800 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="order-2 md:order-1">
                  <div className="flex items-center space-x-2">
                    <img src="/seismic-icon.svg" alt="Seismic Labs" className="w-8 h-8" />
                    <h3 className="text-2xl font-bold text-white">Seismic Labs</h3>
                  </div>
                  <p className="mt-2 text-gray-300">Transforming societies through technology</p>
                  <div className="flex items-center space-x-4 mt-4">
                    <a 
                      href="https://x.com/seismic_labs" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label="Follow us on X"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    <button 
                      className="text-gray-400 hover:text-white transition-colors cursor-not-allowed opacity-50"
                      aria-label="GitHub - Coming Soon"
                      disabled
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </button>
                    <button 
                      className="text-gray-400 hover:text-white transition-colors cursor-not-allowed opacity-50"
                      aria-label="Facebook - Coming Soon"
                      disabled
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </button>
                  </div>
                  <p className="text-gray-300 mt-4">© {new Date().getFullYear()} Seismic Labs. All rights reserved.</p>
                </div>
                <div className="order-1 md:order-2">
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
