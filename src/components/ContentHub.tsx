import { Button } from "@/components/ui/button";
import { Linkedin, Youtube, ExternalLink } from "lucide-react";

const ContentHub = () => {
  return (
    <section className="py-24" id="content">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-4">
            Connect & <span className="gradient-text">Learn More</span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            Join thousands following my journey in AI automation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* LinkedIn */}
          <div className="p-8 rounded-2xl bg-card border border-border card-hover">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-[#0077B5]/20 flex items-center justify-center">
                <Linkedin className="w-8 h-8 text-[#0077B5]" />
              </div>
              <div>
                <h3 className="font-poppins font-semibold text-2xl">LinkedIn</h3>
                <p className="text-muted-foreground font-inter">Daily insights & updates</p>
              </div>
            </div>
            <p className="font-inter text-foreground/80 mb-6">
              Follow my professional journey, AI insights, and connect with a community of innovators.
            </p>
            <Button 
              variant="outline" 
              className="w-full border-[#0077B5] text-[#0077B5] hover:bg-[#0077B5] hover:text-white"
              asChild
            >
              <a href="https://www.linkedin.com/in/kunaal-naik" target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
          
          {/* YouTube */}
          <div className="p-8 rounded-2xl bg-card border border-border card-hover">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-[#FF0000]/20 flex items-center justify-center">
                <Youtube className="w-8 h-8 text-[#FF0000]" />
              </div>
              <div>
                <h3 className="font-poppins font-semibold text-2xl">YouTube</h3>
                <p className="text-muted-foreground font-inter">Tutorials & deep dives</p>
              </div>
            </div>
            <p className="font-inter text-foreground/80 mb-6">
              Watch comprehensive tutorials on AI automation, data science, and career development.
            </p>
            <Button 
              variant="outline" 
              className="w-full border-[#FF0000] text-[#FF0000] hover:bg-[#FF0000] hover:text-white"
              asChild
            >
              <a href="https://www.youtube.com/KunaalNaik" target="_blank" rel="noopener noreferrer">
                Subscribe on YouTube
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentHub;
