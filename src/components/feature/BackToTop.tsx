import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const click = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      type="button"
      onClick={click}
      aria-label="Back to top"
      className={`fixed bottom-7 right-7 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-600 text-white flex items-center justify-center transition-all duration-300 cursor-pointer hover:-translate-y-1 shadow-glow ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
    >
      <i className="ri-arrow-up-line text-lg"></i>
    </button>
  );
}