import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Voice2Blog / Voice-to-Portfolio",
      description: "An AI-powered workflow platform that transforms spoken input into structured, publish-ready web content using transcription and AI-assisted formatting workflows.",
      tags: ["Speech-to-Text", "OpenAI API", "Automated Publishing", "GitHub Workflow", "Next.js UI"],
      github: "#",
      demo: "#",
      type: "Full Stack Platform"
    },
    {
      title: "Terrific Travels",
      description: "Distributed backend and authentication system for a travel booking web application. Group systems integration project focused on building robust infrastructure.",
      contributions: [
        "Implemented backend login/authentication workflows",
        "Worked with database integration for user account handling",
        "Added secure password hashing logic for stored credentials",
        "Supported RabbitMQ-based backend communication",
        "Configured and tested systemd daemon/service behavior",
        "Helped debug backend endpoints and deployment issues",
        "Contributed to Linux-based systems integration testing"
      ],
      tags: ["PHP", "MySQL", "RabbitMQ", "Linux", "systemd", "Git/GitHub", "Backend Authentication", "Systems Integration"],
      github: "#",
      demo: "#",
      type: "Systems Integration"
    },
    {
      title: "AI Toolkit — Blog Publisher MVP",
      description: "A Python desktop MVP for experimenting with AI-assisted publishing workflows. Converts transcript input into publish-ready Markdown blog content via local local Ollama models.",
      tags: ["Python", "Tkinter GUI", "Transcript-to-Markdown", "Local AI (Ollama)", "GitHub Pages Automation"],
      github: "#",
      demo: "#",
      type: "Desktop Prototype"
    },
    {
      title: "AI-Assisted Calculator",
      description: "A C# console application developed while experimenting with local AI-assisted development workflows using Ollama, focusing on prompt engineering and debugging.",
      tags: ["C#", "Console App", "Local LLMs", "AI-Assisted Coding", "Prompt Engineering"],
      github: "#",
      demo: "#",
      type: "AI Experiment"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-16">
          <h2 className="text-3xl font-bold text-foreground">Featured Projects</h2>
          <p className="text-foreground/70 max-w-2xl">
            Exploring workflow automation and applied AI through practical projects and prototypes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group flex flex-col bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-colors">
              <div className="h-48 bg-zinc-900 relative border-b border-border flex items-center justify-center p-6">
                {/* Placeholder Mockup */}
                <div className="w-full h-full bg-zinc-800 rounded-lg border border-zinc-700 flex items-center justify-center shadow-inner">
                  <span className="text-zinc-500 font-mono text-sm">[Project Mockup Placeholder]</span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">{project.type}</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
                
                <div className="flex-grow flex flex-col mb-6">
                  <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {'contributions' in project && project.contributions && (
                    <div className="mb-2">
                      <p className="text-xs font-semibold text-foreground mb-2">My Contributions:</p>
                      <ul className="list-disc list-inside text-xs text-foreground/70 space-y-1">
                        {project.contributions.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2.5 py-1 bg-zinc-800/50 text-zinc-300 text-xs rounded-md border border-zinc-700">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 pt-4 border-t border-border mt-auto">
                  <a href={project.github} className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
                    <FaGithub className="w-4 h-4" />
                    Code
                  </a>
                  <a href={project.demo} className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
