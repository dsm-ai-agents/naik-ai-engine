import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const Impact = () => {
  const caseStudies = [
    {
      title: "Solo Founder Success",
      challenge: "Manual lead generation consuming valuable time",
      solution: "Automated lead qualification and outreach system",
      results: [
        "3x increase in qualified leads",
        "20 hours saved weekly",
        "Consistent pipeline growth",
      ],
    },
    {
      title: "Marketing Agency Transformation",
      challenge: "Repetitive client reporting and data analysis",
      solution: "AI-powered reporting and analytics automation",
      results: [
        "40+ hours saved weekly",
        "Real-time client dashboards",
        "Improved client satisfaction",
      ],
    },
  ];

  return (
    <section className="py-24" id="impact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-4">
            Real <span className="gradient-text">Impact Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            See how AI automation transforms businesses and careers
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <Card key={index} className="bg-card border-border card-hover">
              <CardHeader>
                <CardTitle className="font-poppins text-2xl mb-4">{study.title}</CardTitle>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-inter font-semibold text-primary mb-2">Challenge</h4>
                    <p className="text-muted-foreground">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-inter font-semibold text-accent mb-2">Solution</h4>
                    <p className="text-muted-foreground">{study.solution}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <h4 className="font-inter font-semibold mb-4">Results</h4>
                <ul className="space-y-3">
                  {study.results.map((result, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="font-inter text-foreground/80">{result}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
