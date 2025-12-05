import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: 'chars' | 'words' | 'lines';
  from?: Record<string, any>;
  to?: Record<string, any>;
  threshold?: number;
  rootMargin?: string;
  textAlign?: 'left' | 'center' | 'right';
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 0,
  duration = 0.5,
  ease = 'power2.out',
  splitType = 'chars',
  from = { opacity: 0, y: 20 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '0px',
  textAlign = 'left',
  onLetterAnimationComplete,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    let elements: HTMLElement[] = [];

    // Split text into characters
    if (splitType === 'chars') {
      container.innerHTML = text
        .split('')
        .map((char) => `<span class="inline-block">${char === ' ' ? '&nbsp;' : char}</span>`)
        .join('');
      elements = Array.from(container.querySelectorAll('span'));
    } else if (splitType === 'words') {
      container.innerHTML = text
        .split(' ')
        .map((word) => `<span class="inline-block">${word}&nbsp;</span>`)
        .join('');
      elements = Array.from(container.querySelectorAll('span'));
    }

    // Set initial state
    gsap.set(elements, from);

    // Create intersection observer for scroll trigger
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate elements
            gsap.to(elements, {
              ...to,
              duration,
              ease,
              stagger: delay / 1000,
              onComplete: onLetterAnimationComplete,
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      gsap.killTweensOf(elements);
    };
  }, [text, splitType, delay, duration, ease, from, to, threshold, rootMargin, onLetterAnimationComplete]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ textAlign: textAlign as any }}
    >
      {text}
    </div>
  );
};

export default SplitText;
