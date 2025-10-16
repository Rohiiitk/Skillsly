import React, { useEffect, useRef, useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "../components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Testimonial() {


    const Testis = [
        {
            img: "/vite.svg",
            words: "Skillsly is the ultimate resource for career growth. The personalized paths helped me gain the exact skills needed for my next promotion!",
            designation: "Software Engineer",
        },
        {
            img: "/vite.svg",
            words: "I love the community focus on Skillsly. It's more than just a platform—it's a supportive place to exchange expertise and master new topics.",
            designation: "Student",
        },
        {
            img: "/vite.svg",
            words: "The structured content on Skillsly makes complex subjects so easy to grasp. It's the most efficient way to truly understand and apply new knowledge.",
            designation: "Professor",
        },
        {
            img: "/vite.svg",
            words: "The structured content on Skillsly makes complex subjects so easy to grasp. It's the most efficient way to truly understand and apply new knowledge.",
            designation: "Professor",
        },
        {
            img: "/vite.svg",
            words: "The structured content on Skillsly makes complex subjects so easy to grasp. It's the most efficient way to truly understand and apply new knowledge.",
            designation: "Professor",
        },
        {
            img: "/vite.svg",
            words: "The structured content on Skillsly makes complex subjects so easy to grasp. It's the most efficient way to truly understand and apply new knowledge.",
            designation: "Professor",
        },
        {
            img: "/vite.svg",
            words: "The structured content on Skillsly makes complex subjects so easy to grasp. It's the most efficient way to truly understand and apply new knowledge.",
            designation: "Professor",
        },
        {
            img: "/vite.svg",
            words: "The structured content on Skillsly makes complex subjects so easy to grasp. It's the most efficient way to truly understand and apply new knowledge.",
            designation: "Professor",
        },
        {
            img: "/vite.svg",
            words: "The structured content on Skillsly makes complex subjects so easy to grasp. It's the most efficient way to truly understand and apply new knowledge.",
            designation: "Professor",
        },
    ];

    return (
        <section className="bg-black py-10 pb-30 overflow-hidden text-center">
            <h1 className="flex flex-col text-5xl text-white font-semibold">
                Our Users
                <span className="bg-[radial-gradient(ellipse_at_center,_#4DDCB7_0%,_#B8FB70_100%)] bg-clip-text text-transparent">
                    Testimonials
                </span>
            </h1>

            <div className="mt-20 relative overflow-visible">
                <Carousel>
                    <CarouselContent className="px-3 sm:px-5 space-x-5 flex items-end">
                        {Testis.map((item, index) => (
                            <CarouselItem
                                key={index}
                                className="basis-[60%] sm:basis-1/6 transition-transform duration-300 ease-in-out"
                            >
                                <div className="bg-white text-black p-5 rounded-2xl shadow-md hover:-translate-y-6 transition-transform flex flex-col justify-between h-[320px]">
                                    <div className="flex flex-col items-center gap-8 mb-4">
                                        <img
                                            src={item.img}
                                            alt="profile"
                                            width={40}
                                            height={40}
                                            className="rounded-full -mt-15 bg-white w-20"
                                        />
                                        <h2 className="font-bold text-base">{item.designation}</h2>
                                    </div>
                                    <p className="text-sm leading-relaxed">{item.words}</p>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
}
