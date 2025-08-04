import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import nibbleImage from "@/assets/nibble-tales-hero.jpg";
import cowatchImage from "@/assets/cowatch-jr-hero.jpg";
import halowiseImage from "@/assets/halowise-hero.jpg";

interface BuddiesSectionProps {
  onWaitlistClick: (product: string) => void;
}

export const BuddiesSection = ({ onWaitlistClick }: BuddiesSectionProps) => {
  const buddies = [
    {
      title: "🧸 Nibble Tales (Ages 1–3)",
      image: nibbleImage,
      features: [
        "AR buddy pops out of table cards",
        "Audio-only voice stories – no screen staring",
        "Encourages co-feeding, not screen-feeding",
        "Creates emotional rituals with your child"
      ],
      bgColor: "bg-mint-light",
      borderColor: "border-mint"
    },
    {
      title: "🎨 CoWatch Jr. (Ages 4–8)",
      image: cowatchImage,
      features: [
        "Build watch routines together",
        "AR \"pause buddy\" encourages breaks",
        "Phone-free zones, smart reminders",
        "Celebrates self-regulation, not just blocking"
      ],
      bgColor: "bg-baby-blue-light",
      borderColor: "border-baby-blue"
    },
    {
      title: "🚀 HaloWise (Ages 10+)",
      image: halowiseImage,
      features: [
        "Smart screen use tracker & feedback nudges",
        "Buddy-guided \"mindful use\" check-ins",
        "Detects risky content gently",
        "Parent + teen dashboards with mutual respect"
      ],
      bgColor: "bg-lavender-light",
      borderColor: "border-lavender"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Your Buddy for Every Stage 🌟
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {buddies.map((buddy, index) => (
            <Card 
              key={index} 
              className={`${buddy.bgColor} ${buddy.borderColor} border-2 shadow-soft hover:shadow-gentle transition-all duration-300 hover:-translate-y-2 overflow-hidden group`}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={buddy.image} 
                  alt={buddy.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {buddy.title}
                </h3>
                
                <ul className="space-y-3 mb-6">
                  {buddy.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary text-sm mt-1">✅</span>
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="text-center">
                  <p className="text-sm text-muted-foreground italic mb-4">
                    Coming soon — Join waitlist
                  </p>
                    <Button 
                    variant="floating" 
                    size="sm" 
                    onClick={() => onWaitlistClick(buddy.title)}
                    className="w-full"
                  >
                    Join Waitlist
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};