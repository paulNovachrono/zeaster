"use client";

import { useEffect, useState } from "react";
import { ChevronDown, X, Info } from "lucide-react";

export function InteractiveToast({ open, onClose, message }) {
  const INITIAL_TIME = 5;

  const [expanded, setExpanded] = useState(false);
  const [count, setCount] = useState(INITIAL_TIME);

  // Countdown only when open
  useEffect(() => {
    if (!open) return;

    setCount(INITIAL_TIME);

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onClose?.();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed top-6 right-6 w-[360px] rounded-2xl p-4 shadow-xl border
      bg-white border-neutral-200 text-neutral-900 z-50">

      {/* Top Row */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div className="bg-neutral-100 p-2 rounded-lg">
            <Info size={18} />
          </div>
          <p className="font-medium">{message}</p>
        </div>

        <div className="flex gap-3 items-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="transition-transform duration-300"
          >
            <ChevronDown
              size={18}
              className={`${expanded ? "rotate-180" : ""} transition`}
            />
          </button>

          <button onClick={onClose}>
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Expand Section */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          expanded ? "max-h-40 mt-4" : "max-h-0"
        }`}
      >
        <p className="text-sm text-neutral-600 mb-3">
          Our travel experts will contact you shortly with a curated plan.
        </p>

        <button
          onClick={() => setExpanded(false)}
          className="px-3 py-2 rounded-lg text-sm border border-neutral-300 hover:bg-neutral-100 transition"
        >
          Okay
        </button>
      </div>

      <div className="mt-4 text-xs text-neutral-500">
        Closing in <span className="font-bold">{count}</span>s
      </div>
    </div>
  );
}