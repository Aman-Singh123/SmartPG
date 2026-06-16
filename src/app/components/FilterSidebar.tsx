import { useState } from "react";
import { Slider } from "@radix-ui/react-slider";
import { X } from "lucide-react";

interface FilterSidebarProps {
  onFilterChange: (filters: any) => void;
}

export function FilterSidebar({ onFilterChange }: FilterSidebarProps) {
  const [budget, setBudget] = useState([15000]);
  const [gender, setGender] = useState<string>("Any");
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const amenities = ["WiFi", "AC", "Food", "Laundry", "Parking", "Security", "Gym"];

  const handleAmenityToggle = (amenity: string) => {
    const updated = selectedAmenities.includes(amenity)
      ? selectedAmenities.filter((a) => a !== amenity)
      : [...selectedAmenities, amenity];
    setSelectedAmenities(updated);
    applyFilters(budget[0], gender, updated);
  };

  const handleBudgetChange = (value: number[]) => {
    setBudget(value);
    applyFilters(value[0], gender, selectedAmenities);
  };

  const handleGenderChange = (value: string) => {
    setGender(value);
    applyFilters(budget[0], value, selectedAmenities);
  };

  const applyFilters = (maxBudget: number, genderFilter: string, amenitiesFilter: string[]) => {
    onFilterChange({
      budget: maxBudget,
      gender: genderFilter,
      amenities: amenitiesFilter,
    });
  };

  const clearFilters = () => {
    setBudget([15000]);
    setGender("Any");
    setSelectedAmenities([]);
    onFilterChange({
      budget: 15000,
      gender: "Any",
      amenities: [],
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 sticky top-20">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl text-[#111827]">Filters</h2>
        <button
          onClick={clearFilters}
          className="text-[#2563EB] text-sm flex items-center gap-1 hover:underline"
        >
          <X className="w-4 h-4" />
          Clear All
        </button>
      </div>

      <div className="mb-6">
        <h3 className="text-[#111827] mb-3">Budget</h3>
        <div className="mb-2">
          <span className="text-[#2563EB]">Up to ₹{budget[0].toLocaleString()}</span>
        </div>
        <Slider
          value={budget}
          onValueChange={handleBudgetChange}
          max={15000}
          min={3000}
          step={500}
          className="relative flex items-center w-full h-5"
        >
          <div className="relative w-full h-1 bg-gray-200 rounded-full">
            <div
              className="absolute h-1 bg-[#2563EB] rounded-full"
              style={{ width: `${(budget[0] / 15000) * 100}%` }}
            />
          </div>
          <div
            className="block w-5 h-5 bg-white border-2 border-[#2563EB] rounded-full shadow-sm cursor-pointer"
            style={{ position: "absolute", left: `${(budget[0] / 15000) * 100}%`, transform: "translateX(-50%)" }}
          />
        </Slider>
      </div>

      <div className="mb-6">
        <h3 className="text-[#111827] mb-3">Gender</h3>
        <div className="flex flex-col gap-2">
          {["Any", "Male", "Female"].map((option) => (
            <label key={option} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                checked={gender === option}
                onChange={() => handleGenderChange(option)}
                className="w-4 h-4 text-[#2563EB] focus:ring-[#2563EB]"
              />
              <span className="text-[#6B7280]">{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-[#111827] mb-3">Amenities</h3>
        <div className="flex flex-col gap-2">
          {amenities.map((amenity) => (
            <label key={amenity} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedAmenities.includes(amenity)}
                onChange={() => handleAmenityToggle(amenity)}
                className="w-4 h-4 text-[#2563EB] rounded focus:ring-[#2563EB]"
              />
              <span className="text-[#6B7280]">{amenity}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
