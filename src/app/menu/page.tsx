'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('smallchops');

  const categories = [
    { id: 'smallchops', name: 'Small Chops & Asun' },
    { id: 'mains', name: 'Nigerian Main Dishes' },
    { id: 'beverages', name: 'Drinks & Chapman' },
    { id: 'hampers', name: 'Gift Hampers' },
    { id: 'packages', name: 'Event Packages' }
  ];

  const menuItems = {
    smallchops: [
      {
        name: 'Small Chops Platter',
        description: 'Assorted Nigerian small chops: puff puff, samosa, spring rolls, and meat pie',
        price: 'Contact for pricing',
        image: 'Colorful Nigerian small chops arrangement'
      },
      {
        name: 'Asun (Spicy Goat Meat)',
        description: 'Perfectly spiced and grilled goat meat, a Nigerian delicacy',
        price: 'Contact for pricing',
        image: 'Delicious spicy asun on a platter'
      },
      {
        name: 'Puff Puff',
        description: 'Sweet, fluffy Nigerian doughnuts perfect for any occasion',
        price: 'Contact for pricing',
        image: 'Golden brown puff puff arranged beautifully'
      },
      {
        name: 'Meat Pie & Sausage Roll',
        description: 'Crispy pastries filled with seasoned meat and vegetables',
        price: 'Contact for pricing',
        image: 'Fresh meat pies and sausage rolls'
      },
      {
        name: 'Samosa & Spring Rolls',
        description: 'Crispy fried pastries with savory fillings',
        price: 'Contact for pricing',
        image: 'Golden samosa and spring rolls'
      }
    ],
    mains: [
      {
        name: 'Jollof Rice Special',
        description: 'Premium Nigerian jollof rice with choice of chicken, beef, or fish',
        price: '₦18,000/person',
        image: 'Perfectly cooked Nigerian jollof rice'
      },
      {
        name: 'Pounded Yam & Egusi',
        description: 'Fresh pounded yam served with rich egusi soup and assorted meat',
        price: '₦22,000/person',
        image: 'Traditional pounded yam and egusi soup'
      },
      {
        name: 'Fried Rice & Chicken',
        description: 'Nigerian-style fried rice with grilled chicken and plantain',
        price: '₦16,000/person',
        image: 'Colorful Nigerian fried rice with chicken'
      },
      {
        name: 'Amala & Ewedu',
        description: 'Smooth amala served with ewedu soup and gbegiri',
        price: '₦15,000/person',
        image: 'Traditional Yoruba amala and ewedu'
      }
    ],
    desserts: [
      {
        name: 'Puff Puff',
        description: 'Traditional Nigerian sweet fried dough balls, light and fluffy',
        price: '₦5,000/dozen',
        image: 'Golden Nigerian puff puff'
      },
      {
        name: 'Chin Chin',
        description: 'Crispy Nigerian fried pastry cubes, perfect for any occasion',
        price: '₦4,000/bowl',
        image: 'Traditional Nigerian chin chin'
      },
      {
        name: 'Coconut Rice Pudding',
        description: 'Creamy rice pudding made with coconut milk and Nigerian spices',
        price: '₦3,500/person',
        image: 'Creamy coconut rice pudding'
      },
      {
        name: 'Nigerian Wedding Cake',
        description: 'Custom designed traditional Nigerian wedding cakes',
        price: 'Custom pricing',
        image: 'Elegant Nigerian wedding cake'
      }
    ],
    beverages: [
      {
        name: 'Signature Chapman',
        description: 'Our specialty Chapman cocktail with grenadine, cucumber, citrus, and secret ingredients',
        price: 'Contact for pricing',
        image: 'Signature Chapman cocktail with garnish'
      },
      {
        name: 'Custom Cocktails',
        description: 'Personalized cocktail creations for your special events',
        price: 'Contact for pricing',
        image: 'Variety of colorful cocktails'
      },
      {
        name: 'Fresh Fruit Juices',
        description: 'Freshly squeezed orange, pineapple, watermelon, and mixed fruit juices',
        price: 'Contact for pricing',
        image: 'Fresh Nigerian fruit juices'
      },
      {
        name: 'Traditional Nigerian Drinks',
        description: 'Zobo, palm wine, and other authentic Nigerian beverages',
        price: 'Contact for pricing',
        image: 'Traditional Nigerian drinks selection'
      },
      {
        name: 'Mocktails',
        description: 'Non-alcoholic versions of popular cocktails for all ages',
        price: 'Contact for pricing',
        image: 'Colorful mocktails for family events'
      }
    ],
    hampers: [
      {
        name: 'Corporate Gift Hampers',
        description: 'Beautifully packaged hampers perfect for corporate gifts and client appreciation',
        price: 'Contact for pricing',
        image: 'Elegant corporate gift hampers'
      },
      {
        name: 'Holiday Hampers',
        description: 'Seasonal hampers filled with festive treats and Nigerian delicacies',
        price: 'Contact for pricing',
        image: 'Festive holiday hampers'
      },
      {
        name: 'Custom Celebration Hampers',
        description: 'Personalized hampers for birthdays, anniversaries, and special occasions',
        price: 'Contact for pricing',
        image: 'Custom celebration hampers'
      },
      {
        name: 'Traditional Nigerian Hampers',
        description: 'Authentic Nigerian snacks and treats beautifully packaged',
        price: 'Contact for pricing',
        image: 'Traditional Nigerian food hampers'
      }
    ],
    packages: [
      {
        name: 'Corporate Lunch Package',
        description: 'Includes appetizer, main course, dessert, and beverages',
        price: '$35/person',
        image: 'Professional lunch setup'
      },
      {
        name: 'Wedding Reception Package',
        description: 'Complete wedding catering with cocktail hour and dinner',
        price: '$75/person',
        image: 'Elegant wedding reception'
      },
      {
        name: 'Cocktail Party Package',
        description: 'Assorted appetizers and premium bar service',
        price: '$45/person',
        image: 'Sophisticated cocktail party'
      },
      {
        name: 'Family Celebration Package',
        description: 'Perfect for birthdays, anniversaries, and family gatherings',
        price: '$28/person',
        image: 'Family-style dining setup'
      }
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Nigerian Menu</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our authentic Nigerian menu featuring traditional recipes, fresh local ingredients,
            and time-honored cooking methods that celebrate the rich flavors of Nigeria.
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-300 ${
                  activeCategory === category.id
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500 text-center px-4">
                    [{item.image}]
                    <br />
                    High-quality food photography
                  </p>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                    <span className="text-orange-600 font-bold">{item.price}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Menu Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Custom Menu Options</h2>
          <p className="text-xl text-gray-600 mb-8">
            Don&apos;t see exactly what you&apos;re looking for? Our chefs can create custom menus
            tailored to your specific dietary requirements, cultural preferences, and event theme.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Dietary Accommodations</h3>
              <p className="text-gray-600">Vegetarian, vegan, gluten-free, and other dietary options</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">International Cuisine</h3>
              <p className="text-gray-600">Authentic dishes from around the world</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍🍳</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Chef&apos;s Specials</h3>
              <p className="text-gray-600">Seasonal and signature dishes created by our chefs</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors duration-300"
          >
            Discuss Custom Menu
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Taste the Difference?</h2>
          <p className="text-xl mb-8">
            Contact us today to schedule a tasting session and experience our exceptional cuisine firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Schedule Tasting
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-300"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
