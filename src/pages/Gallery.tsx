
import Layout from "@/components/Layout";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { camera, image } from "lucide-react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Photos" },
    { id: "exterior", name: "Hotel Exterior" },
    { id: "rooms", name: "Rooms" },
    { id: "interior", name: "Interior" },
  ];

  const galleryImages = [
    {
      id: 1,
      src: "/lovable-uploads/2601dcab-ce65-47bc-9c84-e760cc7dbb09.png",
      category: "exterior",
      title: "Hotel Evergreen Night View",
      description: "Stunning illuminated facade welcoming guests"
    },
    {
      id: 2,
      src: "/lovable-uploads/a9947cc1-707c-43f4-a749-dca956494f79.png",
      category: "rooms",
      title: "Premium Room",
      description: "Luxurious accommodation with modern amenities"
    },
    {
      id: 3,
      src: "/lovable-uploads/35eb632a-47a5-4e2f-928c-47725fa1eeb6.png",
      category: "exterior",
      title: "Evening Ambiance",
      description: "Beautiful evening lighting and atmosphere"
    },
    {
      id: 4,
      src: "/lovable-uploads/d25487f1-7ba0-411a-b5b7-8b61e463096f.png",
      category: "rooms",
      title: "Deluxe Room with Forest View",
      description: "Comfortable room overlooking natural landscape"
    },
    {
      id: 5,
      src: "/lovable-uploads/6fb39385-0b2d-4b78-a2f5-2503260e80b0.png",
      category: "interior",
      title: "Celebration Interior",
      description: "Interior decorated for special occasions"
    },
    {
      id: 6,
      src: "/lovable-uploads/b64970d9-f2dd-44c2-8a21-1f8b294570b2.png",
      category: "exterior",
      title: "Hotel Front View",
      description: "Main entrance with decorative lighting"
    },
    {
      id: 7,
      src: "/lovable-uploads/8249f34d-2689-46e6-b3b4-684f39a670a4.png",
      category: "rooms",
      title: "Family Room",
      description: "Comfortable family accommodation"
    },
    {
      id: 8,
      src: "/lovable-uploads/1bdc77d0-a1ca-4de1-9788-a993145407b8.png",
      category: "exterior",
      title: "Hotel Exterior Day View",
      description: "Hotel building during daytime"
    }
  ];

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-evergreen-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-playfair font-bold text-gray-900 mb-6">
              Photo Gallery
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the beauty of Hotel Evergreen through our curated collection of images 
              showcasing our facilities, rooms, and the natural splendor of Valmiki Nagar
            </p>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-white sticky top-20 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`${
                  selectedCategory === category.id
                    ? "bg-evergreen-600 hover:bg-evergreen-700"
                    : "border-evergreen-600 text-evergreen-600 hover:bg-evergreen-50"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image) => (
              <Card key={image.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                    <camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{image.title}</h3>
                  <p className="text-gray-600">{image.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="w-16 h-16 bg-evergreen-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <image className="w-8 h-8 text-evergreen-600" />
          </div>
          <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">
            Want to See More?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us to schedule a virtual tour or visit us in person to experience 
            the full beauty and comfort of Hotel Evergreen
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-evergreen-600 hover:bg-evergreen-700"
            >
              <a 
                href="https://wa.me/7782935050" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Schedule Visit
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-evergreen-600 text-evergreen-600 hover:bg-evergreen-50"
            >
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
