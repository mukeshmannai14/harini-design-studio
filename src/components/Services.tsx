import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

import serviceAari from "@/assets/service-aari.jpg";
import serviceBrooch from "@/assets/service-brooch.jpg";
import serviceFabricPainting from "@/assets/service-fabric-painting.jpg";
import serviceSareePleating from "@/assets/service-saree-pleating.jpg";
import serviceBracelet from "@/assets/service-bracelet.jpg";
import serviceNeckset from "@/assets/service-neckset.jpg";
import serviceBridalBangle from "@/assets/service-bridal-bangle.jpg";

const Services = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const services = [
    {
      image: serviceAari,
      title: "Aari Work",
      description: "Exquisite traditional Aari embroidery on blouses, sarees, and designer garments with intricate patterns and premium materials.",
    },
    {
      image: serviceBrooch,
      title: "Brooch Work",
      description: "Custom handcrafted brooches and appliques to elevate your outfits with unique, elegant embellishments.",
    },
    {
      image: serviceFabricPainting,
      title: "Fabric Painting",
      description: "Beautiful hand-painted fabric designs transforming plain fabrics into stunning works of art.",
    },
    {
      image: serviceSareePleating,
      title: "Saree Pre-Pleating",
      description: "Professional saree pre-pleating service for hassle-free draping, perfect for events and daily wear.",
    },
    {
      image: serviceBracelet,
      title: "Custom Design Bracelet",
      description: "Handcrafted custom bracelets with intricate beadwork, thread work, and elegant embellishments for every occasion.",
    },
    {
      image: serviceNeckset,
      title: "Custom Design Neck Set",
      description: "Exquisite handmade neck sets with matching earrings, featuring traditional kundan and pearl work designs.",
    },
    {
      image: serviceBridalBangle,
      title: "Silk Thread Bridal Bangle",
      description: "Colorful silk thread bridal bangles with intricate thread work and embellishments, perfect for weddings.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="services" className="py-24 md:py-36 bg-secondary/30 relative overflow-hidden" ref={sectionRef}>
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl hidden lg:block"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-3xl hidden lg:block"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block text-accent font-medium tracking-[0.2em] uppercase text-sm mb-6">
            Our Expertise
          </span>
          <h2 className="text-display-sm md:text-display-md font-display font-bold text-foreground mb-8">
            Professional <span className="text-primary italic">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed font-light">
            From intricate embroidery to fabric artistry, we offer premium handcrafted services 
            that bring elegance and beauty to your garments.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group bg-card rounded-2xl shadow-elegant border border-border/50 hover:border-primary/30 transition-all duration-500 relative overflow-hidden"
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </div>
              
              {/* Content */}
              <div className="p-6 relative">
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                <span>Inquire About Services</span>
                <motion.span
                  className="ml-2"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  →
                </motion.span>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
