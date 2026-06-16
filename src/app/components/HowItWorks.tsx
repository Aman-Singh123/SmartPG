import { Search, Sparkles, Zap } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Input Preferences",
      description:
        "Tell us your budget, preferred location, amenities, and room requirements.",
    },
    {
      icon: Sparkles,
      title: "AI Matching",
      description:
        "Our AI analyzes thousands of verified PG listings and finds the best matches for you.",
    },
    {
      icon: Zap,
      title: "Smart Results",
      description:
        "Receive personalized recommendations ranked by AI with detailed match scores.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-5">

        {/* Heading */}

        <div className="text-center mb-20">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#2563EB]/10 to-[#7C3AED]/10 text-[#2563EB] mb-5">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">
              AI Powered Process
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            How SmartPG Works
          </h2>

          <p className="mt-5 text-lg text-gray-500 max-w-2xl mx-auto">
            Find your ideal PG effortlessly with our intelligent recommendation
            system.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative">

          {/* Vertical line */}

          <div className="absolute left-1/2 top-0 bottom-0 hidden md:block w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#2563EB] via-[#4F46E5] to-[#7C3AED]" />

          <div className="space-y-20">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className={`relative  mb-0 flex flex-col md:flex-row items-center ${index % 2 === 0
                    ? ""
                    : "md:flex-row-reverse"
                    }`}
                >
                  {/* Card */}

                  <div className="w-full md:w-5/12">

                    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">

                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED] shadow-lg mb-6">

                        <Icon className="w-7 h-7 text-white" />

                      </div>

                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                        {step.title}
                      </h3>

                      <p className="text-gray-500 leading-8">
                        {step.description}
                      </p>

                    </div>

                  </div>

                  {/* Center Dot */}

                  <div className="hidden md:flex w-2/12 justify-center">

                    <div className="relative">

                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#2563EB] to-[#7C3AED] border-4 border-white shadow-xl" />

                    </div>

                  </div>

                  {/* Empty Side */}

                  <div className="hidden md:block w-5/12" />

                  {/* Mobile connector */}

                  {index !== steps.length - 1 && (
                    <div className="md:hidden h-16 w-[2px] bg-gradient-to-b from-[#2563EB] to-[#7C3AED]" />
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}