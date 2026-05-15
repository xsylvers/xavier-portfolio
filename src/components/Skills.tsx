export default function Skills() {
  const skillCategories = [
    {
      title: "Languages & Core",
      skills: ["Python", "JavaScript", "C#", "SQL", "HTML/CSS"]
    },
    {
      title: "Frontend & Web",
      skills: ["React", "Next.js", "Tailwind CSS", "Tkinter"]
    },
    {
      title: "Systems & Tools",
      skills: ["Linux", "Git/GitHub", "REST APIs", "System Integration"]
    },
    {
      title: "AI & Automation",
      skills: ["OpenAI APIs", "Ollama", "Local LLMs", "AI Workflow Automation", "Prompt Engineering"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-card/30 border-y border-border/50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Technical Toolkit</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A blend of traditional software development skills and modern AI integration capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center gap-2 text-foreground/80 bg-background/50 px-3 py-2 rounded border border-border/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/70"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
