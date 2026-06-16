import { Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  feedback: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Software Engineer",
    rating: 5,
    feedback: "SmartPG made my PG search so easy! The AI recommendations were spot on. Found my perfect PG in just 2 days.",
    image: "professional woman headshot",
  },
  {
    id: 2,
    name: "Rahul Kumar",
    role: "Student",
    rating: 5,
    feedback: "Amazing platform! The budget filters and AI chat assistant helped me find an affordable PG near my college.",
    image: "young man portrait",
  },
  {
    id: 3,
    name: "Anjali Patel",
    role: "Marketing Manager",
    rating: 4,
    feedback: "Very intuitive and user-friendly. The AI scoring system is really helpful in making the right decision.",
    image: "business woman portrait",
  },
];

export function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl text-[#111827] mb-3">What Our Users Say</h2>
        <p className="text-[#6B7280]">Trusted by thousands of happy residents</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all p-6 border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-4">
              <ImageWithFallback
                src={`https://source.unsplash.com/100x100/?${encodeURIComponent(testimonial.image)}`}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="text-[#111827]">{testimonial.name}</div>
                <div className="text-sm text-[#6B7280]">{testimonial.role}</div>
              </div>
            </div>
            <div className="flex items-center gap-1 mb-3">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-[#6B7280] leading-relaxed">"{testimonial.feedback}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
