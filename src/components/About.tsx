import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Target, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center space-y-16 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              About <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Paisa Plus</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to empower Gen Z with smart financial tools and guidance. 
              From budgeting basics to investment insights, we make money management simple, engaging, and effective.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Goal-Oriented</h3>
              <p className="text-gray-600 leading-relaxed">
                Every feature is designed with your financial goals in mind. Whether it's saving for a trip or building an emergency fund, we've got you covered.
              </p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Gen Z Focused</h3>
              <p className="text-gray-600 leading-relaxed">
                Built by young professionals for young professionals. We understand the unique financial challenges and opportunities of our generation.
              </p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Simple & Fast</h3>
              <p className="text-gray-600 leading-relaxed">
                No complicated jargon or confusing interfaces. Our tools are intuitive, fast, and designed to fit seamlessly into your digital lifestyle.
              </p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto opacity-90">
              To democratize financial literacy and wealth building for the next generation. 
              We believe everyone deserves access to smart financial tools and the knowledge to use them effectively. 
              Your financial freedom is our success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;