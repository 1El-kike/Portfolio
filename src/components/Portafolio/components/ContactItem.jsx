import React, { useState } from "react";
import { useInView, getAnimationStyles } from "../../../hooks/useInView";

export const ContactItem = ({ titulo, ico, adress }) => {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [isHovered, setIsHovered] = useState(false);

  const animationStyles = getAnimationStyles("fadeInLeft", isInView, 0);

  return (
    <div
      ref={ref}
      className={`flex gap-4 p-3 rounded-lg transition-all duration-300 cursor-pointer ${
        isHovered ? "bg-white/5 -translate-x-2" : ""
      }`}
      style={animationStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon */}
      <span
        className={`flex-shrink-0 transition-transform duration-300 ${
          isHovered ? "scale-110 text-brand-primary/70" : "text-brand-primary"
        }`}
      >
        <i className={`fas ${ico} text-2xl sm:text-3xl md:text-4xl`} />
      </span>

      {/* Content */}
      <div className="flex flex-col justify-start">
        <h5 className="text-primary font-semibold text-sm sm:text-base">
          {titulo}
        </h5>
        <p className="text-secondary text-xs sm:text-sm font-medium">
          {adress}
        </p>
      </div>
    </div>
  );
};

export default ContactItem;
