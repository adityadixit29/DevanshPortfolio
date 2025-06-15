"use client";

import Button from "@/components/Button";
import designExample1Image from "@/assets/images/interface-design.png";
import designExample2Image from "@/assets/images/image-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import cursorYouImage from "@/assets/images/cursor-you.svg";

export default function Hero() {
    const [leftDesignScope, leftDesignAnimate] = useAnimate();
    const [leftPointerScope, leftPointerAnimate] = useAnimate();
    const [rightDesignScope, rightDesignAnimate] = useAnimate();
    const [rightPointerScope, rightPointerAnimate] = useAnimate();

    useEffect(() => {
        leftDesignAnimate([
            [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);
        leftPointerAnimate([
            [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
            [
                leftPointerScope.current,
                { x: 0, y: [0, 16, 0] },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);
        rightDesignAnimate([
            [
                rightDesignScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
        ]);
        rightPointerAnimate([
            [
                rightPointerScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightPointerScope.current, { x: 200, y: 0 }, { duration: 0.5 }],
            [
                rightPointerScope.current,
                { x: 0, y: [0, 20, 0] },
                { duration: 0.5 },
            ],
        ]);
    }, []);
    return (
        <section id="home" className="py-24 overflow-x-clip" style={{ cursor: `url(${cursorYouImage.src}), auto` }}>
            <div className="container relative">
                <motion.div
                    ref={leftDesignScope}
                    initial={{ opacity: 0, y: 100, x: -100 }}
                    drag
                    className="absolute -left-40 top-16 hidden lg:block"
                >
                    <Image
                        src={designExample1Image}
                        draggable="false"
                        alt="Design example 1 image"
                    />
                </motion.div>
                <motion.div
                    ref={leftPointerScope}
                    initial={{ opacity: 0, y: 100, x: -200 }}
                    className="absolute left-56 top-96 hidden lg:block"
                >
                    <Pointer name="Interface" />
                </motion.div>
                <motion.div
                    ref={rightDesignScope}
                    initial={{ opacity: 0, x: 100, y: 100 }}
                    drag
                    className="absolute -right-72 -top-16 hidden lg:block"
                >
                    <Image
                        src={designExample2Image}
                        draggable="false"
                        alt="Design example 2 image"
                    />
                </motion.div>
                <motion.div
                    ref={rightPointerScope}
                    initial={{ opacity: 0, x: 300, y: 100 }}
                    className="absolute right-80 -top-4 hidden lg:block"
                >
                    <Pointer name="Graphics" color="red" />
                </motion.div>
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
                        ✨ Product Designer | UI/UX & Visual Design
                    </div>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
                    Hello, I am <br /> Devansh Dixit
                </h1>
                <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                    I design intuitive, seamless user experiences that thoughtfully balance functionality, smooth flow, and just the right amount of refined finesse
                </p>
            </div>
            <form
                className="flex justify-center rounded-full p-2 mt-8 max-w-lg mx-auto"
                action=""
            >
                {/* <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-transparent px-4 md:flex-1 w-full"
                /> */}
                <Button
                    type="submit"
                    variant="primary"
                    className="whitespace-nowrap ju"
                    size="sm"
                >
                    Resume
                </Button>
            </form>
        </section>
    );
}
