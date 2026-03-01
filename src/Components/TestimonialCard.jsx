import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "As a travel enthusiast who booked last minute, I managed to explore 3 countries in 10 days. Everything was seamless from start to finish.",
    name: "Aarav Mehta",
    role: "Travel Blogger",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Their team curated the perfect honeymoon itinerary for us. We didn’t have to worry about a single detail.",
    name: "Sophia Williams",
    role: "Entrepreneur",
    image:
      "https://plus.unsplash.com/premium_photo-1673957923985-b814a9dbc03d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "From flights to local experiences, the execution was flawless. Highly recommended for stress-free travel.",
    name: "Daniel Kim",
    role: "Startup Founder",
    image:
      "https://plus.unsplash.com/premium_photo-1669703777437-27602d656c27?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "I’ve never experienced such smooth planning before. The attention to detail was impressive.",
    name: "Isabella Rossi",
    role: "Photographer",
    image:
      "https://images.unsplash.com/photo-1565672377218-afb6d165973a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function TestimonialCard() {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-neutral-200 px-6 md:px-12 py-12 md:py-16">
      {/* Quote */}
      <div className="min-h-[140px] flex items-center justify-center text-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={active}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="text-lg md:text-2xl font-medium text-neutral-700 leading-relaxed"
          >
            “{testimonials[active].quote}”
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Name */}
      <div className="mt-8 text-center">
        <h4 className="text-base md:text-lg font-semibold text-neutral-900">
          {testimonials[active].name}
        </h4>
        <p className="text-sm text-neutral-500 mt-1">
          {testimonials[active].role}
        </p>
      </div>

      {/* Avatars */}
      <div className="flex justify-center gap-4 mt-8">
        {testimonials.map((item, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`w-12 h-12 rounded-full overflow-hidden transition-all duration-300 ${
              active === index
                ? "ring-2 ring-neutral-300 scale-110"
                : "opacity-50 hover:opacity-80"
            }`}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-y-0 left-4 flex items-center">
        <button
          onClick={prev}
          className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 transition"
        >
          <ChevronLeft className="w-5 h-5 text-neutral-700" />
        </button>
      </div>

      <div className="absolute inset-y-0 right-4 flex items-center">
        <button
          onClick={next}
          className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 transition"
        >
          <ChevronRight className="w-5 h-5 text-neutral-700" />
        </button>
      </div>
    </div>
  );
}
