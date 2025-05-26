
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { star, users, map-pin, clock } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: star,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service, ensuring each guest receives the highest quality experience."
    },
    {
      icon: users,
      title: "Hospitality",
      description: "Our warm hospitality reflects the rich cultural heritage of Bihar, making every guest feel at home."
    },
    {
      icon: map-pin,
      title: "Location",
      description: "Strategically located in Valmiki Nagar, we serve as the perfect gateway to explore natural wonders."
    },
    {
      icon: clock,
      title: "Service",
      description: "Round-the-clock service ensuring our guests have everything they need at any time of day."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-evergreen-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-playfair font-bold text-gray-900 mb-6">
              About Hotel Evergreen
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Where luxury meets nature in the heart of Valmiki Nagar, West Champaran, Bihar
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img 
                src="/lovable-uploads/35eb632a-47a5-4e2f-928c-47725fa1eeb6.png" 
                alt="Hotel Evergreen Night View" 
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-playfair font-bold text-gray-900">
                Our Story
              </h2>
              <p className="text-lg text-gray-600">
                Hotel Evergreen was born from a vision to create a premier hospitality destination 
                in the scenic landscape of Valmiki Nagar. Named after the evergreen forests that 
                surround our location, we represent the perfect harmony between modern luxury and 
                natural beauty.
              </p>
              <p className="text-lg text-gray-600">
                Established as a beacon of comfort and excellence in West Champaran, Bihar, 
                we have been dedicated to providing our guests with an unforgettable experience 
                that combines world-class amenities with the warmth of Bihari hospitality.
              </p>
              <p className="text-lg text-gray-600">
                Our strategic location makes us the ideal base for exploring the magnificent 
                Valmiki Tiger Reserve and the rich cultural heritage of the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-lg text-gray-600">
                  To provide exceptional hospitality services that exceed guest expectations 
                  while showcasing the natural beauty and cultural richness of Valmiki Nagar. 
                  We are committed to creating memorable experiences through personalized service, 
                  comfortable accommodations, and authentic local cuisine.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-lg text-gray-600">
                  To become the premier destination hotel in West Champaran, Bihar, 
                  recognized for our commitment to sustainability, community engagement, 
                  and providing guests with an authentic connection to the natural wonders 
                  of the Valmiki Tiger Reserve region.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-evergreen-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-evergreen-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-playfair font-bold text-gray-900">
                What Makes Us Special
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-evergreen-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Premium Accommodations</h4>
                    <p className="text-gray-600">Luxurious AC rooms with modern amenities and comfort</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-evergreen-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Exceptional Dining</h4>
                    <p className="text-gray-600">Authentic local cuisine and multi-cuisine restaurants</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-evergreen-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Strategic Location</h4>
                    <p className="text-gray-600">Gateway to Valmiki Tiger Reserve and natural attractions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-evergreen-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">24/7 Service</h4>
                    <p className="text-gray-600">Round-the-clock hospitality and guest assistance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-evergreen-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Online Services</h4>
                    <p className="text-gray-600">Convenient online booking and food ordering systems</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/lovable-uploads/6fb39385-0b2d-4b78-a2f5-2503260e80b0.png" 
                alt="Hotel Evergreen Interior Celebration" 
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6">
              Our Commitment
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              At Hotel Evergreen, we are committed to providing you with an experience that goes 
              beyond accommodation. Our dedicated team works tirelessly to ensure that every moment 
              of your stay is comfortable, memorable, and filled with the warmth of Bihari hospitality.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From the moment you arrive until your departure, we strive to exceed your expectations 
              and create lasting memories that will bring you back to our beautiful corner of Bihar 
              time and again.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
