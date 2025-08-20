import React from "react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Expert advice",
      description:
        "You’ll get guidance from a qualified Style & Vision Consultant, not a sales assistant.",
      icon: <img src="/cap.png" alt="Cap Icon" className="w-[40px] h-[28px] mx-auto mb-4" />,
    },
    {
      title: "Expert advice",
      description:
        "You’ll get guidance from a qualified Style & Vision Consultant, not a sales assistant.",
      icon: <img src="/cap.png" alt="Cap Icon" className="w-[40px] h-[28px] mx-auto mb-4" />,
    },
    {
      title: "Affordable pricing",
      description:
        "Reglazing is cheaper than buying new, and we’ll always explain your options.",
      icon: <img src="/poundLogo.png" alt="Pricing Icon" className="w-[40px] h-[28px] mx-auto mb-4" />,
    },
    {
      title: "Local and trusted",
      description:
        "We’ve helped thousands of customers across Essex.",
      icon: <img src="/shield.png" alt="Shield Icon" className="w-[40px] h-[28px] mx-auto mb-4" />,
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((item, index) => (
            <div key={index} className="text-center">
              {item.icon}
              <h3 className="text-lg font-semibold mb-2 ">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
