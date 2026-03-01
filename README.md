# Zeaster - Travel & Adventure Platform

> ⚠️ **Demo Website** - This is a demonstration/portfolio project showcasing modern web development practices and design patterns. It is not a fully functional booking platform.

A modern, responsive travel booking and exploration platform built with React, Vite, and Tailwind CSS. Zeaster offers curated travel experiences, destination guides, and seamless booking functionality.

## 🌍 Overview

Zeaster is a premium travel platform designed to help users discover breathtaking destinations, plan unforgettable journeys, and book their next adventure with confidence. The platform features curated tours, travel guides, expert recommendations, and a user-friendly booking system.

**Note**: This is a demonstration website created for educational and portfolio purposes. It showcases UI/UX design, responsive layouts, and modern web development techniques.




## 🏗️ Project Structure

```
src/
├── Components/              # Reusable UI components
│   ├── Accordion.jsx       # FAQ accordion component
│   ├── BlurStaggeredText.jsx # Animated text with blur effect
│   ├── Cta.jsx             # Call-to-action section
│   ├── DigitalCounter.jsx  # Animated number counter
│   ├── Drawer.jsx          # Mobile navigation drawer
│   ├── FeaturedBox.jsx     # Featured tour card component
│   ├── Footer.jsx          # Footer component
│   ├── Hero.jsx            # Hero section
│   ├── Navigation.jsx      # Header navigation
│   ├── SlideText.jsx       # Text slide animation
│   ├── TestimonialCard.jsx # Testimonial carousel
│   ├── Toast.jsx           # Toast notification component
│   ├── TourType.jsx        # Tour type section
│   └── BlurStaggeredText.jsx
├── Pages/                  # Page components
│   ├── Home.jsx            # Home page
│   ├── About.jsx           # About page
│   ├── Blog.jsx            # Blog listing page
│   ├── Contact.jsx         # Contact page
│   └── Newsletter.jsx      # Newsletter subscription page
├── data/                   # Static data
│   └── featuredData.js     # Featured tours data
├── utils/                  # Utility functions
│   └── cn.js              # Class name merger utility
├── App.jsx                 # Main app component with routing
├── main.jsx               # Entry point
└── index.css              # Global styles
```

## 🎨 Design & Animations

### Animation Libraries
- **Framer Motion**: Smooth transitions and complex animations
- **Motion (React)**: Advanced animation capabilities
- **React Intersection Observer**: Scroll-triggered animations

### UI Components
- **Lucide React**: Modern icon library
- **Tailwind CSS**: Utility-first CSS framework
- **Tailwind Merge**: Smart class merging for dynamic styles

### Animation Features
- Staggered text animations with blur effects
- Slide text animations on hover
- Scroll-triggered animations with viewport detection
- Drawer/modal animations
- Image hover effects and scaling
- Smooth page transitions

## 🔧 Technology Stack

### Frontend
- **React 19.2**: UI library
- **React Router DOM 7.13**: Client-side routing
- **Vite 7.2**: Fast build tool and dev server

### Styling
- **Tailwind CSS 4.2**: Utility-first CSS
- **Tailwind Merge 3.5**: Smart class merging
- **@tailwindcss/vite 4.2**: Vite plugin for Tailwind

### Animation & Effects
- **Framer Motion**: Animation library
- **Motion 12.34**: React animation library
- **React Intersection Observer 10.0**: Viewport detection

### Icons & UI
- **Lucide React 0.575**: Icon library

### Development
- **ESLint 9.39**: Code linting
- **React Refresh**: Fast refresh for development
- **Vite**: Lightning-fast dev server

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

1. **Clone the repository** (if applicable)
```bash
git clone <repository-url>
cd zeaster
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🚀 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 🎯 Pages & Routes

| Route | Page | Purpose |
|-------|------|---------|
| `/` | Home | Main landing page with hero and featured tours |
| `/about` | About | Company information, stats, and testimonials |
| `/blog` | Blog | Travel guides and destination articles |
| `/contact` | Contact | Contact form and company information |
| `/newslatter` | Newsletter | Email subscription and travel inspiration |

## 🎬 Component Highlights

### SlideText Component
Animated text that slides up on hover, perfect for CTAs and interactive elements.

### BlurStaggeredText Component
Staggered text animation with configurable blur effect, used throughout for entrance animations.

### DigitalCounter Component
Animated number counter that triggers on scroll, showcasing statistics.

### Drawer Component
Smooth slide-out navigation drawer with backdrop overlay and keyboard support.

### FeaturedBox Component
Responsive featured tour card with image parallax and staggered text animations.

### TestimonialCard Component
Carousel-based testimonial component with auto-advance and manual navigation.

## 🎨 Color Scheme

- **Primary**: Neutral-900 (Dark backgrounds)
- **Secondary**: Neutral-100 (Light backgrounds)
- **Tertiary**: Neutral-200/-300 (Cards and borders)
- **Accent**: Red-500 (For active states and highlights)
- **Text**: Neutral-900/-600/-500 (Hierarchy levels)

## 📱 Responsive Design

The platform is fully responsive with breakpoints:
- **Mobile**: Default (< 640px)
- **Tablet**: sm (640px), md (768px), lg (1024px)
- **Desktop**: xl (1280px+)

All components adapt gracefully across device sizes with optimized layouts and touch-friendly interactions.

## ✅ Best Practices Implemented

- ✅ Component composition and reusability
- ✅ Responsive design patterns
- ✅ Performance optimizations with lazy loading
- ✅ Semantic HTML
- ✅ Accessible navigation and forms
- ✅ Smooth animations and transitions
- ✅ Clean, maintainable code structure
- ✅ ESLint configuration for code quality

## 🚀 Performance Optimizations

- Image lazy loading on blog and newsletter pages
- Intersection Observer for scroll-triggered animations
- Optimized animation performance with GPU acceleration
- Efficient state management
- Code splitting through React Router

## 📝 License

This project is part of the Zeaster travel platform demo.

## 🙋 Support

For questions about this demo project, please contact:
- **Email**: debajoyti5000@gmail.com
- **Location**: Kolkata, India
- **Phone**: +91 98765 43210

---

**Made with ❤️ for wanderers and explorers worldwide.**

*This is a demonstration website and portfolio project.*
