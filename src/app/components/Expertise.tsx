import { Heart, ShieldCheck, Siren } from "lucide-react";
import Image from "next/image";
import React from "react";
import { BiAtom } from "react-icons/bi";
import man from "@/assets/man.png";

const expertise = [
  {
    id: "1",
    title: "Life Coaching",
    icon: <BiAtom className="size-7" />,
  },
  {
    id: "2",
    title: "Stress Coaching",
    icon: <Siren className="size-7" />,
  },
  {
    id: "3",
    title: "Love & Relationship Coaching",
    icon: <Heart className="size-7" />,
  },
  {
    id: "4",
    title: "Sex Therapy",
    icon: <Image src={man} alt="man" height={30} width={30} className="" />,
  },
];

const benefits = [
  {
    id: "1",
    title: "Instant Access to Therapy",
  },
  {
    id: "2",
    title: "Confidential and Secure",
  },
  {
    id: "3",
    title: "Convenience and Flexibility",
  },
  {
    id: "4",
    title: "Better Relationships",
  },
  {
    id: "5",
    title: "Increase Productivity",
  },
  {
    id: "6",
    title: "Positive Worklife",
  },
  {
    id: "7",
    title: "Affordable Care Options",
  },
];

const Expertise = () => {
  return (
    <div className="w-[98%] md:w-11/12 mx-auto flex flex-col gap-3 mb-10">
      <h2 className="heading text-center footer-class pb-2 text-[#26275F]">
        Our Expertise
      </h2>

      <div className="md:w-3/4 mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-5">
          {expertise.map((item) => (
            <div
              key={item.id}
              className="bg-[#8A84E2] shadow-md p-4 rounded-full text-center border"
            >
              <h3 className="text-white font-semibold max-sm:text-sm flex gap-1 justify-center items-center">
                {item.icon} {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-center footer-class text-[#26275F] text-2xl">
        Benefits
      </h2>

      <div className="md:w-3/4 mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-5">
          {benefits.map((item) => (
            <div
              key={item.id}
              className="bg-[#FBC18E] shadow-md p-4 rounded-full text-center border"
            >
              <h3 className="text-black font-semibold max-sm:text-sm">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expertise;
