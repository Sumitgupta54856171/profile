import { useState,useEffect } from "react";
function Glassslide({ setPage, whiteBg = false }) {
   
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

      
return (<>
 <div className="relative z-10 bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl shadow-lg gap-4 text-center text-white grid grid-rows-6">
            <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-2xl border border-gray-200 row-span-5">
          
            <div
              className="flex shadow-x1/30 transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${slide * 100}%)` }}
            >
              {images.map((image, index) => (
          
                <div key={index} className="w-full flex-shrink-0">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover rounded-xl"
                  />
                </div>
              ))}
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            </div>
          </div>
          <section className="relative">
<span className=" absolute left-0 bottom-0  m-12 h-10 w-50 rounded-full">
<span className="{whiteBg ? 'text-black' : 'text-white'} text-lg font-bold">
  Building Once Social Media System
</span>
</span>
<span className=" absolute right-0 bottom-0   h-10  rounded-full w-140 m-12 flex flex-col gap-2">
<span className="{whiteBg ? 'text-black' : 'text-white'} text-xs font-bold">
  Development of a flexible and scalable Social Media system with a user-friendly interface and secure payment processing. using Reactjs,Nodejs, MongoDB, Mongoose, JWT,Ai-chatbot,Tailwindcss,Socket.io,Rest API.
</span>
<button onClick={() => setPage('airbnb')} className="text-cyan-600 text-xs font-bold hover:text-cyan-500 hover:underline">view project</button>
</span>
 </section>
    </div>
    
</>)
   
    
}
export default Glassslide;