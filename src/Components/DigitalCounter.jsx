"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "../utils/cn";

/* ---------------- Digit ---------------- */

function Digit({ target, duration }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let startTime;
    let frame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      const percent = Math.min(progress / duration, 1);
      const current = Math.floor(target * percent);

      setValue(current);

      if (percent < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [target, duration]);

  return (
    <div className="relative overflow-hidden leading-none h-[1em]">
      <motion.span
        key={value}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.25,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="block"
      >
        {value}
      </motion.span>
    </div>
  );
}

/* ---------------- Counter ---------------- */

export default function DigitalCounter({
  end = 957,
  duration = 2000,
  className,
}) {
  const { ref, inView } = useInView({ threshold: 0.4 });
  const digits = end.toString().split("");

  return (
    <span
      ref={ref}
      className={cn(
        "inline-flex  tabular-nums leading-none",
        className,
      )}
    >
      {inView &&
        digits.map((digit, i) => (
          <Digit key={i} target={Number(digit)} duration={duration} />
        ))}
    </span>
  );
}
