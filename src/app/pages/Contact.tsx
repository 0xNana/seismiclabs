import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <div className="py-12 md:py-16 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Contact Information</h2>
          <div className="space-y-4">
            <div>
              <a 
                href="mailto:hellodaries@gmail.com" 
                className="text-blue-50 hover:text-white transition-colors text-lg md:text-xl font-medium inline-flex items-center gap-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hellodaries@gmail.com
              </a>
            </div>
            <div>
              <a 
                href="tel:+233554165745" 
                className="text-blue-50 hover:text-white transition-colors text-lg md:text-xl font-medium inline-flex items-center gap-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +233 55 416 5745
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Send us a message</h2>
          <ContactForm recipientEmail="hellodaries@gmail.com" />
        </div>
      </div>
    </div>
  )
}
