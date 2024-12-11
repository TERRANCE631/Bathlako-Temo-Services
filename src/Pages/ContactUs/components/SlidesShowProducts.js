import { useState, useEffect } from "react";

export function SlidesShowProducts() {
  const slides = [
    {
      image: "https://via.placeholder.com/800x400/FFA500/FFFFFF?text=Fresh+Oranges",
      caption: "Fresh Oranges Directly from Batlhako Farms",
    },
    {
      image: "https://via.placeholder.com/800x400/FFD700/FFFFFF?text=Zesty+Lemons",
      caption: "Zesty Lemons for Every Occasion",
    },
    {
      image: "https://via.placeholder.com/800x400/32CD32/FFFFFF?text=Farm+Fresh",
      caption: "Farm-Fresh Citrus for Your Family",
    },
    {
      image: "https://via.placeholder.com/800x400/FF6347/FFFFFF?text=Juicy+Tangerines",
      caption: "Juicy Tangerines for Your Table",
    },
    {
      image: "https://via.placeholder.com/800x400/00BFFF/FFFFFF?text=Citrus+Delight",
      caption: "Citrus Delight All Year Round",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slides every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [slides.length]);

  // Calculate visible slides (e.g., showing 3 slides at once)
  const visibleSlides = slides.slice(
    currentIndex,
    currentIndex + 3 > slides.length ? undefined : currentIndex + 3
  );
  if (visibleSlides.length < 3) {
    visibleSlides.push(...slides.slice(0, 3 - visibleSlides.length));
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-10">
      <div className="flex overflow-hidden justify-center items-center rounded-lg">
        {visibleSlides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-2 transition-transform"
            style={{ width: "calc(100% / 3)" }} // Display 3 slides at a time
          >
            <img
              src={slide.image}
              alt={slide.caption}
              className="rounded-lg"
            />
            {/* <p className="text-center text-xl mt-2">{slide.caption}</p> */}
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={prevSlide}
          className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
        >
          ❯
        </button>
      </div>
    </div>
  );
}
