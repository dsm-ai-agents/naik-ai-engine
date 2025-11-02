import { Award } from "lucide-react";

const Achievements = () => {
  const awards = [
    "Marketelligent Competency Award",
    "Brillian of the Month (x3)",
    "Group Excellence Award",
    "Data Science Leadership Award",
  ];

  return (
    <section className="py-24 bg-secondary/50" id="achievements">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-4">
            Recognition & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            Honored for excellence in AI and data science leadership
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {awards.map((award, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border card-hover group"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <p className="font-inter font-medium">{award}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
