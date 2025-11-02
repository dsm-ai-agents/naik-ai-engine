import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText, Video, BookOpen, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ResourcesPage = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const resources = [
    {
      icon: FileText,
      title: "AI Agent Blueprint 2025",
      description: "Complete framework for designing and deploying AI agents in your business",
      type: "PDF Guide",
      color: "text-primary"
    },
    {
      icon: BookOpen,
      title: "Career Hike Masterclass Workbook",
      description: "Step-by-step workbook to transition into high-paying AI roles",
      type: "Workbook",
      color: "text-accent"
    },
    {
      icon: FileText,
      title: "Top 13 Agentic Use Cases for SMBs",
      description: "Real-world AI agent applications for small and medium businesses",
      type: "Cheat Sheet",
      color: "text-primary"
    },
    {
      icon: Video,
      title: "AI Automation Quick Start",
      description: "Video series on getting started with AI automation tools",
      type: "Video Course",
      color: "text-accent"
    },
    {
      icon: FileText,
      title: "Data Science Interview Prep Kit",
      description: "Essential questions and answers for data science interviews",
      type: "PDF Guide",
      color: "text-primary"
    },
    {
      icon: BookOpen,
      title: "No-Code AI Tools Comparison",
      description: "Comprehensive comparison of popular no-code AI platforms",
      type: "Reference Guide",
      color: "text-accent"
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    // In a real implementation, this would connect to a backend service
    toast({
      title: "Successfully Subscribed!",
      description: "You'll receive new AI guides every week.",
    });
    
    setEmail("");
  };

  return (
    <>
      <Helmet>
        <title>Resources Hub | Kunaal Naik</title>
        <meta name="description" content="Download free AI guides, workbooks, and cheat sheets to accelerate your AI automation journey." />
      </Helmet>
      
      <Navigation />
      <div className="min-h-screen bg-background pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-secondary to-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <BookOpen className="w-16 h-16 mx-auto mb-6 text-primary animate-fade-in" />
              <h1 className="font-poppins font-bold text-5xl md:text-6xl mb-6 animate-fade-in">
                Resources <span className="gradient-text">Hub</span>
              </h1>
              <p className="text-xl text-muted-foreground font-inter animate-fade-in">
                Free guides, workbooks, and tools to accelerate your AI automation journey
              </p>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((resource, index) => (
                  <Card key={index} className="glow-border card-hover bg-card">
                    <CardHeader>
                      <resource.icon className={`w-12 h-12 mb-4 ${resource.color}`} />
                      <CardTitle className="font-poppins text-xl">
                        {resource.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-accent">
                        {resource.type}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/90 font-inter mb-4">
                        {resource.description}
                      </p>
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-24 bg-gradient-to-b from-secondary to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card className="glow-border bg-card">
                <CardHeader className="text-center">
                  <Mail className="w-16 h-16 mx-auto mb-4 text-accent" />
                  <CardTitle className="font-poppins text-3xl gradient-text mb-2">
                    Get New AI Guides Every Week
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Subscribe to receive exclusive resources, case studies, and AI automation insights directly to your inbox.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubscribe} className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12"
                    />
                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                      Subscribe Now
                    </Button>
                  </form>
                  
                  <div className="mt-6 p-4 rounded-xl bg-primary/10 border border-primary/20">
                    <p className="text-sm text-foreground/80 font-inter text-center">
                      Join 10,000+ professionals learning to leverage AI for automation and growth
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Additional Resources CTA */}
        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-poppins font-bold text-4xl mb-6">
              Need <span className="gradient-text">Personalized Guidance?</span>
            </h2>
            <p className="text-lg text-muted-foreground font-inter mb-8 max-w-2xl mx-auto">
              While these resources are great for self-learning, personalized coaching can accelerate your AI journey exponentially.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href="/contact">Book a 1:1 Coaching Session</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
                <a href="/speaking">Join Next Workshop</a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ResourcesPage;
