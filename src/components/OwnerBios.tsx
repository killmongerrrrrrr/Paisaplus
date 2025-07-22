import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { User, Linkedin, Twitter, Mail } from 'lucide-react';

const OwnerBios: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [selectedOwner, setSelectedOwner] = useState<number | null>(null);

  const owners = [
    {
      id: 1,
      name: "Arsalan Ahmed Khan",
      title: "Co-Founder & CEO",
      description: "Financial strategist with a passion for making money management accessible to Gen Z.",
      expertise: ["Financial Planning", "Product Strategy", "User Experience"],
      image: null, // Placeholder for future photo upload
      social: {
        linkedin: "#",
        twitter: "#",
        email: "arsalan@paisaplus.com"
      }
    },
    {
      id: 2,
      name: "Mr. Syed Sahil",
      title: "Co-Founder & CTO",
      description: "Tech innovator focused on building seamless financial tools for the digital generation.",
      expertise: ["Software Development", "Financial Technology", "Data Analytics"],
      image: null,
      social: {
        linkedin: "#",
        twitter: "#",
        email: "syed.sahil_bm24@praxis.ac.in"
      }
    },
    {
      id: 3,
      name: "Farhan Qamar",
      title: "Co-Founder & CMO",
      description: "Marketing expert dedicated to spreading financial literacy among young professionals.",
      expertise: ["Digital Marketing", "Community Building", "Content Strategy"],
      image: null,
      social: {
        linkedin: "#",
        twitter: "#",
        email: "farhan@paisaplus.com"
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`space-y-16 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Meet Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Founders</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Three passionate individuals united by a mission to revolutionize financial management for Gen Z. 
              Each bringing unique expertise to make your money work smarter.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {owners.map((owner, index) => (
              <div
                key={owner.id}
                className={`group bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer ${
                  inView ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
                onClick={() => setSelectedOwner(selectedOwner === owner.id ? null : owner.id)}
              >
                <div className="space-y-6">
                  {/* Profile Image Placeholder */}
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <User className="w-12 h-12 text-white" />
                    </div>
                    <div className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full inline-block">
                      Photo placeholder - upload coming soon
                    </div>
                  </div>

                  {/* Basic Info */}
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-bold text-gray-900">{owner.name}</h3>
                    <p className="text-blue-600 font-semibold">{owner.title}</p>
                    <p className="text-gray-600 leading-relaxed text-sm">{owner.description}</p>
                  </div>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {owner.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4 pt-4 border-t border-gray-200">
                    <a
                      href={owner.social.linkedin}
                      className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={owner.social.twitter}
                      className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${owner.social.email}`}
                      className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Expanded Content */}
                  <div className={`transition-all duration-300 overflow-hidden ${
                    selectedOwner === owner.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pt-4 border-t border-gray-200 space-y-3">
                      <h4 className="font-semibold text-gray-900">Vision</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Building a future where every young professional has the tools and knowledge 
                        to achieve financial independence and security.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Team Message */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-6">Our Commitment to You</h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto opacity-90">
              We're not just building a product—we're building a movement. Every feature, every guide, 
              and every piece of advice comes from our genuine desire to see Gen Z thrive financially. 
              Your success is our success, and we're here for the long haul.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnerBios;