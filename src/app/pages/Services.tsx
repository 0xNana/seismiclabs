import { Link } from 'react-router-dom'

export default function Services() {
  const services = [
    {
      id: 'website-development',
      title: "Company/Organization Website Development",
      description: "Professional website design and development tailored to your business needs. From corporate sites to e-commerce platforms, we create stunning, responsive websites that drive results.",
      features: [
        "Responsive Design",
        "Content Management System (CMS)",
        "E-commerce Functionality",
        "SEO Optimization",
        "Custom Features & Integrations",
        "Performance Optimization"
      ],
      featured: true
    },
    {
      id: 'web-app',
      title: "Web Application Development",
      description: "Custom web applications and platforms built with modern technologies. Scalable, secure, and user-friendly solutions for your business operations.",
      features: [
        "Custom Web Applications",
        "API Development",
        "Database Design",
        "User Authentication",
        "Real-time Features",
        "Cloud Integration"
      ]
    },
    {
      id: 'mobile-app',
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android. We build apps that users love and businesses rely on.",
      features: [
        "iOS Development",
        "Android Development",
        "Cross-platform Solutions",
        "App Store Optimization",
        "Push Notifications",
        "Mobile Analytics"
      ]
    },
    {
      id: 'blockchain',
      title: "Web3 & Blockchain Solutions",
      description: "Expert blockchain development and consulting services. From smart contracts to DeFi applications, we help you navigate the Web3 landscape.",
      features: [
        "Smart Contract Development",
        "DeFi Applications",
        "Blockchain Integration",
        "NFT Solutions",
        "Crypto Advisory",
        "Web3 Marketing"
      ]
    },
    {
      id: 'ai-integration',
      title: "AI Integration Services",
      description: "AI-powered business solutions to transform your operations and decision-making. Leverage machine learning and automation to drive efficiency.",
      features: [
        "AI Integration",
        "Machine Learning Models",
        "Process Automation",
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision"
      ]
    },
    {
      id: 'digital-marketing',
      title: "Digital Marketing",
      description: "Strategic digital marketing services to grow your online presence and reach your target audience effectively.",
      features: [
        "Social Media Marketing",
        "Content Strategy",
        "SEO Optimization",
        "Analytics & Reporting",
        "Email Marketing",
        "PPC Advertising"
      ]
    }
  ];

  return (
    <div className="py-12 md:py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions to transform your business and drive innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {service.featured && (
                <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full mb-4 font-semibold text-xs">
                  FEATURED
                </span>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-20 text-center bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-blue-50 mb-8 max-w-2xl mx-auto text-lg">
            Let&apos;s discuss how our services can help you achieve your goals and drive innovation in your organization.
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
