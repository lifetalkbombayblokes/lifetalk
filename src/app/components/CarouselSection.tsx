"use client";

import React, { useCallback, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Autoplay from "embla-carousel-autoplay";
import { FaArrowCircleDown } from "react-icons/fa";
import { type CarouselApi } from "@/components/ui/carousel";
import Image from "next/image";

const CarouselSection = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [linkHref, setLinkHref] = useState("#contact");

  useEffect(() => {
    const href = window.innerWidth > 768 ? "#contact" : "#contact_";
    setLinkHref(href);
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!api) return;
      api.scrollTo(index);
    },
    [api]
  );

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
          stopOnInteraction: false,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem>
          <div className="h-[70vh] md:h-[80vh] flex justify-between items-center bg-cover md:bg-center select-none bg-no-repeat">
            <div className="w-full h-full relative">
              <Image
                src={
                  typeof window !== "undefined" && window.innerWidth > 768
                    ? "/images/banner-1.webp"
                    : "/images/banner-1-mobile.webp"
                }
                alt="banner-1"
                fill
                priority
              />
            </div>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="h-[70vh] md:h-[80vh] flex justify-between items-center bg-cover md:bg-center select-none bg-no-repeat">
            <div className="w-full h-full relative">
              <Image
                src={
                  typeof window !== "undefined" && window.innerWidth > 768
                    ? "/images/banner-2.webp"
                    : "/images/banner-2-mobile.webp"
                }
                alt="banner-2"
                fill
                priority
              />
            </div>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="h-[70vh] md:h-[80vh] flex justify-between items-center bg-cover md:bg-center select-none bg-no-repeat">
            <div className="w-full h-full relative">
              <Image
                src={
                  typeof window !== "undefined" && window.innerWidth > 768
                    ? "/images/banner-3.webp"
                    : "/images/banner-3-mobile.webp"
                }
                alt="banner-3"
                fill
                priority
              />
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
      <div className="flex justify-center px-5 items-center space-x-2 -mt-5">
        {Array.from({ length: 3 }, (_, index) => (
          <div
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`w-3 h-3 rounded-full hover:cursor-pointer z-10 ${
              current === index + 1 ? "bg-[#DDDAC8]" : "bg-[#78766b]"
            }`}
          ></div>
        ))}
      </div>
    </Carousel>
  );
};

export default CarouselSection;
