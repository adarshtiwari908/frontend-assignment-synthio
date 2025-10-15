import * as React from "react";
import CardCarousel from "./body/CardCrousel";
import AgendaGoals from "./body/agendaGoals";

const HeroSection: React.FC = () => {
  return (
    <section className="w-full" style={{ background: "transparent" }}>
      <div className="mx-auto w-full max-w-[1376px] px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 flex flex-col gap-6 sm:gap-8">
        <CardCarousel />
        <AgendaGoals />
      </div>
    </section>
  );
};

export default HeroSection;
