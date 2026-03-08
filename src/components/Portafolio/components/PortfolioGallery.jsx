import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useInView, getAnimationStyles } from "../../../hooks/useInView";

// Individual animated image card
const AnimatedImageCard = ({ src, link, index }) => {
  const [ref, isInView] = useInView({
    threshold: 0.1,
    delay: index * 100,
    triggerOnce: true,
  });
  const [isHovered, setIsHovered] = useState(false);

  const animationStyles = getAnimationStyles("scaleIn", isInView, index * 100);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden bg-gray-900 flex rounded-xl justify-center items-center transition-all duration-300"
      style={{
        ...animationStyles,
        width: "100%",
        maxWidth: "400px",
        height: "280px",
        transform: isHovered ? "scale(1.05)" : animationStyles.transform,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={link} className="w-full h-full block">
        <div
          className="relative w-full h-full overflow-hidden group"
          style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
        >
          <img
            src={src}
            alt={`Portfolio project ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-500"
          />

          {/* Overlay on hover */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end justify-center transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="p-4 text-center w-full">
              <p className="text-yellow-500 font-semibold text-sm sm:text-base truncate">
                {link.replace(/(^\w+:|^)\/\//, "").split("/")[0]}
              </p>
              <p className="text-white/80 text-xs mt-1">
                Click to view project
              </p>
            </div>
          </div>

          {/* Corner accents */}
          <div
            className={`absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-yellow-500 transition-all duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
          />
          <div
            className={`absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-yellow-500 transition-all duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
          />
          <div
            className={`absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-yellow-500 transition-all duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
          />
          <div
            className={`absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-yellow-500 transition-all duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
          />
        </div>
      </Link>
    </div>
  );
};

export const PortfolioGallery = ({ element }) => (
  <>
    {element.map((ele, i) => {
      console.log(ele.foto);
      return (
        <AnimatedImageCard key={i} src={ele.foto} link={ele.link} index={i} />
      );
    })}
  </>
);

export default PortfolioGallery;
