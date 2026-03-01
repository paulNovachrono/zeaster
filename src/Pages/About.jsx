import { Instagram, Linkedin, Twitter } from "lucide-react";
import Accordion from "../Components/Accordion";
import BlurStaggeredText from "../Components/BlurStaggeredText";
import DigitalCounter from "../Components/DigitalCounter";
import TestimonialCard from "../Components/TestimonialCard";

const About = () => {
  return (
    <div className="bg-neutral-100 py-14 md:py-15 overflow-hidden flex flex-col items-center ">
      {/* Top */}
      <section className="flex-col flex lg:flex-row md:justify-between  max-w-6xl mx-auto px-6 items-start">
        <div className="heading flex justify-center lg:justify-start w-full lg:w-fit">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-neutral-900 leading-[1.05] max-w-xl text-center lg:text-start">
            <BlurStaggeredText
              text={`Zeaster is the best travel friend you can ever imagine`}
            />
          </h2>
        </div>
        <div className="accordion lg:w-1/2 lg:min-w-[520px] w-full md:min-h-130 mt-5 lg:mt-0 ">
          <Accordion />
        </div>
      </section>
      {/* Images */}
      <section className="flex-col flex lg:flex-row  max-w-6xl mx-auto px-6 gap-4 lg:gap-5 mt-10 lg:mt-0">
        <div className="overflow-hidden rounded-[40px] lg:w-2/5">
          <img
            className="w-full h-[200px] md:h-[400px] lg:h-[500px] object-cover transition-transform duration-1000 group-hover:scale-110 "
            src="https://images.pexels.com/photos/622558/pexels-photo-622558.jpeg"
            alt="aboutimg1"
          />
        </div>
        <div className="overflow-hidden rounded-[40px]">
          <img
            className="w-full h-[200px] md:h-[400px] lg:h-[500px] object-cover transition-transform duration-1000 group-hover:scale-110"
            src="https://images.pexels.com/photos/942317/pexels-photo-942317.jpeg"
            alt="aboutimg1"
          />
        </div>
      </section>
      {/* Counters */}
      <section className="flex flex-col md:flex-row md:justify-between w-full max-w-6xl mx-auto px-6 py-12 md:py-20 gap-10 lg:gap-16 items-center">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-700">
            <DigitalCounter start={0} end={2700} duration={2500} />+
          </h3>
          <p className="text-sm md:text-base font-medium text-neutral-500 mt-3 uppercase tracking-wide">
            Happy Visitors
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-700">
            <DigitalCounter start={0} end={200} duration={2500} />+
          </h3>
          <p className="text-sm md:text-base font-medium text-neutral-500 mt-3 uppercase tracking-wide">
            Hotels
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-700">
            <DigitalCounter start={0} end={60} duration={2500} />+
          </h3>
          <p className="text-sm md:text-base font-medium text-neutral-500 mt-3 uppercase tracking-wide">
            Countries
          </p>
        </div>
      </section>
      {/* MD */}
      <section className="bg-neutral-100 py-16 md:py-24">
        <div className="w-full max-w-6xl mx-auto px-6">
          {/* Top Content */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10">
            {/* Left Title */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight tracking-tight">
                <BlurStaggeredText text={`Message from`} />
                <br className="hidden sm:block" />
                <BlurStaggeredText text={`MANAGING DIRECTOR`} />
              </h2>
            </div>

            {/* Right Text */}
            <div className="lg:w-1/2 space-y-6">
              <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
                <b>Travel is more than movement</b> — it is{" "}
                <i>
                  <b>transformation</b>
                </i>
                .
                <br />
                At our core, we believe every journey should inspire, connect,
                and create lasting memories. From the first inquiry to the
                moment you return home, our mission is to make travel seamless,
                personal, and unforgettable.
                <br />
                Over the years, we’ve built a network of trusted partners across
                continents, curated experiences that go beyond the ordinary, and
                served thousands of happy travelers who place their confidence
                in us. Every destination we offer is carefully selected. Every
                itinerary is thoughtfully crafted. Every detail matters. <br />
                As the world evolves, so does the way we travel. We continue to
                innovate, embrace new cultures, and design experiences that
                reflect the spirit of exploration while maintaining the highest
                standards of comfort and reliability. Thank you for trusting us
                to be part of your journey. The world is waiting — and we’re
                here to take you there.
                <br />
                <span className="font-bold">— Managing Director</span>
              </p>

              {/* logos */}
              <div className="flex gap-3 pt-4">
                <a href="https://x.com/relinehq">
                  <Twitter />
                </a>
                <a href="https://www.linkedin.com/company/hqreline/">
                  <Linkedin />
                </a>
                <a href="#">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-16 md:mt-24">
            <div className="relative rounded-3xl bg-white p-2 md:p-2 ">
              <img
                src="https://images.pexels.com/photos/5717270/pexels-photo-5717270.jpeg"
                alt="Managing Director"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial */}
      <section className="relative overflow-hidden py-20 md:py-32 ">
        {/* Background Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-br from-orange-200/40 via-transparent to-transparent blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-rose-300/40 via-transparent to-transparent blur-3xl rounded-full" />
        </div>

        <div className="relative w-full max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900">
              <BlurStaggeredText text={`What Our Travelers Say`} />
            </h2>
            <p className="mt-4 text-neutral-500 text-sm md:text-base max-w-xl mx-auto">
              Real stories from people who explored the world with us.
            </p>
          </div>

          {/* Card */}
          <div className="flex justify-center">
            <TestimonialCard />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
