import React, { useState } from "react";
import { useInView, getAnimationStyles } from "../../../hooks/useInView";

const LANGUAGES = [
  ["HTML", 65, "43f94a"],
  ["CSS", 70, "2ccde9"],
  ["JAVASCRIPT", 85, "fb297b"],
  ["Git", 95, "b22704"],
  ["REACT", 90, "ffe047"],
  ["REACT Native", 55, "f82c14"],
  ["Angular", 80, "f82c14"],
  ["TYPESCRIPT", 80, "f16428"],
  ["C#", 55, "fff"],
  [".NET", 65, "fff"],
  ["NODE JS", 80, "fff"],
  ["Next JS", 70, "fff"],
  ["MYSQL", 78, "ab24ec"],
  ["PostgreSQL", 75, "ab24ec"],
  ["MongoDb", 60, "ab24ec"],
  ["Railway", 85, "f0ff"],
];

const LOGOS = {
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  JAVASCRIPT:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  REACT:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "REACT Native":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg",
  Angular:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  TYPESCRIPT:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  ".NET":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original-wordmark.svg",
  "NODE JS":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Next JS":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  MYSQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  PostgreSQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  MongoDb:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  Railway:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/railway/railway-original.svg",
};

// Individual animated skill card
const AnimatedSkillCard = ({ name, percent, color, index }) => {
  const [ref, isInView] = useInView({
    threshold: 0.1,
    delay: index * 100,
    triggerOnce: true,
  });
  const [isHovered, setIsHovered] = useState(false);

  const animationStyles = getAnimationStyles("scaleIn", isInView, index * 100);
  const logoUrl = LOGOS[name] || "";

  return (
    <div
      ref={ref}
      className=" mt-3 mb-3"
      style={animationStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative scale-90 w-40 h-20 sm:w-52 sm:h-52 md:w-96 md:h-56 rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 cursor-pointer ${
          isHovered ? "scale-105 shadow-yellow-500/30" : "shadow-slate-800/50"
        } bg-gradient-to-br from-slate-800/90 via-slate-900/80 to-slate-700/90`}
        style={{
          backgroundImage: logoUrl ? `url(${logoUrl})` : "none",
          backgroundSize: "contain",
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/40" />

        {/* Progress circle */}
        <div
          className={`progress-circle h-full md:h-[80%] w-[50%] md:w-[47%] absolute top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ${
            isHovered ? "scale-110" : ""
          }`}
          style={{
            "--clr": `#${color}`,
            "--i": `${percent}`,
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
              isHovered ? "text-yellow-400 scale-110" : "text-white"
            }`}
          >
            {percent}%
          </div>

          {/* Skill name */}
          <div className="absolute top-[75%] left-0 font-bold text-yellow-500  md:left-1/2 -translate-x-1/2 z-10 uppercase text-xs sm:text-sm whitespace-nowrap transition-colors duration-300 md:text-white">
            {name}
          </div>
        </div>

        {/* Hover effect overlay */}
        <div
          className={`absolute inset-0 bg-yellow-500/10 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
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
