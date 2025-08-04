import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface BuddyVariantsProps {
  onWaitlistClick: (product: string) => void;
}

export const BuddyVariants = ({ onWaitlistClick }: BuddyVariantsProps) => {
  const variants = [
    {
      id: "toddler",
      name: "Nibble Tales",
      age: "1-3 years",
      emoji: "🧸",
      color: "bg-peach-soft",
      features: [
        "AR buddy pops out of table cards",
        "Audio-only voice stories – no screen staring",
        "Encourages co-feeding, not screen-feeding",
        "Creates emotional rituals with your child"
      ],
      description: "Supporting your little one's first digital experiences with care and wisdom."
    },
    {
      id: "child",
      name: "Growing Mind Buddy",
      age: "5-9 years",
      emoji: "🌱",
      color: "bg-mint-soft",
      features: [
        "Educational content curation",
        "Social media readiness preparation",
        "Creative digital activities",
        "Attention span development"
      ],
      description: "Nurturing curiosity while building healthy digital habits for growing minds."
    },
    {
      id: "preteen",
      name: "Independence Buddy",
      age: "10-13 years",
      emoji: "🚀",
      color: "bg-lavender-soft",
      features: [
        "Digital citizenship education",
        "Online safety conversations",
        "Balanced independence guidance",
        "Peer pressure navigation"
      ],
      description: "Empowering pre-teens with confidence and responsibility in their digital journey."
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Your Buddy for Every Stage 🌟
          </h2>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto">
            Kinobi grows with your child, offering age-appropriate guidance that evolves with their development and your family's needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {variants.map((variant, index) => (
            <Card 
              key={variant.id} 
              className={`p-8 ${variant.color} border-none shadow-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{variant.emoji}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {variant.name}
                </h3>
                <p className="text-sm font-medium text-primary bg-white/70 rounded-full px-3 py-1 inline-block">
                  {variant.age}
                </p>
              </div>
              
              <p className="text-warm-gray mb-6 text-center">
                {variant.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {variant.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="text-success mt-0.5">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                variant="gentle" 
                className="w-full" 
                onClick={() => onWaitlistClick(variant.id)}
              >
                Join Waitlist
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};