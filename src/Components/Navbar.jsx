import { FiSearch, FiShoppingCart, FiChevronDown } from "react-icons/fi";
import { useState } from "react";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="absolute top-0 left-0 w-full flex justify-center z-50">
      <div className="w-[1440px] h-[80px] flex items-center justify-between px-16 py-1 bg-transparent text-white">
        
        <div className="flex items-center space-x-2">
          <img src="./logo.png" alt="Logo" className="h-[72px] w-137.58px" />
        </div>

        <ul className="hidden md:flex items-center space-x-8 mr-[200px]">
          {["Glasses", "Sunglasses", "Reykjavik Frame", "More"].map((item) => (
            <li key={item} className="relative">
              <button
                onClick={() => toggleDropdown(item)}
                className="flex items-center gap-1 hover:text-gray-300"
              >
                {item} <FiChevronDown className="mt-0.5" />
              </button>

              {openDropdown === item && (
                <div className="absolute top-full left-0 mt-2 w-40 bg-white text-black rounded shadow-lg">
                  <ul className="flex flex-col">
                    <li className="px-4 py-2 hover:bg-gray-100">Goggles</li>
                    <li className="px-4 py-2 hover:bg-gray-100">Specs</li>
                    <li className="px-4 py-2 hover:bg-gray-100">Sports</li>
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-white/20 text-white placeholder-white/70 rounded-[8px] w-[280px] h-[40px] px-4 py-1 pl-10 focus:outline-none focus:ring-2 focus:ring-white/40"
            />
            <FiSearch className="absolute left-3 top-2 text-white/70" />
            
            
          </div>

          <button className="relative flex gap-[10px]">
            <img src="./shoppingcart.png" alt="" className="" />
            <img src="./zero.png" alt="" className="w-[24px]" />
            
          </button>
        </div>
      </div>
    </nav>
  );
}
