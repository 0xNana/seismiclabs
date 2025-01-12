import React from 'react'

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-white">About Seismic Labs</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">Our Mission</h2>
          <p className="text-gray-300 mb-6">
            At Seismic Labs, we are driven by a singular purpose: to transform societies through innovative technology solutions. We believe that technology has the power to create positive change and improve lives on a global scale.
          </p>
          <p className="text-gray-300">
            Our team of passionate technologists, researchers, and problem-solvers works tirelessly to develop solutions that address real-world challenges and create meaningful impact in communities worldwide.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">Our Values</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-2 text-white">Innovation</h3>
              <p className="text-gray-300">
                We constantly push the boundaries of what's possible, embracing new technologies and creative solutions to solve complex problems.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2 text-white">Social Impact</h3>
              <p className="text-gray-300">
                Every project we undertake is evaluated not just for its technical merit, but for its potential to create positive social change.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2 text-white">Collaboration</h3>
              <p className="text-gray-300">
                We believe in the power of partnership and work closely with communities, organizations, and stakeholders to ensure our solutions meet real needs.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">Join Our Journey</h2>
          <p className="text-gray-300">
            We're always looking for passionate individuals and organizations who share our vision of using technology to create a better world. Whether you're interested in partnering with us or joining our team, we'd love to hear from you.
          </p>
        </section>
      </div>
    </div>
  );
} 