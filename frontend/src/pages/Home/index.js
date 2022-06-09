import React from "react";
import About from "../../components/About";
import SliderBar from "../../components/SliderBar";

function Home() {
  return (
    <div className=" mx-[70px] p-4 flex">
      <div>
        <About />
        <SliderBar />
      </div>
      <div className="px-2 w-full"></div>
    </div>
  );
}

export default Home;
