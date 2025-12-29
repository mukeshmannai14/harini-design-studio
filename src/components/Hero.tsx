import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-embroidery.jpg";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
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

  const imageVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1.05,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 overflow-hidden"
    >
      {/* Background Image with Elegant Overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      >
        <img
          src={heroImage}
          alt="Beautiful Aari embroidery design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      </motion.div>

      {/* Animated Blob Decorations */}
      <motion.div
        className="absolute top-1/4 left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl hidden lg:block animate-morph-blob"
        animate={{ y: [-10, 10, -10], rotate: [0, 2, -2, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-16 w-32 h-32 bg-primary/10 rounded-full blur-2xl hidden lg:block animate-morph-blob"
        animate={{ y: [10, -10, 10], rotate: [0, -2, 2, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 bg-pattern-lines opacity-40 z-[1]" />

      {/* Decorative Border Elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-32 h-32 border border-accent/20 rounded-full opacity-30 hidden lg:block"
        animate={{ y: [-10, 10, -10], rotate: [0, 2, -2, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-16 w-24 h-24 border border-primary/20 rounded-full opacity-20 hidden lg:block"
        animate={{ y: [10, -10, 10], rotate: [0, -2, 2, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Elegant Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-8"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="w-4 h-4 text-accent" />
            </motion.div>
            <span className="text-accent font-medium text-sm tracking-wide">
              Traditional Art • Modern Learning
            </span>
          </motion.div>

          <motion.h1
            className="text-display-md md:text-display-lg lg:text-display-xl font-display font-bold text-foreground mb-8"
            variants={itemVariants}
          >
            Master the Art of{" "}
            <motion.span
              className="text-gradient-gold italic inline-block"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Aari Embroidery
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl font-light"
            variants={itemVariants}
          >
            Learn the exquisite craft of Aari work from the comfort of your home.
            Join our comprehensive 2-month online course and create stunning bridal designs
            that captivate hearts.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button variant="hero" size="xl" className="group" asChild>
                <a href="#classes">
                  <span>Explore Classes</span>
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
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button variant="gold" size="xl" asChild>
                <a href="#contact">Contact Us</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-border/50"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-3xl md:text-4xl font-display font-bold text-foreground">
                2 Months
              </p>
              <p className="text-sm text-muted-foreground mt-1">Complete Course</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Live
              </p>
              <p className="text-sm text-muted-foreground mt-1">Interactive Sessions</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Elegant Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs text-muted-foreground tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;