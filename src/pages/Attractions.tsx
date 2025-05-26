import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Camera, Star } from "lucide-react";

const Attractions = () => {
  const attractions = [
    {
      name: "Valmiki Tiger Reserve",
      distance: "5 km",
      duration: "Half Day",
      type: "Wildlife Sanctuary",
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=500&h=300&fit=crop",
      description: "The crown jewel of Valmiki Nagar, this tiger reserve spans 899 square kilometers and is home to Royal Bengal Tigers, leopards, wild boars, sambhar, and over 250 species of birds.",
      highlights: ["Tiger Safari", "Bird Watching", "Nature Walks", "Wildlife Photography"],
      bestTime: "October to March"
    },
    {
      name: "Valmiki Ashram",
      distance: "8 km",
      duration: "2-3 hours",
      type: "Religious Site",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=500&h=300&fit=crop",
      description: "A sacred site believed to be where Sage Valmiki composed the Ramayana. The ashram offers spiritual solace amidst beautiful natural surroundings.",
      highlights: ["Ancient Temple", "Peaceful Environment", "Spiritual Experience", "Historical Significance"],
      bestTime: "Year Round"
    },
    {
      name: "Gandak River",
      distance: "3 km",
      duration: "2-4 hours",
      type: "Natural Beauty",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&h=300&fit=crop",
      description: "The serene Gandak River offers beautiful views, peaceful boat rides, and excellent fishing opportunities. Perfect for nature lovers and photography enthusiasts.",
      highlights: ["Boat Rides", "River Fishing", "Sunset Views", "Picnic Spots"],
      bestTime: "October to April"
    },
    {
      name: "Madanpur Forest",
      distance: "12 km",
      duration: "Half Day",
      type: "Forest Area",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=500&h=300&fit=crop",
      description: "Dense forest area perfect for trekking and nature walks. Home to diverse flora and fauna, offering an immersive experience in nature.",
      highlights: ["Trekking Trails", "Nature Photography", "Flora & Fauna", "Adventure Activities"],
      bestTime: "November to February"
    },
    {
      name: "Bhikhna Thori Border",
      distance: "15 km",
      duration: "3-4 hours",
      type: "Border Area",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=500&h=300&fit=crop",
      description: "The India-Nepal border area offers unique cultural experiences and beautiful landscapes. Great for understanding the cross-border culture and traditions.",
      highlights: ["Cultural Exchange", "Cross-border Views", "Local Markets", "Traditional Crafts"],
      bestTime: "Year Round"
    },
    {
      name: "Som River",
      distance: "7 km",
      duration: "2-3 hours",
      type: "River & Nature",
      image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?w=500&h=300&fit=crop",
      description: "A pristine river flowing through the forest, offering crystal clear waters and peaceful surroundings. Ideal for relaxation and meditation.",
      highlights: ["Crystal Clear Water", "Peaceful Environment", "Natural Swimming", "Meditation Spots"],
      bestTime: "October to March"
    }
  ];

  const travelTips = [
    "Best time to visit: October to March for pleasant weather",
    "Carry insect repellent for forest visits",
    "Book safari permits in advance for tiger reserve",
    "Respect wildlife and maintain safe distances",
    "Follow eco-friendly practices during visits",
    "Carry sufficient water and snacks for day trips"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-evergreen-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-playfair font-bold text-gray-900 mb-6">
              Nearby Attractions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the natural wonders and cultural treasures around Valmiki Nagar. 
              From the magnificent Tiger Reserve to sacred sites and pristine rivers.
            </p>
          </div>
        </div>
      </section>

      {/* Main Attraction - Tiger Reserve */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden shadow-xl mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div>
                <img 
                  src={attractions[0].image} 
                  alt={attractions[0].name}
                  className="w-full h-80 lg:h-full object-cover"
                />
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <Badge className="bg-evergreen-600 text-white px-4 py-2">
                    Featured Attraction
                  </Badge>
                  <Badge variant="outline" className="text-evergreen-600 border-evergreen-600">
                    {attractions[0].distance} away
                  </Badge>
                </div>
                <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
                  {attractions[0].name}
                </h2>
                <p className="text-lg text-gray-600 mb-6">{attractions[0].description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-evergreen-600" />
                    <span className="text-gray-600">{attractions[0].duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-evergreen-600" />
                    <span className="text-gray-600">{attractions[0].type}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Highlights</h4>
                  <div className="flex flex-wrap gap-2">
                    {attractions[0].highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="secondary" className="text-evergreen-600">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="bg-evergreen-600 hover:bg-evergreen-700">
                  <a 
                    href="https://wa.me/7782935050" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2"
                  >
                    <span>Plan Visit</span>
                  </a>
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Other Attractions Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
              More Places to Explore
            </h2>
            <p className="text-xl text-gray-600">
              Discover the diverse attractions around Hotel Evergreen
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.slice(1).map((attraction, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white text-evergreen-600">
                      {attraction.distance}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{attraction.name}</h3>
                    <Badge variant="outline" className="text-xs">
                      {attraction.type}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">{attraction.description}</p>
                  
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{attraction.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>{attraction.bestTime}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {attraction.highlights.slice(0, 2).map((highlight, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                      {attraction.highlights.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{attraction.highlights.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8">
            <CardContent className="p-0">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
                  Travel Tips
                </h2>
                <p className="text-lg text-gray-600">Essential information for your visit</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {travelTips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-evergreen-100 rounded-full flex items-center justify-center mt-0.5">
                      <Star className="w-4 h-4 text-evergreen-600" />
                    </div>
                    <p className="text-gray-700">{tip}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tour Planning CTA */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold text-white mb-6">
            Plan Your Adventure
          </h2>
          <p className="text-xl text-white mb-8">
            Let us help you plan the perfect itinerary to explore all the beautiful 
            attractions around Valmiki Nagar
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
                <Camera className="w-5 h-5" />
                <span>Plan Tour on WhatsApp</span>
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-evergreen-600 text-lg px-8 py-6"
            >
              <a href="/contact">Get Tourist Information</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Attractions;
