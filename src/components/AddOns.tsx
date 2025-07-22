import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FileText, BookOpen, Calculator, Clock } from 'lucide-react';

const AddOns: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const addOns = [
    {
      icon: FileText,
      title: "Personalized Budget Review",
      description: "Get your budget reviewed by our financial experts with personalized recommendations.",
      price: "₹999",
      features: ["Expert budget analysis", "Personalized recommendations", "30-minute consultation", "Action plan document"],
      color: "from-blue-500 to-cyan-600",
      available: true
    },
    {
      icon: BookOpen,
      title: "eBook: Zero to ₹1 Lakh Savings",
      description: "Comprehensive guide to saving your first lakh in just 6 months with proven strategies.",
      price: "₹499",
      features: ["150+ page comprehensive guide", "Step-by-step action plans", "Real case studies", "Bonus templates included"],
      color: "from-green-500 to-emerald-600",
      available: true
    },
    {
      icon: Calculator,
      title: "Tax Help & Planning",
      description: "Complete tax planning and filing assistance for freelancers and early professionals.",
      price: "Coming Soon",
      features: ["Tax calculation tools", "Filing assistance", "Deduction optimization", "Year-round support"],
      color: "from-purple-500 to-pink-600",
      available: false
    }
  ];

  return (
    <section id="add-ons" className="py-20 gradient-bg-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`space-y-16 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Premium <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Add-Ons</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Supercharge your financial journey with our premium tools and resources. 
              Get expert guidance, exclusive content, and personalized support.
            </p>
          </div>

          {/* Add-Ons Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {addOns.map((addon, index) => (
              <div
                key={addon.title}
                className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  !addon.available ? 'opacity-75' : ''
                } ${inView ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="space-y-6">
                  {/* Icon & Title */}
                  <div className="text-center space-y-4">
                    <div className={`w-20 h-20 bg-gradient-to-br ${addon.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <addon.icon className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{addon.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{addon.description}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-center">
                    <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${addon.color} text-white rounded-full font-bold text-lg`}>
                      {addon.available ? (
                        <>
                          {addon.price}
                          {addon.price !== "Coming Soon" && <span className="text-sm font-normal ml-1">only</span>}
                        </>
                      ) : (
                        <>
                          <Clock className="w-4 h-4 mr-2" />
                          {addon.price}
                        </>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {addon.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${addon.color} rounded-full mt-2 flex-shrink-0`}></div>
                        <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button 
                    className={`w-full py-3 font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 ${
                      addon.available 
                        ? `bg-gradient-to-r ${addon.color} text-white hover:shadow-lg` 
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!addon.available}
                  >
                    {addon.available ? 'Get This Add-On' : 'Notify Me'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bundle Offer */}
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-8 text-center text-white">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Bundle & Save</h3>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Get the Budget Review + eBook combo for just ₹1,199 (Save ₹299!)
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="text-2xl font-bold">
                  <span className="line-through opacity-75">₹1,498</span>
                  <span className="ml-4">₹1,199</span>
                </div>
                <button className="px-8 py-3 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105">
                  Get Bundle Deal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddOns;