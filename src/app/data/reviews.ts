export interface Review {
  id: string;
  userName: string;
  rating: number;
  date: string;
  comment: string;
  userImage: string;
}

export const mockReviews: Record<string, Review[]> = {
  "1": [
    {
      id: "r1",
      userName: "Amit Sharma",
      rating: 5,
      date: "2 days ago",
      comment: "Excellent PG with great amenities. The owner is very cooperative and the location is perfect for office commute.",
      userImage: "man profile picture",
    },
    {
      id: "r2",
      userName: "Neha Patel",
      rating: 4,
      date: "1 week ago",
      comment: "Good place to stay. Clean rooms and hygienic food. WiFi speed could be better.",
      userImage: "woman professional photo",
    },
  ],
  "2": [
    {
      id: "r3",
      userName: "Priya Singh",
      rating: 5,
      date: "3 days ago",
      comment: "Best ladies hostel in the area! Very safe and the food is delicious. Highly recommended.",
      userImage: "young woman headshot",
    },
    {
      id: "r4",
      userName: "Kavya Reddy",
      rating: 5,
      date: "2 weeks ago",
      comment: "Amazing experience. The security is top-notch and the community is very friendly.",
      userImage: "professional woman portrait",
    },
  ],
  "3": [
    {
      id: "r5",
      userName: "Rahul Kumar",
      rating: 4,
      date: "5 days ago",
      comment: "Decent PG for the price. Location is good and the room is spacious enough.",
      userImage: "young man portrait",
    },
  ],
};
