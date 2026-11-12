import React from 'react';
import './HeroSlide.css';

export default function HeroSlide({ slide, onExplore }) {
  return (
    <div className="hero-slide-wrapper">
      {/* Background with dedicated class */}
      <div className={`slide-bg ${slide.bgClass}`} />
      <div className="hero-overlay" />
      <div className="hero-vignette" />

      {/* Decorative accent orb */}
      <div className={`hero-accent-shape ${slide.accentClass}`} />

      {/* Hero Headline & CTA matching screenshot structure */}
      <div className="hero-content">
        <span className="hero-tagline">{slide.subtitle}</span>
        <h1 className="hero-title">{slide.title}</h1>
        <p className="hero-description">{slide.description}</p>

        <button onClick={() => onExplore(slide)} className="hero-cta-btn">
          <span>{slide.ctaText}</span>
         
        </button>
      </div>
    </div>
  );
}






































// import React from 'react';
// import { ArrowRight } from 'lucide-react';

// export default function HeroSlide({ slide, onExplore }) {
//   return (
//     <div className="relative w-full h-full min-h-[100dvh] flex items-center justify-center overflow-hidden">
//       <img
//         src={slide.image}
//         alt={slide.title}
//         className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-1000 scale-105"
//       />
//       <div className="absolute inset-0 bg-stone-950/40 backdrop-contrast-[1.05]" />

//       <div 
//         className="absolute -right-20 top-1/4 w-[380px] h-[520px] rounded-[180px] opacity-25 blur-xl pointer-events-none transition-colors duration-700"
//         style={{ backgroundColor: slide.accentColor || '#e08a8a' }}
//       />

//       <div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center pt-16">
//         <span className="text-[11px] md:text-xs uppercase tracking-[0.3em] font-medium text-stone-200/90 mb-3 drop-shadow-sm">
//           {slide.subtitle}
//         </span>

//         <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.05] tracking-tight text-white drop-shadow-md max-w-3xl">
//           {slide.title}
//         </h1>

//         <p className="mt-4 sm:mt-6 text-sm sm:text-base text-stone-200/95 max-w-lg font-light leading-relaxed drop-shadow-sm">
//           {slide.description}
//         </p>

//         <button
//           onClick={() => onExplore(slide)}
//           className="group mt-8 inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-white/80 bg-white/5 hover:bg-white text-white hover:text-stone-900 backdrop-blur-xs transition-all duration-300 text-xs tracking-wider uppercase font-semibold cursor-pointer"
//         >
//           <span>{slide.ctaText || 'Shop Collection'}</span>
//           <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
//         </button>
//       </div>
//     </div>
//   );
// }