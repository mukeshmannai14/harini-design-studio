import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowLeftRight } from "lucide-react";

import beforePlainBlouse from "@/assets/before-plain-blouse.jpg";
import afterEmbroideredBlouse from "@/assets/after-embroidered-blouse.jpg";
import beforePlainVelvet from "@/assets/before-plain-velvet.jpg";
import afterMaggamVelvet from "@/assets/after-maggam-velvet.jpg";
import beforePlainGreen from "@/assets/before-plain-green.jpg";
import afterZardosiGreen from "@/assets/after-zardosi-green.jpg";

const transformations = [
  {
    id: 1,
    title: "Aari Embroidery",
    description: "Plain cream silk transformed with intricate floral Aari work",
    before: beforePlainBlouse,
    after: afterEmbroideredBlouse,
  },
  {
    id: 2,
    title: "Maggam Work",
    description: "Velvet fabric embellished with traditional gold Maggam embroidery",
    before: beforePlainVelvet,
    after: afterMaggamVelvet,
  },
  {
    id: 3,
    title: "Zardosi Design",
    description: "Green silk enhanced with elegant Zardosi gold threadwork",
    before: beforePlainGreen,
    after: afterZardosiGreen,
  },
];

const BeforeAfterSlider = ({ before, after, title }: { before: string; after: string; title: string }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square rounded-2xl overflow-hidden cursor-ew-resize shadow-elegant group"
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Background) */}
      <img
        src={after}
        alt={`${title} - After`}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={before}
          alt={`${title} - Before`}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-primary-foreground shadow-lg z-10"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
          <ArrowLeftRight className="w-5 h-5 text-primary-foreground" />
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-foreground/80 text-background px-3 py-1 rounded-full text-sm font-medium">
        Before
      </div>
      <div className="absolute top-4 right-4 bg-accent/90 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
        After
      </div>

      {/* Hint overlay */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-foreground/70 text-background px-4 py-2 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity">
        Drag to compare
      </div>
    </div>
  );
};

const BeforeAfter = () => {
  return (
    <section id="before-after" className="py-24 bg-gradient-elegant relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-pattern opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-accent mb-4">
            <Sparkles className="w-5 h-5" />
            <span className="font-medium tracking-wide uppercase text-sm">Transformations</span>
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Before & After
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Witness the magic of traditional embroidery as plain fabrics transform into stunning works of art
          </p>
        </motion.div>

        {/* Transformations Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {transformations.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <BeforeAfterSlider
                before={item.before}
                after={item.after}
                title={item.title}
              />
              <div className="mt-4 text-center">
                <h3 className="font-display text-xl text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            Ready to transform your fabric into a masterpiece?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors shadow-elegant"
          >
            <Sparkles className="w-4 h-4" />
            Get Custom Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfter;
