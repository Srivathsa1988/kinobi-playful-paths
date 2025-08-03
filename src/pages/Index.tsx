import { useEffect } from 'react';
import { HeroSection } from "@/components/Kinobi/HeroSection";
import { BuddiesSection } from "@/components/Kinobi/BuddiesSection";
import { TestimonialsSection } from "@/components/Kinobi/TestimonialsSection";
import { IAPSection } from "@/components/Kinobi/IAPSection";
import { WhyKinobiSection } from "@/components/Kinobi/WhyKinobiSection";
import { CTASection } from "@/components/Kinobi/CTASection";
import { StickyNavbar } from "@/components/Kinobi/StickyNavbar";
import { useScrollTracking, useTimeTracking, trackWaitlistClick, trackQuizStart } from "@/hooks/useTracking";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import KinobiSurvey from "@/components/Kinobi/KinobiSurvey";

import { WaitlistModal } from "@/components/Kinobi/WaitlistModal";


const Index = () => {
  const { toast } = useToast();
  
  // Initialize tracking hooks
  useScrollTracking();
  useTimeTracking();

  useEffect(() => {
    // Track page load
    console.log('📊 Page loaded: Kinobi Landing Page');
  }, []);

  const [showWaitlist, setShowWaitlist] = useState(false);

  const handleWaitlistClick = (source = 'landing') => {
    trackWaitlistClick(source);
    setShowWaitlist(true);
    // In production, this would open a modal or redirect to a signup form
  };

  const handleWaitlistClick_Original = (source = 'landing') => {
    trackWaitlistClick(source);
    toast({
      title: "🎉 Thank you for your interest!",
      description: "You'll be the first to know when Kinobi is ready for your family.",
    });
    // In production, this would open a modal or redirect to a signup form
  };

  const handleQuizClick_Original = (source = 'landing') => {
    trackQuizStart(source);
    toast({
      title: "🧩 Quiz coming soon!",
      description: "We're preparing a personalized screen-time assessment for you.",
    });
    // In production, this would open the quiz modal or redirect
  };

  const [showSurvey, setShowSurvey] = useState(false);

  const handleQuizClick = (source = 'landing') => {
    trackQuizStart(source);
    setShowSurvey(true);
    
  };
  return (
    <div className="min-h-screen bg-background">
      <StickyNavbar 
        onWaitlistClick={() => handleWaitlistClick('sticky_nav')}
        onQuizClick={() => handleQuizClick('sticky_nav')} 
      />
      
      <HeroSection 
        onWaitlistClick={() => handleWaitlistClick('hero')}
        onQuizClick={() => handleQuizClick('hero')} 
      />
      
      <BuddiesSection 
        onWaitlistClick={() => handleWaitlistClick('buddies')} 
      />
      
      <TestimonialsSection />
      
      <IAPSection />
      
      <WhyKinobiSection />
      
      <CTASection 
        onWaitlistClick={() => handleWaitlistClick('final_cta')}
        onQuizClick={() => handleQuizClick('final_cta')}         
      />
      {showSurvey && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
        <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-2xl relative">
        <button
          onClick={() => setShowSurvey(false)}
          className="absolute top-2 right-3 text-gray-400 hover:text-gray-600 text-xl"
          aria-label="Close"
        >
        ×
      </button>
      <KinobiSurvey />
      </div>
      </div>
    )}
    <WaitlistModal open={showWaitlist} onClose={() => setShowWaitlist(false)} />
    </div>
  );
};

export default Index;
