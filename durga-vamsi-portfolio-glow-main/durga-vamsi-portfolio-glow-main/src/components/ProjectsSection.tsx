import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Form Generator',
      description: 'Designed and deployed a custom web tool to automate the creation of student project review forms, eliminating manual process. Used JSPDF to generate output in the exact university format. Reduced form preparation time by over 80%.',
      tech: ['JavaScript', 'JSPDF', 'React', 'HTML', 'CSS'],
      features: ['Form Automation', 'PDF Generation', 'University Format'],
      icon: '📝',
      gradient: 'from-neon-blue to-neon-purple',
      status: 'Completed',
      demo: 'Form2PDF'
    },
    {
      title: 'IoT-Based Smart Water Management System (Under NISAN)',
      description: 'Engineered an IoT solution to monitor and redirect RO-rejected water. Integrated pH and TDS sensors with Arduino Cloud to collect and visualize water quality in real time. Automated decision making allows for the reuse or disposal of water, reducing waste by up to 60%.',
      tech: ['C', 'Arduino', 'IoT Sensors', 'Cloud Technologies'],
      features: ['Real-time Monitoring', 'Automated Decision', 'Water Quality Visualization'],
      icon: '💧',
      gradient: 'from-neon-cyan to-neon-blue',
      status: 'In Progress',
      github: 'https://github.com/durgavamsi2004'
    },
    {
      title: 'Speech Emotion Optimization using Wav2Vec',
      description: 'Developed a speech emotion recognition model using Wav2Vec and PyTorch. Fine-tuned on audio datasets to enhance emotional tone classification.',
      tech: ['Python', 'Wav2Vec', 'PyTorch', 'Librosa', 'Machine Learning'],
      features: ['Emotion Recognition', 'Audio Processing', 'Model Fine-tuning'],
      icon: '🎙️',
      gradient: 'from-neon-purple to-neon-cyan',
      status: 'Research'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-neon">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of my latest work, from web applications to IoT innovations and AI research
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full mt-6" />
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className={`scroll-reveal card-neon p-8 rounded-2xl ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex items-center gap-8`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Icon & Status */}
                <div className="flex-shrink-0">
                  <div className={`w-32 h-32 rounded-2xl bg-gradient-to-br ${project.gradient} p-1`}>
                    <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center relative overflow-hidden">
                      <span className="text-5xl">{project.icon}</span>
                      <div className="absolute top-2 right-2">
                        <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                          project.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                          project.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-blue-500/20 text-blue-400'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      {/* Floating particles */}
                      <div className="absolute inset-0 overflow-hidden">
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className={`absolute w-1 h-1 bg-gradient-to-r ${project.gradient} rounded-full animate-pulse-slow`}
                            style={{
                              left: `${20 + Math.random() * 60}%`,
                              top: `${20 + Math.random() * 60}%`,
                              animationDelay: `${Math.random() * 2}s`
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-neon-blue rounded-full" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-muted border border-border rounded-full text-sm text-foreground hover:border-neon-blue hover:bg-neon-blue/5 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <Button className="btn-neon">
                      View Project
                    </Button>
                    <Button variant="outline" className="border-neon-blue hover:bg-neon-blue/10">
                      Live Demo
                    </Button>
                    <Button variant="outline" className="border-neon-purple hover:bg-neon-purple/10">
                      Source Code
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More Projects CTA */}
          <div className="text-center mt-16 scroll-reveal">
            <p className="text-muted-foreground mb-6">
              Want to see more of my work?
            </p>
            <Button 
              variant="outline" 
              size="lg"
              className="border-neon-blue hover:bg-neon-blue/10 hover:border-neon-blue px-8 py-3"
            >
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-3 h-3 bg-neon-blue/20 rounded-full animate-float" />
        <div className="absolute top-3/4 right-20 w-2 h-2 bg-neon-purple/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-4 h-4 border border-neon-cyan/20 rounded-full animate-pulse-slow" />
      </div>
    </section>
  );
};

export default ProjectsSection;