import React from 'react'

export default function Projects() {
  const projects = [
    {
      title: "VentBuddy",
      description: "VentBuddy is a social wellness app that provides a safe, supportive space for users to express their emotions, share their experiences, and connect with like-minded individuals.",
      category: "Mobile App",
      status: "In Development"
    },
    {
      title: "Smart City Initiative",
      description: "Implementing IoT solutions for better urban management and sustainability.",
      category: "Infrastructure",
      status: "Planning Phase"
    },
    {
      title: "Digital Education Platform",
      description: "Making quality education accessible through technology.",
      category: "Web",
      status: "Concept"
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12 text-white">Our Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#1e293b] rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <span className="px-3 py-1 text-sm bg-[#0f172a] text-blue-300 rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="flex items-center">
                    <span className={`w-2 h-2 rounded-full mr-2 ${
                      project.status === "In Development" ? "bg-green-400" :
                      project.status === "Planning Phase" ? "bg-yellow-400" :
                      "bg-blue-400"
                    }`}></span>
                    {project.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 