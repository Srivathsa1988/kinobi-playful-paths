import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-main.jpg";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface HeroSectionProps {
  onWaitlistClick: () => void;
  onQuizClick: () => void;
}

export const HeroSection = ({ onWaitlistClick, onQuizClick }: HeroSectionProps) => {
  const [scrollIndicatorVisible, setScrollIndicatorVisible] = useState(true);

  const handleScrollToBuddies = () => {
    setScrollIndicatorVisible(false);
    const buddiesSection = document.getElementById('buddy-variants');
    if (buddiesSection) {
      buddiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Floating elements for playfulness */}
      <div className="absolute top-20 left-10 w-8 h-8 bg-coral rounded-full opacity-30 animate-bounce" style={{animationDelay: '0s'}} />
      <div className="absolute top-32 right-20 w-6 h-6 bg-lavender rounded-full opacity-40 animate-bounce" style={{animationDelay: '1s'}} />
      <div className="absolute bottom-40 left-20 w-10 h-10 bg-mint-light rounded-full opacity-25 animate-bounce" style={{animationDelay: '2s'}} />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
          🌱 Raise mindful kids in a digital world —{" "}
          <span className="text-mint-dark font-bold">without fights, force, or guilt</span>
        </h1>

        
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-lg sm:text-xl text-slate-700 leading-relaxed">
            Meet <strong className="text-mint-dark font-semibold">Kinobi</strong> — screen-time rituals designed for real connection, that reduce screen time without the struggle.
          </p>
          {/* <p className="text-lg sm:text-xl text-slate-700 leading-relaxed mt-2">
            Immersive stories, playful nudges & smart guidance that reduce screen time without the struggle.
          </p> */}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="xl" 
            onClick={onWaitlistClick}
            className="w-full sm:w-auto"
          >
            Join the Waitlist
          </Button>
          <Button 
            variant="gentle" 
            size="xl" 
            onClick={onQuizClick}
            className="w-full sm:w-auto"
          >
            Take a 30-sec Quiz
          </Button>

          {scrollIndicatorVisible && (
            <div className="lg:hidden">
            {/*<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 lg:hidden">*/}
              <button
                onClick={handleScrollToBuddies}
                className="flex flex-col items-center space-y-2 p-4 text-warm-gray hover:text-foreground transition-colors duration-300 group"
                aria-label="Scroll to see buddy options"
              >
                <span className="text-sm font-medium text-center">
                  See which buddy fits your child 👇
                </span>
                <div className="flex flex-col items-center animate-bounce">
                  <ChevronDown className="h-6 w-6 group-hover:text-primary transition-colors" />
                  <ChevronDown className="h-6 w-6 -mt-3 opacity-50 group-hover:text-primary transition-colors" />
                </div>
              </button>
            </div>
          )
          }
        </div>
        
        {/* Scroll indicator */}
        {/*<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>*/}
        {/* Scroll Indicator */}
      
      </div>
    </section>
  );
};