import React, { useState } from "react";
import { useInView, getAnimationStyles } from "../../../hooks/useInView";

// Individual animated blog card
const AnimatedBlogCard = ({ item, index, width }) => {
  const [ref, isInView] = useInView({
    threshold: 0.1,
    delay: index * 100,
    triggerOnce: true,
  });
  const [isHovered, setIsHovered] = useState(false);

  const animationStyles = getAnimationStyles("fadeInUp", isInView, index * 100);

  return (
    <div
      ref={ref}
      style={{
        paddingRight: width > 350 ? 20 : 0,
        ...animationStyles,
      }}
      className="lg:w-1/3 md:w-1/2 sm:w-full pb-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`bg-gray-900 rounded-xl overflow-hidden transition-all duration-300 ${
          isHovered
            ? "transform -translate-y-2 shadow-xl shadow-brand-primary/10"
            : ""
        }`}
      >
        {/* Image with zoom effect */}
        <div className="relative overflow-hidden">
          <img
            src={item[0]}
            className={`w-full h-48 object-cover transition-transform duration-500 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
            alt={item[1]}
          />
          {/* Gradient overlay on hover */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        {/* Content */}
        <div className="border-t-4 border-brand-primary p-4">
          <h5 className="text-primary font-semibold text-lg">{item[1]}</h5>
        </div>
        <div className="p-3">
          <small className="text-gray-400">{item[2]}</small>
        </div>
      </div>
    </div>
  );
};

export const CardGrid = ({ entries = [], width }) => (
  <>
    {entries.map((item, i) => (
      <AnimatedBlogCard key={i} item={item} index={i} width={width} />
    ))}
  </>
);

export default CardGrid;
