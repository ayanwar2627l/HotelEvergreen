
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { star, clock, phone } from "lucide-react";

const Dining = () => {
  const menuCategories = [
    {
      name: "Bihari Specialties",
      description: "Authentic local cuisine from the heart of Bihar",
      dishes: [
        { name: "Litti Chokha", price: "₹150", description: "Traditional Bihar delicacy with roasted gram flour balls" },
        { name: "Sattu Paratha", price: "₹120", description: "Nutritious paratha stuffed with roasted gram flour" },
        { name: "Fish Curry", price: "₹300", description: "Fresh river fish in traditional Bihar style curry" },
        { name: "Kheer", price: "₹100", description: "Traditional rice pudding with cardamom and nuts" }
      ]
    },
    {
      name: "North Indian",
      description: "Classic North Indian flavors and favorites",
      dishes: [
        { name: "Butter Chicken", price: "₹350", description: "Creamy tomato-based chicken curry" },
        { name: "Dal Makhani", price: "₹200", description: "Rich and creamy black lentil curry" },
        { name: "Paneer Tikka", price: "₹280", description: "Grilled cottage cheese with spices" },
        { name: "Naan & Roti", price: "₹50", description: "Freshly baked Indian breads" }
      ]
    },
    {
      name: "Chinese Favorites",
      description: "Popular Indo-Chinese dishes",
      dishes: [
        { name: "Chicken Manchurian", price: "₹320", description: "Spicy chicken in Manchurian sauce" },
        { name: "Veg Fried Rice", price: "₹180", description: "Wok-fried rice with mixed vegetables" },
        { name: "Chilli Paneer", price: "₹250", description: "Cottage cheese tossed in spicy chilli sauce" },
        { name: "Hakka Noodles", price: "₹200", description: "Stir-fried noodles with vegetables" }
      ]
    },
    {
      name: "Beverages",
      description: "Refreshing drinks and traditional beverages",
      dishes: [
        { name: "Lassi", price: "₹80", description: "Traditional yogurt-based drink" },
        { name: "Fresh Lime Water", price: "₹60", description: "Refreshing lime water with mint" },
        { name: "Tea/Coffee", price: "₹40", description: "Hot beverages served fresh" },
        { name: "Fresh Juices", price: "₹90", description: "Seasonal fruit juices" }
      ]
    }
  ];

  const diningFeatures = [
    {
      icon: star,
      title: "Fresh Ingredients",
      description: "We source the finest local ingredients for authentic flavors"
    },
    {
      icon: clock,
      title: "Quick Service",
      description: "Fast and efficient service without compromising quality"
    },
    {
      icon: phone,
      title: "Room Service",
      description: "24/7 room service for your convenience"
    }
  ];

  const paymentMethods = ["UPI", "Paytm", "GooglePay", "PhonePe", "Cash", "Card"];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-evergreen-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-playfair font-bold text-gray-900 mb-6">
              Dining Experience
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Savor authentic Bihari cuisine and multi-cuisine delights prepared with love and 
              the finest ingredients. Experience the rich culinary heritage of Bihar.
            </p>
          </div>
        </div>
      </section>

      {/* Online Ordering CTA */}
      <section className="py-12 bg-evergreen-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-playfair font-bold text-white mb-4">
              Order Online Now!
            </h2>
            <p className="text-xl text-evergreen-100 mb-6">
              Enjoy our delicious food with convenient online ordering and multiple payment options
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {paymentMethods.map((method) => (
                <Badge key={method} variant="secondary" className="bg-white text-evergreen-600">
                  {method}
                </Badge>
              ))}
            </div>
            <Button
              asChild
              size="lg"
              className="bg-white text-evergreen-600 hover:bg-gray-100 text-lg px-8 py-6"
            >
              <a 
                href="https://wa.me/7782935050" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Order via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
              Our Menu
            </h2>
            <p className="text-xl text-gray-600">
              Explore our diverse culinary offerings
            </p>
          </div>
          
          <div className="space-y-16">
            {menuCategories.map((category, index) => (
              <div key={index}>
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-playfair font-bold text-gray-900 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-lg text-gray-600">{category.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.dishes.map((dish, dishIndex) => (
                    <Card key={dishIndex} className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-xl font-semibold text-gray-900">{dish.name}</h4>
                          <Badge variant="outline" className="text-evergreen-600 border-evergreen-600">
                            {dish.price}
                          </Badge>
                        </div>
                        <p className="text-gray-600">{dish.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dining Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
              Why Choose Our Restaurant?
            </h2>
            <p className="text-xl text-gray-600">
              Experience exceptional dining with these special features
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {diningFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
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

      {/* Restaurant Hours */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8">
            <CardContent className="p-0">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
                  Restaurant Hours
                </h2>
                <p className="text-lg text-gray-600">We're here to serve you throughout the day</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Restaurant Dining</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Breakfast:</strong> 7:00 AM - 10:00 AM</p>
                    <p><strong>Lunch:</strong> 12:00 PM - 3:00 PM</p>
                    <p><strong>Dinner:</strong> 7:00 PM - 11:00 PM</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Room Service</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Available:</strong> 24 Hours</p>
                    <p><strong>Quick Service:</strong> 6:00 AM - 12:00 AM</p>
                    <p><strong>Night Service:</strong> 12:00 AM - 6:00 AM</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Order CTA */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold text-white mb-6">
            Ready to Order?
          </h2>
          <p className="text-xl text-white mb-8">
            Contact us to place your order or make a reservation at our restaurant
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
              >
                Order on WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-evergreen-600 text-lg px-8 py-6"
            >
              <a href="tel:7782935050">Call: 7782935050</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dining;
