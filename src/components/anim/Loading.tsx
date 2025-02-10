"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Loading: React.FC = () => {
    const initialText = "Building Today for Tomorrow";
    const finalText = "UQIDEV";
    const [showInitialText, setShowInitialText] = useState(true);
    const [showColorBlock, setShowColorBlock] = useState(false);
    const [showFinalText, setShowFinalText] = useState(false);
    const [hideFinalText, setHideFinalText] = useState(false);

    const letterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.5,
            },
        }),
    };

    const containerVariants = {
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: { duration: 0.5 },
        },
    };

    const blockVariants = {
        initial: { scaleX: 0, x: 0 },
        visible: {
            scaleX: [0, 0.4, 0.7, 1],
            x: [0, 50],
            transition: {
                duration: 0.5,
                times: [0, 0.3, 0.5, 1],
                ease: "easeInOut",
            },
        },
        exit: {
            scaleX: [1, 0.7, 0.4, 0],
            scale: [1, 1.4],
            x: [50, 0],
            transition: {
                duration: 0.3,
                times: [0, 0.3, 1],
                ease: "easeInOut",
            },
        },
    };

    const finalTextVariants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
        exit: {
            opacity: 0,
            y: -20, 
            transition: { duration: 0.5 },
        },
    };

    useEffect(() => {
        const timer1 = setTimeout(() => setShowInitialText(false), 2000);
        const timer2 = setTimeout(() => setShowColorBlock(true), 2500);
        const timer3 = setTimeout(() => {
            setShowColorBlock(false);
            setShowFinalText(true);
        }, 4000);
        const timer4 = setTimeout(() => setHideFinalText(true), 5000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
        };
    }, []);

    return (
        <div className="relative flex justify-center items-center h-screen bg-black overflow-hidden">
            <AnimatePresence>
                {showInitialText && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={containerVariants}
                        className="flex space-x-2"
                    >
                        {initialText.split(" ").map((letter, index) => (
                            <motion.span
                                key={index}
                                custom={index}
                                variants={letterVariants}
                                className="text-4xl text-white font-extralight mx-1"
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showColorBlock && (
                    <motion.div
                        initial="initial"
                        animate="visible"
                        exit="exit"
                        variants={blockVariants}
                        className="absolute z-10 w-52 h-12 bg-amber-500 origin-left"
                    ></motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showFinalText && !hideFinalText && (
                    <motion.div
                        initial="visible"
                        animate="visible"
                        exit="exit"
                        variants={finalTextVariants}
                        className="absolute text-4xl text-white"
                    >
                        {finalText}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Loading;
