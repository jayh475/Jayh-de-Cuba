import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  className?: string;
  layoutClassName?: string;
  children: ReactNode;
};

export default function Section({
  id,
  title,
  className = "py-16",
  layoutClassName = "mx-auto max-w-6xl space-y-6 px-6",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`scroll-mt-24 ${className}`}
    >
      <div className={layoutClassName}>
        <h2
          id={`${id}-title`}
          className="font-[Georgia,serif] text-[clamp(2.3rem,4vw,4rem)] leading-none tracking-[-.055em]"
        >
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
