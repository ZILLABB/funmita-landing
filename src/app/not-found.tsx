import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-orange-600">404</h1>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
            Perhaps you&apos;d like to explore our delicious catering services instead?
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-300"
          >
            Go Home
          </Link>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <Link
              href="/menu"
              className="text-orange-600 hover:text-orange-700 font-medium"
            >
              View Our Menu
            </Link>
            <Link
              href="/services"
              className="text-orange-600 hover:text-orange-700 font-medium"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="text-orange-600 hover:text-orange-700 font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
