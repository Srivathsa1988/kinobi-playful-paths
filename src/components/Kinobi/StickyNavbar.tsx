import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

interface StickyNavbarProps {
  onWaitlistClick: () => void;
  onQuizClick: () => void;
}

export const StickyNavbar = ({ onWaitlistClick, onQuizClick }: StickyNavbarProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar after scrolling past hero section (approximately 80vh)
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-soft transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-primary">🌱 Kinobi</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Button 
              variant="gentle" 
              size="sm" 
              onClick={onQuizClick}
              className="hidden sm:inline-flex"
              data-gtm-event="click_stickynav_takequiz"
            >
              Take Quiz
            </Button>
            <Button 
              variant="hero" 
              size="sm" 
              onClick={onWaitlistClick}
              data-gtm-event="click_stickynav_jwaitlist"
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};