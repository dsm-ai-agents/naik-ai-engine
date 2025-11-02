import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import kunaalPortrait from "@/assets/kunaal-portrait.jpg";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Kunaal Naik | AI, Data & Tech Strategist</title>
        <meta name="description" content="Learn about Kunaal Naik, Founder of Data Science Masterminds, AI Automation Coach, and Speaker helping professionals transform businesses through AI Agents." />
      </Helmet>
      
      <Navigation />
      <div className="min-h-screen bg-background pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-secondary to-background">
          <div className="container mx-auto px-4">
            <h1 className="font-poppins font-bold text-5xl md:text-6xl text-center mb-4 animate-fade-in">
              Meet <span className="gradient-text">Kunaal Naik</span>
            </h1>
            <p className="text-xl text-center text-muted-foreground font-inter animate-fade-in">
              AI, Data & Tech Strategist
            </p>
          </div>
        </section>

        {/* Main Bio Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              {/* Portrait Image */}
              <div className="animate-fade-in">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl opacity-50"></div>
                  <img 
                    src={kunaalPortrait} 
                    alt="Kunaal Naik - AI, Data & Tech Strategist"
                    className="relative rounded-2xl w-full glow-border card-hover"
                  />
                </div>
              </div>

              {/* Bio Content */}
              <div className="space-y-6 animate-fade-in">
                <h2 className="font-poppins font-bold text-3xl md:text-4xl gradient-text">
                  Founder of Data Science Masterminds | AI Automation Coach | Speaker
                </h2>
                
                <p className="text-lg text-foreground/90 font-inter leading-relaxed">
                  With <span className="font-semibold text-primary">15 years in data science</span> and over <span className="font-semibold text-accent">10,000 hours of training</span>, I help leaders transform their business through AI Agents and data-driven decision making.
                </p>

                <p className="text-lg text-foreground/90 font-inter leading-relaxed">
                  I bridge the gap between business strategy, data analytics, and cutting-edge technology to help you move from learning to executing with AI.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <a href="https://www.linkedin.com/in/kunaal-naik" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent/10">
                    <a href="https://www.youtube.com/KunaalNaik" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      YouTube
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-poppins font-bold text-4xl mb-8 text-center">
                My <span className="gradient-text">Mission</span>
              </h2>
              <blockquote className="border-l-4 border-primary pl-6 py-2 my-8">
                <p className="font-playfair italic text-2xl text-foreground/80">
                  "Empower a million professionals to leverage AI for automation and career growth."
                </p>
              </blockquote>
              <p className="text-lg text-foreground/90 font-inter leading-relaxed">
                I believe the future belongs to those who can harness AI to amplify human potential. My mission is to democratize AI knowledge and make automation accessible to business owners and professionals worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-poppins font-bold text-4xl mb-12 text-center">
                My <span className="gradient-text">Journey</span>
              </h2>
              
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-card glow-border card-hover">
                  <h3 className="font-poppins font-bold text-2xl text-primary mb-3">
                    From Corporate Data Scientist
                  </h3>
                  <p className="text-foreground/90 font-inter leading-relaxed">
                    Started my career at Dell, working on complex data analytics and machine learning projects that transformed business operations.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-card glow-border card-hover">
                  <h3 className="font-poppins font-bold text-2xl text-primary mb-3">
                    To AI Educator & Coach
                  </h3>
                  <p className="text-foreground/90 font-inter leading-relaxed">
                    Trained over 5000+ professionals and delivered 100+ corporate trainings, helping individuals transition into high-impact AI roles.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-card glow-border card-hover">
                  <h3 className="font-poppins font-bold text-2xl text-primary mb-3">
                    To Founder Building AI Agent Ecosystems
                  </h3>
                  <p className="text-foreground/90 font-inter leading-relaxed">
                    Founded Data Science Masterminds to help businesses design and deploy intelligent automation systems that work 24/7.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section className="py-24 bg-gradient-to-b from-secondary to-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-poppins font-bold text-4xl mb-6">
              Connect <span className="gradient-text">With Me</span>
            </h2>
            <p className="text-lg text-muted-foreground font-inter mb-8 max-w-2xl mx-auto">
              Follow my journey and get insights on AI automation, data science, and career growth.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href="https://www.linkedin.com/in/kunaal-naik" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  LinkedIn Profile
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
                <a href="https://www.youtube.com/KunaalNaik" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  YouTube Channel
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
