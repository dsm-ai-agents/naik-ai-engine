import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Youtube, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    buildAgents: false
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // In a real implementation, this would send to a backend service
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you within 24 hours.",
    });
    
    setFormData({
      name: "",
      email: "",
      message: "",
      buildAgents: false
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact Kunaal Naik | Get in Touch</title>
        <meta name="description" content="Contact Kunaal Naik for AI automation consulting, coaching, or speaking engagements. Let's transform your business with AI." />
      </Helmet>
      
      <Navigation />
      <div className="min-h-screen bg-background pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-secondary to-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <MessageSquare className="w-16 h-16 mx-auto mb-6 text-primary animate-fade-in" />
              <h1 className="font-poppins font-bold text-5xl md:text-6xl mb-6 animate-fade-in">
                Let's <span className="gradient-text">Connect</span>
              </h1>
              <p className="text-xl text-muted-foreground font-inter animate-fade-in">
                Ready to transform your business with AI? I'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="glow-border bg-card">
                <CardHeader>
                  <CardTitle className="font-poppins text-3xl gradient-text">
                    Send a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form and I'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell me about your AI automation needs..."
                        className="min-h-[150px]"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      />
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="buildAgents"
                        checked={formData.buildAgents}
                        onChange={(e) => setFormData({...formData, buildAgents: e.target.checked})}
                        className="w-4 h-4 accent-primary"
                      />
                      <Label htmlFor="buildAgents" className="cursor-pointer">
                        I want to build AI Agents for my business
                      </Label>
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info & Social */}
              <div className="space-y-6">
                <Card className="glow-border bg-card">
                  <CardHeader>
                    <CardTitle className="font-poppins text-2xl text-primary">
                      Other Ways to Connect
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <a 
                      href="https://www.linkedin.com/in/kunaal-naik" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl bg-primary/10 hover:bg-primary/20 border border-primary/20 transition-colors"
                    >
                      <Linkedin className="w-8 h-8 text-primary" />
                      <div>
                        <h4 className="font-poppins font-semibold text-foreground">LinkedIn</h4>
                        <p className="text-sm text-muted-foreground">Connect professionally</p>
                      </div>
                    </a>
                    
                    <a 
                      href="https://www.youtube.com/KunaalNaik" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl bg-accent/10 hover:bg-accent/20 border border-accent/20 transition-colors"
                    >
                      <Youtube className="w-8 h-8 text-accent" />
                      <div>
                        <h4 className="font-poppins font-semibold text-foreground">YouTube</h4>
                        <p className="text-sm text-muted-foreground">Watch tutorials & insights</p>
                      </div>
                    </a>
                    
                    <a 
                      href="mailto:contact@kunaalnaik.com"
                      className="flex items-center gap-4 p-4 rounded-xl bg-primary/10 hover:bg-primary/20 border border-primary/20 transition-colors"
                    >
                      <Mail className="w-8 h-8 text-primary" />
                      <div>
                        <h4 className="font-poppins font-semibold text-foreground">Email</h4>
                        <p className="text-sm text-muted-foreground">Direct email contact</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>

                <Card className="glow-border bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
                  <CardContent className="pt-6">
                    <blockquote className="border-l-4 border-accent pl-4 py-2">
                      <p className="font-playfair italic text-lg text-foreground/90 mb-4">
                        "The best time to start your AI journey was yesterday. The second best time is now."
                      </p>
                      <footer className="font-inter text-sm text-muted-foreground">
                        — Kunaal Naik
                      </footer>
                    </blockquote>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Bio Footer */}
        <section className="py-24 bg-gradient-to-b from-secondary to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-foreground/90 font-inter leading-relaxed">
                <span className="font-semibold gradient-text">Kunaal Naik</span> — AI, Data & Tech Strategist | Founder of Data Science Masterminds | Empowering businesses to build agentic automation systems.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
