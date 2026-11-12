import React from 'react';
import './NotFoundPage.css';

export default function NotFoundPage({ onBackHome, requestedPath }) {
  return (
    <main className="notfound-container">
      <div className="notfound-glow-1" />
      <div className="notfound-glow-2" />

      <div className="notfound-card">
        <div className="notfound-tag">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          <span>Page Not Found</span>
        </div>

        <h1 className="notfound-code">404</h1>

        <h2 className="notfound-subtitle">
          Looking for {requestedPath ? `"${requestedPath}"` : 'something else'}?
        </h2>

        <p className="notfound-text">
          This formulation isn't available yet or has been archived from our current collection. Let's guide you back to our signature blends.
        </p>

        <button onClick={onBackHome} className="notfound-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>Back to Home</span>
        </button>
      </div>
    </main>
  );
}






































// import React from 'react';
// import { ArrowLeft, Sparkles } from 'lucide-react';

// export default function NotFoundPage({ onBackHome, requestedPath }) {
//   return (
//     <main className="relative min-h-[100dvh] w-full flex items-center justify-center bg-stone-950 text-stone-100 px-6 py-16 overflow-hidden">
//       <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#9E6445]/20 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-10 right-10 w-72 h-72 bg-amber-600/10 rounded-full blur-2xl pointer-events-none" />

//       <div className="relative z-10 max-w-xl w-full text-center flex flex-col items-center">
//         <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-stone-800 bg-stone-900/60 text-[#d4a373] text-[11px] uppercase tracking-[0.25em] font-medium mb-6">
//           <Sparkles size={12} />
//           <span>Page Not Found</span>
//         </div>

//         <h1 className="font-editorial text-8xl sm:text-9xl font-light text-stone-200 tracking-tight leading-none drop-shadow-sm">
//           404
//         </h1>

//         <h2 className="font-editorial text-2xl sm:text-3xl text-stone-100 font-normal mt-4">
//           Looking for {requestedPath ? `"${requestedPath}"` : 'something else'}?
//         </h2>

//         <p className="mt-3 text-stone-400 text-sm sm:text-base max-w-md font-light leading-relaxed">
//           This formulation isn't available yet or has been archived from our current collection. Let's guide you back to our signature blends.
//         </p>

//         <button
//           onClick={onBackHome}
//           className="group mt-8 inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#9E6445] hover:bg-[#865134] text-white text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-[#9E6445]/30 cursor-pointer"
//         >
//           <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
//           <span>Back to Home</span>
//         </button>
//       </div>
//     </main>
//   );
// }