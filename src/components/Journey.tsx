import { BookOpen, Hammer, Rocket, TrendingUp, Users } from "lucide-react";

const Journey = () => {
  const stages = [
    { icon: BookOpen, label: "Learn", description: "Master AI fundamentals" },
    { icon: Hammer, label: "Build", description: "Create AI solutions" },
    { icon: Rocket, label: "Deploy", description: "Launch automation" },
    { icon: TrendingUp, label: "Scale", description: "Grow your systems" },
    { icon: Users, label: "Lead", description: "Guide AI transformation" },
  ];

  const tools = [
    { name: "N8N", logo: "⚡" },
    { name: "LangChain", logo: "🔗" },
    { name: "Supabase", logo: "🗄️" },
    { name: "OpenAI", logo: "🤖" },
  ];

  return (
    <section className="py-24 bg-secondary/50" id="journey">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-4">
            Your <span className="gradient-text">Transformation Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            A proven path from AI novice to automation expert
          </p>
        </div>
        
        {/* Journey Timeline */}
        <div className="relative max-w-5xl mx-auto mb-16">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary -translate-y-1/2 hidden md:block" />
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 relative">
            {stages.map((stage, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 relative z-10 border-4 border-background group-hover:scale-110 transition-transform">
                  <stage.icon className="w-10 h-10 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-2">{stage.label}</h3>
                <p className="font-inter text-sm text-muted-foreground">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Tools Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-poppins font-semibold text-2xl text-center mb-8">
            Powered by Industry-Leading Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all card-hover"
              >
                <span className="text-3xl">{tool.logo}</span>
                <span className="font-inter font-semibold text-lg">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
