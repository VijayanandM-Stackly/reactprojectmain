import React, { useState } from 'react';
import './Navbar.css';

const NAV_ITEMS = ['Home', 'About Us', 'Services', 'Contact Us'];

export default function Navbar({ currentRoute, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (dest) => {
    onNavigate(dest);
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        
        {/* Responsive Cosmetics Brand Logo */}
       
         
          {/* Typography */}
          <div className="brand-text-block">
            <span className="brand-primary-name">STACKLY</span>
            <span className="brand-tagline"> COSMETICS</span>
          </div>
        

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {NAV_ITEMS.map((item) => {
            const isActive = currentRoute === item;
            return (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="nav-link"
              >
                {item}
                {isActive && <span className="nav-active-pill" />}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="auth-actions">
          <button onClick={() => handleNavClick('Login')} className="btn-login">
            Login
          </button>
          <button onClick={() => handleNavClick('Register')} className="btn-register">
            Register
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-toggle-btn"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className="mobile-nav-link"
            >
              {item}
            </button>
          ))}
          <div className="mobile-drawer-footer">
            <button onClick={() => handleNavClick('Login')} className="btn-login">
              Login
            </button>
            <button onClick={() => handleNavClick('Register')} className="btn-register">
              Register
            </button>
          </div>
        </div>
      )}
    </header>
  );
}




























// import React, { useState } from 'react';
// import { Menu, X } from 'lucide-react';

// const NAV_ITEMS = ['Home', 'About Us', 'Services', 'Contact Us'];

// export default function Navbar({ currentRoute, onNavigate }) {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const handleNavClick = (destination) => {
//     onNavigate(destination);
//     setMobileMenuOpen(false);
//   };

//   return (
//     <header className="absolute top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-xs border-b border-stone-200/50">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        
//         <button 
//           onClick={() => handleNavClick('Home')}
//           className="flex items-center gap-3 text-left focus:outline-none"
//         >
//           <div className="w-7 h-7 flex items-center justify-center text-[#9E6445]">
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M16 3h5m0 0v5m0-5l-6 6M8 21H3m0 0v-5m0 5l6-6" />
//             </svg>
//           </div>
//           <span className="font-bold tracking-[0.2em] text-lg text-stone-800 uppercase">
//             Stackly
//           </span>
//         </button>

//         <nav className="hidden md:flex items-center gap-8">
//           {NAV_ITEMS.map((item) => {
//             const isActive = currentRoute === item;
//             return (
//               <button
//                 key={item}
//                 onClick={() => handleNavClick(item)}
//                 className={`relative py-2 text-xs font-semibold tracking-wider transition-colors duration-200 cursor-pointer ${
//                   isActive ? 'text-stone-900 font-bold' : 'text-stone-500 hover:text-stone-900'
//                 }`}
//               >
//                 {item}
//                 {isActive && (
//                   <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#9E6445] rounded-full" />
//                 )}
//               </button>
//             );
//           })}
//         </nav>

//         <div className="hidden md:flex items-center gap-6">
//           <button 
//             onClick={() => handleNavClick('Login')}
//             className="text-xs font-medium text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
//           >
//             Login
//           </button>
//           <button 
//             onClick={() => handleNavClick('Register')}
//             className="px-6 py-2.5 rounded-sm bg-[#9E6445] hover:bg-[#865134] text-white text-xs font-medium tracking-wide transition-all duration-300 shadow-sm cursor-pointer"
//           >
//             Register
//           </button>
//         </div>

//         <button 
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           className="md:hidden text-stone-700 hover:text-stone-950 p-2 cursor-pointer"
//           aria-label="Toggle Menu"
//         >
//           {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
//         </button>
//       </div>

//       {mobileMenuOpen && (
//         <div className="md:hidden bg-white border-b border-stone-200 px-6 py-5 space-y-4">
//           {NAV_ITEMS.map((item) => (
//             <button
//               key={item}
//               onClick={() => handleNavClick(item)}
//               className="block w-full text-left py-2 text-sm font-medium text-stone-700 hover:text-[#9E6445]"
//             >
//               {item}
//             </button>
//           ))}
//           <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
//             <button 
//               onClick={() => handleNavClick('Login')} 
//               className="text-xs font-semibold text-stone-700 hover:text-[#9E6445]"
//             >
//               Login
//             </button>
//             <button 
//               onClick={() => handleNavClick('Register')} 
//               className="px-5 py-2 bg-[#9E6445] text-white text-xs font-medium rounded-sm"
//             >
//               Register
//             </button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }