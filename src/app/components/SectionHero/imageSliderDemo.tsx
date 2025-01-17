"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./images-slider";


export function ImagesSliderDemo() {
    // const images = [
    //     "/img-4.png",
    //     "/img-7.jpg",
    //     "/img-3.jpg",
    // ];

    const texts = [
       
        "A R3 Suprimentos fornece o essencial para a sua empresa fazer o que faz de melhor"
    ]

    return (
        <div>

            <ImagesSlider className="h-[100vh]" strings={texts}>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: -80,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.6,
                    }}
                    className="z-50 flex flex-col justify-center items-center"
                >

                    
                    {/* <Button className="cursor-pointer absolute z-50">
                        <span><a href="https://api.whatsapp.com/send/?phone=556239462100&text=Ol%C3%A1%2C+estava+navegando+pelo+site+e+gostaria+de+saber+sobre+seus+produtos+&type=phone_number&app_absent=0" target="_blank">Entre em contato →</a></span>
                    </Button> */}
                    {/* <button
                        className="px-4 py-2 backdrop-blur-sm  border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full absolute z-1000 mt-10">
                        <a href="https://api.whatsapp.com/send/?phone=556239462100&text=Ol%C3%A1%2C+estava+navegando+pelo+site+e+gostaria+de+saber+sobre+seus+produtos+&type=phone_number&app_absent=0" target="_blank"><span>Entre em contato →</span></a>
                        <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                    </button> */}
                </motion.div>
            </ImagesSlider>

        </div>
    );
}
