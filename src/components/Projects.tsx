import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "AI Search Performance Dashboard",
      description: "A professional AI analytics dashboard inspired by real AI Search Analyst workflows. Visualizes KPI reporting, AI visibility tracking, prompt performance, workflow automation concepts, and resume analysis insights across platforms like ChatGPT, Gemini, Claude, and Perplexity.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vitest", "KPI Reporting", "Data Visualization", "Workflow Automation"],
      github: "https://github.com/xsylvers/IS-322-Resume-Analysis-Job-Technology-Final-Project",
      demo: "https://is-322-resume-analysis-job-technology-final-project.vercel.app/",
      type: "AI ANALYTICS PLATFORM",
      image: "/project-ai-dashboard.png"
    },
    {
      title: "Voice2Website",
      description: "Describe your website, and let AI build it instantly. An AI-assisted voice and text-to-website platform that converts spoken or typed ideas into dynamically generated web content and website previews.",
      tags: ["HTML", "CSS", "JavaScript", "Python", "Speech-to-Text", "Workflow Automation", "AI Publishing", "Web Generation"],
      github: "PASTE_VOICE2WEBSITE_GITHUB_LINK_HERE",
      demo: "PASTE_VOICE2WEBSITE_LIVE_LINK_HERE",
      type: "AI AUTOMATION PLATFORM",
      image: "/project-voice2website.png"
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
      type: "Systems Integration",
      image: "/project-terrific-travels.png"
    },
    {
      title: "AI-Assisted Calculator",
      description: "A C# console application developed while experimenting with local AI-assisted development workflows using Ollama, focusing on prompt engineering and debugging.",
      tags: ["C#", "Console App", "Local LLMs", "AI-Assisted Coding", "Prompt Engineering"],
      github: "#",
      demo: "#",
      type: "AI Experiment",
      image: "/project-calculator.png"
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
              <div className="h-64 bg-zinc-900 relative border-b border-border overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
