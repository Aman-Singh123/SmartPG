import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Testimonials } from "../components/Testimonials";
import { Sparkles, Users, Star, Shield, TrendingUp, Zap, Brain, Database, Target } from "lucide-react";

export function AboutPage() {
  const stats = [
    { icon: Users, label: "Active Users", value: "1,000+" },
    { icon: Star, label: "Average Rating", value: "4.8/5" },
    { icon: Shield, label: "Verified PGs", value: "500+" },
    { icon: TrendingUp, label: "Success Rate", value: "95%" },
  ];

  const aiWorkflow = [
    {
      icon: Database,
      title: "Data Collection",
      description: "Gather user preferences, PG details, reviews, and market trends",
    },
    {
      icon: Brain,
      title: "ML Processing",
      description: "Advanced algorithms analyze patterns and user behavior",
    },
    {
      icon: Target,
      title: "Smart Recommendation",
      description: "Personalized results with AI scores and predictions",
    },
  ];

  const aiFeatures = [
    {
      title: "Recommendation System",
      description: "Our machine learning model analyzes your preferences including budget, location, amenities, and gender preferences to match you with the most suitable PGs. The system learns from thousands of successful placements.",
    },
    {
      title: "Rent Prediction",
      description: "AI-powered price prediction compares market rates with actual PG prices. We analyze location, amenities, room type, and seasonal trends to predict fair rent and help you make informed decisions.",
    },
    {
      title: "Smart Filtering",
      description: "Intelligent filters understand your priorities. The AI weighs factors like commute time, safety ratings, and amenity importance to rank results that truly matter to you.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <Navbar />

      <section className="relative bg-gradient-to-br from-[#2563EB] via-[#4F46E5] to-[#6366F1] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0yMCAzNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHpNNCAzNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm mb-6 border border-white/20">
            <Sparkles className="w-4 h-4" />
            <span>About SmartPG</span>
          </div>
          <h1 className="text-5xl mb-4">Revolutionizing PG Search with AI</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We're making finding the perfect PG easier, faster, and smarter with cutting-edge artificial intelligence technology.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all p-6 text-center border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#7C3AED] rounded-xl mb-3 shadow-md">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl text-[#111827] mb-1">{stat.value}</div>
                <div className="text-sm text-[#6B7280]">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#2563EB]/10 to-[#7C3AED]/10 rounded-full text-[#2563EB] mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">AI Technology</span>
          </div>
          <h2 className="text-3xl text-[#111827] mb-3">How Our AI Works</h2>
          <p className="text-[#6B7280]">Understanding the technology behind SmartPG recommendations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {aiWorkflow.map((step, index) => {
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
                {index < aiWorkflow.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#2563EB] to-[#7C3AED]" />
                )}
              </div>
            );
          })}
        </div>

        <div className="space-y-6">
          {aiFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100"
            >
              <h3 className="text-xl text-[#111827] mb-2">{feature.title}</h3>
              <p className="text-[#6B7280] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />

      <section className="bg-gradient-to-br from-[#2563EB] via-[#4F46E5] to-[#6366F1] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl text-white mb-4">Trusted by Thousands</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join our growing community of satisfied users who found their perfect PG with SmartPG's AI-powered platform.
          </p>
          <div className="flex items-center justify-center gap-2 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-yellow-400" />
            ))}
          </div>
          <p className="text-white text-2xl mt-3">4.8 out of 5 stars</p>
          <p className="text-blue-100 mt-2">Based on 10,000+ reviews</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}