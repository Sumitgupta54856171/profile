import {BookLock, GalleryThumbnails, HomeIcon, ProjectorIcon, UserIcon} from 'lucide-react';

function Navbar({ setPage, currentPage, whiteBg }) {
  return (
    <nav className={` flex w-full px-2 sm:px-3 py-2 fixed top-2 sm:top-4 justify-center z-50 text-black  {whiteBg ? 'bg-white text-black' : 'bg-slate-700/90 text-white'} transition-colors duration-300 `}> 
  <ul className="flex flex-row  items-center sm:justify-center gap-2 sm:gap-5 bg-slate-700/80 sm:bg-slate-700/60 backdrop-blur-md px-2 sm:px-4 py-2 rounded-4xl shadow-lg border border-white/10 text-sm sm:text-xs shadow-cyan-500/50 overflow-x-auto">
    <li className="w-full sm:w-auto">
      <button
        onClick={() => setPage('home')}
        className={`w-full flex flex-row justify-center items-center gap-2 py-2 px-4 rounded-2xl transition-colors duration-200 text-base sm:text-xs {whiteBg ? 'text-black hover:bg-slate-100' : 'text-white hover:text-white/70 hover:bg-white/10'} ${currentPage === 'home' ? 'bg-white/20 border border-cyan-400' : ''}`}
      >
        <HomeIcon size={20} />
        <span>Home</span>
      </button>
    </li>
    <li className="w-full sm:w-auto">
      <button
        onClick={() => setPage('profile')}
        className={`w-full flex flex-row justify-center items-center gap-2 py-2 px-4 rounded-2xl transition-colors duration-200 text-base sm:text-xs ${whiteBg ? 'text-black hover:bg-slate-100' : 'text-white hover:text-white/70 hover:bg-white/10'} ${currentPage === 'profile' ? 'bg-white/20 border border-cyan-400' : ''}`}
      >
        <UserIcon size={20} />
        <span>Profile</span>
      </button>
    </li>
    <li className="w-full sm:w-auto">
      <button
        onClick={() => setPage('project')}
        className={`w-full flex flex-row justify-center items-center gap-2 py-2 px-4 rounded-2xl transition-colors duration-200 text-base sm:text-xs {whiteBg ? 'text-black hover:bg-slate-100' : 'text-white hover:text-white/70 hover:bg-white/10'} ${currentPage === 'project' ? 'bg-white/20 border border-cyan-400' : ''}`}
      >
        <ProjectorIcon size={20} />
        <span>Project</span>
      </button>
    </li>
    <li className="w-full sm:w-auto">
      <button
        onClick={() => setPage('gallery')}
        className={`w-full flex flex-row justify-center items-center gap-2 py-2 px-4 rounded-2xl transition-colors duration-200 text-base sm:text-xs ${whiteBg ? 'text-black hover:bg-slate-100' : 'text-white hover:text-white/70 hover:bg-white/10'} ${currentPage === 'gallery' ? 'bg-white/20 border border-cyan-400' : ''}`}
      >
        <GalleryThumbnails size={20} />
        <span>Gallery</span>
      </button>
    </li>
  </ul>
</nav>
  );
}
export default Navbar;