import { useState, useEffect, useCallback, useMemo } from "react";
import { Title } from "./components/Title";
import { Section } from "./components/Section";
// sections
import { IntroSection } from "./sections/IntroSection";
import { PersonalInfoSection } from "./sections/PersonalInfoSection";
import { SkillsSection } from "./sections/SkillsSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { PortfolioSection } from "./sections/PortfolioSection";
import { ContactSection } from "./sections/ContactSection";
import { BlogSection } from "./sections/BlogSection";

// Import images directly
import imagex from "../../assets/images/image1.png";
import image6 from "../../assets/images/image2.png";
import image5 from "../../assets/images/image5.png";
import image4 from "../../assets/images/image4.png";
import image3 from "../../assets/images/image3.png";
import image2 from "../../assets/images/mejora-tu-presencia-online-768x432.jpg";

// Animation hook
import { useInView, getAnimationStyles } from "../../hooks/useInView";

import "./style.css";

// Data constants outside component to avoid recreation
const PORT_IMAGES = Object.freeze({
  set1: [imagex, image6, image5, image4, image3, image2],
  set2: [image3, image4, image5],
  set3: [image4],
  set4: [image6],
  set5: [imagex],
});

const PORT_LINKS = Object.freeze([
  "//link1/one",
  "//link2/two",
  "https://1el-kike.github.io/registro",
  "//link4/four",
  "https://1el-kike.github.io/formulario",
  "//link6/six",
]);

const BLOG_ENTRIES = Object.freeze([
  [
    imagex,
    "How to own Your Audience by Creating an Email List",
    "Lorem ipsum dolor sit armet, consetetur sadipscing elit,sed diam nonumy eirmod tempor inviduant lat labore...",
  ],
  [
    image6,
    "How to own Your Audience by Creating an Email List",
    "Lorem ipsum dolor sit armet, consetetur sadipscing elit,sed diam nonumy eirmod tempor inviduant lat labore...",
  ],
  [
    image3,
    "How to own Your Audience by Creating an Email List",
    "Lorem ipsum dolor sit armet, consetetur sadipscing elit,sed diam nonumy eirmod tempor inviduant lat labore...",
  ],
  [
    image5,
    "How to own Your Audience by Creating an Email List",
    "Lorem ipsum dolor sit armet, consetetur sadipscing elit,sed diam nonumy eirmod tempor inviduant lat labore...",
  ],
  [
    imagex,
    "How to own Your Audience by Creating an Email List",
    "Lorem ipsum dolor sit armet, consetetur sadipscing elit,sed diam nonumy eirmod tempor inviduant lat labore...",
  ],
  [
    image2,
    "How to own Your Audience by Creating an Email List",
    "Lorem ipsum dolor sit armet, consetetur sadipscing elit,sed diam nonumy eirmod tempor inviduant lat labore...",
  ],
]);

// Navigation items data
const NAV_ITEMS = Object.freeze([
  { id: "lista1", icon: "fa-home", label: "Home" },
  { id: "lista2", icon: "fa-user", label: "About" },
  { id: "lista3", icon: "fa-address-card", label: "Portfolio" },
  { id: "lista4", icon: "fa-at", label: "Contact" },
  { id: "lista5", icon: "fa-calendar-times", label: "Blog" },
]);

// Custom hook for scroll detection
const useScrollPosition = (threshold = 100) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isScrolled;
};

