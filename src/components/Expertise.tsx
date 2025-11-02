import { Bot, BarChart3, Rocket, Mic } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Expertise = () => {
  const expertiseAreas = [
    {
      icon: Bot,
      title: "AI Agent Automation",
      description: "Build & deploy digital teammates that execute your workflows autonomously, saving time and scaling your operations.",
      color: "text-primary",
    },
    {
      icon: BarChart3,
      title: "Data Science Coaching",
      description: "Simplify analytics and decision-making with hands-on guidance that turns data into actionable insights.",
      color: "text-accent",
    },
    {
      icon: Rocket,
      title: "Career Strategy",
      description: "Transition into high-impact AI roles with personalized coaching and strategic career planning.",
      color: "text-primary",
    },
    {
      icon: Mic,
      title: "Speaking & Training",
      description: "Engage audiences on AI adoption, automation strategies, and the future of work through dynamic presentations.",
      color: "text-accent",
    },
  ];

  return (
    <section className="py-24" id="expertise">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-4">
            Areas of <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            Comprehensive solutions for AI transformation and automation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {expertiseAreas.map((area, index) => (
            <Card 
              key={index}
              className="bg-card border-border card-hover group cursor-pointer"
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <area.icon className={`w-8 h-8 ${area.color}`} />
                </div>
                <CardTitle className="font-poppins text-2xl">{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-inter text-base text-foreground/70 leading-relaxed">
                  {area.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
