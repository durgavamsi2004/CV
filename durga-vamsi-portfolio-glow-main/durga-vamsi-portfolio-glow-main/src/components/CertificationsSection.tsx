const CertificationsSection = () => {
  const certifications = [
    {
      title: 'AWS Certified Cloud Practitioner (CLF-C02)',
      issuer: 'Amazon Web Services',
      date: 'Jan 2024',
      badge: '☁️',
      description: '',
      skills: ['Cloud Computing', 'AWS'],
      status: 'Verified',
      credlyUrl: '#'
    },
    {
      title: 'CCNA: Introduction to Networks',
      issuer: 'Cisco Networking Academy',
      date: 'Apr 2024',
      badge: '🌐',
      description: '',
      skills: ['Networking', 'Cisco'],
      status: 'Verified',
      credlyUrl: '#'
    },
    {
      title: 'Automation Explorer',
      issuer: 'UiPath Academy',
      date: 'Apr 2024',
      badge: '🤖',
      description: '',
      skills: ['Automation', 'UiPath'],
      status: 'Verified',
      credlyUrl: '#'
    }
  ];

  const achievements = [
    {
      title: 'IST National winner',
      event: 'IST  2025',
      icon: '🏆',
      description: 'Second place for leadership and team work for acting'
    },
    {
      title: 'Open Source Contributor',
      event: 'Idead Hackathon',
      icon: '🌟',
      description: 'Contributed to 10+ open source projects'
    },
    {
      title: 'Tech Speaker',
      event: 'DevFest 2023',
      icon: '🎤',
      description: 'Presented on "Future of IoT in Smart Cities"'
    },
    {
      title: 'Veltech Rathna',
      event: 'Curtural event',
      icon: '🏅',
      description: 'showcased leadership, work under pressure and communication skills'
}];

  return (
    <section id="certifications" className="py-20 bg-muted/30 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Certifications & <span className="text-neon">Achievements</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professional certifications and notable achievements that validate my expertise
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full mt-6" />
          </div>

          {/* Certifications Grid */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Professional Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={cert.title}
                  className="scroll-reveal card-neon p-6 rounded-xl group hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Certificate Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-neon-blue to-neon-purple rounded-lg flex items-center justify-center text-2xl">
                        {cert.badge}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-lg">{cert.title}</h4>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full font-medium">
                        {cert.status}
                      </span>
                      <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-2 py-1 bg-muted/50 text-xs text-foreground rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Certificate Button */}
                  <button className="w-full py-2 px-4 border border-neon-blue/30 text-neon-blue hover:bg-neon-blue/10 rounded-lg transition-all duration-300 text-sm font-medium">
                    View on Credly
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="scroll-reveal">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Notable Achievements
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={achievement.title}
                  className="text-center p-6 card-neon rounded-xl group hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-neon-purple to-neon-cyan rounded-full flex items-center justify-center text-3xl mx-auto mb-4 animate-float">
                    {achievement.icon}
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{achievement.title}</h4>
                  <p className="text-sm text-neon-blue font-medium mb-2">{achievement.event}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mt-20 scroll-reveal">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Leadership & Activities Timeline
            </h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-blue to-neon-purple rounded-full" />
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {[
                  { date: '2023', title: 'Lead', org: 'Student Club', desc: 'Led a team of 15 in various projects' },
                  { date: '2023', title: 'Volunteer', org: 'Code for Good', desc: 'Developed solutions ' },
                  { date: '2024', title: 'Partisipant', org: 'Coding Bootcamp', desc: 'partisipate in 20+ Bootcamps' },
                  { date: '2025', title: 'Volunteer', org: 'TechFest 2025', desc: 'Volunteer college technical festival' }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="card-neon p-4 rounded-lg">
                        <div className="text-neon-blue font-semibold">{item.date}</div>
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <p className="text-sm text-neon-purple font-medium">{item.org}</p>
                        <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                      </div>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className="w-4 h-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full border-4 border-background z-10" />
                    
                    <div className="flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-10 w-2 h-2 bg-neon-blue/20 rounded-full animate-pulse-slow" />
        <div className="absolute top-2/3 right-20 w-3 h-3 bg-neon-purple/20 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-neon-cyan/20 rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
};

export default CertificationsSection;