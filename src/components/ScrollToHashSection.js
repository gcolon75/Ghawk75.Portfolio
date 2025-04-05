import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToHashSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        // Delay needed for DOM to paint
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return null;
}

export default ScrollToHashSection;