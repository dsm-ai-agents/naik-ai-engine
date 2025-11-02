import { Target, Users, Award } from "lucide-react";

const About = () => {
  const milestones = [
    { icon: Target, value: "15+", label: "Years of Experience" },
    { icon: Users, value: "5000+", label: "Professionals Coached" },
    { icon: Award, value: "100+", label: "Corporate Trainings" },
  ];

  return (
    <section className="py-24 bg-secondary/50" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
              About <span className="gradient-text">Kunaal Naik</span>
            </h2>
          </div>
          
          <div className="space-y-8 animate-fade-in">
            <p className="text-lg md:text-xl text-foreground/90 font-inter leading-relaxed">
              I'm <span className="font-semibold text-primary">Kunaal Naik</span> — on a mission to help a million professionals leverage AI for automation, decision-making, and performance.
            </p>
            
            <p className="text-lg md:text-xl text-foreground/90 font-inter leading-relaxed">
              I bridge business, data, and technology to help you move from learning to executing with AI. Whether you're a business owner looking to automate operations or a professional transitioning into AI roles, I provide the strategic guidance and hands-on coaching you need.
            </p>
            
            <blockquote className="border-l-4 border-accent pl-6 py-2 my-8">
              <p className="font-playfair italic text-2xl text-foreground/80">
                "The future belongs to those who can harness AI to amplify human potential."
              </p>
            </blockquote>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className="text-center p-8 rounded-2xl bg-card glow-border card-hover"
              >
                <milestone.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <div className="font-poppins font-bold text-4xl gradient-text mb-2">
                  {milestone.value}
                </div>
                <div className="font-inter text-muted-foreground">
                  {milestone.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
