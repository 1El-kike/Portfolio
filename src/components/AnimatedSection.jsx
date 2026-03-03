import { useState } from "react";
import { useInView, getAnimationStyles } from "../../hooks/useInView";

/**
 * AnimatedSection - A wrapper component that adds scroll-triggered animations
 *
 * @param {ReactNode} children - Content to animate
 * @param {string} animation - Animation variant: 'fadeIn', 'fadeInUp', 'fadeInDown', 'fadeInLeft', 'fadeInRight', 'scaleIn', 'zoomIn', 'flipIn'
 * @param {number} delay - Delay in milliseconds before animation starts
 * @param {number} threshold - 0-1, visibility threshold to trigger animation
 * @param {string} rootMargin - Margin around viewport
 * @param {boolean} triggerOnce - Only trigger animation once
 * @param {string} className - Additional CSS classes
 * @param {string} id - Element ID
 */
export const AnimatedSection = ({
  children,
  animation = "fadeInUp",
  delay = 0,
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
  triggerOnce = true,
  className = "",
  id,
}) => {
  const [ref, isInView] = useInView({
    threshold,
    rootMargin,
    triggerOnce,
  });

  const animationStyles = getAnimationStyles(animation, isInView, delay);

  return (
    <div ref={ref} id={id} className={className} style={animationStyles}>
      {children}
    </div>
  );
};

/**
 * AnimatedCard - A card component with built-in hover and scroll animations
 */
export const AnimatedCard = ({
  children,
  animation = "fadeInUp",
  delay = 0,
  className = "",
}) => {
  const [ref, isInView] = useInView({ threshold: 0.1, delay });
  const [isHovered, setIsHovered] = useState(false);

  const animationStyles = getAnimationStyles(animation, isInView, delay);

  return (
    <div
      ref={ref}
      className={`transition-all duration-300 ${className}`}
      style={{
        ...animationStyles,
        transform: isHovered
          ? "translateY(-8px) scale(1.02)"
          : animationStyles.transform,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
};

/**
 * AnimatedImage - Image component with zoom effect on scroll and hover
 */
export const AnimatedImage = ({
  src,
  alt,
  animation = "zoomIn",
  delay = 0,
  className = "",
}) => {
  const [ref, isInView] = useInView({ threshold: 0.1, delay });
  const [isHovered, setIsHovered] = useState(false);

  const animationStyles = getAnimationStyles(animation, isInView, delay);

  return (
    <div
      ref={ref}
      className={`overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500"
        style={{
          ...animationStyles,
          transform: isHovered
            ? `${animationStyles.transform || ""} scale(1.1)`.trim()
            : animationStyles.transform,
        }}
      />
    </div>
  );
};

/**
 * AnimatedTitle - Title with text reveal animation
 */
export const AnimatedTitle = ({
  children,
  animation = "fadeInDown",
  delay = 0,
  className = "",
}) => {
  const [ref, isInView] = useInView({ threshold: 0.1, delay });
  const animationStyles = getAnimationStyles(animation, isInView, delay);

  return (
    <div ref={ref} className={className} style={animationStyles}>
      {children}
    </div>
  );
};

export default AnimatedSection;
