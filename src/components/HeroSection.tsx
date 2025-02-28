
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 z-0"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-energy-green/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-energy-amber/5 rounded-full blur-3xl"></div>
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-energy-green/10 text-energy-green mb-6 animate-fade-in">
          Bangladesh Energy Insights
        </span>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 animate-fade-in animate-delay-100">
          Powering the Future of
          <span className="relative">
            <span className="relative z-10"> Bangladesh</span>
            <span className="absolute bottom-2 left-0 w-full h-3 bg-energy-green/20 -z-10 transform skew-x-6"></span>
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in animate-delay-200">
          Explore Bangladesh's evolving energy landscape: from traditional power infrastructure 
          to the promising frontier of renewable energy adoption and sustainable development.
        </p>
        
        <div className="animate-fade-in animate-delay-300">
          <a 
            href="#overview" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-energy-green hover:bg-energy-green/90 transition-colors duration-200"
          >
            Learn More
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#overview" 
          className="flex flex-col items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="mb-2">Scroll</span>
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
