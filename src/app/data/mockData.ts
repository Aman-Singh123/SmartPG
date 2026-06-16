export interface PG {
  id: string;
  name: string;
  location: string;
  rent: number;
  rating: number;
  image: string;
  amenities: string[];
  gender: "Male" | "Female" | "Any";
  roomTypes: {
    type: string;
    price: number;
    available: boolean;
  }[];
  aiScore: number;
  description: string;
  contactNumber: string;
}

export const mockPGs: PG[] = [
  {
    id: "1",
    name: "Green Valley PG",
    location: "Koramangala, Bangalore",
    rent: 8000,
    rating: 4.5,
    image: "modern apartment bedroom",
    amenities: ["WiFi", "AC", "Food", "Laundry", "Parking"],
    gender: "Any",
    roomTypes: [
      { type: "Single", price: 10000, available: true },
      { type: "Double", price: 8000, available: true },
      { type: "Triple", price: 6500, available: false },
    ],
    aiScore: 92,
    description: "Premium PG accommodation with modern amenities and excellent connectivity. Close to tech parks and shopping areas.",
    contactNumber: "+91 98765 43210",
  },
  {
    id: "2",
    name: "Sunrise Ladies Hostel",
    location: "Indiranagar, Bangalore",
    rent: 7000,
    rating: 4.8,
    image: "cozy bedroom interior",
    amenities: ["WiFi", "Food", "Security", "Laundry"],
    gender: "Female",
    roomTypes: [
      { type: "Single", price: 9000, available: true },
      { type: "Double", price: 7000, available: true },
      { type: "Triple", price: 5500, available: true },
    ],
    aiScore: 95,
    description: "Safe and comfortable hostel exclusively for working women and students. 24/7 security and home-cooked meals.",
    contactNumber: "+91 98765 43211",
  },
  {
    id: "3",
    name: "Royal Mens PG",
    location: "HSR Layout, Bangalore",
    rent: 6500,
    rating: 4.2,
    image: "minimalist bedroom design",
    amenities: ["WiFi", "AC", "Parking", "Power Backup"],
    gender: "Male",
    roomTypes: [
      { type: "Single", price: 8500, available: false },
      { type: "Double", price: 6500, available: true },
      { type: "Triple", price: 5000, available: true },
    ],
    aiScore: 88,
    description: "Comfortable PG for men with all basic amenities. Located in a prime area with easy access to public transport.",
    contactNumber: "+91 98765 43212",
  },
  {
    id: "4",
    name: "Blue Sky Residency",
    location: "Whitefield, Bangalore",
    rent: 9000,
    rating: 4.6,
    image: "luxury apartment bedroom",
    amenities: ["WiFi", "AC", "Food", "Gym", "Laundry", "Parking"],
    gender: "Any",
    roomTypes: [
      { type: "Single", price: 11000, available: true },
      { type: "Double", price: 9000, available: true },
      { type: "Triple", price: 7000, available: true },
    ],
    aiScore: 94,
    description: "Luxury PG with premium facilities including gym and recreational areas. Perfect for professionals.",
    contactNumber: "+91 98765 43213",
  },
  {
    id: "5",
    name: "City Center PG",
    location: "MG Road, Bangalore",
    rent: 8500,
    rating: 4.3,
    image: "contemporary bedroom space",
    amenities: ["WiFi", "Food", "Laundry", "Security"],
    gender: "Male",
    roomTypes: [
      { type: "Single", price: 10500, available: true },
      { type: "Double", price: 8500, available: true },
      { type: "Triple", price: 6500, available: false },
    ],
    aiScore: 89,
    description: "Strategically located PG in the heart of the city. Easy access to metro and major IT companies.",
    contactNumber: "+91 98765 43214",
  },
  {
    id: "6",
    name: "Paradise Girls Hostel",
    location: "Jayanagar, Bangalore",
    rent: 6000,
    rating: 4.7,
    image: "bright modern bedroom",
    amenities: ["WiFi", "Food", "Security", "Laundry", "TV Room"],
    gender: "Female",
    roomTypes: [
      { type: "Single", price: 8000, available: true },
      { type: "Double", price: 6000, available: true },
      { type: "Triple", price: 4500, available: true },
    ],
    aiScore: 91,
    description: "Budget-friendly hostel for girls with homely atmosphere. Home-cooked food and strict security measures.",
    contactNumber: "+91 98765 43215",
  },
  {
    id: "7",
    name: "Tech Hub PG",
    location: "Electronic City, Bangalore",
    rent: 7500,
    rating: 4.4,
    image: "modern shared bedroom",
    amenities: ["WiFi", "AC", "Food", "Power Backup", "Parking"],
    gender: "Any",
    roomTypes: [
      { type: "Single", price: 9500, available: true },
      { type: "Double", price: 7500, available: true },
      { type: "Triple", price: 6000, available: true },
    ],
    aiScore: 90,
    description: "Perfect for IT professionals working in Electronic City. High-speed WiFi and 24/7 power backup.",
    contactNumber: "+91 98765 43216",
  },
  {
    id: "8",
    name: "Comfort Stay",
    location: "BTM Layout, Bangalore",
    rent: 5500,
    rating: 4.0,
    image: "simple bedroom interior",
    amenities: ["WiFi", "Food", "Laundry"],
    gender: "Male",
    roomTypes: [
      { type: "Double", price: 5500, available: true },
      { type: "Triple", price: 4500, available: true },
    ],
    aiScore: 85,
    description: "Affordable PG with basic amenities. Ideal for students and budget-conscious professionals.",
    contactNumber: "+91 98765 43217",
  },
  {
    id: "9",
    name: "Elite Women's Hostel",
    location: "Malleshwaram, Bangalore",
    rent: 7800,
    rating: 4.9,
    image: "elegant bedroom design",
    amenities: ["WiFi", "AC", "Food", "Security", "Laundry", "House Keeping"],
    gender: "Female",
    roomTypes: [
      { type: "Single", price: 9800, available: true },
      { type: "Double", price: 7800, available: true },
      { type: "Triple", price: 6200, available: false },
    ],
    aiScore: 96,
    description: "Premium hostel for working women with top-notch security and amenities. Well-maintained and hygienic.",
    contactNumber: "+91 98765 43218",
  },
];
