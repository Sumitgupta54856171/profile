import "./bg.css"
function Footer({ whiteBg = false }) {
  return (
    <footer className={`relative w-full ${whiteBg ? 'bg-white text-black' : ''}`}>
      <div className="relative p-1 rounded-xl bg-gradient-to-r from-teal-900 via-slate-900 to-cyan-900 animate-border-shine">
        <div className={`rounded-xl bg-gradient-to-r from-blue-500 via-yellow-500 to-cyan-500 p-6 ${whiteBg ? 'text-black' : 'text-white'}`}>
          <h2 className="text-xl font-bold text-center">Sumit Gupta</h2>
        </div>
        <div className={`p-4 ${whiteBg ? 'text-black' : 'text-white'}`}>
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="text-sm text-center sm:text-left">
              2025 Sumit Gupta Portfolio
            </span>
            <div className="flex gap-4">
              <a href="https://github.com/Sumitgupta54856171" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
                <img src="https://img.icons8.com/m_outlined/512/github.png" alt="GitHub" className="size-8" />
              </a>
              <a href="https://www.linkedin.com/in/sumitgupta54856171/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
                <img src="https://img.icons8.com/ios11/512/linkedin.png" alt="LinkedIn" className="size-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;