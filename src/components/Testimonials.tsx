import { StarIcon } from "@heroicons/react/24/solid";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company?: string;
  rating: number;
  content: string;
  eventType: string;
  image?: string;
}

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  showAll?: boolean;
  limit?: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah & Michael Johnson",
    role: "Bride & Groom",
    rating: 5,
    content: "Funmita Catering made our wedding day absolutely perfect. The food was incredible, and the service was flawless. Our guests are still talking about the amazing meal! The attention to detail and professionalism exceeded all our expectations.",
    eventType: "Wedding Reception",
    image: "Happy couple at wedding"
  },
  {
    id: 2,
    name: "David Chen",
    role: "Event Manager",
    company: "Tech Solutions Inc.",
    rating: 5,
    content: "Professional, reliable, and delicious! Funmita Catering has been our go-to for all corporate events. They consistently exceed our expectations and make our company events memorable for all the right reasons.",
    eventType: "Corporate Event",
    image: "Professional headshot"
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    role: "Host",
    rating: 5,
    content: "The attention to detail and quality of food is outstanding. They made our anniversary celebration truly special. Every dish was perfectly prepared and beautifully presented. Highly recommended!",
    eventType: "Private Event",
    image: "Elegant woman smiling"
  },
  {
    id: 4,
    name: "Jennifer Williams",
    role: "HR Director",
    company: "Global Marketing Corp",
    rating: 5,
    content: "We've used Funmita Catering for multiple company events, and they never disappoint. The team is professional, the food is always fresh and delicious, and they handle everything seamlessly.",
    eventType: "Corporate Lunch",
    image: "Professional woman"
  },
  {
    id: 5,
    name: "Robert & Lisa Thompson",
    role: "Anniversary Hosts",
    rating: 5,
    content: "For our 25th anniversary party, Funmita Catering created a menu that perfectly captured our style. The presentation was beautiful, and our guests couldn't stop complimenting the food.",
    eventType: "Anniversary Party",
    image: "Mature couple celebrating"
  },
  {
    id: 6,
    name: "Amanda Foster",
    role: "Event Coordinator",
    company: "Charity Foundation",
    rating: 5,
    content: "Working with Funmita Catering for our charity gala was a pleasure. They accommodated all our dietary requirements and delivered exceptional service that helped make our fundraising event a huge success.",
    eventType: "Charity Gala",
    image: "Professional event coordinator"
  },
  {
    id: 7,
    name: "Mark Stevens",
    role: "Birthday Host",
    rating: 5,
    content: "My wife's 50th birthday party was made extra special thanks to Funmita Catering. The surprise menu they created was perfect, and the service was so smooth that I could actually enjoy the party!",
    eventType: "Birthday Party",
    image: "Man at celebration"
  },
  {
    id: 8,
    name: "Dr. Patricia Lee",
    role: "Conference Organizer",
    company: "Medical Association",
    rating: 5,
    content: "The catering for our medical conference was exceptional. They managed to serve 200+ attendees efficiently while maintaining the highest quality. The healthy menu options were particularly appreciated.",
    eventType: "Conference",
    image: "Professional doctor"
  }
];

const Testimonials: React.FC<TestimonialsProps> = ({ 
  title = "What Our Clients Say", 
  subtitle = "Don't just take our word for it - hear from our satisfied customers",
  showAll = false,
  limit = 3 
}) => {
  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, limit);

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <StarIcon 
        key={i} 
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>
        
        <div className={`grid grid-cols-1 ${showAll ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-3'} gap-8`}>
          {displayedTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Rating */}
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              {/* Content */}
              <p className="text-gray-600 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
              
              {/* Author Info */}
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-orange-600 text-sm">
                  {testimonial.role}
                  {testimonial.company && ` • ${testimonial.company}`}
                </div>
                <div className="text-gray-500 text-sm mt-1">{testimonial.eventType}</div>
              </div>
            </div>
          ))}
        </div>
        
        {!showAll && testimonials.length > limit && (
          <div className="text-center mt-12">
            <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-300">
              View All Reviews
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
