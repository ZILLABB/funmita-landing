import Link from "next/link";
import Image from "next/image";
import {
  BuildingOfficeIcon,
  HeartIcon,
  GiftIcon,
  BeakerIcon,
  CheckCircleIcon,
  CalendarDaysIcon
} from "@heroicons/react/24/outline";

export default function Services() {
  const services = [
    {
      icon: BuildingOfficeIcon,
      title: "Catering Services",
      description: "Professional catering for all types of events with authentic Nigerian cuisine and international dishes.",
      features: [
        "Corporate events and meetings",
        "Wedding receptions and ceremonies",
        "Birthday parties and celebrations",
        "Traditional Nigerian dishes",
        "International cuisine options",
        "Buffet and plated service"
      ],
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=400&fit=crop"
    },
    {
      icon: GiftIcon,
      title: "Small Chops & Asun",
      description: "Delicious Nigerian small chops and perfectly spiced asun for your events and gatherings.",
      features: [
        "Assorted small chops platters",
        "Fresh and spicy asun",
        "Puff puff and meat pies",
        "Samosa and spring rolls",
        "Custom small chops combinations",
        "Party-sized portions available"
      ],
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop"
    },
    {
      icon: BeakerIcon,
      title: "Drinks & Cocktails",
      description: "Refreshing beverages, cocktails, and our signature Chapman to complement your events.",
      features: [
        "Signature Chapman cocktails",
        "Custom cocktail creations",
        "Fresh fruit juices",
        "Traditional Nigerian drinks",
        "Mocktails for all ages",
        "Professional bartending service"
      ],
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&h=400&fit=crop"
    },
    {
      icon: HeartIcon,
      title: "Hampers & Packaging",
      description: "Beautifully packaged food hampers perfect for gifts, corporate giveaways, and special occasions.",
      features: [
        "Custom food hampers",
        "Corporate gift packages",
        "Holiday and seasonal hampers",
        "Beautiful presentation packaging",
        "Personalized gift options",
        "Delivery services available"
      ],
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=400&fit=crop"
    },
    {
      icon: CalendarDaysIcon,
      title: "Event Planning & Management",
      description: "Complete event planning and management services to make your occasion stress-free and memorable.",
      features: [
        "Full event planning and coordination",
        "Venue selection and setup",
        "Menu planning and customization",
        "Timeline management",
        "Vendor coordination",
        "Day-of event management"
      ],
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            From authentic Nigerian catering and small chops to event planning and beautiful hampers,
            we provide comprehensive solutions for all your celebration needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="bg-orange-100 rounded-full p-3 mr-4">
                      <service.icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-8">{service.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-300"
                  >
                    Get Quote for {service.title}
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="bg-gray-100 rounded-lg h-80 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">
              Simple steps to exceptional catering
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600">
                We discuss your event details, preferences, and requirements to understand your vision.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Menu Planning</h3>
              <p className="text-gray-600">
                Our chefs create a customized menu that perfectly matches your taste and budget.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Preparation</h3>
              <p className="text-gray-600">
                We handle all the preparation, cooking, and setup with meticulous attention to detail.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Service</h3>
              <p className="text-gray-600">
                Our professional team ensures flawless service throughout your entire event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Planning?</h2>
          <p className="text-xl mb-8">
            Contact us today to discuss your catering needs and receive a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Get Your Quote
            </Link>
            <Link
              href="/menu"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-300"
            >
              View Our Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
