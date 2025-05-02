
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 relative">
      <div className="max-w-4xl mx-auto text-center z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
          <span className="text-white opacity-0 animate-fade-in-slow">HI, I'M </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-purple to-light-purple animate-glow opacity-0 animate-fade-in-delayed">
            MAYU
          </span>
        </h1>
        
        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary-purple to-light-purple rounded-full my-6 opacity-0 animate-fade-in-delayed"></div>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in-delayed-2">
          Creative Developer & Design Enthusiast
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-delayed-2">
          <Button asChild className="bg-primary-purple hover:bg-primary-purple/80 text-white px-6 py-6 rounded-md glow-on-hover">
            <a href="#projects">
              View Work <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          
          <Button asChild variant="outline" className="border-primary-purple text-primary-purple hover:bg-primary-purple/10 px-6 py-6 rounded-md glow-on-hover">
            <a href="#contact">
              Contact Me <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-white transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
