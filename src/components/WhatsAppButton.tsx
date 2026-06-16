"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const phoneNumber = "+919876543210"; // Placeholder consultant number
  const message = encodeURIComponent(
    "Hi Seren Education Consultants, I visited your website and would like to schedule a free consultation regarding overseas study/immigration opportunities."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl shadow-[#25D366]/40 hover:bg-[#128C7E] transition-colors duration-300 focus:outline-none"
      aria-label="Chat on WhatsApp"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
    >
      {/* Ripple Rings */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping -z-10" />

      {/* WhatsApp SVG Icon */}
      <svg
        className="w-7 h-7 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.458L0 24zm6.59-4.846c1.6.95 3.498 1.45 5.411 1.451 5.58 0 10.125-4.542 10.128-10.122.002-2.702-1.047-5.242-2.951-7.147C17.33 1.43 14.793.38 12.012.38 6.432.38 1.889 4.92 1.886 10.5c-.001 1.986.518 3.926 1.503 5.645l-1.007 3.678 3.765-.987zM17.76 14.5c-.316-.16-1.872-.924-2.16-1.03-.288-.105-.497-.16-.707.16-.21.317-.81.16-.993-.317-.183-.478-.183-1.03-.183-1.35 0-.16.105-.316.21-.475.105-.16.21-.316.315-.475.105-.16.158-.27.263-.48.105-.21.053-.4-.026-.56-.08-.16-.707-1.705-.97-2.337-.255-.615-.515-.53-.707-.54-.183-.01-.393-.01-.602-.01-.21 0-.55.08-.838.4-.288.317-1.1.16-1.1 2.825 0 2.665 1.938 5.235 2.2 5.59.263.356 3.813 5.82 9.24 8.163 1.29.557 2.298.887 3.084 1.137 1.297.412 2.477.354 3.41.215.993-.15 2.043-.833 2.33-1.597.288-.763.288-1.418.21-1.56-.08-.14-.288-.22-.603-.38z" />
      </svg>
    </motion.a>
  );
}
