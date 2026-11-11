import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-24 py-16"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 id={`${id}-title`} className="mb-6 text-3xl font-semibold">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
