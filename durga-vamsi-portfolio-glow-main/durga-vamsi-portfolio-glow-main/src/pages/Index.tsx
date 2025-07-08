import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import CertificationsSection from '../components/CertificationsSection';
import ContactSection from '../components/ContactSection';
import { useEffect, useState } from 'react';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll reveal animation
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Background gradient overlay */}
      <div 
        className="fixed inset-0 bg-hero-pattern opacity-20 pointer-events-none"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />
      
      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      
      {/* Floating navigation dots */}
      <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col space-y-4">
          {['Hero', 'About', 'Skills', 'Projects', 'Certifications', 'Contact'].map((section, index) => (
            <button
              key={section}
              className="w-3 h-3 rounded-full border-2 border-primary/50 hover:border-primary transition-all duration-300 hover:scale-125"
              onClick={() => {
                const element = document.getElementById(section.toLowerCase());
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              title={section}
            />
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Index;