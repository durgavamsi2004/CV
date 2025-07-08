const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: '💻',
      skills: [
        { name: 'C (C2C Certified)', level: 90, icon: '☕' },
        { name: 'Java', level: 85, icon: '☕' },
        { name: 'Python', level: 85, icon: '🐍' },
        { name: 'JavaScript', level: 88, icon: '⚡' },
        { name: 'SQL', level: 80, icon: '🗄️' }
      ]
    },
    {
      title: 'Web Technologies',
      icon: '🌐',
      skills: [
        { name: 'HTML', level: 95, icon: '📄' },
        { name: 'CSS', level: 95, icon: '🎨' },
        { name: 'React (Basic)', level: 70, icon: '⚛️' }
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: '🛠️',
      skills: [
        { name: 'Git', level: 90, icon: '🌿' },
        { name: 'GitHub Pages', level: 85, icon: '📦' },
        { name: 'Linux', level: 85, icon: '🐧' },
        { name: 'Arduino Cloud', level: 80, icon: '🤖' }
      ]
    },
    {
      title: 'Technologies & Concepts',
      icon: '☁️',
      skills: [
        { name: 'Cloud Computing (AWS Certified)', level: 85, icon: '☁️' },
        { name: 'Prompt Engineering', level: 70, icon: '💡' }
      ]
    },
    {
      title: 'Familiar With',
      icon: '🔬',
      skills: [
        { name: 'Machine Learning', level: 60, icon: '🤖' },
        { name: 'Neural Networks', level: 60, icon: '🧠' },
        { name: 'Natural Language Processing', level: 60, icon: '🗣️' },
        { name: 'Vibe Coding', level: 50, icon: '🎵' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical <span className="text-neon">Skills</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive toolkit of technologies and frameworks I use to bring ideas to life
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full mt-6" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={category.title} 
                className="scroll-reveal card-neon p-6 rounded-xl"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="font-medium text-foreground">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-border rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 4 + skillIndex) * 0.1}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Tags */}
          <div className="mt-16 text-center scroll-reveal">
            <h3 className="text-xl font-semibold mb-6 text-foreground">Additional Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {[
                'MongoDB', 'PostgreSQL', 'Firebase', 'REST APIs', 'GraphQL', 
                'Tailwind CSS', 'Bootstrap', 'Material-UI', 'Redux', 'Socket.io',
                'Webpack', 'Babel', 'Jest', 'Cypress', 'Figma'
              ].map((tech, index) => (
                <span 
                  key={tech} 
                  className="px-4 py-2 bg-card border border-border rounded-full text-sm text-foreground hover:border-neon-blue hover:bg-neon-blue/5 transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-neon-blue/30 rounded-full animate-pulse-slow" />
        <div className="absolute top-1/2 right-20 w-3 h-3 bg-neon-purple/30 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-neon-cyan/30 rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
};

export default SkillsSection;