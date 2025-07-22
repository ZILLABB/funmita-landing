import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// Format phone number
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
}

// Format currency
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

// Validate email
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Generate SEO-friendly slug
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Truncate text
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

// Debounce function
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Format date
export function formatDate(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Check if date is in the future
export function isFutureDate(date: Date | string): boolean {
  const d = new Date(date);
  const now = new Date();
  return d > now;
}

// Generate structured data for SEO
export function generateStructuredData(type: 'Organization' | 'LocalBusiness' | 'Event', data: Record<string, unknown>) {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type,
  };

  switch (type) {
    case 'Organization':
      return {
        ...baseData,
        name: 'Funmita Catering',
        url: 'https://funmitacatering.com',
        logo: 'https://funmitacatering.com/FUNMITA CATERING Logo Design.png',
        description: 'Professional catering services specializing in exceptional cuisine, signature cocktails, beautiful hampers, and complete event planning.',
        telephone: '07065969591',
        email: 'funmitak1966@gmail.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '14, Ogo-oluwa Street, Off Ajayi Road',
          addressLocality: 'Ogba',
          addressRegion: 'Lagos',
          postalCode: '100218',
          addressCountry: 'NG',
        },
        ...data,
      };

    case 'LocalBusiness':
      return {
        ...baseData,
        name: 'Funmita Catering',
        image: 'https://funmitacatering.com/FUNMITA CATERING Logo Design.png',
        telephone: '07065969591',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '14, Ogo-oluwa Street, Off Ajayi Road',
          addressLocality: 'Ogba',
          addressRegion: 'Lagos',
          postalCode: '100218',
          addressCountry: 'NG',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 40.7128,
          longitude: -74.0060,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '18:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Saturday', 'Sunday'],
            opens: '09:00',
            closes: '16:00',
          },
        ],
        ...data,
      };

    default:
      return { ...baseData, ...data };
  }
}
