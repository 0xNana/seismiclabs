'use client'
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-6xl font-bold text-white mb-4">Oops!</h1>
        <h2 className="text-3xl font-bold text-white mb-4">Something went wrong</h2>
        <p className="text-gray-300 text-lg mb-8">
          Don&apos;t worry, we&apos;re on it. In the meantime, try refreshing the page.
        </p>
        <button
          onClick={reset}
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
} 