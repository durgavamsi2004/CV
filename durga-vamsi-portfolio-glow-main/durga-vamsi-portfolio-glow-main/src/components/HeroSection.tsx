import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  
  const titles = [
    'Cloud Enthusiast ☁️',
    'Web Developer 🚀',
    'IoT Innovator 🔧'
  ];
  
  const currentTitle = titles[currentIndex];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (displayText.length < currentTitle.length) {
        setDisplayText(currentTitle.slice(0, displayText.length + 1));
      } else {
        setTimeout(() => {
          setDisplayText('');
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }, 2000);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [displayText, currentTitle, currentIndex]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/80" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-neon-blue rounded-full animate-float" />
        <div className="absolute top-40 right-32 w-3 h-3 bg-neon-purple rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-neon-cyan rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-20 w-4 h-4 border border-neon-blue rounded-full animate-pulse-slow" />
        <div className="absolute bottom-40 right-1/3 w-3 h-3 border border-neon-purple rounded-full animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Greeting */}
          <div className="animate-fade-in-up">
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Hi, I'm
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-neon bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                Durga Vamsi
              </span>
              <span className="ml-4 animate-float">👋</span>
            </h1>
          </div>

          {/* Dynamic Title */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="h-16 md:h-20 flex items-center justify-center">
              <h2 className="text-2xl md:text-4xl font-semibold text-foreground">
                {displayText}
                <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
              </h2>
            </div>
          </div>

          {/* Description */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate Computer Science undergraduate with expertise in cloud technologies, 
              web development, and IoT innovations. Building the future, one line of code at a time.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ animationDelay: '0.9s' }}>
            <Button 
              size="lg" 
              className="btn-neon px-8 py-6 text-lg font-semibold"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 text-lg font-semibold border-neon-blue hover:bg-neon-blue/10 hover:border-neon-blue"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-fade-in-up mt-16" style={{ animationDelay: '1.2s' }}>
            <div className="flex flex-col items-center space-y-2">
              <p className="text-sm text-muted-foreground">Scroll to explore</p>
              <div className="w-6 h-10 border-2 border-neon-blue/50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-neon-blue rounded-full mt-2 animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-blue/30 rounded-full animate-pulse-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;