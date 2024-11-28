"use client"
import Image from 'next/image'
import { useState, useEffect } from "react"; 
import AOS from "aos";
import "aos/dist/aos.css";
import line from "../public/image/line-image.png";
import React from 'react'
import banner from "../public/image/banner-backgroundimage.jpg";
import { ArrowUpRight, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const   Banner = () => {
    const slides = [
        {
            title: "Design Your Home With Our Modern Interior Designs",
            description: "Quis aute irure dolor in reprehenderit in voluptate velit esse fugiat nulla pariatur.",
        },
        {
            title: "Design Your Home With Our Modern Interior Designs",
            description: "Quis aute irure dolor in reprehenderit in voluptate velit esse fugiat nulla pariatur.",
        },
        {
            title: "Design Your Home With Our Modern Interior Designs",
            description: "Quis aute irure dolor in reprehenderit in voluptate velit esse fugiat nulla pariatur.",
        },
    ];

        useEffect(() => {
            AOS.init({
            duration: 1000,
            once: false,
        });
        }, []);
        const [currentSlide, setCurrentSlide] = useState(0);
        useEffect(() => {
            const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
            }, 5000);
            return () => clearInterval(interval);
        }, [slides.length]);
    return (
        <div className="custom-mobile:pb-[55px]">
            <div className="flex justify-between flex-col-reverse relative">
                <div className="lg:absolute lg:block lg:top-0 lg:left-0 lg:z-20 custom-mobile:hidden">
                    <Image className="relative top-64 left-12" src={line} width={1} height={92} alt="line" />
                    <ul className="flex relative top-[275px] left-8 flex-col">
                    {[
                    { icon: Facebook, href: "" },
                    { icon: Twitter, href: "" },
                    { icon: Instagram, href: "" },
                    { icon: Linkedin, href: "" },
                    ].map(({ icon: Icon, href }, idx) => (
                        <li key={idx}className="pb-3 hover:-translate-y-2 transition-all duration-500 hover:text-primary text-white">
                            <a href={href}><Icon size={27} strokeWidth={2} /></a>
                        </li>
                        ))}
                    </ul>
                </div>
            {/* Slide Content */}
            <div className="lg:pl-[215px] lg:pr-[200px] lg:pt-[135px] lg:pb-[60px] z-10 flex lg:w-full">
                <div className="md:w-full">
                    <p className="md:text-[76px] md:font-semibold md:leading-[80px] md:pb-[28px] custom-mobile:mb-2 custom-mobile:text-[24px] custom-mobile:leading-[26px] md:text-start custom-mobile:text-center">{slides[currentSlide].title}</p>
                    <p className="lg:text-2xl lg:w-[64%] custom-mobile:text-[14px] custom-mobile:leading-[22px] custom-mobile:px-[15px] md:text-start custom-mobile:text-center custom-mobile:text-[#a7a7a7] custom-mobile:mb-[20px]">{slides[currentSlide].description}</p>
                    <p className="flex items-center md:gap-5 md:pt-[54px] group cursor-pointer md:pl-0 custom-mobile:gap-3 custom-mobile:pl-[145px]">
                        <a className="group-hover:text-primary transition-all duration-300 md:text-[20px] md:leading-[26px] md:font-semibold" href="">
                        Discover More
                        </a>
                        <span className="rounded-full text-primary bg-[transparent] border border-[#E1B261] md:p-5 custom-mobile:p-2 group-hover:bg-[#E1B261] group-hover:text-[#fff] transition-all duration-300">
                            <ArrowUpRight />
                        </span>
                    </p>
                </div>
            <div className="w-full hidden lg:block"></div>
            </div>
            {/* Banner Image */}
            <div className="lg:absolute top-0 right-0 z-0 custom-mobile:block lg:px-0 custom-mobile:px-4 custom-mobile:mb-[20px]">
            <Image className='2xl:max-w-[96%] lg:max-w-[100%]' src={banner} width={1193} height={761} alt="banner" />
            </div>
            </div>
        </div>
    )
}

export default Banner;   