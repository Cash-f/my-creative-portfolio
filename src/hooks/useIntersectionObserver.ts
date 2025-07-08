import { useEffect, useRef, useState } from 'react';

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

export const useIntersectionObserver = (
  options?: Args
): [React.RefObject<Element | null>, boolean] => {
  const { freezeOnceVisible = false, ...observerOptions } = options || {};
  const targetRef = useRef<Element | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
      if (entry.isIntersecting && freezeOnceVisible) {
        observer.unobserve(target);
      }
    }, observerOptions);

    observer.observe(target);

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [freezeOnceVisible, observerOptions]); // Add observerOptions to dependency array

  return [targetRef, isVisible];
};