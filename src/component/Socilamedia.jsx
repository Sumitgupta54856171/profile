import { useState,useEffect } from "react";
function Socilamedia({ setPage, whiteBg = false }) {
   
          const [slide,setSlide]=useState([])
    const images = [
        { src:  import.meta.env.BASE_URL +'/Socialmedia/socialmedia1.png', alt: 'A vibrant orange background with text "Slide 1"' },
        { src: import.meta.env.BASE_URL +'/Socialmedia/socialmedia2.png', alt: 'A bright green background with text "Slide 2"' },
        { src: import.meta.env.BASE_URL +'/Socialmedia/socialmedia3.png', alt: 'A deep blue background with text "Slide 3"' },
        { src: import.meta.env.BASE_URL +'/Socialmedia/socialmedia4.png', alt: 'A vivid pink background with text "Slide 4"' },
        { src: import.meta.env.BASE_URL +'/Socialmedia/socialmedia5.png', alt: 'A vivid pink background with text "Slide 5"' },
        { src: import.meta.env.BASE_URL +'/Socialmedia/socialmedia6.png', alt: 'A vivid pink background with text "Slide 6"' }
      ];
      useEffect(()=>{
        const time = setInterval(()=>{
            setSlide((prevslide)=>(prevslide+1)%images.length)
        },3000)
      
      return ()=>{
        clearInterval(time)
      }
    },[])

      
return (
    <div className={`p-4 md:p-6 rounded-xl shadow-lg flex flex-col gap-4 ${whiteBg ? 'bg-white text-black' : 'text-white'}`}>
      {/* Image Carousel */}
      <div className="max-w-4xl mx-auto rounded-xl shadow-2xl overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
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
      <section className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className={`text-lg font-bold ${whiteBg ? 'text-gray-900' : 'text-white'}`}>
            Building Once Social Media System
          </h3>
        </div>
        <div className="flex-1 flex flex-col gap-2 items-start md:items-end">
          <p className={`text-xs font-semibold text-left md:text-right ${whiteBg ? 'text-gray-700' : 'text-gray-200'}`}>
          Development of a flexible and scalable Social Media system with a user-friendly interface and secure payment processing. using Reactjs,Nodejs, MongoDB, Mongoose, JWT,Ai-chatbot,Tailwindcss,Socket.io,Rest API.
          </p>
          <button 
            onClick={() => setPage('socialmedia')} 
            className="text-cyan-500 text-sm font-bold hover:text-cyan-400 hover:underline self-start md:self-end"
          >
            View Project
          </button>
        </div>
      </section>
    </div>
  );
   
    
}
export default Socilamedia;
