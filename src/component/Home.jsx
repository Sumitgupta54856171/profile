import Glassslide from "./Glassslide";
import { useEffect,useState } from "react";
import {Link} from "react-router-dom";
function Home(){
    const [visibleWords, setVisibleWords] = useState(0);
const fullword= 'I am Sumit,As a Full Stack Developer, I build bridges between design, development, and deployment to deliver seamless digital solutions.I bring ideas to life by connecting design, development, and deployment—ensuring smooth, end-to-end digital experiences'
const words = fullword.split(' ')
const startanimation =()=>{
    setVisibleWords(0)
words.forEach((_,index)=>{
    setTimeout(() =>{
        setVisibleWords(index + 1)
    },(index + 1) * 100);
}) 
}
useEffect(()=>{
    startanimation();
},[])

    return(<>
    <div className="grid grid-rows-1 auto text-gray-800 justify-center align-middle items-center">
 <div>
<div className='container py-20 mx-auto text-zinc-500 justify-center align-middle items-center flex flex-col '>
<h1 className='text-3xl font-bold text-white'>Bridging the gap between design, development, Code and deployment</h1>
<p className="text-white my-8 text-center">    {words.map((word, index) => (
              <span
                key={index}
                className={`inline-block mr-2 transition-all duration-500 ease-in-out ${
                  index <= visibleWords
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-4'
                }`}
              >
                {word}
              </span>
            ))}</p>
</div>
      <Link to="/profile" className="flex flex-row gap-1 hover:text-white/70 hover:bg-white/10 hover:border hover:rounded-2xl hover:px-2 text-white w-60 h-12 items-center justify-center bg-blend-overlay backdrop-blur-sm bg-white/10 rounded-3xl text-center"><p>About my self</p></Link>
       
      </div>
       <div className="m-20"><Glassslide/></div>
       </div>
    </>)
}
export default Home;