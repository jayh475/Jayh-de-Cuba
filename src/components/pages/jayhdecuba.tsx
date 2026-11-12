import CustomButton from "~/components/common/customButton";
import { useEffect } from "react";
import Section from "../common/section";
import HeroSection from "./portfolio/HeroSection";
import XseedsRootsProject from "./portfolio/XseedsRootsProject";

const experience = [
  {
    period: "Vicrea · nov. 2025 – okt. 2026",
    role: "Solution Consultant",
    description:
      "Ik begeleidde klanten bij implementaties, upgrades en trainingen en maakte technische keuzes begrijpelijk voor gebruikers.",
  },
  {
    period: "Vicrea · sep. 2023 – nov. 2025",
    role: "Developer & Scrum Master",
    description:
      "Ik bouwde webapplicaties, faciliteerde Scrum-events en hielp het team om knelpunten en verbeteringen bespreekbaar te maken.",
    example: {
      title: "Een gedeelde stijlgids en herbruikbare front-endcomponenten",
      paragraphs: [
        "Als Scrum Master bij Vicrea faciliteerde ik het front-endgilde. Ik begeleidde gesprekken over welke onderdelen we konden standaardiseren en welke afspraken we daarvoor nodig hadden. Mijn ervaring als front-enddeveloper hielp me om door te vragen over wat we in de praktijk konden hergebruiken.",
        "Uit het gilde kwamen een gedeelde stijlgids en herbruikbare componenten voort. De stijlgids legde onze afspraken over vormgeving vast. Dankzij de gedeelde componenten konden we dezelfde interfaceonderdelen in meerdere applicaties inzetten.",
      ],
    },
  },
  {
    period: "Instituut voor Bewegingsstudies · 2022",
    role: "Product Owner & Front-end Developer",
    description:
      "Ik onderzocht hoe we sensordata toegankelijk konden maken voor patiënten en fysiotherapeuten.",
  },
  {
    period: "Turnvereniging Longa · nov. 2021 – 2022",
    role: "Assistent-trainer (vrijwilliger)",
    description:
      "Ik ondersteunde de trainer tijdens turnlessen en hielp deelnemers bij het oefenen van turnoefeningen.",
  },
  {
    period: "Studievereniging ICT · nov. 2021 – 2022",
    role: "Lid van de activiteitencommissie",
    description:
      "Samen met de commissie organiseerde ik evenementen voor ICT-studenten. Ik onderhandelde over prijzen en kortingen, maakte flyers voor de evenementen en stemde de voorbereiding af met het team.",
  },
  {
    period: "Sony · sep. 2021 – mrt. 2022",
    role: "Shop-in-Shop Manager",
    description:
      "Ik adviseerde klanten, verzorgde productdemo’s en trainde winkelmedewerkers.",
  },
  {
    period: "MediaMarkt · jan. 2019 – sep. 2021",
    role: "Productadviseur",
    description:
      "Ik adviseerde klanten over producten in verschillende categorieën en legde technische verschillen begrijpelijk uit, zodat zij een passende keuze konden maken.",
  },
  {
    period: "Jump XL / You Jump · jan. 2018 – dec. 2018",
    role: "Freerun- en trampoline-instructeur",
    description:
      "Ik gaf freerunlessen en trampolinefitness. Ik paste oefeningen aan het niveau van deelnemers aan, gaf individuele feedback en zorgde voor een veilige leeromgeving.",
  },
];

export default function Jayhdecuba() {
  useEffect(() => {
    const sectionId = window.location.hash.slice(1);
    document.getElementById(sectionId)?.scrollIntoView();
  }, []);

  return (
    <main className="portfolio-page mx-auto w-[calc(100%-2rem)] max-w-[1320px] pt-10 text-[#272b24] md:w-[calc(100%-5rem)] md:pt-16">
      <HeroSection />

      <Section
        id="over-mij"
        title="Ik breng techniek en mensen samen."
        className="rounded-[28px] bg-[#283e34] px-[clamp(25px,5vw,70px)] py-9 text-[#faf5ed] md:py-[54px]"
        layoutClassName="grid items-center gap-5 md:grid-cols-[1fr_1.12fr] md:gap-10"
      >
        <p className="max-w-[480px] leading-relaxed text-[#f0e7dc]">
          Van een klant die nieuwe software leert gebruiken tot een team dat
          tijdens een retro iets lastigs bespreekbaar maakt. Ik luister, vraag
          door en help mensen hun volgende stap zelf te bepalen. Mijn
          achtergrond als developer helpt me begrijpen waar teams in de praktijk
          tegenaan lopen.
        </p>
      </Section>

      <Section
        id="ervaring"
        title="Mijn loopbaan tot nu toe."
        className="py-12 text-[#283e34] md:py-[70px]"
        layoutClassName="space-y-7"
      >
        <ul className="border-b border-[#cec3b5]">
          {experience.map(({ period, role, description, example }) => (
            <li
              key={role}
              className="grid items-baseline gap-2 border-t border-[#cec3b5] py-5 md:grid-cols-[.85fr_1.15fr_1.35fr] md:gap-[22px]"
            >
              <small className="text-[#576457]">{period}</small>
              <h3 className="font-[Georgia,serif] text-[1.4rem] leading-tight text-[#713f49]">
                {role}
              </h3>
              <div>
                <p className="text-sm leading-relaxed text-[#272b24]">
                  {description}
                </p>

                {example && (
                  <details className="mt-3 rounded-xl bg-[#faf5ed] px-4 py-3 text-sm">
                    <summary className="cursor-pointer font-semibold text-[#283e34]">
                      {example.title}
                    </summary>

                    {example.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="mt-2.5 leading-relaxed text-[#272b24]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </details>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <XseedsRootsProject />

      <footer
        id="contact"
        className="flex scroll-mt-24 flex-col items-start justify-between gap-5 border-t border-[#cec3b5] pb-11 pt-7 md:flex-row md:items-center"
      >
        <h2 className="font-[Georgia,serif] text-[clamp(1.9rem,4vw,3rem)] leading-none tracking-[-.055em] text-[#283e34]">
          Even kennismaken?
        </h2>
        <CustomButton
          href="mailto:ghasondcuba@gmail.com"
          placeholder="Stuur me een mail"
          tailwindWidth="w-auto"
          className="text-sm font-semibold"
        />
      </footer>
    </main>
  );
}
