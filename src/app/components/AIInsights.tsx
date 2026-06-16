import { TrendingUp, MapPin, Star, Sparkles } from "lucide-react";

export function AIInsights() {
  const insights = [
    {
      icon: TrendingUp,
      title: "Best PG in Your Budget",
      value: "₹5,000 - ₹8,000",
      description: "Most popular price range",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: MapPin,
      title: "Popular PG Near You",
      value: "Koramangala, HSR",
      description: "Top locations this month",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Star,
      title: "High-Rated PGs",
      value: "4.8+ Rating",
      description: "Premium quality options",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#2563EB]/10 to-[#7C3AED]/10 rounded-full text-[#2563EB] mb-4">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm">Real-time Insights</span>
        </div>
        <h2 className="text-3xl text-[#111827] mb-3">AI-Powered Insights</h2>
        <p className="text-[#6B7280]">Data-driven recommendations based on market trends</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${insight.color} rounded-xl mb-4 shadow-md`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg text-[#111827] mb-1">{insight.title}</h3>
              <div className="text-2xl text-[#2563EB] mb-2">{insight.value}</div>
              <p className="text-sm text-[#6B7280]">{insight.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
