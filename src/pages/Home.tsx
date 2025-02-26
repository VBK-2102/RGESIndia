import React from "react";

const HomePage = () => {
  return (
    <div className="bg-[#fbf5e5] text-gray-900">

      <section className="text-center py-20 bg-gradient-to-b from-orange-300 to-orange-500 text-white">
        <h2 className="text-5xl font-bold">RGESIndia</h2>
        <p className="text-lg font-semibold">Make a good Plan & Grow Your Business</p>
      </section>

      {/* Services Section */}
      <section className="py-16 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
          {[
            { title: "Cyber Security", desc: "Protect your digital world..." },
            { title: "Web Development", desc: "Build robust online solutions..." },
            { title: "Governance Risk & Compliance", desc: "Ensure security and compliance..." },
          ].map((service, index) => (
            <div key={index} className="p-6 border rounded-lg shadow-md bg-white">
              <h3 className="text-xl font-bold text-orange-600">{service.title}</h3>
              <p className="mt-2 text-gray-700">{service.desc}</p>
              <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition">Explore Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="px-10 space-y-10">
          {[
            { title: "Strategy", desc: "Analyzing objectives & wireframing..." },
            { title: "Design", desc: "Drafting UI/UX appearance..." },
            { title: "Develop", desc: "Agile development & iteration..." },
            { title: "Support", desc: "Maintenance & bug fixes..." },
          ].map((step, index) => (
            <div key={index} className="flex items-center space-x-6">
              <h3 className="text-4xl font-bold">0{index + 1}</h3>
              <div>
                <h4 className="text-xl font-semibold">{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
        <div className="mt-6 flex flex-col md:flex-row justify-center space-x-6">
          <div className="p-6 bg-orange-500 text-white rounded-lg shadow-lg">
            <p>Call Us</p>
            <p className="font-bold">+91-8308721921</p>
          </div>
          <div className="p-6 bg-orange-500 text-white rounded-lg shadow-lg">
            <p>Write Us</p>
            <p className="font-bold">founder@rgesindia.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
