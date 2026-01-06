import { Link } from 'react-router-dom'

export default function Team() {
  const team = [
    {
      name: "Mr. Ace",
      role: "Founder & Chief Architect",
      initials: "MA"
    }
  ];

  const openPositions = [
    {
      role: "Founding Engineer",
      description: "Join us as a founding engineer and help build innovative solutions that make a difference"
    },
    {
      role: "Product Engineer",
      description: "Shape the future of our products and drive technical excellence"
    },
    {
      role: "UI/UX Designer",
      description: "Create exceptional user experiences and design beautiful, functional interfaces"
    }
  ];

  return (
    <div className="py-12 md:py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Our Team
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate individuals dedicated to transforming societies through technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl md:text-3xl font-bold">
                {member.initials}
              </div>
              <h2 className="text-2xl font-bold mb-2 text-gray-900">{member.name}</h2>
              <p className="text-blue-600 font-semibold">{member.role}</p>
            </div>
          ))}

          {openPositions.map((position, index) => (
            <div 
              key={index} 
              className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center hover:border-blue-600 hover:bg-blue-50 transition-all"
            >
              <h3 className="text-xl font-bold mb-3 text-gray-900 text-center">{position.role}</h3>
              <p className="text-gray-600 text-sm text-center mb-6">{position.description}</p>
              <Link
                to="/contact"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold shadow-md hover:shadow-lg"
              >
                Apply Now
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Join Our Team</h2>
          <p className="text-blue-50 mb-8 max-w-2xl mx-auto text-lg">
            We&apos;re always looking for talented individuals who share our passion for innovation and social impact.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
