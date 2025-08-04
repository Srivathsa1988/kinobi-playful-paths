import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-main.jpg";

interface HeroSectionProps {
  onWaitlistClick: () => void;
  onQuizClick: () => void;
}

export const HeroSection = ({ onWaitlistClick, onQuizClick }: HeroSectionProps) => {
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
          <span className="text-slate-900 font-semibold">without fights, force, or guilt</span>
        </h1>
        
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-lg sm:text-xl text-slate-900 leading-relaxed">
            Meet <strong className="text-slate-900 font-semibold">Kinobi</strong> — screen-time rituals designed for real connection, not just control.
          </p>
          <p className="text-lg sm:text-xl text-slate-900 leading-relaxed mt-2">
            AR stories, playful prompts & smart guidance that grow with your child.
          </p>
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
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};