import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Clock, Star } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/7782935050?text=${message}`, "_blank");
    toast({
      title: "Redirecting to WhatsApp",
      description: "Your inquiry will be sent via WhatsApp.",
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Number",
      details: ["+91 7782935050"],
      action: "tel:7782935050",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Valmiki Nagar", "West Champaran", "Bihar, India"],
      action: "https://maps.google.com/?q=Hotel+Evergreen+Valmiki+Nagar+Bihar",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "24/7 Reception",
        "Restaurant: 7 AM - 11 PM",
        "Room Service: Available 24/7",
      ],
      action: null,
    },
  ];

  const services = [
    "Room Booking & Reservations",
    "Food Ordering & Delivery",
    "Tourist Information",
    "Transport Arrangements",
    "Event Bookings",
    "Special Requests",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden w-full m-0 p-0">
        <div className="absolute inset-0 w-full h-full bg-evergreen-900">
          <img
            src="/images/1bdc77d0-a1ca-4de1-9788-a993145407b8.png"
            alt="Contact Us"
            className="w-full h-full object-cover animate-fade-in opacity-80 mix-blend-overlay hover:scale-105 transition-transform duration-[20000ms] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80 pointer-events-none"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 mt-8">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-playfair font-bold mb-4 animate-fade-in drop-shadow-xl" style={{ animationDelay: "0.1s" }}>
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-evergreen-400 mx-auto mb-6 animate-fade-in rounded-full shadow-[0_0_10px_rgba(92,184,92,0.8)]" style={{ animationDelay: "0.2s" }}></div>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-white/90 font-inter font-light animate-fade-in leading-relaxed drop-shadow-sm" style={{ animationDelay: "0.3s" }}>
            Get in touch with Hotel Evergreen for reservations, inquiries, or any assistance. We're here to make your stay memorable.
          </p>
        </div>
      </section>

      {/* Quick Contact Actions */}
      <section className="py-12 bg-evergreen-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-playfair font-bold text-white mb-4">
              Quick Contact
            </h2>
            <p className="text-xl text-evergreen-100">
              Reach us instantly for immediate assistance
            </p>
          </div>
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
                <span>WhatsApp: 7782935050</span>
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

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-evergreen-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <info.icon className="w-8 h-8 text-evergreen-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {info.title}
                  </h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                  {info.action && (
                    <Button
                      asChild
                      variant="outline"
                      className="mt-4 border-evergreen-600 text-evergreen-600 hover:bg-evergreen-50"
                    >
                      <a
                        href={info.action}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {info.title === "Phone Number"
                          ? "Call Now"
                          : "View on Map"}
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <CardContent className="p-0">
                <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-evergreen-600 hover:bg-evergreen-700 text-lg py-6"
                  >
                    Send via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map and Services */}
            <div className="space-y-8">
              {/* Google Map */}
              <Card className="overflow-hidden">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3544.4059220292334!2d84.06384647559512!3d27.31779597642352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399355262585d807%3A0xa6643b64be0a8695!2sHotel%20Evergreen!5e0!3m2!1sen!2sin!4v1714416781970!5m2!1sen!2sin"
                    width="100%"
                    height="256"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Hotel Evergreen Location"
                  ></iframe>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Our Location
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Conveniently located in Valmiki Nagar, West Champaran, Bihar
                    - Gateway to Valmiki Tiger Reserve
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-evergreen-600 text-evergreen-600 hover:bg-evergreen-50"
                  >
                    <a
                      href="https://maps.google.com/?q=Hotel+Evergreen+Valmiki+Nagar+Bihar"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Services */}
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    How Can We Help?
                  </h3>
                  <div className="space-y-3">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Star className="w-5 h-5 text-evergreen-600" />
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <CardContent className="p-0">
                <h4 className="font-semibold text-gray-900 mb-2">
                  How do I make a reservation?
                </h4>
                <p className="text-gray-600">
                  Call us at 7782935050 or send a WhatsApp message for instant
                  booking confirmation.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Do you provide airport transfers?
                </h4>
                <p className="text-gray-600">
                  Yes, we arrange transportation from nearby airports and
                  railway stations upon request.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Is room service available 24/7?
                </h4>
                <p className="text-gray-600">
                  Yes, our room service is available 24 hours a day for your
                  convenience.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Can you arrange tiger safari bookings?
                </h4>
                <p className="text-gray-600">
                  Absolutely! We help arrange safari permits and guides for
                  Valmiki Tiger Reserve visits.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
