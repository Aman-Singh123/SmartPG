import { Sparkles, Shield, DollarSign } from "lucide-react";

export function WhyChoose() {
  const features = [
    {
      icon: Sparkles,
      title: "AI Matching",
      description: "Advanced algorithms find your perfect PG based on preferences and behavior patterns",
    },
    {
      icon: Shield,
      title: "Verified Listings",
      description: "Every PG is verified by our team with quality checks and authenticity validation",
    },
    {
      icon: DollarSign,
      title: "Smart Pricing",
      description: "AI-predicted rent helps you make informed decisions and get the best value",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#2563EB] via-[#4F46E5] to-[#6366F1] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-white mb-3">Why Choose SmartPG?</h2>
          <p className="text-blue-100">Powered by cutting-edge AI technology for the best experience</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg text-white mb-2">{feature.title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
