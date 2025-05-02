
import { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  percentage: number;
}

const skillsData: Skill[] = [
  { name: "HTML/CSS", percentage: 95 },
  { name: "JavaScript", percentage: 90 },
  { name: "React", percentage: 85 },
  { name: "TypeScript", percentage: 80 },
  { name: "Node.js", percentage: 75 },
  { name: "UI/UX Design", percentage: 85 },
  { name: "Tailwind CSS", percentage: 90 },
  { name: "Three.js", percentage: 70 },
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-white">Technical Skills</h3>
            
            <div className="space-y-6">
              {skillsData.map((skill, index) => (
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
          
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-white">Services I Offer</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-dark-purple/50 border border-primary-purple/20 rounded-lg p-6 hover:border-primary-purple/60 transition-all">
                <div className="w-12 h-12 flex items-center justify-center mb-4 bg-primary-purple/20 rounded-lg text-primary-purple">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 18l6-6-6-6" /><path d="M8 6l-6 6 6 6" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-white mb-2">Web Development</h4>
                <p className="text-gray-400 text-sm">Creating responsive, modern websites with clean code and optimal performance.</p>
              </div>
              
              <div className="bg-dark-purple/50 border border-primary-purple/20 rounded-lg p-6 hover:border-primary-purple/60 transition-all">
                <div className="w-12 h-12 flex items-center justify-center mb-4 bg-primary-purple/20 rounded-lg text-primary-purple">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-white mb-2">UI/UX Design</h4>
                <p className="text-gray-400 text-sm">Designing intuitive user interfaces and smooth user experiences.</p>
              </div>
              
              <div className="bg-dark-purple/50 border border-primary-purple/20 rounded-lg p-6 hover:border-primary-purple/60 transition-all">
                <div className="w-12 h-12 flex items-center justify-center mb-4 bg-primary-purple/20 rounded-lg text-primary-purple">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21a9 9 0 0 1 0-18C7 3 3 7 3 12s4 9 9 9Z" /><circle cx="12" cy="12" r="1" /><path d="m19 19-3.3-3.3" /><path d="M21 12h-4" /><path d="M12 21v-4" /><path d="m19 5-3.3 3.3" /><path d="M3 12h4" /><path d="M12 3v4" /><path d="m5 5 3.3 3.3" /><path d="m5 19 3.3-3.3" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-white mb-2">Interactive Experiences</h4>
                <p className="text-gray-400 text-sm">Building animations and interactive elements for engaging web experiences.</p>
              </div>
              
              <div className="bg-dark-purple/50 border border-primary-purple/20 rounded-lg p-6 hover:border-primary-purple/60 transition-all">
                <div className="w-12 h-12 flex items-center justify-center mb-4 bg-primary-purple/20 rounded-lg text-primary-purple">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" /><path d="m15 5 3 3" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-white mb-2">Creative Coding</h4>
                <p className="text-gray-400 text-sm">Exploring the intersection of code and creativity for unique digital solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
