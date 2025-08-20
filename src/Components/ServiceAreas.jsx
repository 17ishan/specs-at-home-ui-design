import React from "react";

const ServiceAreas = () => {
  const areasLeft = ["Camden", "Romford", "Ilford", "Barking", "Croydon", "Ealing", "Hammersmith", "Southall"];
  const areasRight = ["Walthamstow", "Stratford", "Islington", "Lewisham", "Wimbledon", "Hackney", "Harrow", "Enfield"];

  return (
    <section className="py-16 ">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-semibold text-gray-900">Our Service Areas</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          From North to South, East to West — we bring trusted optical care to homes across
          London’s many boroughs.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">
        {/* Locations List */}
        <div className="flex flex-col justify-between">
          <div className="grid grid-cols-2 gap-3 text-lg">
            <ul className="space-y-3">
              {areasLeft.map((area, index) => (
                <li key={index} className="underline cursor-pointer hover:text-blue-500">
                  {area}
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {areasRight.map((area, index) => (
                <li key={index} className="underline cursor-pointer hover:text-blue-500">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <p className="italic text-gray-600 mb-3">Can't find your place? No Worries!</p>
            <button className="px-6 py-2 bg-[#03BCFF] text-white rounded-full shadow hover:bg-blue-500 transition">
              Contact Us
            </button>
          </div>
        </div>

    
        <div className="rounded-lg overflow-hidden shadow-lg w-[500px] h-[500px]">
          <iframe
            title="London Service Areas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19800.18625942415!2d-0.1277585!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3335f3d9b9%3A0xdeb7b2e99e127ee0!2sLondon!5e0!3m2!1sen!2suk!4v1691767567895!5m2!1sen!2suk"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="w-[500px] h-[500px]"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