// Smooth scroll handler
const handleSmoothScroll = (e, targetId) => {
  e.preventDefault();
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

// Animated wrapper component
const AnimatedSection = ({
  children,
  animation = "fadeInUp",
  delay = 0,
  className = "",
  id,
}) => {
  const [ref, isInView] = useInView({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
    triggerOnce: true,
    delay,
  });

  const animationStyles = getAnimationStyles(animation, isInView, delay);

  return (
    <div ref={ref} id={id} className={className} style={animationStyles}>
      {children}
    </div>
  );
};

export const Firstsession = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("lista1");
  const isScrolled = useScrollPosition(300);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const handleDownloadCV = useCallback(() => {
    try {
      const pdfUrl = "/pdf_enriquegrass.pdf";
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "CV_Enrique_Grass.pdf";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading CV:", error);
    }
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -80% 0px",
      threshold: 0,
    };

    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, observerOptions);
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navItems = useMemo(
    () =>
      NAV_ITEMS.map((item) => ({
        ...item,
        isActive: activeSection === item.id,
      })),
    [activeSection],
  );

  return (
    <main className="relative min-h-screen bg-slate-900" role="main">
      {/* Background with overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 image-fondo" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900/90" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-0 lg:px-8">
          <div
            className="flex flex-wrap"
            data-bs-target="navbar"
            data-bs-smooth-croll="true"
          >
            {/* Hero Section - With staggered animation */}
            <Section id="lista1">
              <AnimatedSection
                animation="fadeInUp"
                delay={0}
                className={`transition-all duration-1000 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <IntroSection />
              </AnimatedSection>
            </Section>

            {/* About Section Title */}
            <AnimatedSection
              className="w-full"
              animation="fadeInDown"
              delay={100}
            >
              <Title
                background="RESUME"
                titulo="ABOUT"
                subtitulo="ME"
                link="lista2"
              />
            </AnimatedSection>

            {/* About Section Content */}
            <Section id="lista2">
              <AnimatedSection animation="fadeInUp" delay={200}>
                <PersonalInfoSection onDownload={handleDownloadCV} />
              </AnimatedSection>
            </Section>

            {/* Skills Section */}
            <AnimatedSection animation="fadeInUp" delay={100}>
              <Section>
                <SkillsSection />
              </Section>
            </AnimatedSection>

            {/* Experience Section */}
            <AnimatedSection animation="fadeInUp" delay={150}>
              <Section>
                <ExperienceSection />
              </Section>
            </AnimatedSection>

            {/* Portfolio Section Title */}

            <AnimatedSection
              animation="fadeInDown"
              className="w-full"
              delay={100}
            >
              <Title
                background="WORKS"
                titulo="MY"
                subtitulo="PORTFOLIO"
                link="lista3"
              />
            </AnimatedSection>
            {/* Portfolio Section */}
            <Section id="lista3">
              <AnimatedSection animation="fadeInUp" delay={200}>
                <PortfolioSection imagesSets={PORT_IMAGES} links={PORT_LINKS} />
              </AnimatedSection>
            </Section>

            {/* Contact Section Title */}
            <AnimatedSection
              animation="fadeInDown"
              className="w-full"
              delay={100}
            >
              <Title
                background="CONTACT"
                titulo="GET IN"
                subtitulo="TOUCH"
                link="lista4"
              />
            </AnimatedSection>

            {/* Contact Section */}
            <Section id="lista4">
              <AnimatedSection animation="fadeInUp" delay={200}>
                <ContactSection />
              </AnimatedSection>
            </Section>

            {/* Blog Section Title */}
            <AnimatedSection
              className="w-full"
              animation="fadeInDown"
              delay={100}
            >
              <Title
                background="POSTS"
                titulo="MY"
                subtitulo="BLOG"
                link="lista5"
              />
            </AnimatedSection>

            {/* Blog Section */}
            <Section id="lista5">
              <AnimatedSection animation="fadeInUp" delay={200}>
                <BlogSection entries={BLOG_ENTRIES} />
              </AnimatedSection>
            </Section>
          </div>
        </div>
      </div>

      {/* Floating Navigation */}
      <nav
        className={`fixed z-[1000] transition-all duration-500 ease-in-out ${
          isScrolled
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-4 pointer-events-none"
        } top-1/2 -translate-y-1/2 right-4 sm:right-8 md:right-12`}
        aria-label="Quick navigation"
      >
        <ul className="flex flex-col gap-3" role="list">
          {navItems.map((item, index) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleSmoothScroll(e, item.id)}
                className={`group relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                  item.isActive
                    ? "bg-yellow-500 text-black shadow-lg shadow-yellow-500/30 scale-110"
                    : "bg-slate-800/80 text-white/70 hover:bg-yellow-600 hover:text-black hover:scale-105"
                }`}
                aria-label={item.label}
                title={item.label}
              >
                <i className={`fas ${item.icon} text-sm`} aria-hidden="true" />
                <span
                  className={`absolute right-full mr-3 px-3 py-1 bg-slate-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none ${
                    index === 0 ? "right-auto left-full ml-3" : ""
                  }`}
                >
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer gradient decoration */}
      <div
        className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none z-0"
        aria-hidden="true"
      />
    </main>
  );
};

export default Firstsession;
