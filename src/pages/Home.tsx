import React, { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import homeVideo from "./assets/home_video.mp4";

interface Step {
  number: string;
  title: string;
  icon: string;
  description: string;
}

interface Service {
  title: string;
  description: string;
  image: string;
}

const HomePage: React.FC = () => {
  const steps: Step[] = [
    {
      number: "01",
      title: "Strategy",
      icon: "src/assets/strategy.svg",
      description:
        "We begin by thoroughly analyzing your business objectives and understanding end-user requirements...",
    },
    {
      number: "02",
      title: "Design",
      icon: "src/assets/design.svg",
      description:
        "Our team carefully crafts the visual and functional aspects of your product...",
    },
    {
      number: "03",
      title: "Develop",
      icon: "src/assets/develop.svg",
      description:
        "Using Agile methodology, we collaborate closely with stakeholders...",
    },
    {
      number: "04",
      title: "Support",
      icon: "src/assets/support.svg",
      description:
        "We provide ongoing maintenance and technical support to keep your website or application running smoothly...",
    },
  ];

  const services: Service[] = [
    { title: "Cyber Security", description: "Protecting your business...", image: "src/assets/cyber_security.svg" },
    { title: "Business Consulting", description: "Expert guidance...", image: "src/assets/B_D.svg" },
    { title: "Web Development", description: "Building responsive websites...", image: "src/assets/web_development.svg" },
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) containerRef.current.scrollBy({ left: -450, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (containerRef.current) containerRef.current.scrollBy({ left: 450, behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative flex h-screen">
        <div className="w-1/2 bg-gradient-to-b from-[#FA9405] to-[#E94822] text-white flex flex-col justify-center items-start p-16">
          <h1 className="text-5xl font-bold mb-4">
            <TypeAnimation sequence={["RGESIndia", 1000, "RGESIndia"]} speed={1} repeat={Infinity} cursor={false} />
          </h1>
          <div className="w-75 h-1 bg-white mb-4"></div>
          <p className="text-xl leading-relaxed">
            RGESIndia is committed to driving innovation and excellence in technology and education...
          </p>
        </div>
        <div className="w-1/2 relative">
          <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted>
            <source src={homeVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Service Flow Section */}
      <div className="bg-gradient-to-b from-[#FA9405] to-[#E94822] py-16 w-full">
        <div className="w-full px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Service Flow</h2>
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"} items-center relative w-full`}>
                <div className="text-9xl font-extrabold text-black mr-4">{step.number}</div>
                <h3 className="text-5xl font-bold text-white absolute" style={{ transform: "translateX(25%)" }}>{step.title}</h3>
                <div className="flex w-full max-w-3/4 bg-white rounded-xl p-6 shadow-lg hover:scale-105 transform transition-transform duration-300">
                  <img src={step.icon} alt={step.title} className="w-24 h-24 rounded-full border-2 border-[#FF6B3D]" />
                  <p className="text-gray-600 text-xl font-semibold w-2/3">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Services</h2>
          <div className="relative">
            <button className="absolute left-0 bg-gray-800 text-white px-4 py-2 rounded" onClick={scrollLeft}>&larr;</button>
            <button className="absolute right-0 bg-gray-800 text-white px-4 py-2 rounded" onClick={scrollRight}>&rarr;</button>
            <div ref={containerRef} className="flex space-x-6 overflow-x-auto scrollbar-hide">
              {services.map((service, index) => (
                <div key={index} className="w-80 p-4 bg-white shadow-md rounded-lg flex flex-col items-center">
                  <img src={service.image} alt={service.title} className="w-24 h-24 mb-4 rounded-full" />
                  <h3 className="text-3xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-center">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
