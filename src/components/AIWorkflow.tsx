import { Cpu, Zap, RefreshCw, Layers } from "lucide-react";

export default function AIWorkflow() {
  const steps = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Rapid Prototyping",
      description: "Using AI assistants like ChatGPT and Antigravity to quickly bootstrap application structures and initial component designs."
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Local Experimentation",
      description: "Running local LLMs via Ollama for privacy-focused, offline-capable AI features and development iteration."
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "AI-Assisted Coding",
      description: "Leveraging intelligent pair-programming tools for complex problem solving, boilerplate generation, and debugging."
    },
    {
      icon: <RefreshCw className="w-5 h-5" />,
      title: "Workflow Automation",
      description: "Connecting AI outputs directly to deployment pipelines, transforming raw data or transcripts into published content."
    }
  ];

  return (
    <section id="ai-workflow" className="py-24 px-6 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Intentional AI Integration</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              I view artificial intelligence not as a replacement for engineering, but as a powerful productivity multiplier. 
              My development workflow intentionally integrates AI at multiple stages to accelerate delivery and explore new capabilities.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              From using local models for private experimentation to orchestrating multi-agent systems for deployment automation, 
              I am focused on the practical, applied use of AI technology.
            </p>
          </div>

          <div className="grid gap-4">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4 p-4 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm">
                <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {step.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                  <p className="text-sm text-foreground/70">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
