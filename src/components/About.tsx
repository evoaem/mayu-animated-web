
import { useEffect, useRef } from 'react';

const About = () => {
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
      id="about" 
      ref={sectionRef}
      className="min-h-screen flex items-center py-20"
    >
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary-purple to-light-purple animate-glow">
            About Me
          </h2>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-primary-purple to-light-purple rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              I bring creative ideas to life through code
            </h3>
            
            <p className="text-gray-300 leading-relaxed">
              Hello! I'm Mayu, a creative developer passionate about building beautiful, 
              immersive digital experiences. I combine technical expertise with a design-focused 
              approach to create websites and applications that stand out.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              With a background in both design and development, I bridge the gap between 
              aesthetics and functionality. I'm constantly exploring new technologies and 
              techniques to push the boundaries of what's possible on the web.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-dark-purple/50 border border-primary-purple/20 rounded-lg px-4 py-3 hover:border-primary-purple/60 transition-all">
                <span className="text-primary-purple font-medium">3+</span>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </div>
              
              <div className="bg-dark-purple/50 border border-primary-purple/20 rounded-lg px-4 py-3 hover:border-primary-purple/60 transition-all">
                <span className="text-primary-purple font-medium">20+</span>
                <p className="text-gray-400 text-sm">Projects Completed</p>
              </div>
              
              <div className="bg-dark-purple/50 border border-primary-purple/20 rounded-lg px-4 py-3 hover:border-primary-purple/60 transition-all">
                <span className="text-primary-purple font-medium">15+</span>
                <p className="text-gray-400 text-sm">Happy Clients</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-tr from-primary-purple/20 to-light-purple/20 p-1 rounded-lg">
              <div className="bg-dark-purple/90 p-6 rounded-lg relative z-10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-gray-300 text-sm font-medium">Name</p>
                      <p className="text-white">Mayu</p>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-gray-300 text-sm font-medium">Email</p>
                      <p className="text-white">hello@mayu.dev</p>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-gray-300 text-sm font-medium">Date of Birth</p>
                      <p className="text-white">May 12, 1994</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-gray-300 text-sm font-medium">Based in</p>
                      <p className="text-white">Tokyo, Japan</p>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-gray-300 text-sm font-medium">Phone</p>
                      <p className="text-white">+81 90 1234 5678</p>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-gray-300 text-sm font-medium">Languages</p>
                      <p className="text-white">English, Japanese</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-tr from-primary-purple to-light-purple rounded-full blur-2xl opacity-30"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-bl from-primary-purple to-bright-blue rounded-full blur-2xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
