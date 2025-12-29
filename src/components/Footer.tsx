import { Heart, MapPin, Phone, Mail, Youtube, Clock, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-burgundy overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-pattern opacity-5" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Harini <span className="text-gold-400">Designer</span>
            </h3>
            <p className="text-white text-sm leading-relaxed mb-6 font-semibold">
              Preserving the timeless art of Aari embroidery, crafting exquisite bridal designs with passion and precision.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://wa.me/your-number" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-gold-400 hover:text-burgundy-900 transition-all duration-300 text-white"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a 
                href="mailto:stharinithiruvengadam@gmail.com"
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-gold-400 hover:text-burgundy-900 transition-all duration-300 text-white"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a 
                href="https://www.youtube.com/@HARINIDESIGNER" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-gold-400 hover:text-burgundy-900 transition-all duration-300 text-white"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold-400 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Classes', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-white hover:text-gold-400 transition-colors duration-300 flex items-center gap-2 group text-sm font-medium"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold-400 mb-6">
              Our Services
            </h4>
            <ul className="space-y-3 text-sm text-white font-semibold">
              <li className="hover:text-gold-400 transition-colors cursor-pointer">Aari Work</li>
              <li className="hover:text-gold-400 transition-colors cursor-pointer">Brooch Work</li>
              <li className="hover:text-gold-400 transition-colors cursor-pointer">Fabric Painting</li>
              <li className="hover:text-gold-400 transition-colors cursor-pointer">Saree Pre-Pleating</li>
              <li className="hover:text-gold-400 transition-colors cursor-pointer">Custom Design Bracelet</li>
              <li className="hover:text-gold-400 transition-colors cursor-pointer">Custom Design Neck Set</li>
              <li className="hover:text-gold-400 transition-colors cursor-pointer">Silk Thread Bridal Bangle</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold-400 mb-6">
              Visit Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-bold">Our Location</p>
                  <p className="text-white text-sm font-semibold">
                    72 Taluka Office Road<br />
                    Mannargudi - 614001<br />
                    Tamil Nadu, India
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-bold">Email Us</p>
                  <a href="mailto:stharinithiruvengadam@gmail.com" className="text-white text-sm font-semibold hover:text-gold-400 transition-colors">
                    stharinithiruvengadam@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-bold">Business Hours</p>
                  <p className="text-white text-sm font-semibold">
                    Mon - Sat: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white text-sm font-semibold flex items-center gap-1.5">
              Made with <Heart className="w-4 h-4 text-gold-400 animate-pulse" /> © {currentYear} Harini Designer. All rights reserved.
            </p>
            <p className="text-white text-sm font-semibold">
              Mannargudi | Tamil Nadu | India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
