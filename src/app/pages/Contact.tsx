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

        <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Send us a message</h2>
          <ContactForm recipientEmail="hellodaries@gmail.com" />
        </div>
      </div>
    </div>
  )
}
