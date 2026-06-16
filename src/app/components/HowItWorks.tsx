import { Sparkles, Search, Zap } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Input Preferences",
      description: "Tell us your budget, location, and requirements",
    },
    {
      icon: Sparkles,
      title: "AI Matching",
      description: "Our AI analyzes thousands of PGs to find perfect matches",
    },
    {
      icon: Zap,
      title: "Smart Results",
      description: "Get personalized recommendations with AI scores",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#2563EB]/10 to-[#7C3AED]/10 rounded-full text-[#2563EB] mb-4">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm">AI Technology</span>
        </div>
        <h2 className="text-3xl text-[#111827] mb-3">How SmartPG AI Works</h2>
        <p className="text-[#6B7280]">Our intelligent system makes finding your perfect PG effortless</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#7C3AED] rounded-xl mb-4 shadow-lg">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="absolute top-8 -left-4 w-8 h-8 bg-gradient-to-br from-[#2563EB] to-[#7C3AED] rounded-full flex items-center justify-center text-white text-sm shadow-lg">
                  {index + 1}
                </div>
                <h3 className="text-lg text-[#111827] mb-2">{step.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#2563EB] to-[#7C3AED]" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
