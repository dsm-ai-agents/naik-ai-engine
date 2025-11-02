import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/20 via-background to-accent/20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23007BFF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
           }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h2 className="font-poppins font-bold text-4xl md:text-6xl">
            Join the <span className="gradient-text">AI Agent Revolution</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-foreground/80 font-inter max-w-2xl mx-auto">
            Don't get left behind. Start building AI solutions that transform your business today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-poppins font-semibold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
              Join My Next Masterclass
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-poppins font-semibold text-lg px-8 py-6 rounded-xl transition-all"
              asChild
            >
              <a href="https://www.linkedin.com/in/kunaal-naik" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 w-5 h-5" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>
          
          <div className="pt-12 border-t border-border/50 mt-16">
            <p className="font-playfair italic text-xl text-foreground/70">
              "The best time to start was yesterday. The next best time is now."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
