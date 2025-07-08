const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-neon">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="scroll-reveal">
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 p-1">
                  <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                    <div className="text-6xl">👨‍💻</div>
                  </div>
                </div>
                {/* Floating tech icons */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-neon-blue/10 rounded-full flex items-center justify-center border border-neon-blue/30 animate-float">
                  <span className="text-2xl">☁️</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-neon-purple/10 rounded-full flex items-center justify-center border border-neon-purple/30 animate-float" style={{ animationDelay: '1s' }}>
                  <span className="text-2xl">🚀</span>
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6 scroll-reveal">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-neon">Hello! I'm P. V. Durga Vamsi</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Kadapa, Andhra Pradesh – 516001
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Passionate and detail-oriented Computer Science undergraduate with strong foundations in web development, programming, and cloud technologies. Seeking an opportunity to apply technical skills in real-world projects, contribute to innovative solutions, and grow as a software developer.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-foreground">What I'm passionate about:</h4>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { icon: '☁️', title: 'Cloud Computing', desc: 'AWS Certified, Cloud Technologies' },
                    { icon: '💻', title: 'Programming', desc: 'C, Java, Python, JavaScript, SQL' },
                    { icon: '🌐', title: 'Web Development', desc: 'HTML, CSS, React (Basic)' },
                    { icon: '🔧', title: 'Tools & Platforms', desc: 'Git, GitHub Pages, Linux, Arduino Cloud' },
                    { icon: '🤖', title: 'Emerging Tech', desc: 'Prompt Engineering, ML, NLP, Neural Networks' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <h5 className="font-medium text-foreground">{item.title}</h5>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="pt-6 border-t border-border">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-neon">8.5</div>
                    <div className="text-sm text-muted-foreground">B.Tech CGPA</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-neon">7.9</div>
                    <div className="text-sm text-muted-foreground">Intermediate CGPA</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-neon">9.6</div>
                    <div className="text-sm text-muted-foreground">SSC CGPA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;