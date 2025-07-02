import "./bg.css"
function Footer(){
return(
    <>
     <section class="relative bottom-0 w-full">
            <div class="relative p-1 rounded-xl bg-gradient-to-r from-teal-900 via-slate-900 to-cyan-900 animate-border-shine">
                <div class="rounded-xl bg-gradient-to-r from-blue-500 via-yellow-500 to-cyan-800 p-6 text-white ">
                  <h2 class="text-xl font-bold text-center">Sumit Gupta</h2>
                  <p class="text-center "></p>
                </div>
                <span class="text-center text-white text-sm relative bottom-0 left-0"
                >© 2025/SumitGupta/protfolio.</span>
                <span class=" text-white text-sm static right-0 bottom-0 flex flex-row gap-2 ">
                  <a href="https://github.com/Sumitgupta54856171" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/m_outlined/512/github.png"className="size-8"></img></a>
                  <a href="https://www.linkedin.com/in/sumitgupta54856171/" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/ios11/512/linkedin.png" className="size-8"></img></a>
                </span>
              </div>
            </section>
    </>
)
}
export default Footer;