import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Building2, Megaphone, Users, GraduationCap, ShoppingCart } from "lucide-react";

const AIAgentsPage = () => {
  const industries = [
    {
      icon: Building2,
      name: "Real Estate",
      useCases: ["Lead-qualifier Bot", "CRM Follow-up Agent", "Property Recommendation System"],
      outcome: "+40% conversion rate improvement",
      color: "text-primary"
    },
    {
      icon: Megaphone,
      name: "Marketing Agencies",
      useCases: ["Campaign Scheduler Agent", "Ad Insights Bot", "Content Distribution Automation"],
      outcome: "50 hours saved per month",
      color: "text-accent"
    },
    {
      icon: Users,
      name: "HR & Recruitment",
      useCases: ["Resume Screen Agent", "Interview Scheduler", "Candidate Engagement Bot"],
      outcome: "Faster shortlisting and better candidate experience",
      color: "text-primary"
    },
    {
      icon: GraduationCap,
      name: "Education & Coaching",
      useCases: ["Student Onboarding Agent", "Feedback Collector", "Learning Path Recommender"],
      outcome: "Personalized learning at scale",
      color: "text-accent"
    },
    {
      icon: ShoppingCart,
      name: "E-commerce",
      useCases: ["Order Support Chatbot", "Cross-Sell Agent", "Inventory Alert System"],
      outcome: "Boosted repeat sales and customer satisfaction",
      color: "text-primary"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Agents by Industry | Kunaal Naik</title>
        <meta name="description" content="Discover how Kunaal Naik's AI Agent frameworks serve multiple industries - Real Estate, Marketing, HR, Education, and E-commerce." />
      </Helmet>
      
      <Navigation />
      <div className="min-h-screen bg-background pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-secondary to-background">
          <div className="container mx-auto px-4">
            <h1 className="font-poppins font-bold text-5xl md:text-6xl text-center mb-6 animate-fade-in">
              AI Agents by <span className="gradient-text">Industry</span>
            </h1>
            <p className="text-xl text-center text-muted-foreground font-inter max-w-3xl mx-auto animate-fade-in">
              Discover how AI Agent frameworks transform operations across different sectors
            </p>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {industries.map((industry, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border border-primary/20 rounded-2xl bg-card glow-border overflow-hidden"
                  >
                    <AccordionTrigger className="px-8 py-6 hover:no-underline hover:bg-primary/5">
                      <div className="flex items-center gap-4">
                        <industry.icon className={`w-10 h-10 ${industry.color}`} />
                        <h3 className="font-poppins font-bold text-2xl text-left">
                          {industry.name}
                        </h3>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-8 pb-6">
                      <div className="space-y-6 pt-4">
                        <div>
                          <h4 className="font-poppins font-semibold text-lg text-primary mb-3">
                            Agent Use Cases:
                          </h4>
                          <ul className="space-y-2">
                            {industry.useCases.map((useCase, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-foreground/90 font-inter">
                                <span className="text-accent mt-1">▸</span>
                                <span>{useCase}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="p-4 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                          <h4 className="font-poppins font-semibold text-lg text-accent mb-2">
                            Outcome:
                          </h4>
                          <p className="text-foreground/90 font-inter text-lg">
                            {industry.outcome}
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-b from-secondary to-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
              Explore How AI Agents <span className="gradient-text">Fit Your Industry</span>
            </h2>
            <p className="text-lg text-muted-foreground font-inter mb-8 max-w-2xl mx-auto">
              Ready to transform your business with intelligent automation? Let's discuss your specific needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href="/contact">Book a Discovery Call</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
                <a href="https://www.linkedin.com/in/kunaal-naik" target="_blank" rel="noopener noreferrer">
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAgentsPage;
