import React from "react";

const images = [
  // Airbnb images
  '/airbnb/2025-06-25_17-02.png',
  '/airbnb/2025-06-25_17-03.png',
  '/airbnb/2025-06-25_17-03_1.png',
  '/airbnb/2025-06-25_17-28.png',
  '/airbnb/2025-06-25_17-28_1.png',
  '/airbnb/2025-06-25_17-29.png',
  // Socialmedia images
  '/Socialmedia/socialmedia1.png',
  '/Socialmedia/socialmedia2.png',
  '/Socialmedia/socialmedia3.png',
  '/Socialmedia/socialmedia4.png',
  '/Socialmedia/socialmedia5.png',
  '/Socialmedia/socialmedia6.png',
  // Stockmarket images
  '/stockmarket/stockmarket1.png',
  '/stockmarket/stockmarket2.png',
  '/stockmarket/stockmarket3.png',
  '/stockmarket/stockmarket4.png',
  '/Nevstore/N1.png',
  '/Nevstore/N2.png',
  '/Nevstore/N3.png',
  '/Nevstore/N4.png',
  '/Nevstore/N5.png',
  '/Nevstore/N6.png',
];

function Gallery() {
  return (
    <div className="w-full min-h-screen sm:flex  flex flex-col  py-6 bg-gradient-to-b from-slate-700 to-slate-950 items-center">
      <h2 className="text-2xl font-bold mb-4">Photo Gallery</h2>
      <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:flex-row w-full max-w-xs sm:max-w-md md:max-w-lg relative top-30">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-md w-full">
            <img
              src={import.meta.env.BASE_URL + src}
              alt={`Gallery image ${idx + 1}`}
              className="object-cover w-full h-32 sm:h-40 md:h-48 transition-transform duration-200 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery; 