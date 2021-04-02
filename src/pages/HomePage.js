import React from "react";
// import { Slide } from ".";
import Slide from "./SlidePage";
// eslint-disable-next-line
import { FeaturedProducts, Hero, Services, Contact } from "../components";
import Slider from "./SliderPage";

const HomePage = () => {
  return (
    <main>
      <Slide />
      <Slider />
      {/* <Hero /> */}
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};

export default HomePage;
