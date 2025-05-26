
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { star, map-pin, phone, users, calendar, camera } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: star,
      title: "Luxury Comfort",
      description: "Premium AC rooms with top-notch amenities and services"
    },
    {
      icon: map-pin,
      title: "Prime Location",
      description: "Gateway to Valmiki Tiger Reserve and natural attractions"
    },
    {
      icon: users,
      title: "Exceptional Service",
      description: "Dedicated staff ensuring comfort and memorable experiences"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Patna, Bihar",
      rating: 5,
      comment: "Exceptional service and beautiful location. The staff was incredibly welcoming and the rooms were spotless."
    },
    {
      name: "Priya Sharma",
      location: "Delhi",
      rating: 5,
      comment: "Perfect gateway to explore Valmiki Tiger Reserve. The hotel exceeded our expectations in every way."
    },
    {
      name: "Amit Singh",
      location: "Muzaffarpur, Bihar",
      rating: 5,
      comment: "Outstanding food quality and comfortable accommodation. Highly recommend for families."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 animate-fade-in">
            Hotel Evergreen
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Experience Luxury in the Heart of Nature
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Nestled in Valmiki Nagar, West Champaran, Bihar - Your Gateway to Valmiki Tiger Reserve
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
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
                <calendar className="w-5 h-5" />
                <span>Book Now</span>
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-evergreen-600 text-lg px-8 py-6"
            >
              <a href="tel:7782935050" className="flex items-center space-x-2">
                <phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </Button>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-8 w-12 h-12 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
              Why Choose Hotel Evergreen?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the perfect blend of comfort, luxury, and natural beauty at our premier destination
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-evergreen-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-evergreen-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Room Preview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
              Luxury Accommodation
            </h2>
            <p className="text-xl text-gray-600">
              Experience comfort and elegance in our premium rooms
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/lovable-uploads/a9947cc1-707c-43f4-a749-dca956494f79.png" 
                alt="Hotel Evergreen Premium Room" 
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-playfair font-bold text-gray-900">
                Premium AC Rooms
              </h3>
              <p className="text-lg text-gray-600">
                Our thoughtfully designed rooms offer the perfect sanctuary after a day of exploration. 
                Each room features modern amenities, comfortable bedding, and panoramic views of the 
                surrounding natural landscape.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <star className="w-5 h-5 text-evergreen-600 mr-3" />
                  Air-conditioned comfort
                </li>
                <li className="flex items-center">
                  <star className="w-5 h-5 text-evergreen-600 mr-3" />
                  Premium bedding and furnishing
                </li>
                <li className="flex items-center">
                  <star className="w-5 h-5 text-evergreen-600 mr-3" />
                  Modern bathroom facilities
                </li>
                <li className="flex items-center">
                  <star className="w-5 h-5 text-evergreen-600 mr-3" />
                  24/7 room service
                </li>
              </ul>
              <Button asChild className="bg-evergreen-600 hover:bg-evergreen-700">
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
                Hotel Evergreen stands as a beacon of hospitality in Valmiki Nagar. Our stunning 
                architecture blends modern luxury with local aesthetics, creating an unforgettable 
                first impression that sets the tone for your entire stay.
              </p>
              <p className="text-lg text-gray-600">
                The beautifully illuminated facade welcomes guests with warmth and elegance, 
                while our spacious interiors provide the perfect atmosphere for relaxation and comfort.
              </p>
              <Button asChild variant="outline" className="border-evergreen-600 text-evergreen-600 hover:bg-evergreen-50">
                <a href="/gallery" className="flex items-center space-x-2">
                  <camera className="w-4 h-4" />
                  <span>View Gallery</span>
                </a>
              </Button>
            </div>
            <div>
              <img 
                src="/lovable-uploads/2601dcab-ce65-47bc-9c84-e760cc7dbb09.png" 
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
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
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
            Book your stay today and discover the perfect blend of luxury and nature
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
                <calendar className="w-5 h-5" />
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
                <phone className="w-5 h-5" />
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
