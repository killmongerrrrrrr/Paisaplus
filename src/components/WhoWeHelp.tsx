import React from 'react';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Briefcase, Laptop, Video } from 'lucide-react';

const WhoWeHelp: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const targetGroups = [
    {
      icon: GraduationCap,
      title: "Students",
      description: "Master your pocket money, track expenses, and build healthy spending habits from day one.",
      features: ["Budget templates for students", "Expense categorization", "Savings goal tracking", "Financial literacy resources"],
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50"
    },
    {
      icon: Briefcase,
      title: "Early Jobbers",
      description: "Navigate your first salary, plan for the future, and make your money work harder for you.",
      features: ["Salary planning tools", "Tax optimization guides", "Emergency fund builder", "Investment roadmaps"],
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      icon: Laptop,
      title: "Freelancers",
      description: "Manage irregular income, track project earnings, and plan for financial stability.",
      features: ["Irregular income tracking", "Project-based budgeting", "Tax planning for freelancers", "Income smoothing strategies"],
      color: "from-purple-500 to-pink-600",
      bgColor: "from-purple-50 to-pink-50"
    },
    {
      icon: Video,
      title: "Content Creators",
      description: "Turn your passion into profit with smart money management for creators and influencers.",
      features: ["Creator income tracking", "Brand deal management", "Equipment investment planning", "Revenue diversification"],
      color: "from-orange-500 to-red-600",
      bgColor: "from-orange-50 to-red-50"
    }
  ];

  return (
    <section id="who-we-help" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`space-y-16 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Who We <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Help</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Whether you're just starting your financial journey or looking to level up your money game, 
              our tools are designed for Gen Z professionals at every stage.
            </p>
          </div>

          {/* Target Groups Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {targetGroups.map((group, index) => (
              <div
                key={group.title}
                className={`group bg-gradient-to-br ${group.bgColor} rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                  inView ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="space-y-6">
                  {/* Icon & Title */}
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${group.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <group.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{group.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed">{group.description}</p>

                  {/* Features */}
                  <div className="space-y-3">
                    {group.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${group.color} rounded-full`}></div>
                        <span className="text-gray-700 text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className={`w-full py-3 bg-gradient-to-r ${group.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-200 transform hover:scale-105`}>
                    Start Your Journey
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Stats */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
            <div className="text-center space-y-8">
              <h3 className="text-3xl font-bold">Join Thousands of Happy Users</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">500+</div>
                  <div className="text-gray-300">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">200+</div>
                  <div className="text-gray-300">Early Jobbers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">150+</div>
                  <div className="text-gray-300">Freelancers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">100+</div>
                  <div className="text-gray-300">Creators</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;