import React from "react";
import { Experience } from "../components/Experience";
import { useInView, getAnimationStyles } from "../../../hooks/useInView";

const AnimatedElement = ({
  children,
  animation = "fadeInUp",
  delay = 0,
  className = "",
}) => {
  const [ref, isInView] = useInView({
    threshold: 0.1,
    delay,
    triggerOnce: true,
  });
  const animationStyles = getAnimationStyles(animation, isInView, delay);

  return (
    <div ref={ref} className={className} style={animationStyles}>
      {children}
    </div>
  );
};

export const ExperienceSection = () => (
  <div className="w-full ">
    {/* Section Title */}
    <AnimatedElement
      animation="fadeInDown"
      delay={0}
      className="w-full flex  justify-center mb-8"
    >
      <h3 className="text-2xl sm:text-3xl font-bold text-white relative">
        <span className="relative z-10">EXPERIENCE & EDUCATION</span>
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-yellow-500 rounded-full" />
      </h3>
    </AnimatedElement>

    {/* Experience Timeline with staggered animation */}
    <AnimatedElement animation="fadeInUp" delay={100} className="w-full">
      <div className="flex flex-wrap justify-center gap-4">
        <Experience />
      </div>
    </AnimatedElement>
  </div>
);

export default ExperienceSection;
