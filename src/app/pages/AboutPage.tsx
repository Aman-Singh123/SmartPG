import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Testimonials } from "../components/Testimonials";
import { Sparkles, Users, Star, Shield, TrendingUp, Zap, Brain, Database, Target } from "lucide-react";
import { HowItWorks } from "../components/HowItWorks";

export function AboutPage() {
  const stats = [
    { icon: Users, label: "Active Users", value: "1,000+" },
    { icon: Star, label: "Average Rating", value: "4.8/5" },
    { icon: Shield, label: "Verified PGs", value: "500+" },
    { icon: TrendingUp, label: "Success Rate", value: "95%" },
  ];

  const aiWorkflow = [
    {
      icon: Brain,
      title: "Analyze Preferences",
      description:
        "Our AI understands your budget, location and lifestyle preferences.",
    },
    {
      icon: Database,
      title: "Process Thousands of PGs",
      description:
        "We compare thousands of verified listings using machine learning.",
    },
    {
      icon: Target,
      title: "Recommend the Best Match",
      description:
        "The AI ranks PGs based on compatibility and match score.",
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
          <h1 className="text-3xl sm:text-5xl mb-4">Revolutionizing PG Search with AI</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We're making finding the perfect PG easier, faster, and smarter with cutting-edge artificial intelligence technology.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-5 sm:p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#2563EB] to-[#7C3AED] rounded-xl mb-3 shadow-md">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#111827]">
                  {stat.value}
                </h3>

                <p className="mt-1 text-xs sm:text-sm text-[#6B7280]">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <HowItWorks
        badge="AI Technology"
        heading="How Our AI Works"
        subheading="Understanding the technology behind SmartPG recommendations."
        steps={aiWorkflow}
      />

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