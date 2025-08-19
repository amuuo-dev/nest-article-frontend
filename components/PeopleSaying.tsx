"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoscroll from "embla-carousel-auto-scroll";

const users = [
  {
    _id: 1,
    name: "Martin Muendo",
    testimonial: "Artizone enables me to stay updated in a blink",
  },
  {
    _id: 2,
    name: "Yooh Maina",
    testimonial: "Can't believe Artizone is free — what an amazing site.",
  },
  {
    _id: 3,
    name: "Jane Wilson",
    testimonial: "Using the website is so simple and clear, nice!",
  },
  {
    _id: 4,
    name: "Barney Bro",
    testimonial:
      "The follow feature is phenomenal since it creates a nice feed for all users I’m following",
  },
];

const PeopleSaying = () => {
  return (
    <div className="py-8 px-12 bg-amber-50 pt-4">
      <h1 className="text-center md:text-2xl text-base md:tracking-wider tracking-tight md:py-2 py-1">
        What are People Saying ?
      </h1>

      <Carousel
        className="w-full mx-auto p-8"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoscroll({
            startDelay: 1000,
            speed: 1,
            stopOnMouseEnter: true,
            stopOnInteraction: false,
          }),
        ]}
      >
        <CarouselContent>
          {users.map((user) => (
            <CarouselItem
              key={user._id}
              className="basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <div className="p-4 border border-gray-200 rounded-xl shadow-sm md:h-[120px] h-[160px] flex items-center">
                <p className="text-gray-600 md:text-sm text-xs">
                  &quot;{user.testimonial}&quot;
                  <span className="md:font-semibold font-medium">
                    {" "}
                    – {user.name}
                  </span>
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default PeopleSaying;
