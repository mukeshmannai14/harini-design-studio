import galleryBridal from "@/assets/gallery-bridal-1.jpg";
import gallerySleeve from "@/assets/gallery-sleeve.jpg";
import galleryBackneck from "@/assets/gallery-backneck.jpg";
import galleryMaggam from "@/assets/gallery-maggam.jpg";
import galleryZardosi from "@/assets/gallery-zardosi.jpg";
import galleryMotif from "@/assets/gallery-motif.jpg";
import { ArrowUpRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Gallery = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const galleryItems = [
    { src: galleryBridal, title: "Bridal Blouse Aari Work", category: "Bridal" },
    { src: gallerySleeve, title: "Sleeve Design", category: "Beads & Stones" },
    { src: galleryBackneck, title: "Back Neck Concept", category: "Kundan Work" },
    { src: galleryMaggam, title: "Heavy Maggam Work", category: "Peacock Motif" },
    { src: galleryZardosi, title: "Zardosi Embroidery", category: "Sequins & Pearls" },
    { src: galleryMotif, title: "Motif Work", category: "Floral Design" },
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
    hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="gallery" className="py-24 md:py-36 bg-gradient-radial relative" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block text-accent font-medium tracking-[0.2em] uppercase text-sm mb-6">
            Our Portfolio
          </span>
          <h2 className="text-display-sm md:text-display-md font-display font-bold text-foreground mb-8">
            Exquisite <span className="text-primary italic">Creations</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed font-light">
            Explore our collection of stunning bridal blouse designs featuring 
            Aari work, zardosi, beads, kundan, stones, and sequins.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                index === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""
              }`}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className={`overflow-hidden ${index === 0 ? "aspect-square lg:aspect-auto lg:h-full" : "aspect-[4/5]"}`}>
                <motion.img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
              </div>
              
              {/* Elegant Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/40 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <span className="inline-block px-3 py-1 bg-accent/20 backdrop-blur-sm rounded-full text-accent text-sm font-medium mb-3">
                      {item.category}
                    </span>
                    <h3 className="text-primary-foreground text-xl md:text-2xl font-display font-bold">
                      {item.title}
                    </h3>
                  </motion.div>
                </div>
                
                {/* View icon */}
                <motion.div
                  className="absolute top-4 right-4 w-10 h-10 bg-background/10 backdrop-blur-sm rounded-full flex items-center justify-center"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.15 }}
                >
                  <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                </motion.div>
              </motion.div>
              
              {/* Border glow effect */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-border/20 group-hover:ring-accent/30 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;