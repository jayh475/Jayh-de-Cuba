import CustomButton from "~/components/common/customButton";
import portrait from "~/images/jayh-portrait.webp";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="portfolio-title"
      className="grid items-center gap-8 pb-10 md:grid-cols-[1.32fr_1fr] md:gap-[7%] md:pb-[60px]"
    >
      <div>
        <h1
          id="portfolio-title"
          lang="en"
          className="font-[Georgia,serif] text-[clamp(2.7rem,9vw,4rem)] leading-[.96] tracking-[-.071em] text-[#283e34] md:text-[clamp(3.35rem,6.55vw,6.7rem)]"
        >
          Good things grow
          <em className="block text-[#713f49]">between people.</em>
        </h1>

        <p className="mt-6 font-semibold text-[#283e34]">Ik wil begrijpen wat mensen beweegt.</p>
        <p className="mt-3 max-w-[460px] text-[clamp(1rem,1.55vw,1.22rem)] leading-relaxed text-[#41473f]">
          Ik stel graag de vragen die een gesprek verder brengen. Als Scrum
          Master, developer en consultant heb ik geleerd hoe mensen samenwerken
          en waar techniek hen kan helpen.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
          <CustomButton
            href="#ervaring"
            placeholder="Bekijk mijn ervaring"
            tailwindWidth="w-auto"
            className="text-sm font-semibold"
          />
          <a
            href="#over-mij"
            className="text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#713f49]"
          >
            Meer over mij
          </a>
        </div>
      </div>

      <figure className="mx-auto w-full max-w-[440px] md:max-w-none">
        <div className="relative isolate flex aspect-[1.02] items-end justify-center overflow-hidden rounded-t-[42%] rounded-b-3xl bg-[#d6d8c9]">
          <span aria-hidden="true" className="absolute left-[6%] top-[8%] -z-10 aspect-square w-[88%] rounded-full border border-[#f7f4e5]" />
          <span aria-hidden="true" className="absolute left-[13.5%] top-[15%] -z-10 aspect-square w-[73%] rounded-full border border-[#f7f4e5]" />
          <img
            src={portrait}
            alt="Portret van Jayh de Cuba"
            className="h-[95%] w-[83%] object-contain object-bottom"
          />
        </div>
        <figcaption className="flex flex-wrap justify-between gap-x-4 gap-y-1 pt-2.5 text-xs text-[#48594d]">
          <span>Jayh de Cuba</span>
          <span>Professional Scrum Master I</span>
        </figcaption>
      </figure>
    </section>
  );
}
