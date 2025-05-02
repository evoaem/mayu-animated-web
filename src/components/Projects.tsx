
import { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio website with interactive animations and a responsive design.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    link: "#"
  },
  {
    id: 2,
    title: "E-commerce Dashboard",
    description: "An admin dashboard for e-commerce with real-time data visualization and user management.",
    tags: ["React", "TypeScript", "Recharts", "Firebase"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3",
    link: "#"
  },
  {
    id: 3,
    title: "Interactive 3D Experience",
    description: "A 3D web experience with interactive elements and immersive animations.",
    tags: ["Three.js", "React Three Fiber", "GLSL"],
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    link: "#"
  },
  {
    id: 4,
    title: "Music Streaming App",
    description: "A responsive music streaming application with a custom audio player and playlist management.",
    tags: ["React", "Node.js", "Web Audio API"],
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    link: "#"
  }
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="min-h-screen py-20"
    >
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary-purple to-light-purple animate-glow">
            My Projects
          </h2>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-primary-purple to-light-purple rounded-full"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and expertise in creating beautiful, 
            functional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden bg-dark-purple/50 border border-primary-purple/20 rounded-lg hover:border-primary-purple/60 transition-all"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-purple/70 to-dark-purple flex flex-col justify-end p-6">
                <h3 className="text-xl font-medium text-white mb-2">{project.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-primary-purple/20 text-primary-purple px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className={`text-gray-300 text-sm mb-4 transform transition-all duration-300 ${activeProject === project.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="bg-primary-purple hover:bg-primary-purple/80 text-white px-6 py-6 rounded-md glow-on-hover">
            <a href="#contact">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

