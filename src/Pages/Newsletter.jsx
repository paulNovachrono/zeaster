import { useState } from "react";
import { motion } from "motion/react";
import BlurStaggeredText from "../Components/BlurStaggeredText";
import { SlideText } from "../Components/SlideText";
const images = [
  "https://images.unsplash.com/photo-1551749005-6b94ff060954?q=80&w=1186&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1645551519404-ffbef68bf4be?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1499678329028-101435549a4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1453747063559-36695c8771bd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1432958576632-8a39f6b97dc7?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    alert("You're now part of our travel circle.");
  };

  return (
    <section className="min-h-screen bg-[#f3f3f1] px-6 py-24 flex flex-col items-center">
      {/* HERO TEXT */}
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-neutral-900 leading-tight">
          <BlurStaggeredText text={`Stay inspired. Travel better.`} />
        </h1>

        <p className="mt-6 text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
          <BlurStaggeredText
            text={`Join our curated travel newsletter for hidden destinations thoughtful itineraries, and exclusive journey insights.`}
          />
        </p>
      </div>

      {/* NEWSLETTER FORM */}
      <form
        onSubmit={handleSubmit}
        className="mt-12 w-full max-w-2xl flex flex-col sm:flex-row gap-4"
      >
        <input
          type="email"
          required
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-6 py-4 rounded-2xl bg-white border border-neutral-300 text-neutral-800 placeholder-neutral-400 outline-none focus:ring-2 focus:ring-neutral-900/20 transition-all"
        />

        <button
          type="submit"
          className="px-8 pt-2 rounded-2xl bg-neutral-900 text-white hover:bg-neutral-800 transition-colors duration-300 shadow-sm"
        >
          <SlideText text={`Subscribe`} />
        </button>
      </form>

      {/* IMAGE STRIP (INSPIRED BY HOMEPAGE CARDS) */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="mt-20 md:mt-28 flex flex-wrap justify-center md:gap-6 px-6 max-w-6xl mx-auto"
      >
        {images.map((src, i) => (
          <div
            key={i}
            className={`
        relative 
        w-[100px] h-[100px] 
        md:w-[220px] md:h-[240px]
        lg:w-[300px] lg:h-[220 px]
        rounded-2xl 
        shadow-lg 
        transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]
        hover:-translate-y-10 hover:scale-105 hover:z-50 hover:rotate-0 hover:shadow-2xl
        ${i % 2 === 0 ? "-rotate-3" : "rotate-3"}
      `}
          >
            <img
              src={`${src}?auto=format&fit=crop&w=800&q=80`}
              alt="Travel destination"
              className="w-full h-full object-cover border border-neutral-200 rounded-2xl"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
