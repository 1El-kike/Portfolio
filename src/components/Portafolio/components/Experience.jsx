const EXP_DATA = {
  exp1: [
    [
      "WEB DEVELOPER ",
      "FULL STACK",
      "Constant evolution, from static pages to modern full-stack solutions.",
      "2022 - PRESENTE",
    ],
    [
      "UI/UX DESIGNER ",
      "",
      "From information architecture to interaction design. I develop solutions that connect emotionally with people and solve real problems.",
      "2020 - PRESENTE",
    ],
    [
      "SOFTWARE ARCHITECT ",
      "",
      "I went from writing features to designing complete systems. Today I plan the software organization, ensuring quality, security, and long-term maintainability.",
      "2018 - PRESENTE",
    ],
    [
      "ENGINEERING ",
      "CUJAE UNIVERSITY",
      "Graduated in Computer Engineering. Comprehensive training that combines computational theory with practice in technological solutions.",
      "2022",
    ],
  ],
  exp2: [
    [
      "E-COMMERCE",
      "MARKET X",
      "I designed and developed a dual web system: an administrative panel with a dashboard, inventory and order management, and a customer frontend for purchasing products, all with clean architecture and a centralized database.",
      "2023 - 2024",
    ],
    [
      "E‑COMMERCE",
      "Nay's Dreams",
      "I implemented a complete web platform for the sale of customized items, with a modular backend (clean architecture), dynamic frontend, and an optimized database that supports the entire catalog and orders.",
      "2025",
    ],
    [
      "REAL ESTATE AGENCY",
      "CASACuba",
      "I developed a comprehensive real estate platform with management of sales, rentals, and leases, plus integrated immersive virtual tours. All on a scalable architecture and optimized database.",
      "2025 - 2026",
    ],
  ],
};

const ItemList = ({ data }) => (
  <div className="grid auto-rows-max gap-3">
    {data.map((ele, idx) => (
      <div key={idx} className="grid grid-cols-[auto_1fr] gap-4 items-start">
        {/* Icon Column */}
        <div className="flex flex-col h-full items-center">
          <i className="fas fa-briefcase rounded-full bg-yellow-500 p-3" />
          <span class="border-l-2 border-gray-700 flex ml-auto mr-auto h-full"></span>
        </div>

        {/* Content Column */}
        <div className="flex flex-col justify-start pt-1">
          <div className="flex mb-2">
            <p
              className="px-3 py-1 rounded text-sm"
              style={{ background: "rgb(19, 44, 57)" }}
            >
              {ele[3]}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h3 className="font-semibold text-white">{ele[0]}</h3>
            <span className="h-1 w-12 border-b-4 border-gray-600 rounded" />
            <h6 className="text-gray-300 text-sm">{ele[1]}</h6>
          </div>
          <p className="text-gray-400 text-sm">{ele[2]}</p>
        </div>
      </div>
    ))}
  </div>
);

export const Experience = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div>
      <ItemList data={EXP_DATA.exp1} />
    </div>
    <div>
      <ItemList data={EXP_DATA.exp2} />
    </div>
  </div>
);
