
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 10);

      // Find the active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;
      
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = (current as HTMLElement).offsetTop - 100;
        const sectionId = current.getAttribute('id') || '';
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 py-4",
      scrolled ? "backdrop-blur-lg bg-dark-purple/70" : ""
    )}>
      <div className="container max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#home" className="text-xl md:text-2xl font-bold text-primary-purple animate-glow">
            MAYU
          </a>
        </div>
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "nav-link font-medium transition-colors",
                activeSection === link.href.substring(1) 
                  ? "text-primary-purple" 
                  : "text-gray-300 hover:text-white"
              )}
            >
              {link.name}
            </a>
          ))}
        </div>
        {/* Mobile Menu Button - simplified for this example */}
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
