import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const items = [
  {
    id: 1,
    number: "01",
    title: "About Us",
    content:
      "Lorem ipsum dolor sit amet consectetur. Commodo ultricies cursus cursus viverra volutpat. Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 2,
    number: "02",
    title: "Our Mission",
    content:
      "Our mission is to build high quality UI systems that scale and stay premium.",
  },
  {
    id: 3,
    number: "03",
    title: "Our Vision",
    content:
      "Our vision is to simplify frontend development without sacrificing brand value.",
  },
];

export default function Accordion() {
  const [active, setActive] = useState(1);

  const toggle = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <div className="max-w-xl mx-auto  space-y-5 cursor-pointer">
      {items.map((item) => {
        const isOpen = active === item.id;

        return (
          <div
            key={item.id}
            className={`rounded-4xl transition-all ease-in duration-300 cursor-pointer
              ${
                isOpen
                  ? "bg-white border border-neutral-200"
                  : "bg-white border border-neutral-300 hover:border-neutral-400"
              }`}
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex items-start justify-between p-6 text-left cursor-pointer"
            >
              {/* Left Side */}
              <div className="flex gap-6">
                <span
                  className={`text-3xl font-semibold ${
                    isOpen ? "text-neutral-700" : "text-neutral-400"
                  }`}
                >
                  {item.number}
                </span>

                <div>
                  <h3
                    className={`text-lg font-medium ${
                      isOpen ? "text-neutral-900" : "text-neutral-700"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.3 }}
                        className="mt-3 text-sm text-neutral-600 max-w-md"
                      >
                        {item.content}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Right Icon */}
              <div
                className={`p-3 rounded-full transition-colors
                  ${
                    isOpen
                      ? "bg-neutral-200"
                      : "bg-neutral-100 group-hover:bg-neutral-200"
                  }`}
              >
                {isOpen ? (
                  <ArrowUpRight size={18} className="text-neutral-700" />
                ) : (
                  <ArrowDownRight size={18} className="text-neutral-600" />
                )}
              </div>
            </button>
          </div>
        );
      })}
    </div>
  );
}
