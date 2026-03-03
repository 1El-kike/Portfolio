import { useState, useEffect, useRef } from "react";

/**
 * Custom hook to detect when an element is in the viewport
 * @param {Object} options - Intersection Observer options
 * @param {number} options.threshold - 0 to 1, percentage of element visibility to trigger
 * @param {string} options.rootMargin - Margin around the root
 * @param {boolean} options.triggerOnce - Only trigger animation once
 * @returns {Array} [ref, isInView, hasBeenInView]
 */
export const useInView = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -50px 0px",
    triggerOnce = true,
  } = options;

  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Don't reobserve if triggerOnce and already seen
    if (triggerOnce && hasBeenInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        setIsInView(inView);

        if (inView && triggerOnce) {
          setHasBeenInView(true);
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin,
      },
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, hasBeenInView]);

  return [ref, isInView, hasBeenInView];
};

/**
 * Animation variants for different effects
 */
export const animationVariants = {
  // Fade In
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },

  // Fade In Up (slide up)
  fadeInUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },

  // Fade In Down (slide down)
  fadeInDown: {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  },

  // Fade In Left (slide from left)
  fadeInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },

  // Fade In Right (slide from right)
  fadeInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },

  // Scale In
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },

  // Zoom In
  zoomIn: {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  },

  // Flip In
  flipIn: {
    hidden: { opacity: 0, rotateX: -90 },
    visible: { opacity: 1, rotateX: 0 },
  },

  // Parallax effect (for background elements)
  parallax: {
    hidden: { y: 0 },
    visible: { y: -30 },
  },
};

/**
 * Get animation styles based on variant and inView state
 * @param {string} variant - Animation variant name
 * @param {boolean} isInView - Whether element is in view
 * @param {Object} customDelay - Custom delay in ms
 * @returns {Object} CSS styles for animation
 */
export const getAnimationStyles = (variant, isInView, customDelay = 0) => {
  const anim = animationVariants[variant];
  if (!anim) return {};

  const duration = 0.6; // seconds
  const delay = customDelay / 1000;
  const ease = "cubic-bezier(0.4, 0, 0.2, 1)";

  const styles = {
    transition: `all ${duration}s ${ease} ${delay}s`,
    ...(isInView ? anim.visible : anim.hidden),
  };

  return styles;
};

export default useInView;
