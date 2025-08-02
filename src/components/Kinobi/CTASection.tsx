import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface CTASectionProps {
  onWaitlistClick: () => void;
  onQuizClick: () => void;
}

export const CTASection = ({ onWaitlistClick, onQuizClick }: CTASectionProps) => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-hero">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-card/95 backdrop-blur-sm shadow-floating border-2 border-primary/20">
          <CardContent className="p-8 text-center">
            <div className="mb-8">
              <p className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                📬 Join 500+ conscious parents waiting to try Kinobi
              </p>
              <p className="text-muted-foreground">
                Be the first to experience mindful screen-time solutions
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
                variant="coral" 
                size="xl" 
                onClick={onQuizClick}
                className="w-full sm:w-auto"
              >
                Take the 30-Second Quiz
              </Button>
            </div>
            
            <div className="mt-8 text-sm text-muted-foreground">
              <p>✨ No spam, just gentle updates on our progress</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};