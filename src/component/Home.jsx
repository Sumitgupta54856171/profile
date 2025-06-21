import Glassslide from "./Glassslide";
import {Link} from "react-router-dom";
function Home(){
    return(<>
    <div className="grid grid-rows-1 auto text-gray-800 justify-center align-middle items-center">
 <div>
<div className='container py-20 mx-auto text-zinc-500 justify-center align-middle items-center flex flex-col '>
<h1 className='text-3xl font-bold text-white'>Bridging the gap between design, development, and deployment</h1>
<p className="text-white">I am Sumit,As a Full Stack Developer, I build bridges between design, development, and deployment to deliver seamless digital solutions.I bring ideas to life by connecting design, development, and deployment—ensuring smooth, end-to-end digital experiences</p>
</div>
      <Link to="/profile" className="flex flex-row gap-1 hover:text-white/70 hover:bg-white/10 hover:border hover:rounded-2xl hover:px-2 text-white w-60 h-10 items-center "><img src="" alt="" /><p>About my self</p></Link>
       
      </div>
       <div className="m-20"><Glassslide/></div>
       </div>
    </>)
}
export default Home;