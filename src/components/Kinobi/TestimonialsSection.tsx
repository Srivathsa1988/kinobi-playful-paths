import { Card, CardContent } from "@/components/ui/card";

export const TestimonialsSection = () => {
  const testimonials = [
    "My toddler throws tantrums when we take the phone away.",
    "We tried screen limits, but it just led to fights.",
    "I want my child to learn balance, not feel punished."
  ];

  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            💬 What Parents Are Saying
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((quote, index) => (
            <Card 
              key={index} 
              className="bg-card shadow-soft hover:shadow-gentle transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-coral"
            >
              <CardContent className="p-6">
                <blockquote className="text-foreground italic text-center leading-relaxed">
                  "{quote}"
                </blockquote>
                <div className="mt-4 flex justify-center">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-coral rounded-full opacity-60" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};