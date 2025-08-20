import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaYoutube, 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaMapMarkerAlt, 
  FaEnvelope 
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex justify-around gap-10">

        {/* Logo + Social + Trustpilot */}
        <div>
          <img src="/logo.png" alt="Specs at Home" className="h-12 mb-5" />

          {/* Social Icons */}
          <div className="flex space-x-3 mb-5">
            <a href="#" className="p-2 border rounded-full hover:bg-gray-100"><FaFacebookF size={16} /></a>
            <a href="#" className="p-2 border rounded-full hover:bg-gray-100"><FaInstagram size={16} /></a>
            <a href="#" className="p-2 border rounded-full hover:bg-gray-100"><FaTwitter size={16} /></a>
            <a href="#" className="p-2 border rounded-full hover:bg-gray-100"><FaYoutube size={16} /></a>
          </div>

          {/* Trustpilot Button */}
          <a
            href="#"
            className="border px-4 py-2 rounded-md text-sm font-medium inline-block hover:bg-gray-50"
          >
            Review us on <span className="text-green-600 font-bold">★ Trustpilot</span>
          </a>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold text-blue-900 mb-4">Contact us</h3>
          <p className="flex items-center gap-2 mb-2"> <img src="./call.png" alt="" />  <span className="text-[#4D4D4D] text-lg">Call</span> 020 3886 2278</p>
          <p className="flex items-center gap-2 mb-2"><FaWhatsapp className="text-green-600" /> +44 7475 293322</p>
          <p className="flex items-start gap-2 mb-2"> <img src="./location.png" alt="" /> 2 Mapleleafe Gardens, Barkingside, London IG6 1LG</p>
          <p className="flex items-center gap-2">  <img src="./mail.png" alt="" /> info@specsathome.london</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-blue-900 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Shipping Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
            <li><a href="#" className="hover:underline">Return and Refund Policy</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
          </ul>
        </div>

        
      </div>

      <div className="flex justify-around ml-15 mb-10 max-w-7xl px-6 items-center gap-10 ">
      {/* Bottom Bar */}
      <div className=" text-black  py-4 text-[14px]  ">
        Copyrights and Developed by <span className="font-semibold">Tryidol</span>
      </div>

      {/* Subscribe */}
        <div className="text-[14px]">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">Subscribe us</h3>
          <p className="mb-4 text-sm">Sign up to receive exclusive offers and <br /> new product releases.</p>
          
        </div>

        <div className="flex ">
            <input
              type="email"
              placeholder="Enter your email..."
              className="flex-1 px-4 py-2 border rounded-l-md focus:outline-none h-[48px] w-[300px]"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700  h-[48px] w-[48px]">
        
              <img src="./messageicon.png" alt="" />
            </button>
          </div>

      </div>

    </footer>
  );
}
