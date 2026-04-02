import { useState, useEffect, useCallback, useMemo, useRef } from "react";
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
import naysDreams from "../../assets/images/naysDreams.png";
import MarketX from "../../assets/images/MarketX.png";
import MarketXAdmin from "../../assets/images/MarketXAdmin.png";
import descargarApp from "../../assets/images/descargarApp.png";
import inmobiliaria from "../../assets/images/inmobiliaria.png";
import card1 from "../../assets/images/card1.jpg";
import card2 from "../../assets/images/card2.jpg";
import card3 from "../../assets/images/card3.jpg";
import card4 from "../../assets/images/card4.jpg";
import card5 from "../../assets/images/card5.jpg";
import card6 from "../../assets/images/card6.jpg";
import image from "../../assets/images/portafolio.jpg";

// Animation hook
import { useInView, getAnimationStyles } from "../../hooks/useInView";

import "./style.css";

// Data constants outside component to avoid recreation

const PORT_LINKS = Object.freeze([
  "https://naysdreams-production.up.railway.app/init",
  "https://1el-kike.github.io/myStore/",
  "https://1el-kike.github.io/myStore-Admin/auth",
  "https://1el-kike.github.io/myStore-Admin/",
  "https://1el-kike.github.io/formulario",
  "https://1el-kike.github.io/blog",
]);
const PORT_IMAGES = Object.freeze({
  ALL: [
    {
      foto: naysDreams,
      link: PORT_LINKS[0],
    },
    {
      foto: MarketX,
      link: PORT_LINKS[1],
    },
    {
      foto: MarketXAdmin,
      link: PORT_LINKS[2],
    },
    {
      foto: descargarApp,
      link: PORT_LINKS[3],
    },
    {
      foto: inmobiliaria,
      link: PORT_LINKS[4],
    },
  ],
  SHOPPING: [
    { foto: naysDreams, link: PORT_LINKS[0] },
    { foto: descargarApp, link: PORT_LINKS[3] },
    { foto: MarketX, link: PORT_LINKS[1] },
  ],
  MANAGER: [{ foto: MarketXAdmin, link: PORT_LINKS[2] }],
  AGENCY: [{ foto: inmobiliaria, link: PORT_LINKS[4] }],
});

const BLOG_ENTRIES = Object.freeze([
  [
    card1,
    "Clean Architecture in Web Projects: A Practical Guide", //Arquitectura Limpia en Proyectos Web: Guía Práctica
    "Learn how to apply layers, DDD, and separation of responsibilities to create scalable and maintainable applications", //Aprende cómo aplicar capas, DDD y separación de responsabilidades para crear aplicaciones escalables y mantenibles
  ],
  [
    card2,
    "From Zero to Production: My Experience with a Customized E-commerce", //De Cero a Producción: Mi Experiencia con un E‑commerce Personalizado
    "The technical challenges and design decisions behind an online store with configurable products and a database.", //Los retos técnicos y decisiones de diseño detrás de una tienda online con productos configurables y base de datos.
  ],
  [
    card3,
    "UI/UX for Administrative Dashboards:Keys to Efficient Management", //UI/UX para Dashboards Administrativos
    "Design principles that improve usability in dashboards with a lot of data (inventory, orders, metrics)", //Principios de diseño que mejoran la usabilidad en paneles de control con mucho datos (inventario, órdenes, métricas)
  ],
  [
    card4,
    "My Graduation at CUJAE: What the University Taught Me About Software Engineering", //Mi Graduación en la CUJAE: Lo que la Universidad me Enseñó sobre Ingeniería de Software
    "Reflection on academic training and how I apply that knowledge in real projects.", //Reflexión sobre la formación académica y cómo aplico esos conocimientos en proyectos reales.
  ],
  [
    card5,
    "How to own Your Audience by Creating an Email List",
    "Lorem ipsum dolor sit armet, consetetur sadipscing elit,sed diam nonumy eirmod tempor inviduant lat labore...",
  ],
  [
    card6,
    "5 Mistakes I Avoided When Developing a System with Two Frontends", //5 Errores que Evité al Desarrollar un Sistema con Dos Frontends (Admin + Clientes)
    "Lessons learned from building a dual platform, from data synchronization to security.", //Lecciones aprendidas al construir una plataforma dual, desde la sincronización de datos hasta la seguridad.
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
  const isScrolled = useScrollPosition(900);
  const isManualNavigation = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const handleDownloadCV = () => {
    try {
      const pdfUrl = `${process.env.PUBLIC_URL}pdf_enriquegrass.pdf`;
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
  };

  // Smooth scroll handler con actualización inmediata de activeSection
  const handleSmoothScroll = useCallback((e, targetId) => {
    e.preventDefault();
    // Marcar como navegación manual
    isManualNavigation.current = true;

    // Actualizar activeSection inmediatamente
    setActiveSection(targetId);

    const element = document.getElementById(targetId);
    if (element) {
      // Offset fijo para el header de Firstsession
      const offset = 100;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const scrollTarget = elementPosition - offset;
      window.scrollTo({ top: scrollTarget, behavior: "smooth" });

      // Desactivar flag manual después de que termine el scroll
      setTimeout(() => {
        isManualNavigation.current = false;
      }, 1000);
    }
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0% 0px 0% 0px",
      threshold: 0,
    };

    const handleObserver = (entries) => {
      // Solo actualizar si NO está en navegación manual
      if (isManualNavigation.current) return;

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

      {/* Header after scroll - Glassmorphism con animación fade-in y slide */}
      <div
        className={`fixed py-2 top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        style={{
          background: "rgba(15, 23, 42, 0.85)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <div className="flex justify-around items-center w-full h-full px-4 sm:px-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            <span className="text-white">WEB </span>
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              DEVELOP
            </span>
          </h1>

          <div className="relative">
            <div
              className={
                "w-12 h-12 sm:w-14 sm:h-14 transition-all duration-500"
              }
            >
              <img
                src={image}
                alt="Enrique Grass - Web Developer"
                className="w-full h-full object-cover rounded-xl shadow-2xl border-2 border-slate-700/50"
              />
            </div>
          </div>
        </div>
      </div>
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
                <PortfolioSection imagesSets={PORT_IMAGES} />
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
