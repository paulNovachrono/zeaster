"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import { InteractiveToast } from "../Components/Toast";
import { SlideText } from "../Components/SlideText";

export default function Contact() {
  const [toastOpen, setToastOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form[0].value.trim();
    const email = form[1].value.trim();

    if (!name || !email) return;

    setToastOpen(true);
    form.reset();
  };

  return (
    <section className="bg-neutral-100 py-16 md:py-24 relative">
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="rounded-3xl border border-neutral-300 bg-neutral-50 overflow-hidden flex flex-col  lg:flex-row relative">
          {/* LEFT SIDE */}
          <div className="lg:w-1/3 bg-neutral-100 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-neutral-200 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold text-neutral-900 mb-8">
                Travel With Us
              </h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <Mail className="w-5 h-5 text-neutral-600 mt-1" />
                  <div>
                    <p className="font-medium text-neutral-900">Email us</p>
                    <p className="text-sm text-neutral-500">
                      bookings@zeaster.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-neutral-600 mt-1" />
                  <div>
                    <p className="font-medium text-neutral-900">Visit us</p>
                    <p className="text-sm text-neutral-500">Mumbai, India</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="w-5 h-5 text-neutral-600 mt-1" />
                  <div>
                    <p className="font-medium text-neutral-900">Call us</p>
                    <p className="text-sm text-neutral-500">+91 98765 43210</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-12">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <div
                  key={i}
                  className="p-2 rounded-lg border border-neutral-300 hover:bg-neutral-200 transition cursor-pointer"
                >
                  <Icon size={18} className="text-neutral-700" />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:w-2/3 bg-neutral-200 p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">
              Plan Your Next Journey
            </h3>

            <p className="text-neutral-600 mt-3 mb-10 text-sm md:text-base">
              Tell us where you’d like to go and we’ll craft the perfect travel
              experience.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full bg-transparent border-b border-neutral-400 focus:border-neutral-900 outline-none py-3"
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full bg-transparent border-b border-neutral-400 focus:border-neutral-900 outline-none py-3"
              />

              <input
                type="text"
                placeholder="Preferred Destination"
                className="w-full bg-transparent border-b border-neutral-400 focus:border-neutral-900 outline-none py-3"
              />

              <textarea
                placeholder="Tell us about your travel plans..."
                rows={3}
                className="w-full bg-transparent border-b border-neutral-400 focus:border-neutral-900 outline-none py-3 resize-none"
              />

              <button className="flex items-center justify-center py-2 px-5 bg-neutral-800 text-neutral-50 rounded-xl group transition-all duration-300 ease-in-out hover:pr-6 hover:bg-neutral-300 hover:text-neutral-700">
                <SlideText text={"Start your journey"} />
                <div className="w-0 opacity-0 transition-all duration-300 ease-out group-hover:w-2 group-hover:ml-3 group-hover:opacity-100">
                <ArrowRight size={16} />
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* TOAST */}
      <InteractiveToast
        open={toastOpen}
        onClose={() => setToastOpen(false)}
        message="Your travel request has been submitted ✈️"
      />
    </section>
  );
}
