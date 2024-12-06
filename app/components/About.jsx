'use client'

import { useState } from "react";
import Slider from "./Slider";

export default function About () {

  const numUser= {
    titre:"3K+" ,
    description: "Number of people who used the application"
  };
  const [slide, setSlide] = useState(false);

  return(
    <div className="mx-36 mb-10">
      <div className="mx-auto text-center">
        <p className="text-sm text-[#3b7ab7] uppercase font-semibold">why us</p>
        <h1 className="text-4xl font-bold text-black capitalize">about our application</h1>
      </div>
      <div className="grid grid-cols-1">
        <div className="grid grid-cols-2 gap-6 mt-16 ">
          <div className="bg-blue-100 rounded-lg p-10">
            <h1 className="text-6xl text-[#3b7ab7] font-bold">{numUser.titre} </h1>
            <p className="text-xl font-semibold pt-8"> {numUser.description}</p>
          </div>
          <div className="bg-blue-100 rounded-lg p-10">
            <p className="text-xl font-semibold pb-8">Simple explanation of how the application wworks</p>
            {/* <img src="" alt="" /> */}
          </div>
        </div>

        <Slider/>

      </div>
    </div>
  );
}