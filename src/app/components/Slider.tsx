import React from "react";
import EmblaCarousel from "./EmblaCarousel";

const Slider = ({ title, slides }: { title: string; slides: string[] }) => {
  return (
    <section className="wrapper">
      <h2 className="text-2xl">{title}</h2>
      <EmblaCarousel slides={slides}></EmblaCarousel>
    </section>
  );
};

export default Slider;
