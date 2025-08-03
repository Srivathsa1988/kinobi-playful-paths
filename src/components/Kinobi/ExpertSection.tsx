import { Card } from "@/components/ui/card";

export const ExpertSection = () => {
  const stats = [
    {
      number: "4.2",
      unit: "hours",
      description: "Average daily screen time for Indian children",
      source: "vs. 2 hours recommended by IAP",
      status: "exceeding"
    },
    {
      number: "68%",
      unit: "of families",
      description: "Report screen time conflicts daily",
      source: "Digital Wellness Survey 2024",
      status: "concerning"
    },
    {
      number: "3x",
      unit: "higher",
      description: "Behavioral issues with excessive screen exposure",
      source: "Indian Academy of Pediatrics",
      status: "alert"
    }
  ];

  const guidelines = [
    {
      age: "Under 2 years",
      recommendation: "Avoid screens except video chatting",
      icon: "👶"
    },
    {
      age: "2-5 years",
      recommendation: "1 hour of high-quality content daily",
      icon: "🧒"
    },
    {
      age: "6+ years",
      recommendation: "Consistent limits with priority on sleep, exercise, and offline activities",
      icon: "👦"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-hero">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            The Reality Check We All Need 📊
          </h2>
          <p className="text-lg text-warm-gray max-w-3xl mx-auto">
            Understanding the gap between expert recommendations and real family life helps us make informed, practical decisions.
          </p>
        </div>
        
        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="p-8 text-center bg-white/90 border-none shadow-card hover:shadow-lg transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="text-4xl lg:text-5xl font-bold text-primary">
                  {stat.number}
                  <span className="text-lg text-warm-gray ml-1">{stat.unit}</span>
                </div>
                <p className="text-foreground font-medium">
                  {stat.description}
                </p>
                <p className="text-sm text-warm-gray">
                  {stat.source}
                </p>
              </div>
            </Card>
          ))}
        </div>
        
        {/* IAP Guidelines */}
        <div className="bg-white/90 rounded-3xl p-8 shadow-card">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Indian Academy of Pediatrics Guidelines 🏥
            </h3>
            <p className="text-warm-gray">
              Evidence-based recommendations for healthy digital habits
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {guidelines.map((guideline, index) => (
              <div 
                key={index} 
                className="text-center p-6 bg-mint-soft rounded-2xl"
              >
                <div className="text-3xl mb-3">{guideline.icon}</div>
                <h4 className="font-bold text-foreground mb-2">
                  {guideline.age}
                </h4>
                <p className="text-sm text-warm-gray">
                  {guideline.recommendation}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-peach-soft rounded-2xl text-center">
            <p className="text-foreground">
              <strong>The gap is real.</strong> Kinobi helps bridge expert recommendations with practical family life, offering gentle, achievable steps toward healthier digital habits. 🌱
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};