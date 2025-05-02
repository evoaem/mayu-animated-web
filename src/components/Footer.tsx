
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-primary-purple/20">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold text-primary-purple animate-glow">
              MAYU
            </a>
            <p className="text-sm text-gray-400 mt-1">
              Creative Developer & Design Enthusiast
            </p>
          </div>
          
          <div className="text-sm text-gray-400">
            © {currentYear} Mayu. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
