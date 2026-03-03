import React from "react";
import { CardGrid } from "../components/CardGrid";
import { useWindowWidth } from "../../../hooks/useWindowWidth";
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

export const BlogSection = ({ entries }) => {
  const width = useWindowWidth();

  return (
    <div className="w-full">
      <AnimatedElement animation="fadeInUp" delay={0} className="w-full">
        <div className="d-flex justify-content-between flex-wrap">
          <CardGrid entries={entries} width={width} />
        </div>
      </AnimatedElement>
    </div>
  );
};

export default BlogSection;
