import { Card, CardContent } from "@/components/ui/card";

export const IAPSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            🩺 Backed by Pediatric Experts
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Guidelines */}
          <Card className="bg-mint-light border-mint border-2 shadow-soft">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                <strong>Indian Academy of Pediatrics (IAP) Guidelines:</strong>
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>0–2 years:</strong> No screen time</p>
                <p><strong>2–5 years:</strong> Max 1 hour/day, co-viewed</p>
                <p><strong>5–10 years:</strong> Less than 2 hours/day</p>
              </div>
            </CardContent>
          </Card>
          
          {/* Reality */}
          <Card className="bg-coral-light border-coral border-2 shadow-soft">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                But kids <em>actually</em> average:
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>2.2 hours/day</strong> (ages under 5)</p>
                <p><strong>1.2 hours/day</strong> (under 2)</p>
              </div>
              
              <div className="mt-6">
                <h4 className="font-semibold text-foreground mb-2">Risks:</h4>
                <p className="text-muted-foreground text-sm">
                  speech delay, poor sleep, obesity, behavior issues
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Source:{" "}
            <a 
              href="https://www.indianpediatrics.net/mar2022/235.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Indian Pediatrics Journal (2022)
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};