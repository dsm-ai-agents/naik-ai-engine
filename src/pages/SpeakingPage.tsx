import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, Presentation, Users, MapPin } from "lucide-react";

const SpeakingPage = () => {
  const topics = [
    {
      title: "The Rise of Agentic AI",
      description: "Explore how autonomous AI agents are reshaping business automation and decision-making processes.",
      duration: "45-60 minutes"
    },
    {
      title: "Automation for Non-Tech Leaders",
      description: "A practical guide for executives to understand and implement AI automation without technical complexity.",
      duration: "60-90 minutes"
    },
    {
      title: "From Data to Decisions: The AI Advantage",
      description: "Learn how to leverage data science and AI to make faster, more accurate business decisions.",
      duration: "45-60 minutes"
    },
    {
      title: "Building Your AI-First Organization",
      description: "Strategic framework for transforming your organization with AI at its core.",
      duration: "60-90 minutes"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Speaking & Workshops | Kunaal Naik</title>
        <meta name="description" content="Book Kunaal Naik for keynote speeches and workshops on AI automation, agentic AI, and data-driven leadership." />
      </Helmet>
      
      <Navigation />
      <div className="min-h-screen bg-background pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-secondary to-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Mic className="w-16 h-16 mx-auto mb-6 text-primary animate-fade-in" />
              <h1 className="font-poppins font-bold text-5xl md:text-6xl mb-6 animate-fade-in">
                Speaking & <span className="gradient-text">Workshops</span>
              </h1>
              <p className="text-xl text-muted-foreground font-inter animate-fade-in">
                Inspiring audiences to embrace AI transformation and build intelligent automation systems
              </p>
            </div>
          </div>
        </section>

        {/* Keynote Topics */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-poppins font-bold text-4xl mb-12 text-center">
                <span className="gradient-text">Keynote Topics</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {topics.map((topic, index) => (
                  <Card key={index} className="glow-border card-hover bg-card">
                    <CardHeader>
                      <CardTitle className="font-poppins text-2xl text-primary">
                        {topic.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {topic.duration}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/90 font-inter">
                        {topic.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Signature Workshop */}
        <section className="py-24 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Presentation className="w-16 h-16 mx-auto mb-6 text-accent" />
                <h2 className="font-poppins font-bold text-4xl mb-4">
                  Signature <span className="gradient-text">Workshop</span>
                </h2>
              </div>

              <Card className="glow-border bg-card">
                <CardHeader>
                  <CardTitle className="font-poppins text-3xl text-center gradient-text">
                    Build Your First AI Agent in 3 Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg text-foreground/90 font-inter leading-relaxed">
                    An intensive, hands-on workshop where participants learn to design, build, and deploy their first AI agent from scratch.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                      <h4 className="font-poppins font-semibold text-lg text-primary mb-2">
                        Part 1: Foundation
                      </h4>
                      <p className="text-sm text-foreground/80">
                        Understanding AI agents and agentic workflows
                      </p>
                    </div>
                    
                    <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                      <h4 className="font-poppins font-semibold text-lg text-primary mb-2">
                        Part 2: Build
                      </h4>
                      <p className="text-sm text-foreground/80">
                        Hands-on agent creation using no-code tools
                      </p>
                    </div>
                    
                    <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                      <h4 className="font-poppins font-semibold text-lg text-primary mb-2">
                        Part 3: Deploy
                      </h4>
                      <p className="text-sm text-foreground/80">
                        Testing, optimization, and real-world integration
                      </p>
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-gradient-to-r from-accent/20 to-primary/20 border border-accent/30">
                    <h4 className="font-poppins font-semibold text-xl text-accent mb-3">
                      Perfect For:
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-foreground/90 font-inter">
                        <span className="text-primary mt-1">✓</span>
                        <span>Business owners looking to automate operations</span>
                      </li>
                      <li className="flex items-start gap-2 text-foreground/90 font-inter">
                        <span className="text-primary mt-1">✓</span>
                        <span>Professionals transitioning into AI roles</span>
                      </li>
                      <li className="flex items-start gap-2 text-foreground/90 font-inter">
                        <span className="text-primary mt-1">✓</span>
                        <span>Teams wanting to implement AI without coding</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Event Locations */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <MapPin className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h2 className="font-poppins font-bold text-4xl mb-6">
                Speaking <span className="gradient-text">Locations</span>
              </h2>
              <p className="text-lg text-foreground/90 font-inter mb-8">
                Delivered keynotes and workshops in major tech hubs including <span className="font-semibold text-primary">Bangalore</span>, <span className="font-semibold text-accent">Dubai</span>, and various cities across India.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-12">
                <div className="p-8 rounded-2xl bg-card glow-border card-hover">
                  <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-poppins font-bold text-2xl mb-2">5000+</h3>
                  <p className="text-muted-foreground font-inter">Professionals Trained</p>
                </div>
                
                <div className="p-8 rounded-2xl bg-card glow-border card-hover">
                  <Presentation className="w-12 h-12 mx-auto mb-4 text-accent" />
                  <h3 className="font-poppins font-bold text-2xl mb-2">100+</h3>
                  <p className="text-muted-foreground font-inter">Corporate Trainings</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-b from-secondary to-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
              Invite Kunaal to <span className="gradient-text">Speak at Your Event</span>
            </h2>
            <p className="text-lg text-muted-foreground font-inter mb-8 max-w-2xl mx-auto">
              Looking for an engaging speaker on AI automation and digital transformation? Let's make your next event unforgettable.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href="/contact">Request Speaking Engagement</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
                <a href="https://www.linkedin.com/in/kunaal-naik" target="_blank" rel="noopener noreferrer">
                  View LinkedIn Profile
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SpeakingPage;
