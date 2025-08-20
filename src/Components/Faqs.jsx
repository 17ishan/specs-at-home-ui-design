import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useState } from "react";
import ReviewsSection from "./ReviewsSection";

const faqs = [
  {
    question: "Do you offer home pick-up and delivery for eyeglass repairs?",
    answer:
      "Yes, we provide convenient home pick-up and delivery for eyeglass repairs so you don’t have to visit our store.",
  },
  {
    question: "Do you accept NHS vouchers for eyewear purchases?",
    answer:
      "Yes, we accept NHS vouchers for eligible eyewear purchases. This allows you to receive high-quality glasses at a reduced cost. Contact us for more details.",
  },
  {
    question: "How long does it take to repair my eyeglasses?",
    answer:
      "Most repairs are completed within 3-5 working days, depending on the type of service required.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* FAQs Section */}
      <section className="max-w-4xl mx-auto py-12 px-6 relative">
        <h2 className="text-center text-3xl font-bold mb-10">FAQs</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium text-gray-800 hover:bg-gray-50"
              >
                {faq.question}
                <span className="text-gray-500">
                  {openIndex === index ? (
                    <FiChevronUp className="mt-0.5" />
                  ) : (
                    <FiChevronDown className="mt-0.5" />
                  )}
                </span>
              </button>

              {/* Dropdown answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 px-6 pb-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full width Reviews Section */}
      {/* <div className="w-full">
        <ReviewsSection />
      </div> */}
    </>
  );
}
