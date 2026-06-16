import { useState } from "react";
import { useParams, Link } from "react-router";
import {
  MapPin,
  Star,
  Wifi,
  Wind,
  Coffee,
  Sparkles,
  Phone,
  ArrowLeft,
  Check,
  X,
  ChevronLeft,
  ChevronRight,
  Shield,
  TrendingDown,
  Users,
  Home as HomeIcon,
  Utensils,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { ChatAssistant } from "../components/ChatAssistant";
import { Footer } from "../components/Footer";
import { mockPGs } from "../data/mockData";
import { mockReviews } from "../data/reviews";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const amenityIcons: Record<string, any> = {
  WiFi: Wifi,
  AC: Wind,
  Food: Coffee,
};

export function PGDetailsPage() {
  const { id } = useParams();
  const pg = mockPGs.find((p) => p.id === id);
  const reviews = mockReviews[id || ""] || [];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Generate multiple images for gallery
  const images = [
    pg?.image,
    "bedroom interior cozy",
    "apartment living room",
    "modern kitchen space",
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!pg) {
    return (
      <div className="min-h-screen bg-[#F9FAFB]">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl text-[#111827] mb-4">PG not found</h1>
          <Link to="/browse" className="text-[#2563EB] hover:underline">
            Back to Browse
          </Link>
        </div>
      </div>
    );
  }

  const marketAvgRent = Math.round(pg.rent * 1.15);
  const savings = marketAvgRent - pg.rent;

  const ratingBreakdown = [
    { label: "Cleanliness", score: 4.8, icon: Sparkles },
    { label: "Food Quality", score: 4.5, icon: Utensils },
    { label: "Safety", score: 4.9, icon: Shield },
    { label: "Location", score: 4.6, icon: MapPin },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/browse"
          className="flex items-center gap-2 text-[#6B7280] hover:text-[#2563EB] mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Browse</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm overflow-hidden border border-gray-100">
              <div className="relative h-96 group">
                <ImageWithFallback
                  src={`https://source.unsplash.com/1200x800/?${encodeURIComponent(images[currentImageIndex] || "")}`}
                  alt={pg.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  {pg.aiScore >= 90 && (
                    <div className="bg-gradient-to-r from-[#10b981] to-[#059669] text-white px-4 py-2 rounded-full text-sm flex items-center gap-2 shadow-lg">
                      <Sparkles className="w-4 h-4" />
                      <span>AI Recommended</span>
                    </div>
                  )}
                  <div className="bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                    <Sparkles className="w-5 h-5" />
                    <span>AI Score: {pg.aiScore}</span>
                  </div>
                </div>

                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                >
                  <ChevronLeft className="w-6 h-6 text-[#111827]" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                >
                  <ChevronRight className="w-6 h-6 text-[#111827]" />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? "bg-white w-8"
                          : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2 p-2">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative h-20 rounded-lg overflow-hidden ${
                      index === currentImageIndex ? "ring-2 ring-[#2563EB]" : ""
                    }`}
                  >
                    <ImageWithFallback
                      src={`https://source.unsplash.com/400x300/?${encodeURIComponent(img || "")}`}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Basic Info */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl text-[#111827] mb-2">{pg.name}</h1>
                  <div className="flex items-center gap-2 text-[#6B7280]">
                    <MapPin className="w-5 h-5" />
                    <span>{pg.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[#111827]">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-xl">{pg.rating}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-gradient-to-r from-[#2563EB]/10 to-[#7C3AED]/10 text-[#2563EB] rounded-full text-sm">
                  {pg.gender}
                </span>
                <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  Verified PG
                </span>
              </div>
            </div>

            {/* AI Insights Box */}
            <div className="bg-gradient-to-br from-[#2563EB] via-[#4F46E5] to-[#6366F1] rounded-2xl shadow-lg p-6 text-white">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6" />
                <h3 className="text-xl">AI Insights</h3>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <Users className="w-6 h-6 mb-2" />
                  <div className="text-sm text-blue-100">Best For</div>
                  <div className="text-lg">Students</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <TrendingDown className="w-6 h-6 mb-2" />
                  <div className="text-sm text-blue-100">Price Level</div>
                  <div className="text-lg">Budget Friendly</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <Sparkles className="w-6 h-6 mb-2" />
                  <div className="text-sm text-blue-100">Match Score</div>
                  <div className="text-lg">{pg.aiScore}%</div>
                </div>
              </div>
            </div>

            {/* About */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-xl text-[#111827] mb-3">About this PG</h2>
              <p className="text-[#6B7280] leading-relaxed">{pg.description}</p>
            </div>

            {/* Amenities */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-xl text-[#111827] mb-4">Amenities</h2>
              <div className="flex flex-wrap gap-3">
                {pg.amenities.map((amenity) => {
                  const Icon = amenityIcons[amenity] || Wifi;
                  return (
                    <div
                      key={amenity}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#2563EB]/10 to-[#7C3AED]/10 rounded-full text-[#2563EB]"
                    >
                      <Icon className="w-4 h-4" />
                      <span>{amenity}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Rating Breakdown */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-xl text-[#111827] mb-4">Rating Breakdown</h2>
              <div className="space-y-4">
                {ratingBreakdown.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-4">
                      <div className="flex items-center gap-2 w-32">
                        <Icon className="w-4 h-4 text-[#6B7280]" />
                        <span className="text-[#6B7280] text-sm">{item.label}</span>
                      </div>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED]"
                          style={{ width: `${(item.score / 5) * 100}%` }}
                        />
                      </div>
                      <span className="text-[#111827] w-8">{item.score}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Room Types */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-xl text-[#111827] mb-4">Room Types</h2>
              <div className="space-y-3">
                {pg.roomTypes.map((room) => (
                  <div
                    key={room.type}
                    className="flex items-center justify-between p-4 bg-[#F9FAFB] rounded-xl hover:shadow-sm transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <HomeIcon className="w-5 h-5 text-[#6B7280]" />
                      <span className="text-[#111827]">{room.type} Sharing</span>
                      {room.available ? (
                        <span className="flex items-center gap-1 text-green-600 text-sm">
                          <Check className="w-4 h-4" />
                          Available
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-red-600 text-sm">
                          <X className="w-4 h-4" />
                          Not Available
                        </span>
                      )}
                    </div>
                    <span className="text-[#2563EB]">
                      ₹{room.price.toLocaleString()}/month
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            {reviews.length > 0 && (
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm p-6 border border-gray-100">
                <h2 className="text-xl text-[#111827] mb-4">Reviews</h2>
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-100 pb-4 last:border-0">
                      <div className="flex items-start gap-3">
                        <ImageWithFallback
                          src={`https://source.unsplash.com/100x100/?${encodeURIComponent(review.userImage)}`}
                          alt={review.userName}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[#111827]">{review.userName}</span>
                            <span className="text-sm text-[#6B7280]">{review.date}</span>
                          </div>
                          <div className="flex items-center gap-1 mb-2">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <p className="text-[#6B7280] text-sm leading-relaxed">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 sticky top-20 border border-gray-100">
              <div className="mb-6">
                <div className="text-[#6B7280] text-sm mb-1">Starting from</div>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl text-[#111827]">
                    ₹{pg.rent.toLocaleString()}
                  </span>
                  <span className="text-[#6B7280]">/month</span>
                </div>

                {/* Price Comparison */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[#6B7280]">Market Average</span>
                    <span className="text-sm text-[#6B7280] line-through">
                      ₹{marketAvgRent.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-700">Your Savings</span>
                    <span className="text-lg text-green-700 flex items-center gap-1">
                      <TrendingDown className="w-4 h-4" />
                      ₹{savings.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm px-3 py-2 bg-gradient-to-r from-[#10b981]/10 to-[#059669]/10 text-green-700 rounded-lg">
                  <Sparkles className="w-4 h-4" />
                  AI Predicted Fair Rent
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:scale-105 transition-all mb-3">
                <Phone className="w-5 h-5" />
                <span>Contact Owner</span>
              </button>

              <div className="text-center text-sm text-[#6B7280] py-3 border-t border-gray-100">
                <div className="mb-1">Contact Number</div>
                <div className="text-[#111827]">{pg.contactNumber}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ChatAssistant />
      
      <Footer />
    </div>
  );
}
