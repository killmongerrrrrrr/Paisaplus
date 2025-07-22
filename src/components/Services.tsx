import React from 'react';
import { useInView } from 'react-intersection-observer';
import { PiggyBank, BarChart3, TrendingUp, Crown } from 'lucide-react';

const Services: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const services = [
    {
      id: 1,
      icon: PiggyBank,
      title: "Budget Builder",
      subtitle: "Free",
      description: "Simple budgeting tool for students & early earners",
      features: ["Budget categories & templates", "Visual spending charts", "Monthly goal tracking", "Basic expense alerts"],
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50",
      popular: false
    },
    {
      id: 2,
      icon: BarChart3,
      title: "Smart Money Tracker",
      subtitle: "Pro",
      description: "UPI & bank account integration with detailed insights",
      features: ["UPI & bank integration", "Categorized spend insights", "Monthly PDF reports", "Smart alerts & notifications"],
      color: "from-blue-500 to-cyan-600",
      bgColor: "from-blue-50 to-cyan-50",
      popular: true
    },
    {
      id: 3,
      icon: TrendingUp,
      title: "InvestNow Starter Pack",
      subtitle: "Investment",
      description: "Curated mutual funds with ₹500 starter pack",
      features: ["Curated mutual fund selection", "₹500 investment starter", "Beginner-friendly guides", "Risk assessment tools"],
      color: "from-purple-500 to-pink-600",
      bgColor: "from-purple-50 to-pink-50",
      popular: false
    },
    {
      id: 4,
      icon: Crown,
      title: "PaisaPlus Premium Pack",
      subtitle: "All-in-One",
      description: "Complete suite with 1:1 coaching & community access",
      features: ["All features included", "1:1 financial coaching", "Exclusive community access", "Priority support"],
      color: "from-yellow-500 to-orange-600",
      bgColor: "from-yellow-50 to-orange-50",
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 gradient-bg-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`space-y-16 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect plan for your financial journey. From basic budgeting to advanced investment strategies, 
              we have something for every stage of your money management evolution.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  inView ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Icon & Title */}
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                        <span className={`px-3 py-1 bg-gradient-to-r ${service.color} text-white rounded-full text-sm font-medium`}>
                          {service.subtitle}
                        </span>
                      </div>
                      <p className="text-gray-600 mt-2 leading-relaxed">{service.description}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`}></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full py-3 bg-gradient-to-r ${service.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-200 transform hover:scale-105`}>
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Not sure which plan is right for you?</h3>
            <p className="text-gray-600 mb-6">Get personalized recommendations based on your financial goals and current situation.</p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;