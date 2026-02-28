import Accordion from "../Components/Accordion";
import BlurStaggeredText from "../Components/BlurStaggeredText";
import DigitalCounter from "../Components/DigitalCounter";

const About = () => {
  return (
    <div className="bg-neutral-100 py-14 md:py-10 overflow-hidden flex flex-col items-center ">
      {/* Top */}
      <section className="flex-col flex lg:flex-row md:justify-between  max-w-6xl mx-auto px-6 items-start">
        <div className="heading flex justify-center lg:justify-start w-full lg:w-fit">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-neutral-900 leading-[1.05] max-w-xl text-center lg:text-start">
            <BlurStaggeredText
              text={`Zeaster is the best travel friend you can ever imagine`}
            />
          </h2>
        </div>
        <div className="accordion lg:w-1/2 w-full md:min-h-130 mt-5 lg:mt-0 ">
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
    </div>
  );
};

export default About;
