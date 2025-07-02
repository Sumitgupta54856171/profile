import './index.css'
import Profile from './component/Profile';
import Home from './component/Home';
import Navbar from './component/Navbar';
import AirbnbClone from './component/project/AirbnbClone';
import Socialmedia from './component/project/Socialmedia';
import Stockmarke from './component/project/Stockemarket';
import Project from './Project';
import { useState } from 'react';
import Gallery from './component/Gallery';
function App() {
  const [whiteBg, setWhiteBg] = useState(false);
  const [currentPage, setPage] = useState('home');

  let pageContent = null;
  if (currentPage === 'home') pageContent = <Home setPage={setPage} whiteBg={whiteBg} />;
  else if (currentPage === 'profile') pageContent = <Profile whiteBg={whiteBg} />;
  else if (currentPage === 'project') pageContent = <Project setPage={setPage} whiteBg={whiteBg} />;
  else if (currentPage === 'gallery') pageContent = <Gallery setPage={setPage} whiteBg={whiteBg} />;
  else if (currentPage === 'airbnb') pageContent = <AirbnbClone setPage={setPage} whiteBg={whiteBg} />;
  else if (currentPage === 'stockmarket') pageContent = <Stockmarke setPage={setPage} whiteBg={whiteBg} />;
  else if (currentPage === 'socialmedia') pageContent = <Socialmedia setPage={setPage} whiteBg={whiteBg} />;
  else pageContent = <Home setPage={setPage} whiteBg={whiteBg} />;

  return (
    <div className={
      whiteBg
        ? 'min-h-screen w-full bg-white overflow-scroll text-black transition-colors duration-300'
        : 'h-screen w-full bg-gradient-to-br from-slate-100 via-slate-950 to-slate-900 overflow-scroll text-white transition-colors duration-300'
    }>
      <button
        className="fixed bottom-4 right-4 z-50 px-4 py-2 rounded-full shadow-lg bg-slate-800 text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        onClick={() => setWhiteBg((v) => !v)}
      >
        {whiteBg ? 'Back' : 'White'}
      </button>
      <Navbar setPage={setPage} currentPage={currentPage} whiteBg={whiteBg} />
      {pageContent}
    </div>
  );
}
export default App;