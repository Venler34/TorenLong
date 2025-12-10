import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="w-full px-6 py-12">
      <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-8">
        {title}
      </h1>
      <div className="flex flex-col gap-6">
        {children}
      </div>
    </section>
  );
}
