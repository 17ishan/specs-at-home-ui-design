import React from "react";

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Alastair Cook",
      location: "London, England",
      review:
        "Brilliant service. Repaired my son’s glasses within an hour of calling. No stress, no travel!",
      stars: 5,
    },
    {
      name: "Alastair Cook",
      location: "London, England",
      review:
        "Brilliant service. Repaired my son’s glasses within an hour of calling. No stress, no travel!",
      stars: 5,
    },
    {
      name: "Alastair Cook",
      location: "London, England",
      review:
        "The service felt personal and reliable — definitely using them again.",
      stars: 5,
    },
  ];

  return (
    <div className="relative w-full py-16 px-6 overflow-hidden ">
      {/* Background Glows */}

      <div className="mt-50 absolute">

      <div className="absolute top-[80px] left-[100px] w-[100px] h-[360px] rounded-full bg-[rgba(3,188,255,0.6)] blur-[250px] pointer-events-none" />
      <div className="absolute top-[100px] left-[600px] w-[200px] h-[200px] rounded-full bg-[rgba(251,3,255,0.5)] blur-[250px] pointer-events-none" />
      <div className="absolute top-[190px] left-[900px] w-[200px] h-[300px] rounded-full bg-[rgba(255,3,7,0.1)] blur-[250px] pointer-events-none" />
      <div className="absolute top-[244px] left-[400px] w-[349px] h-[349px] rounded-full bg-[rgba(193,81,234,0.2)] blur-[250px] pointer-events-none" />
      </div>


      {/* Title */}
      <h2 className="text-2xl font-bold text-center mb-10">
        What Our Customers Say
      </h2>

      {/* Rating + Reviews */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10">
        {/* Google Rating */}
        <div className="flex flex-col items-center text-center">
          <span className="text-[64px] font-bold flex items-center">
            4.9
            <img src="./star.png" className="w-[38px] h-[36px] ml-2" alt="star" />
          </span>
          <p className="font-semibold leading-6 text-[24px] mt-2">
            Google Rating
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl h-[260px]">
          {reviews.slice(0, 2).map((rev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 text-left relative z-10"
            >
              <h3 className="font-semibold">{rev.name}</h3>
              <p className="text-sm text-gray-500">{rev.location}</p>
              <p className="mt-3 text-gray-700">{rev.review}</p>
              <div className="flex mt-3 text-yellow-500">
                {Array.from({ length: rev.stars }).map((_, i) => (
                  <img src="./star.png" alt="star" key={i} className="w-5 h-5" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Auto-scrolling Reviews */}
      <div className="relative overflow-hidden w-full">
        <div className="flex w-max animate-scroll">
          {[...reviews, ...reviews].map((rev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md p-4 m-4 w-[580px] h-[132px] flex-shrink-0 relative z-10"
            >
              <p className="text-gray-600 italic">"{rev.review}"</p>
              <div className="flex mt-2 text-yellow-500">
                {Array.from({ length: rev.stars }).map((_, i) => (
                  <img src="./star.png" alt="star" key={i} className="w-5 h-5" />
                ))}
              </div>
              <p className="text-right font-medium">- {rev.name}</p>
            </div>
          ))}
        </div>

        {/* Fade edges */}
        <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>

      {/* Services Section */}
      <div className="w-full max-w-[1440px] mx-auto mt-20 relative z-10">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Other Services We Offer
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          <div className="w-[300px] h-[360px] shadow-md bg-white rounded-2xl">
            <img
              src="./sunglass.png"
              className="rounded-t-2xl w-[300px] h-[300px]"
              alt="Sunglass"
            />
            <p className="text-[24px] ml-[20px] py-2">Sunglass</p>
          </div>

          <div className="w-[300px] h-[360px] shadow-md bg-white rounded-2xl">
            <img
              src="./specs.jpg"
              className="rounded-t-2xl w-[300px] h-[300px]"
              alt="Reglazing Glasses"
            />
            <p className="text-[24px] ml-[20px] py-2">Reglazing Glasses</p>
          </div>

          <div className="w-[300px] h-[360px] shadow-md bg-white rounded-2xl">
            <img
              src="./sunglass.png"
              className="rounded-t-2xl w-[300px] h-[300px] object-cover"
              alt="Same-Day Glasses"
            />
            <p className="text-[24px] ml-[20px] py-2">Same-Day Glasses</p>
          </div>

          <div className="w-[300px] h-[360px] shadow-md bg-white rounded-2xl">
            <img
              src="./specs.jpg"
              className="rounded-t-2xl w-[300px] h-[300px]"
              alt="Consultancy Services"
            />
            <p className="text-[24px] ml-[20px] py-2">Consultancy Services</p>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-10">
          <button className="bg-[#03BCFF] text-white text-[18px] font-semibold rounded-full px-6 py-3 hover:bg-blue-600 transition">
            Explore More
          </button>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </div>
  );
}
