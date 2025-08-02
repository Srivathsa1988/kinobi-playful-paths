import { Card, CardContent } from "@/components/ui/card";

export const WhyKinobiSection = () => {
  const benefits = [
    "Not just control — real connection",
    "Not another app — a gentle guide", 
    "Designed by child behavior experts",
    "No fights. No bribes. No shutdowns"
  ];

  return (
    <section className="py-16 sm:py-24 bg-muted/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            💖 Why Parents Are Choosing Kinobi
          </h2>
        </div>
        
        <Card className="bg-gradient-card shadow-gentle border-2 border-primary/20 mb-8">
          <CardContent className="p-8">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-3 text-foreground"
                >
                  <span className="text-primary text-lg">✅</span>
                  <span className="font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        
        <div className="text-center">
          <Card className="bg-lavender-light border-lavender border-2 shadow-soft inline-block">
            <CardContent className="p-6">
              <blockquote className="text-foreground text-lg font-medium italic">
                "Shall we feed Buddy together?"
              </blockquote>
              <p className="text-muted-foreground text-sm mt-2">
                — What your child will say instead of asking for screen time
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};