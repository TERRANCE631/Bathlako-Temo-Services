import { Link } from "react-router-dom";
import bg_2 from "../../../Assets/bg_2.jpg";

export function Hero() {
  return (
    <div className="mb-8 mt-[3.5rem] relative h-screen bg-cover bg-center" loading="lazy" style={{ backgroundImage: `url(${bg_2})` }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4 sm:px-6">
            <div className="max-w-lg md:max-w-2xl lg:max-w-4xl">
                <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    Quality Citrus Fruits <span className="text-orange-500 fade-in">Grown with Passion</span>
                </h1>
                <p className="mt-4 text-base text-gray-300 sm:text-lg md:text-xl lg:text-2xl">
                    Welcome to Batlhako Temo Services. Enjoy the highest quality citrus from the North West Province, grown with care and dedication.
                </p>
                <div className="mt-6">
                    <Link
                    to="/AboutUs"
                    className="inline-block mr-5 px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-orange-500 to-orange-400 rounded-md hover:bg-orange-600 transition sm:px-8 sm:py-4 sm:text-lg lg:text-xl">
                    Read More<i className="bi bi-arrow-right pl-2 move-to-left-on-scroll"></i>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
