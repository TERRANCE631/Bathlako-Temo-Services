import backgroundImage from "../../../Assets/backgroundImage.jpg";

export function AboutUshero() {
  return (
    <div className="relative md:mt-[3rem] -mt-[0.5px] h-screen bg-cover bg-center" loading="lazy" style={{ backgroundImage: `url(${backgroundImage})` }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
            {/* Hero Content */}
            <div decoding="async" className="relative z-10 flex items-center justify-center h-full text-center px-4 sm:px-6">
                <div className="max-w-lg md:max-w-2xl lg:max-w-4xl">
                    <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl">
                        Welcome to our <span className="text-orange-500 fade-in">orchard</span>
                    </h1>
                </div>
            </div>
        </div>
    )
}
