import Link from "next/link";
import Image from "next/image";
import { UsersIcon, CalendarIcon, StarIcon } from "@heroicons/react/24/outline";
import { CakeIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-orange-600 to-red-600">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Premium Catering Services
            <span className="block text-orange-300">For Every Celebration</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            From intimate gatherings to grand celebrations, we provide exceptional catering,
            signature cocktails, beautiful hampers, and complete event planning services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors duration-300"
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

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Your Trusted Catering Partner
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Funmita Catering brings exceptional culinary experiences to your special occasions.
                From our signature small chops and perfectly crafted cocktails to international cuisine options,
                we cater to diverse tastes and preferences across Lagos and Ogun State.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Whether you need elegant catering for corporate events, beautiful hampers for special gifts,
                or complete event planning services, we handle every detail with professionalism and care.
                Our commitment to quality and customer satisfaction makes us the preferred choice for discerning clients.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700"
              >
                Learn More About Us
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden h-96">
                <Image
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop"
                  alt="Professional catering service setup"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive catering solutions for all types of events,
              combining exceptional cuisine with outstanding service for memorable celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <UsersIcon className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Corporate Events</h3>
              <p className="text-gray-600 mb-6">
                Professional catering for business meetings, conferences, and corporate celebrations.
                Impress your clients with our diverse menu options and exceptional service quality.
              </p>
              <Link href="/services" className="text-orange-600 font-semibold hover:text-orange-700">
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <CalendarIcon className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Wedding Celebrations</h3>
              <p className="text-gray-600 mb-6">
                Make your special day unforgettable with our comprehensive wedding catering services.
                From intimate ceremonies to grand receptions, we create memorable culinary experiences.
              </p>
              <Link href="/services" className="text-orange-600 font-semibold hover:text-orange-700">
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <CakeIcon className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Private Celebrations</h3>
              <p className="text-gray-600 mb-6">
                Celebrate life&apos;s special moments with exceptional cuisine and service. Birthday parties,
                anniversaries, or any special occasion deserves our finest culinary offerings.
              </p>
              <Link href="/services" className="text-orange-600 font-semibold hover:text-orange-700">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-orange-200">Events Catered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-orange-200">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-orange-200">Menu Options</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-orange-200">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Don&apos;t just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                &ldquo;Funmita Catering made our wedding absolutely perfect. The food was exceptional,
                the service was flawless, and every detail was handled with care. Truly outstanding!&rdquo;
              </p>
              <div className="font-semibold text-gray-900">Adunni & Kemi Adebayo</div>
              <div className="text-gray-500">Wedding Reception, Lagos</div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                &ldquo;Professional, reliable, and delicious! Funmita Catering has been our go-to for
                all corporate events. Their diverse menu options always impress our clients.&rdquo;
              </p>
              <div className="font-semibold text-gray-900">Chinedu Okafor</div>
              <div className="text-gray-500">Zenith Bank, Victoria Island</div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                &ldquo;The attention to detail and quality of food is outstanding. They made our
                son&apos;s celebration truly special with exceptional cuisine and service. Highly recommended!&rdquo;
              </p>
              <div className="font-semibold text-gray-900">Folake Adesanya</div>
              <div className="text-gray-500">Family Celebration, Ikoyi</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Plan Your Event?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let us help you create an unforgettable culinary experience for your next event.
            Contact us today for a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors duration-300"
            >
              Get Started Today
            </Link>
            <Link
              href="/menu"
              className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors duration-300"
            >
              Browse Our Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
