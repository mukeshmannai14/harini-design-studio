import { Button } from "@/components/ui/button";
import { Calendar, Video, CheckCircle2, Users, Star, Sparkles, Palette, Shirt, Hand, Flower2 } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Classes = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const classes = [
    {
      icon: Sparkles,
      title: "Aari Embroidery Class",
      duration: "2 Months",
      description: "Master the ancient art of Aari embroidery from beginner to advanced techniques.",
      features: ["Beginner to advanced techniques", "Live interactive sessions", "Design patterns provided", "Certificate of completion"],
      popular: true,
    },
    {
      icon: Flower2,
      title: "Brooches & Appliques Class",
      duration: "3 Weeks",
      description: "Learn to create stunning handcrafted brooches and decorative appliques.",
      features: ["Material selection guide", "Various brooch styles", "Finishing techniques", "Portfolio building"],
      popular: false,
    },
    {
      icon: Palette,
      title: "Fabric Painting Class",
      duration: "1 Month",
      description: "Transform plain fabrics into beautiful works of art with hand painting techniques.",
      features: ["Color mixing mastery", "Brush techniques", "Pattern creation", "Fabric preparation"],
      popular: false,
    },
    {
      icon: Shirt,
      title: "Saree Pre-Pleating Class",
      duration: "2 Weeks",
      description: "Professional saree pre-pleating techniques for perfect draping every time.",
      features: ["Various pleating styles", "Stitching methods", "Quick draping tips", "Maintenance care"],
      popular: false,
    },
    {
      icon: Hand,
      title: "Hand Embroidery Class",
      duration: "6 Weeks",
      description: "Traditional hand embroidery stitches and patterns for timeless creations.",
      features: ["Basic to advanced stitches", "Pattern reading", "Color coordination", "Project completion"],
      popular: false,
    },
    {
      icon: Flower2,
      title: "Mehendi Class",
      duration: "1 Month",
      description: "Learn beautiful mehendi designs from traditional to modern contemporary styles.",
      features: ["Cone preparation", "Traditional designs", "Arabic patterns", "Bridal mehendi"],
      popular: false,
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
    <section id="classes" className="py-24 md:py-36 bg-pattern relative overflow-hidden" ref={sectionRef}>
      {/* Animated Decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-2 h-20 bg-gradient-to-b from-accent/30 to-transparent rounded-full hidden lg:block"
        animate={{ scaleY: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-2 h-20 bg-gradient-to-t from-primary/30 to-transparent rounded-full hidden lg:block"
        animate={{ scaleY: [1.5, 1, 1.5], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block text-accent font-medium tracking-[0.2em] uppercase text-sm mb-6">
            Online Learning
          </span>
          <h2 className="text-display-sm md:text-display-md font-display font-bold text-foreground mb-8">
            Our <span className="text-primary italic">Classes</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed font-light">
            Join our comprehensive online courses and transform your creative skills 
            with expert guidance via live Google Meet sessions.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {classes.map((classItem, index) => (
            <motion.div
              key={index}
              className="group bg-card rounded-2xl shadow-elegant overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 relative"
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Popular badge */}
              {classItem.popular && (
                <motion.div
                  className="absolute top-4 right-4 flex items-center gap-1 bg-accent/20 px-3 py-1 rounded-full z-10"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
                >
                  <Star className="w-4 h-4 text-accent fill-accent" />
                  <span className="text-foreground text-xs font-medium">Popular</span>
                </motion.div>
              )}

              {/* Header */}
              <div className="bg-gradient-burgundy p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-pattern opacity-10" />
                <motion.div
                  className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-4 relative"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <classItem.icon className="w-7 h-7 text-primary-foreground" />
                </motion.div>
                <h3 className="text-xl font-display font-bold text-primary-foreground relative">
                  {classItem.title}
                </h3>
                <div className="flex items-center gap-2 mt-2 relative">
                  <Calendar className="w-4 h-4 text-primary-foreground/70" />
                  <span className="text-primary-foreground/80 text-sm">{classItem.duration}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {classItem.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {classItem.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Video className="w-4 h-4" />
                  <span>Live on Google Meet</span>
                </div>
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
                <span>Enroll Now via WhatsApp</span>
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
          <p className="text-sm text-muted-foreground mt-6">
            Contact us on WhatsApp to book your spot in the next batch
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Classes;