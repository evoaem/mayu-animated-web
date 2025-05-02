
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 relative">
      <div className="max-w-4xl mx-auto text-center z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          <span className="text-white text-opacity-95">HI, I'M </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-purple via-light-purple to-primary-purple animate-pulse">
            MAYU
          </span>
        </h1>
        
        <div className="h-1 w-32 mx-auto bg-gradient-to-r from-primary-purple to-light-purple rounded-full my-8"></div>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Creative Developer & Hosting Enthusiast
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button asChild className="bg-primary-purple hover:bg-primary-purple/80 text-white px-8 py-7 rounded-md">
            <a href="#projects" className="text-lg flex items-center">
              View Work <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          
          <Button asChild variant="outline" className="border-primary-purple text-primary-purple hover:bg-primary-purple/10 px-8 py-7 rounded-md border-2">
            <a href="#contact" className="text-lg flex items-center">
              Contact Me <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
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
