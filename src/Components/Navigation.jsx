import { useState } from "react";
import Drawer from "./Drawer";
import { SlideText } from "./SlideText";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  return (
    <>
      {/* Header Section */}
      <motion.header
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className=" w-full flex justify-between items-center bg-neutral-100 px-6 pt-5 md:px-12"
      >
        <div className="left">
          <NavLink to={`/`}>
            <h3 className="text-2xl font-bold tracking-tighter text-neutral-900">
              Zeaster
            </h3>
          </NavLink>
        </div>
        <div className="right flex gap-2">
          <button
            onClick={() => setOpen(true)}
            className="px-5 pt-1.5 border border-neutral-800/50 rounded-xl hover:bg-neutral-800 hover:text-white transition-colors duration-300 font-medium cursor-pointer"
          >
            <SlideText text={"Menu"} />
          </button>
        </div>
      </motion.header>

      {/* Drawer / Navigation Menu */}
      <Drawer
        className="bg-[#f5f3ed] dark:bg-[#f5f3ed]"
        open={open}
        onClose={() => setOpen(false)}
        placement="right"
        size={100}
      >
        <div className="h-full w-full flex flex-col p-8 md:p-16">
          {/* Top Close Bar */}
          <div className="flex justify-end w-full">
            <button
              onClick={() => setOpen(false)}
              className="px-5 pt-2 pb-1 bg-red-500 text-white rounded-2xl hover:bg-red-600 transition-all shadow-md active:scale-95 font-medium"
            >
              <SlideText text={"Close"} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col mt-12 md:mt-20 gap-4 md:gap-6">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Blogs", path: "/blog" },
              { name: "Contact", path: "/contact" },
              { name: "News Letter", path: "/newslatter" },
            ].map((link, idx) => (
              <NavLink
                key={idx}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `
              text-4xl lg:text-4xl font-semibold tracking-tight transition-all duration-300
              ${isActive ? "text-red-500 underline" : "text-neutral-800 hover:translate-x-4 hover:text-neutral-500"}
            `}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Bottom Footer Info (Optional but adds "pro" feel) */}
          <div className="mt-auto border-t border-neutral-300 pt-8 flex flex-col  justify-between text-neutral-500 text-sm uppercase tracking-widest">
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="https://www.linkedin.com/in/paul-debajoyti/">
                <span>
                  <SlideText text={`LinkedIn`} />
                </span>
              </a>
              <a href="https://x.com/pauldebajoyti">
                <span>
                  <SlideText text={`Twitter`} />
                </span>
              </a>
            </div>
            <div className="flex justify-start py-5 bg-[#f3f3f1] ">
              <p
                className="relative text-neutral-700 cursor-pointer"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                © 2026 Debajoyti Paul
                <AnimatePresence>
                  {hovered && (
                    <motion.img
                      src="Debajoyti.png"
                      alt="Debajoyti Paul"
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: -10, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="absolute left-1/2 -translate-x-1/2 bottom-full mb-6 w-40 rounded-3xl shadow-xl pointer-events-none"
                    />
                  )}
                </AnimatePresence>
              </p>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Navigation;
