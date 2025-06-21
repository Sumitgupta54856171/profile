import {Link} from "react-router-dom";
import {BookLock, GalleryThumbnails, Home,HomeIcon,ProjectorIcon,User, UserIcon} from 'lucide-react'
function Navbar(){
return(<>
<nav className="flex justify-center w-full px-3 py-3 fixed text-white ">
    
        <ul className="bg-slate-700 backdrop-blur-md px-4 py-2 rounded-full shadow-lg flex items-center gap-5 border border-white/10 bg-cyan-500 shadow-lg shadow-cyan-500/50">
            <li>
               <Link to="/" className="flex flex-row gap-1 hover:text-white/70 hover:bg-white/10 hover:border hover:rounded-2xl text-white hover:px-2" ><p>Home</p><HomeIcon size={20}/></Link>
            </li>
            <li>
                <Link to="/profile" className="flex flex-row gap-1 hover:text-white/70 hover:bg-white/10 hover:border hover:rounded-2xl text-white hover:px-2"><p>Profile</p> <UserIcon size={20}/></Link>
            </li>
            <li>
                <Link to="work" className="flex flex-row gap-1 hover:text-white/70 hover:bg-white/10 hover:border hover:rounded-2xl text-white hover:px-2"><p>Project</p><ProjectorIcon size={20}/></Link>
            </li>
            <li>
                <Link to="/blog" className="flex flex-row gap-1 hover:text-white/70 hover:bg-white/10 hover:border hover:rounded-2xl text-white hover:px-2"><p>Blog</p><BookLock size={20}/></Link>
            </li>
            <li>
                <Link to="/gallery" className="flex flex-row gap-1 hover:text-white/70 hover:bg-white/10 hover:border hover:rounded-2xl text-white hover:px-2"><p>Gallery</p><GalleryThumbnails size={20}/></Link>
            </li>
        </ul>
</nav>
</>)
}
export default Navbar;