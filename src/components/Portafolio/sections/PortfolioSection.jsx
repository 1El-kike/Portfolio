import { useState } from "react";
import { PortfolioGallery } from "../components/PortfolioGallery";
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

export const PortfolioSection = ({ imagesSets }) => {
  const [activeSet, setActiveSet] = useState("ALL");
  const currentImages = imagesSets[activeSet] || [];

  // Animation for tabs
  const [tabRef, isTabInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const tabAnimationStyles = getAnimationStyles("fadeInDown", isTabInView, 0);

  return (
    <div className="w-full mb-5">
      {/* Portfolio Tabs with animation */}
      <AnimatedElement animation="fadeInDown" delay={0} className="w-full">
        <nav className="w-full flex justify-center items-center mb-6">
          <ul className="nav justify-center gap-2 sm:gap-5 flex flex-wrap">
            {Object.keys(imagesSets).map((name, index) => {
              const isActive = activeSet === name;
              return (
                <li
                  key={name}
                  ref={tabRef}
                  className={`nav-item cursor-pointer px-3 py-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-yellow-400 text-black font-bold shadow-lg shadow-brand-yellow/30 scale-110"
                      : "text-white/70 hover:text-brand-yellow hover:bg-white/10"
                  }`}
                  onClick={() => setActiveSet(name)}
                  style={{
                    ...(index > 0 ? tabAnimationStyles : {}),
                    transitionDelay: `${index * 50}ms`,
                  }}
                >
                  {name.toUpperCase()}
                </li>
              );
            })}
          </ul>
        </nav>
      </AnimatedElement>

      {/* Gallery with staggered animation */}
      <AnimatedElement animation="fadeInUp" delay={200} className="w-full">
        <div className="w-full gap-3 mt-5 mb-5 flex flex-wrap justify-center items-center">
          <PortfolioGallery element={currentImages} />
        </div>
      </AnimatedElement>
    </div>
  );
};

export default PortfolioSection;
