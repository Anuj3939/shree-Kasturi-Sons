import React from 'react';

interface InfiniteSliderProps {
  children: React.ReactNode;
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  className?: string;
  speed?: number; // Animation speed in seconds
}

export function InfiniteSlider({ 
  children, 
  direction = 'horizontal', 
  reverse = false,
  className = '',
  speed = 20
}: InfiniteSliderProps) {
  const childrenArray = React.Children.toArray(children);
  
  return (
    <div 
      className={`overflow-hidden ${className}`}
      style={{
        maskImage: direction === 'vertical' 
          ? 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
          : 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: direction === 'vertical'
          ? 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
          : 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      }}
    >
      <div
        className={`flex ${
          direction === 'vertical' 
            ? 'flex-col animate-scroll-vertical' 
            : 'animate-scroll-horizontal'
        } ${reverse ? 'animate-reverse' : ''}`}
        style={{
          animationDuration: `${speed}s`,
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
        }}
      >
        {/* First set of children */}
        {childrenArray.map((child, index) => (
          <div key={`first-${index}`} className={direction === 'vertical' ? 'mb-4' : 'mr-4'}>
            {child}
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {childrenArray.map((child, index) => (
          <div key={`second-${index}`} className={direction === 'vertical' ? 'mb-4' : 'mr-4'}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
