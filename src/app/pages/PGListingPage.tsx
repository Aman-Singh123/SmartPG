import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { FilterSidebar } from "../components/FilterSidebar";
import { PGCard } from "../components/PGCard";
import { ChatAssistant } from "../components/ChatAssistant";
import { Footer } from "../components/Footer";
import { mockPGs } from "../data/mockData";

export function PGListingPage() {
  const [filteredPGs, setFilteredPGs] = useState(mockPGs);

  const handleFilterChange = (filters: any) => {
    let filtered = [...mockPGs];

    if (filters.budget) {
      filtered = filtered.filter((pg) => pg.rent <= filters.budget);
    }

    if (filters.gender && filters.gender !== "Any") {
      filtered = filtered.filter(
        (pg) => pg.gender === filters.gender || pg.gender === "Any"
      );
    }

    if (filters.amenities && filters.amenities.length > 0) {
      filtered = filtered.filter((pg) =>
        filters.amenities.every((amenity: string) =>
          pg.amenities.includes(amenity)
        )
      );
    }

    setFilteredPGs(filtered);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl text-[#111827] mb-2">Browse PGs</h1>
        <p className="text-[#6B7280] mb-8">Discover your perfect home</p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <FilterSidebar onFilterChange={handleFilterChange} />
          </div>

          <div className="lg:col-span-3">
            <div className="mb-4 text-[#6B7280]">
              Showing {filteredPGs.length} results
            </div>

            {filteredPGs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPGs.map((pg) => (
                  <PGCard key={pg.id} pg={pg} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-[#6B7280] text-lg">
                  No PGs found matching your filters. Try adjusting your search criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <ChatAssistant />
      
      <Footer />
    </div>
  );
}