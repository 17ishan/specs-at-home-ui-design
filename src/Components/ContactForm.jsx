import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full bg-white py-16 px-4 flex justify-center">
      <div className="max-w-3xl w-full text-center">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-gray-900">
          Need expert glasses repair in London?
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Book a home visit or drop into our showroom today.
        </p>

        {/* Form */}
        <form className="mt-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-left">
              <label className="block text-gray-700 font-medium">
                Enter Your name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="eg. Alastair Cook"
                className="mt-2 w-full rounded-md border border-gray-300 p-3 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div className="text-left">
              <label className="block text-gray-700 font-medium">
                Contact<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="contact"
                placeholder="eg. Alastair Cook"
                className="mt-2 w-full rounded-md border border-gray-300 p-3 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
          </div>

          <div className="text-left">
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="eg. Alastair Cook"
              className="mt-2 w-full rounded-md border border-gray-300 p-3 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div className="text-left">
            <label className="block text-gray-700 font-medium">Description</label>
            <textarea
              rows="4"
              placeholder="You can describe your issue here...(optional)"
              className="mt-2 w-full rounded-md border border-gray-300 p-3 focus:ring-2 focus:ring-blue-400 outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#03BCFF] text-white font-medium px-10 py-3 rounded-full hover:bg-blue-500 transition"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
