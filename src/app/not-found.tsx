import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-gray-300 mb-8">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <Link 
          href="/" 
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
} 