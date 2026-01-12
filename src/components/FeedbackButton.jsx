import { motion } from 'framer-motion';

export default function FeedbackButton() {
  return (
    <motion.a
      href="https://docs.google.com/forms/d/e/1FAIpQLSfadCtY8ZGqT9qAtEbIcvOh_l0HRjoIu1GXefg386yeLO3SKA/viewform?usp=header"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-white/70 backdrop-blur-xl shadow-lg rounded-full px-4 py-2 ring-1 ring-white/50 text-sm font-medium text-gray-600 hover:text-primary hover:bg-white/90 transition-colors flex items-center gap-2 group"
      aria-label="Report a bug or request a feature"
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 1.05, y: -2, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        className="w-5 h-5 text-gray-500 group-hover:text-primary transition-colors"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
      </svg>
      Feedback
    </motion.a>
  );
}
