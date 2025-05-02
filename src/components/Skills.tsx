
import { useEffect, useRef } from 'react';
import { Code, Server, Database, Globe, React as ReactIcon, Tailwind, TypeScript, Node, Linux, Docker } from 'lucide-react';

interface Skill {
  name: string;
  percentage: number;
}

const skillsData: Skill[] = [
  { name: "HTML/CSS", percentage: 90 },
  { name: "JavaScript", percentage: 85 },
  { name: "React", percentage: 85 },
  { name: "TypeScript", percentage: 80 },
  { name: "Node.js", percentage: 75 },
  { name: "Tailwind CSS", percentage: 90 },
  { name: "Java", percentage: 85 },
  { name: "Skript", percentage: 95 },
  { name: "Server Management", percentage: 88 },
  { name: "Plugin Development", percentage: 82 },
  { name: "Mod Creation", percentage: 78 },
  { name: "Firebase", percentage: 80 },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillBarsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
          
          // Animate skill bars when in view
          skillBarsRef.current.forEach((bar, index) => {
            if (bar) {
              setTimeout(() => {
                bar.style.width = `${skillsData[index].percentage}%`;
                bar.style.opacity = '1';
              }, index * 100);
            }
          });
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
      id="skills" 
      ref={sectionRef}
      className="min-h-screen flex items-center py-20"
    >
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary-purple to-light-purple animate-glow">
            Skills & Expertise
          </h2>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-primary-purple to-light-purple rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-white text-center">Technical Skills</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-primary-purple mb-4">Minecraft Development</h4>
                {skillsData.slice(6, 11).map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white">{skill.name}</span>
                      <span className="text-primary-purple">{skill.percentage}%</span>
                    </div>
                    
                    <div className="h-2 bg-gray-700/30 rounded-full overflow-hidden">
                      <div 
                        ref={el => skillBarsRef.current[index + 6] = el}
                        className="h-full bg-gradient-to-r from-primary-purple to-light-purple rounded-full w-0 opacity-0 transition-all duration-1000"
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-primary-purple mb-4">Web Development</h4>
                {skillsData.slice(0, 6).map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white">{skill.name}</span>
                      <span className="text-primary-purple">{skill.percentage}%</span>
                    </div>
                    
                    <div className="h-2 bg-gray-700/30 rounded-full overflow-hidden">
                      <div 
                        ref={el => skillBarsRef.current[index] = el}
                        className="h-full bg-gradient-to-r from-primary-purple to-light-purple rounded-full w-0 opacity-0 transition-all duration-1000"
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            <h3 className="text-2xl font-semibold mb-4 text-white text-center">Services I Offer</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-dark-purple/50 border border-primary-purple/20 rounded-lg p-6 hover:border-primary-purple/60 transition-all">
                <div className="w-12 h-12 flex items-center justify-center mb-4 bg-primary-purple/20 rounded-lg text-primary-purple">
                  <Code />
                </div>
                <h4 className="text-lg font-medium text-white mb-2">Minecraft Development</h4>
                <p className="text-gray-400 text-sm">Custom plugin development, server configuration, and mod creation.</p>
              </div>
              
              <div className="bg-dark-purple/50 border border-primary-purple/20 rounded-lg p-6 hover:border-primary-purple/60 transition-all">
                <div className="w-12 h-12 flex items-center justify-center mb-4 bg-primary-purple/20 rounded-lg text-primary-purple">
                  <ReactIcon />
                </div>
                <h4 className="text-lg font-medium text-white mb-2">Web Development</h4>
                <p className="text-gray-400 text-sm">Creating responsive, modern websites with React, Tailwind CSS, and TypeScript.</p>
              </div>
              
              <div className="bg-dark-purple/50 border border-primary-purple/20 rounded-lg p-6 hover:border-primary-purple/60 transition-all">
                <div className="w-12 h-12 flex items-center justify-center mb-4 bg-primary-purple/20 rounded-lg text-primary-purple">
                  <Server />
                </div>
                <h4 className="text-lg font-medium text-white mb-2">Hosting Solutions</h4>
                <p className="text-gray-400 text-sm">VPS management, Pterodactyl setup, Linux administration, and Docker deployment.</p>
              </div>
              
              <div className="bg-dark-purple/50 border border-primary-purple/20 rounded-lg p-6 hover:border-primary-purple/60 transition-all">
                <div className="w-12 h-12 flex items-center justify-center mb-4 bg-primary-purple/20 rounded-lg text-primary-purple">
                  <Database />
                </div>
                <h4 className="text-lg font-medium text-white mb-2">Database Design</h4>
                <p className="text-gray-400 text-sm">Efficient database architecture for Minecraft plugins and web applications.</p>
              </div>
              
              <div className="bg-dark-purple/50 border border-primary-purple/20 rounded-lg p-6 hover:border-primary-purple/60 transition-all">
                <div className="w-12 h-12 flex items-center justify-center mb-4 bg-primary-purple/20 rounded-lg text-primary-purple">
                  <Node />
                </div>
                <h4 className="text-lg font-medium text-white mb-2">Backend Solutions</h4>
                <p className="text-gray-400 text-sm">Node.js and Firebase backend development for web applications.</p>
              </div>
              
              <div className="bg-dark-purple/50 border border-primary-purple/20 rounded-lg p-6 hover:border-primary-purple/60 transition-all">
                <div className="w-12 h-12 flex items-center justify-center mb-4 bg-primary-purple/20 rounded-lg text-primary-purple">
                  <Globe />
                </div>
                <h4 className="text-lg font-medium text-white mb-2">CloudFlare Integration</h4>
                <p className="text-gray-400 text-sm">Performance optimization and security with CloudFlare services.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
