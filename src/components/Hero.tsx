import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(211_100%_50%/0.1),transparent_50%),radial-gradient(circle_at_70%_50%,hsl(42_100%_50%/0.1),transparent_50%)] animate-pulse" 
           style={{ animationDuration: '4s' }} />
      
      {/* Neural network pattern overlay */}
      <div className="absolute inset-0 opacity-20"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23007BFF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
           }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-inter text-primary mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Transforming Business with AI</span>
          </div>
          
          <h1 className="font-poppins font-bold text-5xl md:text-7xl leading-tight">
            Empowering Business Owners & Professionals to{" "}
            <span className="gradient-text">Automate with AI Agents</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-inter max-w-3xl mx-auto">
            Turn your knowledge into intelligent automation systems that work 24x7.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-poppins font-semibold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
              Start Building Your AI Agent
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-poppins font-semibold text-lg px-8 py-6 rounded-xl transition-all">
              Book a Discovery Call
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
