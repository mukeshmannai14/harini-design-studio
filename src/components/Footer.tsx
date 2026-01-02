import { Heart, MapPin, Phone, Mail, Youtube, Clock, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import logoImage from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <footer className="relative bg-gradient-to-b from-burgundy-900 via-burgundy-950 to-black overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-pattern opacity-5" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
      
      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-gold-400/5 rounded-full blur-3xl"
        animate={{ y: [-10, 10, -10], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 right-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl"
        animate={{ y: [10, -10, 10], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Peacock Feather Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5c5 0 10 15 10 25s-5 25-10 25-10-15-10-25S25 5 30 5z' fill='%23D4AF37' fill-opacity='0.4'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Top Section with Logo */}
        <motion.div 
          className="py-12 border-b border-white/10 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={logoImage} alt="Harini Designer Logo" className="h-20 w-auto" />
          </motion.div>
          <p className="text-white/80 text-lg max-w-xl font-light leading-relaxed">
            Preserving the timeless art of Aari embroidery, crafting exquisite bridal designs with passion and precision.
          </p>
          <motion.div 
            className="flex items-center gap-2 mt-4 text-gold-400"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium tracking-wider">HANDCRAFTED WITH LOVE</span>
            <Sparkles className="w-4 h-4" />
          </motion.div>
        </motion.div>

        {/* Main Footer Content */}
        <motion.div 
          className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold-400 mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-gold-400" />
              Quick Links
            </h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Classes', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <motion.a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-white/80 hover:text-gold-400 transition-all duration-300 flex items-center gap-2 group text-sm font-medium"
                    whileHover={{ x: 5 }}
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-gold-400" />
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold-400 mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-gold-400" />
              Our Services
            </h4>
            <ul className="space-y-4 text-sm text-white/80">
              {['Aari Work', 'Maggam Work', 'Zardosi Embroidery', 'Bridal Designs', 'Custom Jewelry', 'Fabric Painting'].map((service) => (
                <li key={service}>
                  <motion.a 
                    href="#services" 
                    className="hover:text-gold-400 transition-all duration-300 flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400/50 group-hover:bg-gold-400 transition-colors" />
                    {service}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold-400 mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-gold-400" />
              Get in Touch
            </h4>
            <div className="space-y-5">
              <motion.div 
                className="flex items-start gap-4 group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-full bg-gold-400/10 flex items-center justify-center group-hover:bg-gold-400/20 transition-colors">
                  <MapPin className="w-4 h-4 text-gold-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold mb-1">Our Location</p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    72 Taluka Office Road<br />
                    Mannargudi - 614001
                  </p>
                </div>
              </motion.div>
              <motion.a 
                href="mailto:stharinithiruvengadam@gmail.com"
                className="flex items-start gap-4 group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-full bg-gold-400/10 flex items-center justify-center group-hover:bg-gold-400/20 transition-colors">
                  <Mail className="w-4 h-4 text-gold-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold mb-1">Email Us</p>
                  <p className="text-white/70 text-sm hover:text-gold-400 transition-colors">
                    stharinithiruvengadam@gmail.com
                  </p>
                </div>
              </motion.a>
              <motion.div 
                className="flex items-start gap-4 group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-full bg-gold-400/10 flex items-center justify-center group-hover:bg-gold-400/20 transition-colors">
                  <Clock className="w-4 h-4 text-gold-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold mb-1">Business Hours</p>
                  <p className="text-white/70 text-sm">
                    Mon - Sat: 9 AM - 6 PM
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Social & CTA */}
          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold-400 mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-gold-400" />
              Connect With Us
            </h4>
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              Follow us for embroidery inspiration, tutorials, and behind-the-scenes content.
            </p>
            <div className="flex gap-3 mb-8">
              <motion.a 
                href="https://wa.me/your-number" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400/20 to-gold-400/5 border border-gold-400/30 flex items-center justify-center hover:bg-gold-400 hover:text-burgundy-900 transition-all duration-300 text-white group"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </motion.a>
              <motion.a 
                href="mailto:stharinithiruvengadam@gmail.com"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400/20 to-gold-400/5 border border-gold-400/30 flex items-center justify-center hover:bg-gold-400 hover:text-burgundy-900 transition-all duration-300 text-white group"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </motion.a>
              <motion.a 
                href="https://www.youtube.com/@HARINIDESIGNER" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400/20 to-gold-400/5 border border-gold-400/30 flex items-center justify-center hover:bg-gold-400 hover:text-burgundy-900 transition-all duration-300 text-white group"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </motion.a>
            </div>
            <motion.a 
              href="#classes"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold-400 to-gold-500 text-burgundy-900 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-gold-400/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Join Our Classes
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-white/10 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm flex items-center gap-2">
              Made with 
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-gold-400 fill-gold-400" />
              </motion.span>
              © {currentYear} Harini Designer. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-white/50 text-sm">
              <span>Mannargudi</span>
              <span className="w-1 h-1 rounded-full bg-gold-400" />
              <span>Tamil Nadu</span>
              <span className="w-1 h-1 rounded-full bg-gold-400" />
              <span>India</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;