import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, MapPin, Phone, Users, Calendar, Camera } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Star,
      title: "Luxury Comfort",
      description: "Premium AC rooms with top-notch amenities and services",
    },
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Gateway to Valmiki Tiger Reserve and natural attractions",
    },
    {
      icon: Users,
      title: "Exceptional Service",
      description: "Dedicated staff ensuring comfort and memorable experiences",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Patna, Bihar",
      rating: 5,
      comment:
        "Exceptional service and beautiful location. The staff was incredibly welcoming and the rooms were spotless.",
    },
    {
      name: "Priya Sharma",
      location: "Delhi",
      rating: 5,
      comment:
        "Perfect gateway to explore Valmiki Tiger Reserve. The hotel exceeded our expectations in every way.",
    },
    {
      name: "Amit Singh",
      location: "Muzaffarpur, Bihar",
      rating: 5,
      comment:
        "Outstanding food quality and comfortable accommodation. Highly recommend for families.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[600px] h-screen max-h-[900px] flex items-center justify-center overflow-hidden w-full m-0 p-0">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full bg-evergreen-900">
          <img
            src="/hero-valmiki.png"
            alt="Valmiki Tiger Reserve"
            className="w-full h-full object-cover opacity-80 mix-blend-overlay hover:scale-105 transition-transform duration-20000 ease-out"
            fetchpriority="high"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80 pointer-events-none"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 mt-4 sm:mt-8 md:mt-16">
          <div className="inline-block animate-fade-in mb-6" style={{ animationDelay: "0.1s" }}>
            <span className="px-5 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold shadow-lg shadow-black/20">
              Gateway to the Wild
            </span>
          </div>

          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-playfair font-bold mb-4 animate-fade-in drop-shadow-xl leading-tight" style={{ animationDelay: "0.2s" }}>
            Valmiki Tiger Reserve
          </h1>

          <div className="w-24 h-1 bg-evergreen-400 mx-auto mb-6 animate-fade-in rounded-full shadow-[0_0_10px_rgba(92,184,92,0.8)]" style={{ animationDelay: "0.4s" }}></div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-playfair font-semibold mb-6 animate-fade-in text-white/90 drop-shadow-md" style={{ animationDelay: "0.5s" }}>
            Your Luxury Stay at Hotel Evergreen
          </h2>

          <p
            className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/80 font-inter font-light animate-fade-in leading-relaxed drop-shadow-sm"
            style={{ animationDelay: "0.6s" }}
          >
            Experience unparalleled comfort seamlessly blended with the untamed beauty of Valmiki Nagar, West Champaran.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <Button
              asChild
              className="bg-gradient-to-r from-evergreen-600 to-evergreen-500 hover:from-evergreen-500 hover:to-evergreen-400 text-white text-lg px-8 py-7 rounded-full shadow-[0_0_20px_rgba(45,125,45,0.4)] hover:shadow-[0_0_30px_rgba(45,125,45,0.7)] transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto"
            >
              <a
                href="https://wa.me/7782935050"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 w-full"
              >
                <Calendar className="w-5 h-5 mr-2" />
                <span>Reserve Your Stay</span>
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="group border-2 border-white/50 bg-white/5 text-white hover:bg-white hover:text-black hover:border-white backdrop-blur-sm text-lg px-8 py-7 rounded-full transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto"
            >
              <a href="/gallery" className="flex items-center justify-center space-x-2 w-full">
                <Camera className="w-5 h-5 mr-2 group-hover:text-black transition-colors" />
                <span>Explore Reserve</span>
              </a>
            </Button>
          </div>
        </div>

        {/* Dynamic Glassmorphism Information Strip */}
        <div className="absolute bottom-0 w-full border-t border-white/10 bg-black/30 backdrop-blur-xl animate-fade-in" style={{ animationDelay: "1.2s" }}>
          <div className="max-w-7xl mx-auto px-4 py-3 md:py-5">
            <div className="flex flex-col sm:flex-row justify-between items-center text-white/80 gap-2 sm:gap-0 text-sm font-inter">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-evergreen-400 flex-shrink-0" />
                <span>Valmiki Tiger Reserve, Bihar</span>
              </div>
              <div className="hidden sm:block w-px h-5 bg-white/20"></div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <span>#1 Ranked Eco-Resort</span>
              </div>
              <div className="hidden sm:block w-px h-5 bg-white/20"></div>
              <a href="tel:7782935050" className="flex items-center space-x-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-evergreen-400 flex-shrink-0" />
                <span>Helpline: 7782935050</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Why Choose Hotel Evergreen?
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the perfect blend of comfort, luxury, and natural beauty
              at our premier destination
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-evergreen-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-evergreen-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Room Preview Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Luxury Accommodation
            </h2>
            <p className="text-base sm:text-xl text-gray-600">
              Experience comfort and elegance in our premium rooms
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/a9947cc1-707c-43f4-a749-dca956494f79.png"
                alt="Hotel Evergreen Premium Room"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-playfair font-bold text-gray-900">
                Premium AC Rooms
              </h3>
              <p className="text-lg text-gray-600">
                Our thoughtfully designed rooms offer the perfect sanctuary
                after a day of exploration. Each room features modern amenities,
                comfortable bedding, and panoramic views of the surrounding
                natural landscape.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-evergreen-600 mr-3" />
                  Air-conditioned comfort
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-evergreen-600 mr-3" />
                  Premium bedding and furnishing
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-evergreen-600 mr-3" />
                  Modern bathroom facilities
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-evergreen-600 mr-3" />
                  24/7 room service
                </li>
              </ul>
              <Button
                asChild
                className="bg-evergreen-600 hover:bg-evergreen-700"
              >
                <a href="/rooms">Explore Rooms</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel Exterior Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-playfair font-bold text-gray-900">
                Magnificent Architecture
              </h3>
              <p className="text-lg text-gray-600">
                Hotel Evergreen stands as a beacon of hospitality in Valmiki
                Nagar. Our stunning architecture blends modern luxury with local
                aesthetics, creating an unforgettable first impression that sets
                the tone for your entire stay.
              </p>
              <p className="text-lg text-gray-600">
                The beautifully illuminated facade welcomes guests with warmth
                and elegance, while our spacious interiors provide the perfect
                atmosphere for relaxation and comfort.
              </p>
              <Button
                asChild
                variant="outline"
                className="border-evergreen-600 text-evergreen-600 hover:bg-evergreen-50"
              >
                <a href="/gallery" className="flex items-center space-x-2">
                  <Camera className="w-4 h-4" />
                  <span>View Gallery</span>
                </a>
              </Button>
            </div>
            <div>
              <img
                src="/images/2601dcab-ce65-47bc-9c84-e760cc7dbb09.png"
                alt="Hotel Evergreen Exterior Night View"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
              What Our Guests Say
            </h2>
            <p className="text-xl text-gray-600">
              Experiences that create lasting memories
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold text-white mb-6">
            Ready for Your Evergreen Experience?
          </h2>
          <p className="text-xl text-white mb-8">
            Book your stay today and discover the perfect blend of luxury and
            nature
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
                <span>Book Now on WhatsApp</span>
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

export default Index;
