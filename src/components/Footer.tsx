import React from 'react';
import { DollarSign, Heart, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Budget Builder', href: '#services' },
      { name: 'Money Tracker', href: '#services' },
      { name: 'Investment Guide', href: '#services' },
      { name: 'Premium Pack', href: '#services' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Contact', href: '#contact' },
      { name: 'Privacy Policy', href: '#' }
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'Financial Guide', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Support', href: '#contact' }
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Mail, href: 'mailto:hello@paisaplus.com', name: 'Email' }
  ];

  const owners = [
    'Arsalan Ahmed Khan',
    'Mr. Syed Sahil',
    'Farhan Qamar'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Paisa Plus</h3>
                <p className="text-gray-400 text-sm">Sync your money. Grow your life.</p>
              </div>
            </div>
            
            <p className="text-gray-400 leading-relaxed">
              Empowering Gen Z with smart financial tools and guidance for a better financial future.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-600 transition-all duration-200 transform hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-3 grid md:grid-cols-3 gap-8">
            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-4">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Resources</h4>
              <ul className="space-y-4">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Owners Section */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="text-center space-y-4">
            <h4 className="text-lg font-semibold">Founded by</h4>
            <div className="flex flex-wrap justify-center gap-6">
              {owners.map((owner, index) => (
                <span
                  key={owner}
                  className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {owner}
                  {index < owners.length - 1 && <span className="ml-6 text-gray-600">•</span>}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© {currentYear} Paisa Plus. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for Gen Z financial empowerment</span>
            </div>
          </div>

          {/* Additional Footer Info */}
          <div className="text-center mt-6 pt-6 border-t border-gray-800">
            <p className="text-gray-500 text-sm leading-relaxed">
              Paisa Plus is committed to providing financial education and tools. 
              All investments are subject to market risk. Please read all scheme-related documents carefully.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;