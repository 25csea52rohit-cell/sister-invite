import { useEffect, useRef } from 'react';

export const useScrollReveal = (options = { threshold: 0.1 }) => {
  const ref = useRef(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    // Initial state
    element.style.opacity = '0';
    element.style.transform = 'translateY(40px)';
    element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
        observer.unobserve(element);
      }
    }, options);
    
    observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options.threshold]);

  return ref;
};
