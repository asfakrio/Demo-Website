"use client"

import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  as?: React.ElementType;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, className, direction = 'up', as: Tag = 'div' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const animationClasses = {
    up: 'translate-y-20',
    down: '-translate-y-20',
    left: '-translate-x-20',
    right: 'translate-x-20',
  };

  const baseTransition = 'transition-all duration-1000 ease-out';

  return (
    <Tag
      ref={ref}
      className={cn(
        baseTransition,
        isVisible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${animationClasses[direction]}`,
        className
      )}
    >
      {children}
    </Tag>
  );
};
