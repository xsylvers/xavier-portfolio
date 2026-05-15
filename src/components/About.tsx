import { GraduationCap, Server, Code, Bot } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6 text-primary" />,
      title: "NJIT IT Student",
      description: "Building a strong foundation in Information Technology with a focus on practical applications."
    },
    {
      icon: <Bot className="w-6 h-6 text-primary" />,
      title: "AI Workflows",
      description: "Passionate about integrating AI tools to automate complex processes and improve efficiency."
    },
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: "Frontend & APIs",
      description: "Experience building responsive UIs and integrating RESTful APIs and OpenAI endpoints."
    },
    {
      icon: <Server className="w-6 h-6 text-primary" />,
      title: "Systems Integration",
      description: "Familiar with Linux systems, databases, and connecting diverse technology stacks."
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-card/30">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-4 mb-16 max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground">About Me</h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            I am an Information Technology student at NJIT with a strong interest in AI workflows, automation, 
            systems integration, and applied AI. My goal is to help businesses improve their processes by 
            building modern, user-focused technology solutions that leverage the power of artificial intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <div key={index} className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-foreground/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
