"use client";

import Tag from "@/components/Tag";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text =
    "The best designs draw you in, making you want to keep scrolling—discovering something fresh, engaging, and unexpected with every interaction.";
const words = text.split(" ");

export default function Introduction() {
    const scrollTarget = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollTarget,
        offset: ["start end", "end end"],
    });
    const [currentWord, setCurrentWord] = useState(0);
    const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

    useEffect(() => {
        wordIndex.on("change",(latest) => {
            setCurrentWord(latest);
        });
    }, [wordIndex])

    useMotionValueEvent(scrollYProgress, "change", (latest) =>
        console.log("latest", latest)
    );
    return (
        <section id="introduction" className="py-28 lg:py-40">
            <div className="container">
                <div className="sticky top-20 md:top-28 lg:top-40">
                    <div className="flex justify-center">
                        <Tag>Introducing Layers</Tag>
                    </div>
                    <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
                        <span>Your creative process deserves better.</span>{" "}
                        <span className="">
                            {words.map((word, wordIndex) => (
                                <span
                                    key={wordIndex}
                                    className={twMerge("transition duration-500 text-white/15",
                                        wordIndex < currentWord && "text-white"
                                    )}
                                >{`${word} `}</span>
                            ))}
                        </span>
                        <span className="text-yellow-400 block">
                            That’s why I design endlessly.
                        </span>
                    </div>
                </div>
                <div className="h-[150vh]" ref={scrollTarget}></div>
            </div>
        </section>
    );
}
