import bgImage from "../assets/bg-image.jpg";


export default function Home() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}

    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative text-center text-white space-y-6">
        <h1  className="text-4xl md:text-6xl font-bold header-text">GLASSES REGLAZING IN LONDON</h1>
        <p className="text-lg md:text-xl">New lenses Same frames No hassle.</p>

        <button
          className="w-[241px] h-[56px] rounded-[50px] px-6 py-4  bg-[#03BCFF] text-white font-semibold shadow-lg
                     hover:bg-blue-700 transition" >
          Book an Appointement
        </button>
      </div>
    </div>
  );
}
