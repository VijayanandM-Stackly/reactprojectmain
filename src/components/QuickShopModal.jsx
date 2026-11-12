import React from 'react';
import './QuickShopModal.css';

export default function QuickShopModal({ isOpen, onClose, product, onAddToCart }) {
  if (!isOpen || !product) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <img src={product.image} alt={product.title} className="modal-cover-img" />

        <div className="modal-body">
          <span className="modal-badge">Signature Formula</span>
          <h3 className="modal-title">{product.title}</h3>
          <p className="modal-desc">{product.description}</p>

          <div className="modal-footer">
            <span className="modal-price">{product.price}</span>
            <button onClick={() => onAddToCart(product)} className="modal-buy-btn">
              Add To Bag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}











































// import React from 'react';
// import { X } from 'lucide-react';

// export default function QuickShopModal({ isOpen, onClose, product, onAddToCart }) {
//   if (!isOpen || !product) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
//       <div className="bg-stone-50 text-stone-900 rounded-lg max-w-md w-full overflow-hidden shadow-2xl relative">
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 p-1.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition cursor-pointer"
//         >
//           <X size={18} />
//         </button>

//         <img 
//           src={product.image} 
//           alt={product.title} 
//           className="w-full h-56 object-cover" 
//         />

//         <div className="p-6">
//           <span className="text-[11px] font-semibold text-[#9E6445] tracking-widest uppercase">
//             Exclusive Formula
//           </span>
//           <h3 className="font-editorial text-2xl font-bold text-stone-900 mt-1">
//             {product.title}
//           </h3>
//           <p className="text-xs text-stone-500 mt-2 leading-relaxed">
//             {product.description}
//           </p>

//           <div className="flex items-center justify-between mt-6 pt-4 border-t border-stone-200">
//             <span className="text-xl font-bold text-stone-900">{product.price || '$58.00'}</span>
//             <button
//               onClick={() => onAddToCart(product)}
//               className="px-6 py-2.5 bg-[#9E6445] hover:bg-[#865134] text-white text-xs font-semibold tracking-wider uppercase rounded-sm transition cursor-pointer"
//             >
//               Add to Bag
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }