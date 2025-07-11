import Glassslide from "./Glassslide";
import { useEffect,useState } from "react";
import Stockmarket from "./Stockmarket";
import Socilamedia from "./Socilamedia";
import Footer from "../Footer";
import Coms from "./Coms";
function Home({ setPage, whiteBg }){
    const [visibleWords, setVisibleWords] = useState(0);
const fullword= 'I am Sumit gupta as a Full Stack Developer, I build bridges between design, development, and deployment to deliver seamless digital solutions.I bring ideas to life by connecting design, development, and deployment—ensuring smooth, end-to-end digital experiences'
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
    <div className={`flex flex-col items-center justify-center min-h-screen w-full`}>
      <div className="flex flex-col items-center justify-center mt-32">
        <h1 className={`text-5xl font-bold mb-6 relative sm:right-50 m-4 p-10 md:right-0 md:text-wrap ${whiteBg ? 'text-black' : 'text-white'}`}>Sumit Gupta | Full Stack Developer && Designer,Backend Developer </h1>
<p className={`text-sm text-center  relative sm:right-50 m-4 p-10 md:right-40 md:text-wrap ${whiteBg ? 'text-black' : 'text-white'}`}>    {words.map((word, index) => (
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
      <button onClick={() => setPage('profile')} className={`flex flex-row gap-1 w-60 h-12 items-center justify-center rounded-3xl text-center transition-colors duration-300 right-100  ${whiteBg ? 'bg-slate-100 text-black hover:bg-slate-200' : 'text-white bg-white/10 hover:text-white/70 hover:bg-white/10 hover:border hover:rounded-2xl hover:px-2 bg-blend-overlay backdrop-blur-sm'}`}><p>About my self</p></button>
       <main className="">
       <div className="m-20"><Glassslide setPage={setPage} whiteBg={whiteBg}/></div>
       <section className="m-20"><Stockmarket setPage={setPage} whiteBg={whiteBg}/></section>
       <section className="m-20"><Socilamedia setPage={setPage} whiteBg={whiteBg}/></section>
       <section className="m-20"><Coms setPage={setPage} whiteBg={whiteBg}/></section>
       </main>
       <Footer whiteBg={whiteBg}></Footer>
       
       </div>
    </>)
}
export default Home;