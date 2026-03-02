import image2 from "../../assets/images/mejora-tu-presencia-online-768x432.jpg";
import image3 from "../../assets/images/image3.png";
import image4 from "../../assets/images/image4.png";
import image5 from "../../assets/images/image5.png";
import image6 from "../../assets/images/image2.png";
import imagex from "../../assets/images/image1.png";
import "./style.css";

// custom hooks and subcomponents
//import { useWindowWidth } from "../../hooks/useWindowWidth";
import { useElementVisibility } from "../../hooks/useElementVisibility";
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

// constant data moved outside component to avoid recreation
const PORT_IMAGES = {
  set1: [imagex, image6, image5, image4, image3, image2],
  set2: [image3, image4, image5],
  set3: [image4],
  set4: [image6],
  set5: [imagex],
};

const PORT_LINKS = [
  "//link1/one",
  "//link2/two",
  "https://1el-kike.github.io/registro",
  "//link4/four",
  "https://1el-kike.github.io/formulario",
  "//link6/six",
];

const BLOG_ENTRIES = [
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
];

export const Firstsession = () => {
  // const ancho = useWindowWidth();
  const scrolled = useElementVisibility("miscroll");

  const handleDownloadCV = () => {
    const pdfUrl = "/pdf_enriquegrass.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "pdf_enriquegrass.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="">
      <div style={{ top: "-100px" }} className="m-0 relative p-0 w-full">
        <div className="image-fondo"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div
          className="flex flex-wrap"
          data-bs-target="navbar"
          data-bs-smooth-croll="true"
          tabIndex="0"
        >
          <Section id={"lista1"}>
            <IntroSection />
          </Section>

          <Title
            background={"RESUME"}
            titulo={"ABOUT"}
            subtitulo={"ME"}
            link={"lista2"}
          />

          <Section>
            <PersonalInfoSection onDownload={handleDownloadCV} />
          </Section>

          <Section>
            <SkillsSection />
          </Section>

          <Section>
            <ExperienceSection />
          </Section>

          <Title
            background={"WORKS"}
            titulo={"MY"}
            subtitulo={"PORTFOLIO"}
            link={"lista3"}
          />

          <Section>
            <PortfolioSection imagesSets={PORT_IMAGES} links={PORT_LINKS} />
          </Section>

          <Title
            background={"CONTACT"}
            titulo={"GET IN"}
            subtitulo={"TOUCH"}
            link={"lista4"}
          />

          <Section>
            <ContactSection />
          </Section>

          <Title
            background={"POOTS"}
            titulo={"MY"}
            subtitulo={"BLOG"}
            link={"lista5"}
          />

          <Section>
            <BlogSection entries={BLOG_ENTRIES} />
          </Section>

          <div className="md:w-1/6 sm:w-full">
            <nav
              className={`fixed z-[1000] top-5 right-28 h-screen bottom-[800px] overflow-y-auto ${scrolled ? "" : "hidden"}`}
              id="miscroll"
            >
              <ul className="nav nav-pills flex flex-col justify-center items-center gap-2 h-full">
                <li>
                  <a
                    href="#lista1"
                    className={`nav-link !bg-yellow-600 text-black hover:bg-gray-600 rounded-full p-3 text-white`}
                  >
                    <i className="fas fa-home "></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#lista2"
                    className={`nav-link !bg-yellow-600 text-black hover:bg-gray-600 rounded-full p-3 fas fa-user text-white`}
                  >
                    <span />
                  </a>
                </li>
                <li>
                  <a
                    href="#lista3"
                    className={`nav-link !bg-yellow-600 text-black hover:bg-gray-600 rounded-full p-3 fas fa-address-card text-white`}
                  >
                    <span />
                  </a>
                </li>
                <li>
                  <a
                    href="#lista4"
                    className={`nav-link !bg-yellow-600 text-black hover:bg-gray-600 rounded-full p-3 fas fa-at text-white`}
                  >
                    <span />
                  </a>
                </li>
                <li>
                  <a
                    href="#lista5"
                    className={`nav-link !bg-yellow-600 text-black hover:bg-gray-600 rounded-full p-3 fas item fa-calendar-times text-white`}
                  >
                    <span />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="fons">
        <div className="imgfondo"></div>
      </div>
    </div>
  );
};
