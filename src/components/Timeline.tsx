import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface TimelineItem {
  year: string;
  business: string;
  turnover: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [progress, setProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timeline = timelineRef.current;
      const rect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress based on scroll position
      const scrollProgress = Math.max(0, Math.min(1, 
        (windowHeight - rect.top) / (rect.height + windowHeight)
      ));
      setProgress(scrollProgress);

      // Show items based on scroll position
      const itemElements = timeline.querySelectorAll('.timeline-item');
      const newVisibleItems: number[] = [];

      itemElements.forEach((item, index) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenter = itemRect.top + itemRect.height / 2;
        const viewportCenter = windowHeight / 2;
        
        if (itemCenter < viewportCenter + 100) {
          newVisibleItems.push(index);
        }
      });

      setVisibleItems(newVisibleItems);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={timelineRef} className="relative">
      {/* Progress Line */}
      <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-300 rounded-full overflow-hidden">
        <div 
          className="w-full bg-gradient-to-b from-yellow-400 to-yellow-600 transition-all duration-1000 ease-out"
          style={{ 
            height: `${progress * 100}%`,
            transform: 'translateY(0)'
          }}
        />
        
        {/* Progress Dots */}
        {items.map((_, index) => {
          const itemProgress = (index + 1) / items.length;
          const isActive = progress >= itemProgress;
          const dotSize = isActive ? 'w-8 h-8' : 'w-6 h-6';
          const dotPosition = `${(index / (items.length - 1)) * 100}%`;
          
          return (
            <div
              key={index}
              className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${dotSize} bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full border-3 border-white shadow-lg transition-all duration-500 ease-out ${
                isActive ? 'scale-110 shadow-xl' : 'scale-100'
              }`}
              style={{ 
                top: dotPosition,
                boxShadow: isActive 
                  ? '0 0 25px rgba(251, 191, 36, 0.8), 0 0 50px rgba(251, 191, 36, 0.4)' 
                  : '0 0 15px rgba(251, 191, 36, 0.5), 0 0 30px rgba(251, 191, 36, 0.2)'
              }}
            />
          );
        })}
      </div>

      {/* Timeline Items */}
      <div className="space-y-8 pl-20">
        {items.map((item, index) => (
          <div
            key={index}
            className={`timeline-item transition-all duration-1000 ease-out ${
              visibleItems.includes(index) 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-8'
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <Card className="bg-gradient-to-br from-yellow-200 to-yellow-300 border border-yellow-400/30 shadow-lg hover:shadow-xl transition-shadow duration-300" style={{boxShadow: '0 0 15px rgba(251, 191, 36, 0.2)'}}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 w-4 h-4 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full border-4 border-white shadow-lg mt-1 relative z-10" />
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h4 className="font-bold text-yellow-800 text-lg">{item.business}</h4>
                      <span className="text-yellow-600 font-semibold text-sm bg-yellow-100 px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                    </div>
                    
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
