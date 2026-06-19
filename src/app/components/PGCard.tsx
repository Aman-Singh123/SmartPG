import { Link } from "react-router";
import { Star, MapPin, Wifi, Wind, Coffee, Sparkles } from "lucide-react";
import { PG } from "../data/mockData";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PGCardProps {
  pg: PG;
}

const amenityIcons: Record<string, any> = {
  WiFi: Wifi,
  AC: Wind,
  Food: Coffee,
};

export function PGCard({ pg }: PGCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={`http://localhost:1337${pg.FrontImg?.url}`}
          alt={pg.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] text-white px-3 py-1 rounded-full text-sm flex items-center gap-1 shadow-lg">
          <Sparkles className="w-3 h-3" />
          <span>AI {pg.aiScore}</span>
        </div>
        {pg.aiScore >= 90 && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-[#10b981] to-[#059669] text-white px-3 py-1 rounded-full text-xs flex items-center gap-1 shadow-lg animate-pulse">
            <Sparkles className="w-3 h-3" />
            <span>AI Recommended</span>
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-lg text-[#111827] mb-1">{pg.name}</h3>
        <div className="flex items-center gap-1 text-[#6B7280] text-sm mb-3">
          <MapPin className="w-4 h-4" />
          <span>{pg.location}</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          {pg.amenities.slice(0, 3).map((amenity) => {
            const Icon = amenityIcons[amenity] || Wifi;
            return (
              <div key={amenity} className="flex items-center gap-1 text-[#6B7280] text-sm">
                <Icon className="w-4 h-4" />
                <span>{amenity}</span>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl text-[#111827]">₹{pg.rent.toLocaleString()}</span>
            <span className="text-[#6B7280] text-sm">/month</span>
          </div>

          <div className="flex items-center gap-1 text-[#6B7280]">
            <div className="flex">
              {Array.from({ length: pg.rating }, (_, index) => (
                <Star
                  key={index}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="ml-1"></span>
          </div>
        </div>

        <Link
          to={`/pg/${pg.id}`}
          className="mt-2 w-full block text-center bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] text-white py-2.5 rounded-lg hover:opacity-90 transition-opacity"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}