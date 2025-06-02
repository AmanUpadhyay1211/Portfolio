import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      const startTime = Date.now();
      const startValue = 0;
      
      const step = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function: easeOutQuart
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(startValue + easeProgress * (end - startValue));
        
        if (countRef.current !== currentValue) {
          countRef.current = currentValue;
          setCount(currentValue);
        }
        
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      
      requestAnimationFrame(step);
    }
  }, [inView, end, duration]);

  const formattedNumber = count.toLocaleString();

  return (
    <span ref={ref} className="font-bold text-3xl md:text-4xl transition-all">
      {prefix}{formattedNumber}{suffix}
    </span>
  );
};

export default AnimatedCounter;