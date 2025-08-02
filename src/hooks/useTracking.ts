import { useEffect, useRef } from 'react';

// Conversion tracking events
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  // In production, replace with actual analytics service (Google Analytics, Mixpanel, etc.)
  console.log('📊 Tracking Event:', eventName, properties);
  
  // Example: Google Analytics gtag
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, properties);
  }
};

// Hook for tracking scroll depth
export const useScrollTracking = () => {
  const lastDepthRef = useRef(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      // Track at 25%, 50%, 75%, 100% milestones
      const milestones = [25, 50, 75, 100];
      const currentMilestone = milestones.find(
        milestone => scrollPercent >= milestone && lastDepthRef.current < milestone
      );
      
      if (currentMilestone) {
        lastDepthRef.current = currentMilestone;
        trackEvent('scroll_depth', { depth: currentMilestone });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

// Hook for tracking time on page
export const useTimeTracking = () => {
  const startTimeRef = useRef<number>(Date.now());
  
  useEffect(() => {
    const trackTimeSpent = () => {
      const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000);
      trackEvent('time_on_page', { seconds: timeSpent });
    };

    // Track time when user leaves page
    const handleBeforeUnload = () => trackTimeSpent();
    const handleVisibilityChange = () => {
      if (document.hidden) trackTimeSpent();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      trackTimeSpent(); // Track on component unmount
    };
  }, []);
};

// Individual tracking functions
export const trackWaitlistClick = (source: string) => {
  trackEvent('waitlist_click', { source });
};

export const trackQuizStart = (source: string) => {
  trackEvent('quiz_start', { source });
};

export const trackSectionView = (section: string) => {
  trackEvent('section_view', { section });
};