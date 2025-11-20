import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: showScrollTop ? 1 : 0,
        scale: showScrollTop ? 1 : 0.8,
        y: showScrollTop ? 0 : 20
      }}
      transition={{ duration: 0.3 }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-chart-1 to-chart-2 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all flex items-center justify-center"
      style={{ pointerEvents: showScrollTop ? 'auto' : 'none' }}
      data-testid="button-scroll-top"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
    </motion.button>
  );
}
