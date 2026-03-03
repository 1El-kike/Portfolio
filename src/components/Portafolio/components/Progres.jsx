import React, { useState } from "react";
import { useInView, getAnimationStyles } from "../../../hooks/useInView";

const LANGUAGES = [
  ["HTML", 65, "43f94a"],
  ["CSS", 70, "2ccde9"],
  ["JAVASCRIPT", 85, "fb297b"],
  ["REACT", 80, "ffe047"],
  ["NODE JS", 60, "fff"],
  ["MYSQL", 78, "ab24ec"],
  ["TYPESCRIPT", 80, "f16428"],
  ["REACT Native", 55, "f82c14"],
];

// Individual animated skill card
const AnimatedSkillCard = ({ name, percent, color, index }) => {
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
      className="md:w-1/2 lg:w-1/4 ml-0 mt-3 mb-3 flex flex-wrap"
      style={animationStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`progress-circle relative transition-transform duration-300 cursor-pointer ${
          isHovered ? "scale-105" : ""
        }`}
        style={{
          "--clr": `#${color}`,
          "--i": `${percent}`,
          transform: isHovered ? "scale(1.05)" : "scale(1)",
        }}
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label={`${name} skill level: ${percent}%`}
      >
        {/* Percentage */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl sm:text-3xl font-bold z-10 transition-all duration-300 ${
            isHovered ? "text-white scale-110" : "text-white"
          }`}
        >
          {percent}%
        </div>

        {/* Skill name */}
        <div
          className="absolute top-[70%] left-1/2 -translate-x-1/2 z-10 font-medium uppercase text-xs sm:text-sm whitespace-nowrap transition-colors duration-300"
          style={{ color: `#${color}` }}
        >
          {name}
        </div>
      </div>
    </div>
  );
};

export const Progres = () => {
  return (
    <>
      {LANGUAGES.map(([name, percent, color], idx) => (
        <AnimatedSkillCard
          key={idx}
          name={name}
          percent={percent}
          color={color}
          index={idx}
        />
      ))}
    </>
  );
};

export default Progres;
