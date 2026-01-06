import { Link } from 'react-router-dom'

export default function About() {
  const values = [
    {
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible, embracing new technologies and creative solutions to solve complex problems."
    },
    {
      title: "Social Impact",
      description: "Every project we undertake is evaluated not just for its technical merit, but for its potential to create positive social change."
    },
    {
      title: "Collaboration",
      description: "We believe in the power of partnership and work closely with communities, organizations, and stakeholders to ensure our solutions meet real needs."
    }
  ];

  return (
    <div className="py-12 md:py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            About Seismic Labs
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            We build technology that moves societies forward.
          </p>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in web platforms, digital infrastructure, and product development—working with startups, institutions, and organizations that value clarity, execution, and long-term impact.
          </p>
        </div>

        <section className="mb-16 md:mb-20">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12">
            <div className="text-lg md:text-xl text-blue-50 leading-relaxed max-w-4xl">
              <p>
                At Seismic Labs, we believe technology is a force for social progress when it is built with purpose, clarity, and responsibility.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-gray-900">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Join Our Journey</h2>
          <p className="text-blue-50 mb-8 max-w-2xl mx-auto text-lg">
            We&apos;re always looking for passionate individuals and organizations who share our vision of using technology to create a better world. Whether you&apos;re interested in partnering with us or joining our team, we&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get in Touch
            </Link>
            <Link
              to="/team"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all font-semibold"
            >
              View Open Positions
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
