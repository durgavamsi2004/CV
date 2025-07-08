import { Button } from '@/components/ui/button';
import { useState } from 'react';
import resumePdf from '@/assets/Main cv.pdf';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: '📧',
      handle: 'durgavamsi2004@gmail.com',
      url: 'mailto:durgavamsi2004@gmail.com',
      color: 'from-red-500 to-orange-500'
    },
    {
      name: 'GitHub',
      icon: '💻',
      handle: 'durgavamsi2004',
      url: 'https://github.com/durgavamsi2004',
      color: 'from-gray-700 to-gray-900'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      handle: 'P. V. Durga Vamsi',
      url: 'https://linkedin.com',
      color: 'from-blue-600 to-blue-800'
    },
    {
      name: 'Phone',
      icon: '📱',
      handle: '+91-7075475760',
      url: 'tel:+917075475760',
      color: 'from-green-400 to-green-600'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's <span className="text-neon">Connect</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I'm always excited to discuss new opportunities, collaborate on projects, or just have a tech chat!
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full mt-6" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="scroll-reveal">
              <div className="card-neon p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Send me a message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 outline-none transition-all text-foreground"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 outline-none transition-all text-foreground"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 outline-none transition-all text-foreground"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 outline-none transition-all resize-none text-foreground"
                      placeholder="Tell me about your project, idea, or just say hello!"
                    />
                  </div>
                  
                  <Button type="submit" className="btn-neon w-full py-3 text-lg font-semibold">
                    Send Message 🚀
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info & Social Links */}
            <div className="space-y-8 scroll-reveal">
              {/* Quick Contact */}
              <div className="card-neon p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Get in touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-neon-blue/20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">📧</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">durgavamsi2004@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-neon-purple/20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">📱</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Response Time</p>
                      <p className="text-muted-foreground">Usually within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-neon-cyan/20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🌍</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground">Kadapa, Andhra Pradesh – 516001</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="card-neon p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Connect with me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-4 border border-border rounded-lg hover:border-neon-blue hover:bg-neon-blue/5 transition-all duration-300 hover:scale-105"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 bg-gradient-to-r ${social.color} rounded-lg flex items-center justify-center text-white group-hover:animate-bounce`}>
                          <span className="text-lg">{social.icon}</span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-medium text-foreground text-sm">{social.name}</p>
                          <p className="text-xs text-muted-foreground truncate">{social.handle}</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="card-neon p-6 rounded-2xl text-center">
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-green-400 font-medium">Available for opportunities</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Open to freelance projects, internships, and full-time positions
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 scroll-reveal">
            <div className="card-neon p-8 rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Ready to build something amazing together?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Whether you have a project in mind, want to discuss tech trends, or just want to connect, 
                I'd love to hear from you. Let's create something extraordinary!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-neon px-8 py-3">
                  Start a Conversation
                </Button>
                <a
                  href={resumePdf}
                  download="P_V_Durga_Vamsi_Resume.pdf"
                  className="border-neon-purple hover:bg-neon-purple/10 hover:border-neon-purple px-8 py-3 btn btn-outline flex items-center justify-center"
                  style={{ textDecoration: 'none' }}
                >
                  View My Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-3 h-3 bg-neon-blue/20 rounded-full animate-float" />
        <div className="absolute top-1/2 right-20 w-2 h-2 bg-neon-purple/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-4 h-4 border border-neon-cyan/20 rounded-full animate-pulse-slow" />
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-neon-cyan/20 rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
};

export default ContactSection;