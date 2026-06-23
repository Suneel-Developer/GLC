"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

const cards = [
    {
        title: "Payroll Visibility",
        description:
            "See payroll costs, margins, and liabilities as they happen.",
        image: "/assets/GlassCalculatorT.webp",
        maxHeight: 343,
    },
    {
        title: "Automated Compliance",
        description: "Tax calculations and reporting handled automatically.",
        image: "/assets/StampT.webp",
        maxHeight: 264,
    },
    {
        title: "CIS Support",
        description: "Flexible handling for PAYE, CIS, and complex setups.",
        image: "/assets/ToolboxT.webp",
        maxHeight: 264,
    },
    {
        title: "Self-Service",
        description: "Clients and candidates access timesheets, payslips, and data directly.",
        image: "/assets/VendingMachineT.webp",
        maxHeight: 264,
    },
    {
        title: "Error Prevention",
        description:
            "Smart controls reduce mistakes before they happen, not after.",
        image: "/assets/PrismT.webp",
        maxHeight: 204,
    },
    {
        title: "Seamless Approvals",
        description: "Timesheets and payroll sign-offs flow through without friction.",
        image: "/assets/ConveyorBeltT.webp",
        maxHeight: 264,
    },
];

const cloudHoverGradient =
    "linear-gradient(160deg, rgba(199,184,227,0.25) 0%, rgba(232,183,200,0.2) 50%, rgba(247,245,255,0.1) 100%)";

function CloudLayer() {
    return (
        <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
            <div className="absolute top-[2%] left-[-30%] w-[75%] opacity-20">
                <Image
                    src="/assets/Cloud3.webp"
                    alt=""
                    width={300}
                    height={200}
                    className="w-full"
                />
            </div>

            <div className="absolute top-[5%] right-[-25%] w-[65%] opacity-[0.18]">
                <Image
                    src="/assets/Cloud-4.webp"
                    alt=""
                    width={260}
                    height={170}
                    className="w-full"
                />
            </div>
            <div className="absolute top-[18%] left-[-15%] w-[110%] opacity-25">
                <Image
                    src="/assets/Cloud-4.webp"
                    alt=""
                    width={420}
                    height={280}
                    className="w-full"
                />
            </div>
            <div className="absolute top-[32%] left-[-20%] w-[130%] opacity-35">
                <Image
                    src="/assets/Cloud-4.webp"
                    alt=""
                    width={500}
                    height={330}
                    className="w-full"
                />
            </div>

            <div className="absolute top-[36%] right-[-10%] w-full opacity-30">
                <Image
                    src="/assets/Cloud-3.webp"
                    alt=""
                    width={400}
                    height={260}
                    className="w-full"
                />
            </div>
            <div className="absolute bottom-[20%] left-[-15%] w-[120%] opacity-40">
                <Image
                    src="/assets/Cloud-3.webp"
                    alt=""
                    width={460}
                    height={300}
                    className="w-full"
                />
            </div>
            <div className="absolute bottom-[5%] left-[-25%] w-[150%] opacity-50">
                <Image
                    src="/assets/Cloud-4.webp"
                    alt=""
                    width={580}
                    height={380}
                    className="w-full"
                />
            </div>
            <div className="absolute bottom-[0%] right-[-15%] w-[130%] opacity-45">
                <Image
                    src="/assets/Cloud-3.webp"
                    alt=""
                    width={500}
                    height={330}
                    className="w-full"
                />
            </div>
            <div className="absolute bottom-[-3%] left-[-10%] w-[110%] opacity-40">
                <Image
                    src="/assets/Cloud-4.webp"
                    alt=""
                    width={440}
                    height={290}
                    className="w-full"
                />
            </div>
        </div>
    );
}

function Card({ title, description, image, maxHeight }) {
    return (
        <div
            className="group relative flex flex-col rounded-2xl overflow-hidden h-105 border border-white/40 transition-transform duration-300 hover:scale-[1.01]"
            style={{ background: "rgba(255, 255, 255, 0.12)" }}
        >
            <CloudLayer />

            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-2"
                style={{ background: cloudHoverGradient }}
            />

            <div className="relative z-10 px-6 pt-6 text-center">
                <h3 className="text-[22px] md:text-2xl font-medium text-foreground leading-[1.15] font-garamond">
                    {title}
                </h3>
            </div>

            <div className="relative z-10 flex items-center justify-center flex-1 px-4 py-2 min-h-0">
                <img
                    src={image}
                    alt={title}
                    width={500}
                    height={500}
                    className="w-auto object-contain transition-transform duration-700 group-hover:scale-[1.03] drop-shadow-[0_8px_20px_rgba(0,0,0,0.2)]"
                    style={{ maxHeight }}
                />
            </div>

            <div className="relative z-10 px-6 pb-6 mt-auto text-center">
                <p className="text-[13px] leading-relaxed text-[#3a3a3a]">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default function Scenes() {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);

    return (
        <section className="pb-20 relative overflow-hidden">
            {/* Section heading */}
            <div className="relative z-10 mx-auto max-w-300 px-6">
                <div className="text-center">
                    <h2 className="text-3xl font-medium md:text-4xl lg:text-[44px] leading-[1.15] font-garamond">
                        Everything working behind the scenes
                    </h2>
                </div>
            </div>

            {/* Swiper carousel */}
            <div className="mt-14">
                <Swiper
                    modules={[A11y, FreeMode]}
                    spaceBetween={20}
                    slidesPerView="auto"
                    freeMode={true}
                    a11y={{ enabled: true }}
                    className="overflow-visible@"
                    style={{ paddingLeft: "24px", paddingRight: "24px" }}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    onProgress={(swiper) => setActiveIndex(swiper.activeIndex)}
                >
                    {cards.map((card) => (
                        <SwiperSlide
                            key={card.title}
                            style={{ width: "300px" }}
                            className="md:w-[320px]!"
                        >
                            <Card {...card} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Custom pagination bullets */}
            <div className="flex items-center justify-center gap-2.5 mt-6">
                {cards.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => swiperRef.current?.slideTo(i)}
                        aria-label={`Go to card ${i + 1}`}
                        style={{
                            backgroundColor: activeIndex === i ? "#2b2b2b" : "#2b2b2b26",
                            width: "8.8px",
                            height: "8.8px",
                            borderRadius: "9999px",
                            border: "none",
                            padding: 0,
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                        }}
                    />
                ))}
            </div>
        </section>
    );
}
