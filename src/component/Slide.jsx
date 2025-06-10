import { useEffect,useState } from "react";
function Slide(){
    const [slide,setSlide]=useState([])
    const images = [
        { src: 'https://placehold.co/800x400/FF5733/FFFFFF?text=Slide+1', alt: 'A vibrant orange background with text "Slide 1"' },
        { src: 'https://placehold.co/800x400/33FF57/FFFFFF?text=Slide+2', alt: 'A bright green background with text "Slide 2"' },
        { src: 'https://placehold.co/800x400/3357FF/FFFFFF?text=Slide+3', alt: 'A deep blue background with text "Slide 3"' },
        { src: 'https://placehold.co/800x400/FF33A1/FFFFFF?text=Slide+4', alt: 'A vivid pink background with text "Slide 4"' },
      ];
      useEffect(()=>{
        const time = setInterval(()=>{
            setSlide((prevslide)=>(prevslide+1)%images.length)
        },3000)
      })
      return ()=>{
        clearInterval(time)
      }
      
}
export default Slide;