import { useState } from "react";
import { Search, MapPin, DollarSign, Users, Sparkles } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { PGCard } from "../components/PGCard";
import { ChatAssistant } from "../components/ChatAssistant";
import { HowItWorks } from "../components/HowItWorks";
import { AIInsights } from "../components/AIInsights";
import { WhyChoose } from "../components/WhyChoose";
import { Footer } from "../components/Footer";
import { mockPGs } from "../data/mockData";

export function HomePage() {
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [gender, setGender] = useState("Any");

  const aiRecommendedPGs = mockPGs
    .filter((pg) => pg.aiScore >= 90)
    .slice(0, 3);

  const popularPGs = mockPGs
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <Navbar />

      <section className="relative bg-gradient-to-br from-[#2563EB] via-[#4F46E5] to-[#6366F1] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0yMCAzNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHpNNCAzNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm mb-6 border border-white/20">
            <Sparkles className="w-4 h-4" />
            <span>Powered by Advanced AI Technology</span>
          </div>
          
          <h1 className="text-5xl mb-4">Find Your Perfect PG with AI</h1>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Smart recommendations powered by AI to help you find the best PG that matches your needs
          </p>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-6 max-w-4xl mx-auto border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-sm">
                <MapPin className="w-5 h-5 text-[#6B7280]" />
                <input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-[#111827] placeholder-[#6B7280]"
                />
              </div>

              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-sm">
                <DollarSign className="w-5 h-5 text-[#6B7280]" />
                <input
                  type="text"
                  placeholder="Budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-[#111827] placeholder-[#6B7280]"
                />
              </div>

              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-sm">
                <Users className="w-5 h-5 text-[#6B7280]" />
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-[#111827]"
                >
                  <option value="Any">Any</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <button className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white rounded-xl px-6 py-3 flex items-center justify-center gap-2 hover:shadow-lg hover:scale-105 transition-all">
                <Search className="w-5 h-5" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-gradient-to-br from-[#2563EB] to-[#7C3AED] rounded-xl shadow-md">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl text-[#111827]">AI Recommended PGs</h2>
            <p className="text-[#6B7280] text-sm">Handpicked by our smart algorithm just for you</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiRecommendedPGs.map((pg) => (
            <PGCard key={pg.id} pg={pg} />
          ))}
        </div>
      </section>

      <HowItWorks />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl text-[#111827] mb-2">Popular PGs</h2>
        <p className="text-[#6B7280] mb-8">Most loved by our community</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularPGs.map((pg) => (
            <PGCard key={pg.id} pg={pg} />
          ))}
        </div>
      </section>

      <AIInsights />

      <WhyChoose />

      <ChatAssistant />
      
      <Footer />
    </div>
  );
}