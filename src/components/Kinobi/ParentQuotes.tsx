import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

export const ParentQuotes = () => {
  const quotes = [
    {
      text: "My 7-year-old asks for 'just 5 more minutes' on the tablet every single time, and I don't know if I'm being too strict or too lenient. Sometimes I feel like I'm fighting a losing battle.",
      author: "u/MumbaiMom23",
      context: "Screen time struggles",
      emoji: "😅"
    },
    {
      text: "My toddler knows how to unlock my phone better than my own mother. Is this normal? Should I be worried about how quickly they pick this up?",
      author: "u/DelhiDad",
      context: "Early tech exposure",
      emoji: "🤔"
    },
    {
      text: "Other parents at school seem so confident about screen time rules. Meanwhile, I'm here googling 'how much iPad time is too much' at 2 AM while my kid sleeps with YouTube still playing.",
      author: "u/BangaloreParent",
      context: "Comparing to other families",
      emoji: "😰"
    },
    {
      text: "I want my daughter to be tech-savvy for her future, but I also want her to play outside and read books. Finding that balance feels impossible some days.",
      author: "u/ChennaiMama",
      context: "Balance struggles",
      emoji: "⚖️"
    },
    {
      text: "Started seeing tantrums when screen time ends. Is this normal behavior or am I creating a problem? Feeling lost and could use some guidance that doesn't make me feel like a bad parent.",
      author: "u/PuneParenting",
      context: "Behavioral concerns",
      emoji: "💔"
    },
    {
      text: "My 11-year-old wants social media accounts because 'everyone else has them.' I'm not ready for this conversation but I know I can't avoid it forever.",
      author: "u/HyderabadFamily",
      context: "Social media pressure",
      emoji: "😬"
    }
  ];

  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            You're Not Alone in This Journey 🤗
          </h2>
          <p className="text-lg text-warm-gray max-w-3xl mx-auto">
            These real concerns from Indian parents show that struggling with digital wellness is completely normal. Every family faces these challenges.
          </p>
        </div>
        
        <Carousel
          setApi={setApi}
          className="w-full max-w-5xl mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {quotes.map((quote, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="p-6 bg-white/80 border-none shadow-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{quote.emoji}</span>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-primary mb-1">
                          {quote.context}
                        </div>
                        <blockquote className="text-sm text-foreground leading-relaxed italic">
                          "{quote.text}"
                        </blockquote>
                      </div>
                    </div>
                    <div className="text-xs text-warm-gray font-medium">
                      — {quote.author}
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        <div className="text-center mt-12">
          <p className="text-warm-gray">
            Sound familiar? You're among thousands of parents navigating this together. 💙
          </p>
        </div>
      </div>
    </section>
  );
};

/*
import { Card } from "@/components/ui/card";

export const ParentQuotes = () => {
  const quotes = [
    {
      text: "My 7-year-old asks for 'just 5 more minutes' on the tablet every single time, and I don't know if I'm being too strict or too lenient. Sometimes I feel like I'm fighting a losing battle.",
      author: "u/MumbaiMom23",
      context: "Screen time struggles",
      emoji: "😅"
    },
    {
      text: "My toddler knows how to unlock my phone better than my own mother. Is this normal? Should I be worried about how quickly they pick this up?",
      author: "u/DelhiDad",
      context: "Early tech exposure",
      emoji: "🤔"
    },
    {
      text: "Other parents at school seem so confident about screen time rules. Meanwhile, I'm here googling 'how much iPad time is too much' at 2 AM while my kid sleeps with YouTube still playing.",
      author: "u/BangaloreParent",
      context: "Comparing to other families",
      emoji: "😰"
    },
    {
      text: "I want my daughter to be tech-savvy for her future, but I also want her to play outside and read books. Finding that balance feels impossible some days.",
      author: "u/ChennaiMama",
      context: "Balance struggles",
      emoji: "⚖️"
    },
    {
      text: "Started seeing tantrums when screen time ends. Is this normal behavior or am I creating a problem? Feeling lost and could use some guidance that doesn't make me feel like a bad parent.",
      author: "u/PuneParenting",
      context: "Behavioral concerns",
      emoji: "💔"
    },
    {
      text: "My 11-year-old wants social media accounts because 'everyone else has them.' I'm not ready for this conversation but I know I can't avoid it forever.",
      author: "u/HyderabadFamily",
      context: "Social media pressure",
      emoji: "😬"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            You're Not Alone in This Journey 🤗
          </h2>
          <p className="text-lg text-warm-gray max-w-3xl mx-auto">
            These real concerns from Indian parents show that struggling with digital wellness is completely normal. Every family faces these challenges.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quotes.map((quote, index) => (
            <Card 
              key={index} 
              className="p-6 bg-white/80 border-none shadow-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{quote.emoji}</span>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-primary mb-1">
                      {quote.context}
                    </div>
                    <blockquote className="text-sm text-foreground leading-relaxed italic">
                      "{quote.text}"
                    </blockquote>
                  </div>
                </div>
                <div className="text-xs text-warm-gray font-medium">
                  — {quote.author}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-warm-gray">
            Sound familiar? You're among thousands of parents navigating this together. 💙
          </p>
        </div>
      </div>
    </section>
  );
};*/