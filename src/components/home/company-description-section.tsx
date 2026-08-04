import React from "react";
import { companyContent } from "@/content/company";
import { BookOpen, Compass, RotateCcw, Link2, DollarSign, Target } from "lucide-react";

export const CompanyDescriptionSection: React.FC = () => {
  const { description } = companyContent;

  const cardIcons = [
    <Compass className="h-6 w-6 text-amber-500" key="compass" />,
    <Link2 className="h-6 w-6 text-amber-500" key="link" />,
    <DollarSign className="h-6 w-6 text-amber-500" key="dollar" />,
    <BookOpen className="h-6 w-6 text-amber-500" key="book" />,
    <RotateCcw className="h-6 w-6 text-amber-500" key="rotate" />,
    <Target className="h-6 w-6 text-amber-500" key="target" />,
  ];

  return (
    <section id="about" className="py-20 bg-stone-50 dark:bg-stone-900/30 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-semibold tracking-wider text-amber-600 dark:text-amber-400 uppercase">
            About WatchBox
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            {description.heading}
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {description.intro}
          </p>
        </div>

        {/* Dynamic Grid of Paragraphs styled as premium info cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {description.paragraphs.map((text, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-card border border-border/80 shadow-xs hover:border-amber-500/20 hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-xl bg-amber-500/10 dark:bg-amber-500/5 flex items-center justify-center border border-amber-500/15">
                  {cardIcons[index % cardIcons.length]}
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {text}
                </p>
              </div>
              <div className="text-xs font-semibold tracking-wider text-amber-600/60 dark:text-amber-500/40 uppercase">
                0{index + 1} / Platform Concept
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
