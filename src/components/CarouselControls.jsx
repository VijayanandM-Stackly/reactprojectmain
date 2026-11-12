import React from 'react';
import './CarouselControls.css';

export default function CarouselControls({ total, activeIndex, onPrev, onNext, onSelect }) {
  const formatNumber = (num) => String(num + 1).padStart(2, '0');

  return (
    <>
      {/* Left Glass Floating Arrow */}
      <button onClick={onPrev} className="carousel-arrow-btn arrow-prev" aria-label="Previous Slide">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </button>

      {/* Right Glass Floating Arrow */}
      <button onClick={onNext} className="carousel-arrow-btn arrow-next" aria-label="Next Slide">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>

      {/* Bottom Center Indicator Bars */}
      <div className="carousel-dots">
        {Array.from({ length: total }).map((_, index) => (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className="carousel-dot-btn"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div className={`carousel-dot-bar ${activeIndex === index ? 'active' : ''}`} />
          </button>
        ))}
      </div>

     
    </>
  );
}














































// import React from 'react';
// import { ArrowLeft, ArrowRight } from 'lucide-react';

// export default function CarouselControls({ total, activeIndex, onPrev, onNext, onSelect }) {
//   const formatNumber = (num) => String(num + 1).padStart(2, '0');

//   return (
//     <>
//       <button
//         onClick={onPrev}
//         aria-label="Previous Slide"
//         className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-30 w-11 h-11 md:w-13 md:h-13 rounded-full border border-white/20 bg-stone-900/30 hover:bg-white hover:text-stone-900 text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 focus:outline-none cursor-pointer"
//       >
//         <ArrowLeft size={18} />
//       </button>

//       <button
//         onClick={onNext}
//         aria-label="Next Slide"
//         className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-30 w-11 h-11 md:w-13 md:h-13 rounded-full border border-white/20 bg-stone-900/30 hover:bg-white hover:text-stone-900 text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 focus:outline-none cursor-pointer"
//       >
//         <ArrowRight size={18} />
//       </button>

//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
//         {Array.from({ length: total }).map((_, index) => (
//           <button
//             key={index}
//             onClick={() => onSelect(index)}
//             aria-label={`Jump to slide ${index + 1}`}
//             className="group py-2 focus:outline-none cursor-pointer"
//           >
//             <div
//               className={`h-[2.5px] transition-all duration-300 rounded-full ${
//                 activeIndex === index 
//                   ? 'w-10 bg-[#9E6445]' 
//                   : 'w-6 bg-white/35 group-hover:bg-white/70'
//               }`}
//             />
//           </button>
//         ))}
//       </div>

//       <div className="absolute bottom-8 right-6 md:right-12 z-30 hidden sm:flex items-center gap-2 text-xs font-semibold tracking-widest text-white/90">
//         <span>{formatNumber(activeIndex)}</span>
//         <span className="w-6 h-[1px] bg-white/40 inline-block" />
//         <span className="text-white/50">{formatNumber(total - 1)}</span>
//       </div>
//     </>
//   );
// }