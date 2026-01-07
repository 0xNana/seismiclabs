import React from 'react';
import { Download, FileText, Share2, Mail, Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';

const LogoSizeGuide = () => {
  const sizes = [
    {
      category: "Documents & Print",
      icon: <FileText className="w-6 h-6" />,
      items: [
        { name: "Letter/A4 Documents", size: "300 x 300 px", dpi: "300 DPI", use: "Proposals, contracts, letterheads" },
        { name: "Business Cards", size: "500 x 500 px", dpi: "300 DPI", use: "Print-ready logo" },
        { name: "Brochures/Flyers", size: "800 x 800 px", dpi: "300 DPI", use: "Marketing materials" },
        { name: "Banners/Posters", size: "2000 x 2000 px", dpi: "300 DPI", use: "Large format printing" }
      ]
    },
    {
      category: "Social Media",
      icon: <Share2 className="w-6 h-6" />,
      items: [
        { name: "Facebook Profile", size: "180 x 180 px", aspect: "1:1", use: "Profile picture" },
        { name: "Facebook Cover", size: "820 x 312 px", aspect: "2.63:1", use: "Header banner" },
        { name: "Instagram Profile", size: "320 x 320 px", aspect: "1:1", use: "Profile picture" },
        { name: "Instagram Post", size: "1080 x 1080 px", aspect: "1:1", use: "Feed posts" },
        { name: "Twitter/X Profile", size: "400 x 400 px", aspect: "1:1", use: "Profile picture" },
        { name: "Twitter/X Header", size: "1500 x 500 px", aspect: "3:1", use: "Banner image" },
        { name: "LinkedIn Profile", size: "400 x 400 px", aspect: "1:1", use: "Company logo" },
        { name: "LinkedIn Cover", size: "1128 x 191 px", aspect: "5.9:1", use: "Company page banner" }
      ]
    },
    {
      category: "Website & Digital",
      icon: <Mail className="w-6 h-6" />,
      items: [
        { name: "Website Header", size: "200 x 200 px", use: "Navigation logo" },
        { name: "Website Favicon", size: "32 x 32 px", use: "Browser tab icon" },
        { name: "Email Signature", size: "150 x 150 px", use: "Professional emails" },
        { name: "WhatsApp Business", size: "500 x 500 px", use: "Profile picture" },
        { name: "Google My Business", size: "720 x 720 px", use: "Business profile" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center">
              <div className="text-white text-4xl font-bold">~</div>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Seismic Labs</h1>
          <h2 className="text-2xl text-blue-300 mb-4">Logo Size Guide</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Professional specifications for your Seismic Labs logo across all platforms and materials
          </p>
        </div>

        {/* Size Categories */}
        <div className="space-y-8">
          {sizes.map((category, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-blue-400">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.category}</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-white">{item.name}</h4>
                      <Download className="w-4 h-4 text-blue-400" />
                    </div>
                    <p className="text-blue-300 font-mono text-sm mb-1">{item.size}</p>
                    {item.dpi && <p className="text-gray-400 text-sm mb-1">{item.dpi}</p>}
                    {item.aspect && <p className="text-gray-400 text-sm mb-1">Aspect: {item.aspect}</p>}
                    <p className="text-gray-300 text-sm">{item.use}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Reference */}
        <div className="mt-12 bg-blue-500/20 backdrop-blur-lg rounded-2xl p-8 border border-blue-400/30">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Quick Reference Guide</h3>
          
          <div className="grid md:grid-cols-3 gap-6 text-white">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-300 mb-2">180-500px</div>
              <div className="text-sm text-gray-300">Social Media Profiles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-300 mb-2">300-800px</div>
              <div className="text-sm text-gray-300">Print Documents</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-300 mb-2">150-200px</div>
              <div className="text-sm text-gray-300">Website & Email</div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/20">
            <h4 className="font-semibold text-white mb-3">Pro Tips:</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Always export in PNG format with transparent background</li>
              <li>• Use 300 DPI for all print materials</li>
              <li>• Keep logos at least 10% smaller than the container for breathing room</li>
              <li>• For social media, test how the logo looks in circular crops</li>
              <li>• Maintain the original aspect ratio - never stretch or squash</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>Seismic Labs – Building Digital Infrastructure for Ghana's Future</p>
        </div>
      </div>
    </div>
  );
};

export default LogoSizeGuide;