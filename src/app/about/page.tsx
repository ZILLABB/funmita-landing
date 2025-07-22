import Link from "next/link";
import Image from "next/image";
import {
  HeartIcon,
  StarIcon,
  UsersIcon,
  TrophyIcon
} from "@heroicons/react/24/outline";

export default function About() {
  const values = [
    {
      icon: HeartIcon,
      title: "Passion for Excellence",
      description: "We pour our heart into every dish, ensuring exceptional quality and taste in everything we create."
    },
    {
      icon: UsersIcon,
      title: "Customer First",
      description: "Your satisfaction is our priority. We listen, adapt, and deliver exactly what you envision for your event."
    },
    {
      icon: StarIcon,
      title: "Quality Ingredients",
      description: "We source only the finest, freshest ingredients to create memorable culinary experiences."
    },
    {
      icon: TrophyIcon,
      title: "Professional Service",
      description: "Our experienced team delivers flawless service with attention to every detail of your event."
    }
  ];

  const team = [
    {
      name: "Chef Funmi",
      role: "Executive Chef & Founder",
      bio: "With extensive culinary experience and passion for authentic Nigerian cuisine, Chef Funmi founded Funmita Catering to bring exceptional flavors to special events.",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "David Adebayo",
      role: "Operations Manager",
      bio: "David ensures every event runs smoothly, coordinating logistics and maintaining our high standards of service across all locations.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Sarah Okafor",
      role: "Event Coordinator",
      bio: "Sarah works closely with clients to plan every detail, ensuring their vision becomes a delicious reality with authentic Nigerian flair.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Chef Tunde",
      role: "Sous Chef",
      bio: "Chef Tunde specializes in traditional Nigerian dishes and our signature small chops, bringing authentic flavors to every event.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const milestones = [
    { year: "2010", event: "Funmita Catering founded by Chef Funmi" },
    { year: "2015", event: "Expanded to serve corporate events and weddings" },
    { year: "2018", event: "Opened multiple locations across Lagos and Ogun" },
    { year: "2020", event: "Specialized in small chops and signature Chapman cocktails" },
    { year: "2022", event: "Launched hampers packaging and event planning services" },
    { year: "2024", event: "Celebrating over a decade of exceptional service" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About Funmita Catering</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Fifteen years of culinary excellence, bringing exceptional flavors and 
            unforgettable experiences to your most important celebrations.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Funmita Catering began with a simple vision: to bring exceptional
                cuisine and outstanding service to special events. Founded by Chef Funmi,
                our company started with a passion for authentic flavors and an unwavering commitment
                to culinary excellence and customer satisfaction.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we&apos;ve grown from a small local caterer to a premier catering service,
                but our core values remain unchanged. We believe that food brings people together,
                and every event is an opportunity to create lasting memories through exceptional cuisine.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Today, we&apos;re proud to have served over 1,500 events, from intimate dinner parties
                to grand weddings and corporate celebrations. Our team of passionate chefs and
                dedicated staff continue to push the boundaries of culinary creativity while
                maintaining the personal touch that sets us apart.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden h-96">
                <Image
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop"
                  alt="Professional catering kitchen setup"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <HeartIcon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600">
                To create extraordinary culinary experiences that bring people together, 
                celebrate life&apos;s special moments, and exceed our clients&apos; expectations
                through exceptional food, service, and attention to detail.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <StarIcon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600">
                To be the most trusted and sought-after catering company in the region, 
                known for our culinary innovation, sustainable practices, and commitment 
                to making every event a memorable celebration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              The passionate professionals behind every exceptional event
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-64 bg-gray-200 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-orange-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Key milestones in our company&apos;s growth
            </p>
          </div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center">
                <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6">
                  {milestone.year}
                </div>
                <div className="flex-1">
                  <p className="text-lg text-gray-700">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8">
            Let us bring our passion for exceptional cuisine and service to your next event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Get Started Today
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-300"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
