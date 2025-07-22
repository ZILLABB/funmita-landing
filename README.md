# Funmita Catering Website

A modern, professional website for Funmita Catering built with Next.js, TypeScript, and Tailwind CSS. This website showcases catering services, menu options, and provides an easy way for customers to contact and book catering services.

## 🚀 Features

- **Modern Design**: Clean, professional aesthetic with responsive design
- **Service Showcase**: Detailed pages for different catering services
- **Interactive Menu**: Categorized menu with pricing and descriptions
- **Contact Form**: Functional contact form with validation
- **About Us**: Company story, team, and values
- **Testimonials**: Customer reviews and ratings
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Mobile Responsive**: Fully responsive design for all devices
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.2 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **Icons**: Heroicons
- **Animations**: Framer Motion
- **Font**: Inter (Google Fonts)

## 📁 Project Structure

```
funmita-catering/
├── src/
│   ├── app/                 # App Router pages
│   │   ├── about/          # About Us page
│   │   ├── contact/        # Contact page
│   │   ├── menu/           # Menu page
│   │   ├── services/       # Services page
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Homepage
│   ├── components/         # Reusable components
│   │   ├── Navigation.tsx  # Main navigation
│   │   ├── Footer.tsx      # Footer component
│   │   ├── Testimonials.tsx # Testimonials component
│   │   └── SEO.tsx         # SEO component
│   ├── lib/                # Utility functions
│   │   └── utils.ts        # Helper functions
│   └── types/              # TypeScript type definitions
├── public/                 # Static assets
├── package.json           # Dependencies and scripts
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd funmita-catering
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Pages Overview

### Homepage (`/`)
- Hero section with call-to-action
- Company overview
- Featured services
- Statistics section
- Customer testimonials
- Contact CTA

### Services (`/services`)
- Corporate events catering
- Wedding catering
- Private parties
- Educational events
- Process overview
- Service packages

### Menu (`/menu`)
- Interactive menu categories
- Appetizers, main courses, desserts, beverages
- Event packages
- Custom menu options
- Pricing information

### About Us (`/about`)
- Company story and history
- Mission and vision
- Core values
- Team members
- Company timeline

### Contact (`/contact`)
- Contact form with validation
- Business information
- Location and hours
- FAQ section
- Interactive map placeholder

## 🎨 Customization

### Colors
The website uses an orange-based color scheme. To customize:

1. Update CSS variables in `src/app/globals.css`
2. Modify Tailwind classes throughout components
3. Update the theme color in meta tags

### Content
- Update company information in components
- Replace placeholder images with professional photography
- Modify menu items and pricing in `/menu/page.tsx`
- Update testimonials in `/components/Testimonials.tsx`

### Images
- Add professional food photography to `/public/images/`
- Update image references in components
- Optimize images for web performance

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
The website can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

### Build for Production
```bash
npm run build
npm start
```

## 📊 Performance Optimization

- **Images**: Use Next.js Image component for optimization
- **Fonts**: Self-hosted fonts with font-display: swap
- **CSS**: Tailwind CSS with purging for minimal bundle size
- **JavaScript**: Code splitting with Next.js App Router
- **SEO**: Meta tags, structured data, and sitemap

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 📝 TODO / Future Enhancements

- [ ] Add image gallery with lightbox
- [ ] Implement blog/news section
- [ ] Add online booking system
- [ ] Integrate with CMS (Contentful/Strapi)
- [ ] Add multi-language support
- [ ] Implement analytics (Google Analytics)
- [ ] Add live chat functionality
- [ ] Create admin dashboard
- [ ] Add payment integration
- [ ] Implement email marketing integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support or questions about this website, please contact:
- Email: info@funmitacatering.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ using Next.js and Tailwind CSS
