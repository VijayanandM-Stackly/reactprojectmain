import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSlide from './components/HeroSlide';
import CarouselControls from './components/CarouselControls';
import QuickShopModal from './components/QuickShopModal';
import NotFoundPage from './components/NotFoundPage';
import './App.css';

const COSMETIC_SLIDES = [
  {
    id: 1,
    subtitle: "THE SEASON'S ESSENTIAL ELIXIR",
    title: "Botanical Radiance, Pure Beginnings",
    description: "Organic seed cold-pressed oils. Velvet textures. Uncompromised luminosity.",
    ctaText: "Shop Serum",
    price: "$64.00",
    bgClass: "slide-bg-1",
    accentClass: "accent-amber",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=2000&q=80"
  },
  {
    id: 2,
    subtitle: "TIMELESS CELLULAR RESTORATION",
    title: "Featherlight Finish, All Day Glow",
    description: "Micro-encapsulated hyaluronic nectar designed for weightless hydration and restorative youth.",
    ctaText: "Explore Collection",
    price: "$78.00",
    bgClass: "slide-bg-2",
    accentClass: "accent-rose",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=2000&q=80"
  },
  {
    id: 3,
    subtitle: "MINIMALIST VELVET COMPLEXION",
    title: "Sculpted Undertones, Clean Luxury",
    description: "Cruelty-free satin pigments calibrated to illuminate every facet of natural beauty.",
    ctaText: "Explore Palette",
    price: "$52.00",
    bgClass: "slide-bg-3",
    accentClass: "accent-sand",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=2000&q=80"
  }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [targetName, setTargetName] = useState('');
  const [currentSlideIndex, setCurrentSlideIndex] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleNavigate = (destination) => {
    if (destination === 'Home') {
      setCurrentPage('Home');
      setTargetName('');
    } else {
      setTargetName(destination);
      setCurrentPage('404');
    }
  };

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % COSMETIC_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + COSMETIC_SLIDES.length) % COSMETIC_SLIDES.length);
  };

  const handleOpenShop = (slide) => {
    setSelectedProduct(slide);
    setIsModalOpen(true);
  };

  const handleAddToCart = (product) => {
    setIsModalOpen(false);
    setToastMessage(`Added "${product.title}" to bag.`);
    setTimeout(() => setToastMessage(''), 3000);
  };

  return (
    <div className="app-container">
      {toastMessage && (
        <div className="toast-alert">
          {toastMessage}
        </div>
      )}

      {currentPage === '404' ? (
        <NotFoundPage 
          requestedPath={targetName}
          onBackHome={() => handleNavigate('Home')} 
        />
      ) : (
        <>
          <Navbar 
            currentRoute={currentPage} 
            onNavigate={handleNavigate} 
          />

          <HeroSlide 
            slide={COSMETIC_SLIDES[currentSlideIndex]} 
            onExplore={handleOpenShop} 
          />

          <CarouselControls
            total={COSMETIC_SLIDES.length}
            activeIndex={currentSlideIndex}
            onPrev={prevSlide}
            onNext={nextSlide}
            onSelect={(index) => setCurrentSlideIndex(index)}
          />

          <QuickShopModal 
            isOpen={isModalOpen}
            product={selectedProduct}
            onClose={() => setIsModalOpen(false)}
            onAddToCart={handleAddToCart}
          />
        </>
      )}
    </div>
  );
}

































































// import React, { useState } from 'react';
// import Navbar from './components/Navbar';
// import HeroSlide from './components/HeroSlide';
// import CarouselControls from './components/CarouselControls';
// import QuickShopModal from './components/QuickShopModal';
// import NotFoundPage from './components/NotFoundPage';

// const COSMETIC_SLIDES = [
//   {
//     id: 1,
//     subtitle: "THE SEASON'S ESSENTIAL ELIXIR",
//     title: "Botanical Radiance, Pure Beginnings",
//     description: "Organic seed cold-pressed oils. Velvet textures. Uncompromised luminosity.",
//     ctaText: "Shop Serum",
//     price: "$64.00",
//     accentColor: "#f4a261",
//     image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1920&q=80"
//   },
//   {
//     id: 2,
//     subtitle: "DERMATOLOGICAL CELLULAR REPAIR",
//     title: "Featherlight Finish, All Day Glow",
//     description: "Micro-encapsulated hyaluronic nectar designed for weightless hydration and restorative youth.",
//     ctaText: "Discover Cream",
//     price: "$78.00",
//     accentColor: "#e76f51",
//     image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=1920&q=80"
//   },
//   {
//     id: 3,
//     subtitle: "MINIMALIST VELVET COMPLEXION",
//     title: "Sculpted Undertones, Clean Luxury",
//     description: "Cruelty-free satin pigments calibrated to illuminate every facet of natural beauty.",
//     ctaText: "Explore Palette",
//     price: "$52.00",
//     accentColor: "#d4a373",
//     image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1920&q=80"
//   }
// ];

// export default function App() {
//   const [currentPage, setCurrentPage] = useState('Home');
//   const [targetName, setTargetName] = useState('');
//   const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [toastMessage, setToastMessage] = useState('');

//   const handleNavigate = (destination) => {
//     if (destination === 'Home') {
//       setCurrentPage('Home');
//       setTargetName('');
//     } else {
//       setTargetName(destination);
//       setCurrentPage('404');
//     }
//   };

//   const nextSlide = () => {
//     setCurrentSlideIndex((prev) => (prev + 1) % COSMETIC_SLIDES.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlideIndex((prev) => (prev - 1 + COSMETIC_SLIDES.length) % COSMETIC_SLIDES.length);
//   };

//   const handleOpenShop = (slide) => {
//     setSelectedProduct(slide);
//     setIsModalOpen(true);
//   };

//   const handleAddToCart = (product) => {
//     setIsModalOpen(false);
//     setToastMessage(`Added "${product.title}" to bag.`);
//     setTimeout(() => setToastMessage(''), 3000);
//   };

//   return (
//     <div className="relative min-h-[100dvh] w-full select-none overflow-hidden bg-stone-900 font-sans">
//       {toastMessage && (
//         <div className="fixed top-24 right-6 z-50 bg-[#9E6445] text-white px-5 py-3 rounded text-xs font-semibold shadow-lg animate-bounce">
//           {toastMessage}
//         </div>
//       )}

//       {currentPage === '404' ? (
//         <NotFoundPage 
//           requestedPath={targetName}
//           onBackHome={() => handleNavigate('Home')} 
//         />
//       ) : (
//         <>
//           <Navbar 
//             currentRoute={currentPage} 
//             onNavigate={handleNavigate} 
//           />

//           <HeroSlide 
//             slide={COSMETIC_SLIDES[currentSlideIndex]} 
//             onExplore={handleOpenShop} 
//           />

//           <CarouselControls
//             total={COSMETIC_SLIDES.length}
//             activeIndex={currentSlideIndex}
//             onPrev={prevSlide}
//             onNext={nextSlide}
//             onSelect={(index) => setCurrentSlideIndex(index)}
//           />

//           <QuickShopModal 
//             isOpen={isModalOpen}
//             product={selectedProduct}
//             onClose={() => setIsModalOpen(false)}
//             onAddToCart={handleAddToCart}
//           />
//         </>
//       )}
//     </div>
//   );
// }









