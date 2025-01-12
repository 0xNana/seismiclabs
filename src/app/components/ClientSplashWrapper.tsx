'use client'

import React, { useState } from 'react'
import dynamic from 'next/dynamic'

const SplashScreen = dynamic(() => import('./SplashScreen'), {
  ssr: false,
})

export default function ClientSplashWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <div className={`transition-opacity duration-500 ${showSplash ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </div>
    </>
  )
} 