
export default function Description() {
  return (
    <section className="w-full flex justify-center py-16 px-8 font-satoshi  ">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center ">
        
        {/* Left part */}
        <div className="w-full text-[24px] leading-[32px] mr-[100px] font-satoshi">
          <h2 className=" md:text-3xl font-bold  w-[747px]">
            Scratched lenses? Changed prescription? <br />
            Tired of glare on night drives or headaches from blue light?
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            If you’re happy with your current frames but your lenses are 
            scratched, outdated, or no longer working for you, our reglazing 
            service is the ideal solution. We’ll fit brand-new lenses into your
            existing specs — saving you time, money, and hassle.
          </p>
          <p className="text-gray-700 leading-relaxed mt-6">
            It’s a fast, convenient, and eco-conscious way to upgrade your
            vision. Our qualified team will collect your glasses, fit the lenses that 
            suit your needs, and return them good as new — either at your home or
            through our Barkingside showroom.
          </p>
          <button className="mt-6 bg-[#03BCFF] text-white text-[18px] font-semibold rounded-full px-6 py-3 hover:bg-blue-600 transition">
            Book Now
          </button>
        </div>

        {/* Right section with Image */}
        <div className="flex justify-center ml-[100px]">
          <img
            src="./Frame13.png" 
            alt="Glasses Service"
            className="w-[480px] h-[480px] object-cover rounded-2xl shadow"
          />
        </div>
      </div>
    </section>
  );
}
