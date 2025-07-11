import { useState,useEffect } from "react";
function Glassslide({ setPage }) {
   
          const [slide,setSlide]=useState([])
    const images = [
        { src:  import.meta.env.BASE_URL +'/airbnb/2025-06-25_17-02.png', alt: 'A vibrant orange background with text "Slide 1"' },
        { src: import.meta.env.BASE_URL +'/airbnb/2025-06-25_17-03.png', alt: 'A bright green background with text "Slide 2"' },
        { src: import.meta.env.BASE_URL +'/airbnb/2025-06-25_17-03_1.png', alt: 'A deep blue background with text "Slide 3"' },
        { src: import.meta.env.BASE_URL +'/airbnb/2025-06-25_17-28.png', alt: 'A vivid pink background with text "Slide 4"' },
        { src: import.meta.env.BASE_URL +'/airbnb/2025-06-25_17-28_1.png', alt: 'A vivid pink background with text "Slide 5"' },
        { src: import.meta.env.BASE_URL +'/airbnb/2025-06-25_17-29.png', alt: 'A vivid pink background with text "Slide 6"' }
      ];
      useEffect(()=>{
        const time = setInterval(()=>{
            setSlide((prevslide)=>(prevslide+1)%images.length)
        },3000)
      
      return ()=>{
        clearInterval(time)
      }
    })

      
return (
    <div className={`p-4 md:p-6 rounded-xl shadow-lg flex flex-col gap-1 `}>
      {/* Image Carousel */}
      <div className="max-w-4xl mx-auto rounded-xl shadow-2xl overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out "
          style={{ transform: `translateX(-${slide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <section className="p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-white/20 text-white backdrop-blur-lg border border-white/30 rounded-2xl">
        <div className="flex-1">
          <h3 className={`text-lg font-bold text-white`}>
            Building an Airbnb-like Platform
          </h3>
        </div>
        <div className="flex-1 flex flex-col gap-2 items-start md:items-end">
          <p className={`text-xs font-semibold text-left md:text-right text-gray-200`}>
            Development of a flexible and scalable rental platform with a user-friendly interface and secure payment processing, using modern web technologies.
          </p>
          <button 
            onClick={() => setPage('airbnb')} 
            className="text-cyan-500 text-sm font-bold hover:text-cyan-400 hover:underline self-start md:self-end"
          >
            View Project
          </button>
        </div>
      </section>
    </div>
  );
   
    
}
export default Glassslide;