import { useState,useEffect } from "react";
function Stockmarket({ setPage, whiteBg = false }) {
   
          const [slide,setSlide]=useState([])
    const images = [
        { src: import.meta.env.BASE_URL +'/stockmarket/stockmarket1.png', alt: 'A vibrant orange background with text "Slide 1"' },
        { src: import.meta.env.BASE_URL +'/stockmarket/stockmarket2.png', alt: 'A bright green background with text "Slide 2"' },
        { src: import.meta.env.BASE_URL +'/stockmarket/stockmarket3.png', alt: 'A deep blue background with text "Slide 3"' },
        { src: import.meta.env.BASE_URL +'/stockmarket/stockmarket4.png', alt: 'A vivid pink background with text "Slide 4"' }
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
 <div className={`p-8 pb-4 ${whiteBg ? 'bg-white text-black' : ''} relative z-10  bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl shadow-lg  gap-4 text-center {whiteBg ? 'text-black' : 'text-white'} grid grid-rows-6`}>
            <div className={`relative  max-w-4xl mx-auto rounded-xl shadow-2xl border border-white/30 overflow-hidden row-span-5 ${whiteBg ? 'bg-white text-black' : ''}`}>
          
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
        
          </div>
 <section className="relative">
<span className=" absolute left-0 bottom-0  m-12 h-10 w-50 rounded-full">
<span className="{whiteBg ? 'text-black' : 'text-white'} text-lg font-bold">
  Building Once Stock Market System
</span>
</span>
<span className=" absolute right-0 bottom-0   h-10  rounded-full w-140 m-12 flex flex-col gap-2">
<span className="{whiteBg ? 'text-black' : 'text-white'} text-xs font-bold">
  Development of a flexible and scalable stock market system with a user-friendly interface and secure payment processing. using Next.js, MongoDB, Mongoose, JWT,Ai-chatbot,Tailwindcss.
</span>
<button onClick={() => setPage('stockmarket')} className="text-cyan-600 text-xs font-bold hover:text-cyan-500 hover:underline">view project</button>
</span>
 </section>
    </div>
    
</>)
   
    
}
export default Stockmarket;