import Image from "next/image";
import React from "react";
import { Cta } from "../cta/Cta";
import { Terms } from "../terms/Terms";

export function Hero() {
  return (
    <div className="flex flex-col items-center sm:block">
      <Hero.Image />
      <Hero.Content />
    </div>
  );
}

// eslint-disable-next-line react/display-name
Hero.Image = function () {
  return (
    <Image
      src={"/heroImage.png"}
      height={1000}
      width={1000}
      alt="hero-image"
      className="w-full -mt-2 sm:hidden"
      quality={100}
    />
  );
};

// eslint-disable-next-line react/display-name
Hero.Content = function () {
  const bulletPoints = [
    {
      text: "Start growing your influence right away—no waiting required!",
      icon: "✨",
    },
    {
      text: "Create viral TikToks and Reels step by step with easy-to-follow lessons",
      icon: "✨",
    },
    {
      text: "Use a Personal AI Worker to boost your content ",
      icon: "✨",
    },
    {
      text: "Learn from expert-led courses designed for aspiring influencers",
      icon: "✨",
    },
  ];

  return (
    <div className="max-w-[516px] sm:pt-[57px] text-center sm:text-left">
      <h1 className="font-urbanist text-[25px] sm:text-[35px] font-extrabold sm:font-bold leading-[110%]">
        Want to Turn Social Media Into a Profitable Career?
        <span className="block text-shadow-primary text-shadow-[0_4px_4px_rgba(0,0,0,1)] text-secondary">
          Discover your way to success with Fametonic:
        </span>
      </h1>

      <div className="space-y-2.5 sm:space-y-[13px] mt-5.5 sm:mt-4 text-left">
        {bulletPoints.map((point, index) => (
          <div
            key={index}
            className="flex gap-2.5 items-start text-base font-medium sm:font-semibold"
          >
            {point.icon}
            <p>{point.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-5.5 sm:mt-[30px] pb-10 sm:pb-[82px] flex flex-col-reverse sm:flex-col gap-8 sm:gap-[30px]">
        <Cta />
        <Terms />
      </div>
    </div>
  );
};
