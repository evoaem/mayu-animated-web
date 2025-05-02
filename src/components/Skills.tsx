
import { useEffect, useRef } from 'react';
import { Code, Server, Database, Globe, Laptop, Terminal } from 'lucide-react';

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

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
      id="skills" 
      ref={sectionRef}
      className="min-h-screen flex items-center py-20"
    >
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary-purple to-light-purple animate-glow">
            Skills
          </h2>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-primary-purple to-light-purple rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Minecraft Dev Column */}
          <div className="bg-dark-purple/30 border border-primary-purple/20 rounded-lg p-8 hover:border-primary-purple/40 transition-all backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-6 text-primary-purple">Minecraft Dev</h3>
            
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary-purple rounded-full mr-3"></div>
                <span className="text-white">Skript</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary-purple rounded-full mr-3"></div>
                <span className="text-white">Java</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary-purple rounded-full mr-3"></div>
                <span className="text-white">Plugin Development</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary-purple rounded-full mr-3"></div>
                <span className="text-white">Server Management</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary-purple rounded-full mr-3"></div>
                <span className="text-white">Mod Creation</span>
              </li>
            </ul>
          </div>

          {/* Web Dev Column */}
          <div className="bg-dark-purple/30 border border-primary-purple/20 rounded-lg p-8 hover:border-primary-purple/40 transition-all backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-6 text-bright-blue">Web Dev</h3>
            
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-bright-blue rounded-full mr-3"></div>
                <span className="text-white">Tailwind CSS</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-bright-blue rounded-full mr-3"></div>
                <span className="text-white">React</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-bright-blue rounded-full mr-3"></div>
                <span className="text-white">Firebase</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-bright-blue rounded-full mr-3"></div>
                <span className="text-white">Node.js</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-bright-blue rounded-full mr-3"></div>
                <span className="text-white">TypeScript</span>
              </li>
            </ul>
          </div>

          {/* Hosting Stack Column */}
          <div className="bg-dark-purple/30 border border-primary-purple/20 rounded-lg p-8 hover:border-primary-purple/40 transition-all backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-6 text-sky-blue">Hosting Stack</h3>
            
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-sky-blue rounded-full mr-3"></div>
                <span className="text-white">Pterodactyl</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-sky-blue rounded-full mr-3"></div>
                <span className="text-white">Linux</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-sky-blue rounded-full mr-3"></div>
                <span className="text-white">VPS Management</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-sky-blue rounded-full mr-3"></div>
                <span className="text-white">Docker</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-sky-blue rounded-full mr-3"></div>
                <span className="text-white">CloudFlare</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
