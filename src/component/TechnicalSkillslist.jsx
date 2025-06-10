import { useState } from 'react';
import {
  Code2,LayoutGrid,Smartphone,Server, Database, Network, Cloud,GitBranch, Repeat, ShieldCheck, Terminal, Wrench
} from 'lucide-react';

export default function SkillsList() {
  const [skills] = useState([
    {
      category: "Languages",
      icon: <Code2 size={24} />,
      items: ["JavaScript", "Java", "Python", "C", "TypeScript", "Kotlin"]
    },
    {
      category: "Frontend",
      icon: <LayoutGrid size={24} />,
      items: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
      category: "Mobile",
      icon: <Smartphone size={24} />,
      items: ["React Native (Android & iOS)", "Kotlin"]
    },
    {
      category: "Backend",
      icon: <Server size={24} />,
      items: ["Node.js", "Spring Boot", "Flask", "Django", "FastAPI"]
    },
    {
      category: "Databases",
      icon: <Database size={24} />,
      items: ["PostgreSQL", "MongoDB", "Redis"]
    },
    {
      category: "API Design",
      icon: <Network size={24} />,
      items: ["RESTful APIs", "GraphQL", "JSON", "Axios"]
    },
    {
      category: "Cloud & DevOps",
      icon: <Cloud size={24} />,
      items: ["AWS", "AWS Lambda", "Terraform"]
    },
    {
      category: "CI/CD",
      icon: <Repeat size={24} />,
      items: ["Jenkins", "GitHub Actions", "GitLab CI", "CircleCI", "TravisCI"]
    },
    {
      category: "Monitoring & Containers",
      icon: <Terminal size={24} />,
      items: ["Prometheus", "Grafana", "Docker", "Kubernetes"]
    },
    {
      category: "Authentication",
      icon: <ShieldCheck size={24} />,
      items: ["JWT", "OAuth", "Basic Auth"]
    },
    {
      category: "Version Control",
      icon: <GitBranch size={24} />,
      items: ["Git", "GitHub"]
    },
    {
      category: "Others",
      icon: <Wrench size={24} />,
      items: ["Linux", "Windows", "Microservices Architecture", "Testing", "Networking & Security Concepts"]
    }
  ]);

  return (
    <div className="w-full p-6  text-white rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skillGroup, index) => (
          <div key={index} className="bg-slate-700 rounded-lg p-4 shadow-lg">
            <div className="flex items-center gap-2 mb-3">
              <div className="text-blue-400">
                {skillGroup.icon}
              </div>
              <h3 className="text-lg font-semibold text-blue-300">{skillGroup.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, skillIndex) => (
                <span 
                  key={skillIndex} 
                  className="px-2 py-1 bg-slate-600 text-blue-200 rounded-md text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}