import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden bg-slate-900">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-gradient-xy"></div>
      <style>{`
        @keyframes gradient-xy {
          0%, 100% {
            background-size: 400% 400%;
            background-position: 0% 50%;
          }
          50% {
            background-size: 200% 200%;
            background-position: 100% 50%;
          }
        }
        .animate-gradient-xy {
          animation: gradient-xy 15s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
