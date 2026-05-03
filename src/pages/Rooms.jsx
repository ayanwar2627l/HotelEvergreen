import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Bed, Phone, Calendar } from "lucide-react";

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: "Non AC Room",
      image: "/images/8249f34d-2689-46e6-b3b4-684f39a670a4.png",
      price: "₹1,500",
      capacity: "2 Adults",
      bedType: "Double Bed",
      amenities: ["TV", "Attached Bathroom", "Others"],
      features: ["Spacious Layout", "Family Friendly", "Service"],
    },
    {
      id: 2,
      name: "Deluxe AC Room",
      image: "/images/a9947cc1-707c-43f4-a749-dca956494f79.png",
      price: "₹2,500",
      capacity: "2 Adults",
      bedType: "King Size Bed",
      amenities: [
        "Air Conditioning",
        "Table",
        "Room Service",
        "Television",
        "Attached Bathroom",
        "Others",
      ],
      features: [
        "Mountain View",
        "Premium Bedding",
        "Work Desk",
        "Safari and Tours",
      ],
    },
    {
      id: 3,
      name: "Premium Family Suite Room",
      image: "/images/d25487f1-7ba0-411a-b5b7-8b61e463096f.png",
      price: "₹3,000",
      capacity: "2-3 Adults",
      bedType: "3 Beds",
      amenities: [
        "Air Conditioning",
        "Free WiFi",
        "Room Service",
        "LED TV",
        "Attached Bathroom",
        "Mini Bar",
      ],
      features: [
        "Forest View",
        "Premium Amenities",
        "Seating Area",
        "Welcome Drinks",
        "Late Checkout",
      ],
    },
    {
      id: 4,
      name: "Premium Family Suite Room",
      image: "/images/305c1df5-e6db-4bf4-8af0-9465425c2817.png",
      price: "₹3,500",
      capacity: "4-5 Adults",
      bedType: "4 Beds",
      amenities: [
        "Air Conditioning",
        "Room Service",
        "LED TV",
        "Attached Bathroom",
      ],
      features: [
        "Forest View",
        "Premium Amenities",
        "Seating Area",
        "Welcome Drinks",
        "12:00 Pm Checkout",
      ],
    },
  ];

  const hotelAmenities = [
    "24/7 Front Desk",
    "Restaurant & Dining",
    "Room Service",
    "Parking Facility",
    "Tourist Information",
    "Airport Transfer",
    "Safari On demand Basis",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[400px] h-[60vh] flex items-center justify-center overflow-hidden w-full m-0 p-0">
        <div className="absolute inset-0 w-full h-full bg-evergreen-900">
          <img
            src="/images/a9947cc1-707c-43f4-a749-dca956494f79.png"
            alt="Luxury Accommodations"
            className="w-full h-full object-cover animate-fade-in opacity-80 mix-blend-overlay hover:scale-105 transition-transform duration-20000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80 pointer-events-none"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 mt-8">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-playfair font-bold mb-4 animate-fade-in drop-shadow-xl" style={{ animationDelay: "0.1s" }}>
            Luxury Accommodations
          </h1>
          <div className="w-24 h-1 bg-evergreen-400 mx-auto mb-6 animate-fade-in rounded-full shadow-[0_0_10px_rgba(92,184,92,0.8)]" style={{ animationDelay: "0.2s" }}></div>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-white/90 font-inter font-light animate-fade-in leading-relaxed drop-shadow-sm" style={{ animationDelay: "0.3s" }}>
            Experience comfort and elegance in our thoughtfully designed rooms, each offering modern amenities and stunning views of the natural landscape
          </p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 sm:gap-16">
            {rooms.map((room, index) => (
              <Card
                key={room.id}
                className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                >
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-80 lg:h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-3xl font-playfair font-bold text-gray-900">
                        {room.name}
                      </h3>
                      <Badge variant="secondary" className="text-lg px-4 py-2">
                        {room.price}/night
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <Users className="w-5 h-5 text-evergreen-600" />
                        <span className="text-gray-600">{room.capacity}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Bed className="w-5 h-5 text-evergreen-600" />
                        <span className="text-gray-600">{room.bedType}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Room Amenities
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {room.amenities.map((amenity, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-2"
                          >
                            <Star className="w-4 h-4 text-evergreen-600" />
                            <span className="text-sm text-gray-600">
                              {amenity}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Special Features
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {room.features.map((feature, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="text-evergreen-600 border-evergreen-600"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col xs:flex-row gap-3 mt-2">
                      <Button
                        asChild
                        className="bg-evergreen-600 hover:bg-evergreen-700 flex-1"
                      >
                        <a
                          href="https://wa.me/7782935050"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-2"
                        >
                          <Calendar className="w-4 h-4" />
                          <span>Book on WhatsApp</span>
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="border-evergreen-600 text-evergreen-600 hover:bg-evergreen-50 relative group"
                      >
                        <a
                          href="tel:7782935050"
                          className="flex items-center justify-center space-x-2 relative overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                          <Phone className="w-4 h-4 relative z-10 group-hover:animate-pulse" />
                          <span className="relative z-10 font-semibold">
                            Call Now
                          </span>
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hotel Amenities */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Hotel Amenities
            </h2>
            <p className="text-base sm:text-xl text-gray-600">
              Additional services and facilities for your comfort
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {hotelAmenities.map((amenity, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-evergreen-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-6 h-6 text-evergreen-600" />
                  </div>
                  <p className="font-medium text-gray-900">{amenity}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold text-white mb-6">
            Ready to Book Your Stay?
          </h2>
          <p className="text-xl text-white mb-8">
            Contact us today to reserve your perfect room at Hotel Evergreen
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-evergreen-600 hover:bg-gray-100 text-lg px-8 py-6"
            >
              <a
                href="https://wa.me/7782935050"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Book via WhatsApp</span>
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-evergreen-600 text-lg px-8 py-6"
            >
              <a href="tel:7782935050" className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Call: 7782935050</span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Rooms;
