import { Sparkles, Award, Heart, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Sparkles,
      title: "Traditional Craft",
      description:
        "Aari work is a centuries-old embroidery technique from India, renowned for its intricate patterns and breathtaking designs.",
    },
    {
      icon: Award,
      title: "Expert Guidance",
      description:
        "Learn from experienced artisans who have mastered this beautiful art form over decades of dedicated practice.",
    },
    {
      icon: Heart,
      title: "Made with Love",
      description:
        "Every stitch tells a story. Create beautiful heirloom pieces that can be treasured for generations to come.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="about"
      className="py-24 md:py-36 bg-gradient-elegant relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Animated Decorative background elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span
            className="inline-block text-accent font-medium tracking-[0.2em] uppercase text-sm mb-6"
            variants={itemVariants}
          >
            About Aari Design
          </motion.span>
          <motion.h2
            className="text-display-sm md:text-display-md font-display font-bold text-foreground mb-8 relative"
            variants={itemVariants}
          >
            The Art of{" "}
            <motion.span
              className="text-primary italic"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Aari Embroidery
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg leading-relaxed font-light"
            variants={itemVariants}
          >
            Aari embroidery, also known as Maggam work, is a traditional Indian
            craft that uses a hooked needle to create intricate chain stitch
            patterns. From bridal lehengas to designer sarees, Aari work adds
            timeless elegance to any fabric.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              whileHover={{ y: -12, scale: 1.02 }}
            >
              <div className="bg-card p-10 rounded-2xl border-gradient h-full relative overflow-hidden group">
                {/* Decorative corner with animation */}
                <motion.div
                  className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-full"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
                />

                <motion.div
                  className="w-16 h-16 bg-gradient-burgundy rounded-2xl flex items-center justify-center mb-8 shadow-glow"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </motion.div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-light">
                  {feature.description}
                </p>
                <motion.div
                  className="mt-6 flex items-center text-accent font-medium"
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ x: 5 }}
                >
                  <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more
                  </span>
                  <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;