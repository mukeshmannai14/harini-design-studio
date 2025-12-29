import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Clock, Mail, Youtube, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const whatsappNumber = "918270590414";
  const whatsappMessage = encodeURIComponent("Hi! I'm interested in the Aari Design classes. Please share more details.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const email = "stharinithiruvengadam@gmail.com";
  const youtubeChannel = "https://www.youtube.com/@HARINIDESIGNER";

  const contactInfo = [
    {
      icon: Phone,
      title: "WhatsApp",
      value: "+91 82705 90414",
      description: "Chat with us anytime",
    },
    {
      icon: Mail,
      title: "Email",
      value: email,
      description: "Send us an email",
      href: `mailto:${email}`,
    },
    {
      icon: Youtube,
      title: "YouTube",
      value: "@HARINIDESIGNER",
      description: "Watch our tutorials",
      href: youtubeChannel,
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: "9 AM - 7 PM",
      description: "Monday to Saturday",
    },
  ];

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
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-pattern relative overflow-hidden" ref={sectionRef}>
      {/* Decorative background */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent/5 to-transparent rounded-full pointer-events-none"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block text-accent font-medium tracking-[0.2em] uppercase text-sm mb-6">
            Get in Touch
          </span>
          <h2 className="text-display-sm md:text-display-md font-display font-bold text-foreground mb-8">
            Contact <span className="text-primary italic">Us</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed font-light">
            Ready to start your Aari embroidery journey? Reach out to us on WhatsApp 
            for class bookings, custom orders, or any questions.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="bg-card p-8 rounded-2xl border-gradient h-full text-center group">
                  <motion.div
                    className="w-16 h-16 bg-gradient-burgundy rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <info.icon className="w-7 h-7 text-primary-foreground" />
                  </motion.div>
                  <h3 className="font-display font-bold text-foreground text-lg mb-2">
                    {info.title}
                  </h3>
                  {info.href ? (
                    <a 
                      href={info.href} 
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-base font-semibold text-accent mb-2 hover:underline break-all block"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-lg font-semibold text-accent mb-2">
                      {info.value}
                    </p>
                  )}
                  <p className="text-sm text-muted-foreground">
                    {info.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <div className="bg-card rounded-3xl shadow-elegant p-10 md:p-16 text-center border-gradient relative overflow-hidden">
              {/* Decorative elements */}
              <motion.div
                className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-[#25D366]/10 to-transparent rounded-br-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-accent/10 to-transparent rounded-tl-full"
                animate={{ scale: [1.2, 1, 1.2] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <div className="relative">
                <motion.div
                  className="inline-flex items-center justify-center w-24 h-24 bg-[#25D366] rounded-3xl mb-8 shadow-glow"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <MessageCircle className="w-12 h-12 text-white" />
                </motion.div>
                
                <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                  Message Us on WhatsApp
                </h3>
                <p className="text-muted-foreground mb-10 max-w-lg mx-auto text-lg font-light">
                  For class enrollment, custom orders, or any inquiries, 
                  WhatsApp is the fastest way to reach us!
                </p>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="whatsapp" size="xl" className="group" asChild>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-6 h-6" />
                      <span>Start WhatsApp Chat</span>
                      <motion.span
                        className="ml-1"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                      >
                        →
                      </motion.span>
                    </a>
                  </Button>
                </motion.div>

                <motion.div
                  className="flex items-center justify-center gap-2 mt-8 text-sm text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Sparkles className="w-4 h-4 text-accent" />
                  </motion.div>
                  <span>Usually responds within 1 hour</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;