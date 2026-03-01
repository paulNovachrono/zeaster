import React from "react";
import BlurStaggeredText from "../Components/BlurStaggeredText";
import { SlideText } from "../Components/SlideText";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Exploring the Hidden Gems of Bali: Beyond the Tourist Trail",
    desc: "Discover secluded beaches, lush rice terraces, and authentic village experiences that most travelers miss in Bali.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    category: "Destinations",
  },
  {
    title: "A Complete Guide to Backpacking Across Europe",
    desc: "From budget tips to must-visit cities, plan the ultimate European backpacking adventure with confidence.",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Travel Guide",
  },
  {
    title: "Top 10 Luxury Resorts for a Perfect Island Escape",
    desc: "Experience world-class hospitality, private villas, and breathtaking ocean views at these exclusive island retreats.",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Luxury",
  },
  {
    title: "Adventure Travel: Best Hiking Trails Around the World",
    desc: "Explore dramatic mountain landscapes and unforgettable trekking routes for thrill-seeking travelers.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    category: "Adventure",
  },
  {
    title: "Cultural Journeys: Experiencing Japan Like a Local",
    desc: "Immerse yourself in traditional tea ceremonies, historic temples, and vibrant street markets across Japan.",
    image:
      "https://images.unsplash.com/photo-1504788363733-507549153474?auto=format&fit=crop&w=800&q=80",
    category: "Culture",
  },
  {
    title: "Smart Travel Tips: How to Plan a Stress-Free Vacation",
    desc: "Learn expert planning strategies, packing hacks, and booking secrets to make your next trip smooth and memorable.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
    category: "Tips",
  },
];

function Blog() {
  return (
    <div className="min-h-screen bg-[#f8f6f2]">
      {/* Header  */}
      <div className="pt-20 pb-14 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-[#0f172a] tracking-tight">
          <BlurStaggeredText text={`Travel Stories & Guides`} />
        </h1>
        <p className="mt-5 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-6">
          <BlurStaggeredText
            text={`Discover breathtaking destinations, curated travel experiences, and expert tips to inspire your next adventure.`}
          />
        </p>
      </div>

      {/* Cards Grid */}
        <div className="max-w-6xl mx-auto px-5 sm:px-8 pb-24">
          <div className="grid gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
          <article
            key={i}
            className={`group bg-white overflow-hidden hover:shadow-md transition-all duration-300 border border-gray-200/60 rounded-4xl p-5 hover:rotate-2
            ${i % 2 === 0 ? "md:-rotate-3" : "md:rotate-3"}
            `}
          >
            {/* Image + badge container */}
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full aspect-[5/3] object-cover  transition-transform duration-500 rounded-[18px]"
                  loading={i < 3 ? "eager" : "lazy"}
                />
                <span className="absolute top-4 left-4 px-3 py-1.5 text-xs font-medium text-black/80 bg-neutral-200 rounded-lg shadow-md">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="mt-2">
                <h2 className="text-xl font-semibold text-[#0f172a] group-hover:text-[#ea580c] transition-colors line-clamp-2">
                  <BlurStaggeredText text={post.title} />
                </h2>
                <p className="mt-3 text-gray-600 text-[15px] leading-relaxed line-clamp-3">
                  <BlurStaggeredText text={post.desc} />
                </p>
              </div>
              {/* button */}
              <button className="flex items-center justify-center py-2 px-5 bg-neutral-800 text-neutral-50 rounded-xl group transition-all duration-300 ease-in-out hover:pr-6 hover:bg-neutral-300 hover:text-neutral-700 mt-4">
                <SlideText text={"Read Now"} />
                <div className="w-0 opacity-0 transition-all duration-300 ease-out group-hover:w-2 group-hover:ml-3 group-hover:opacity-100">
                  <ArrowRight size={16} />
                </div>
              </button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
