import GradientTitle from "@/components/custom/grad-title";
import Image from "next/image";
import React from "react";

const SkillJourney: React.FC = () => {
    return (
        <div className="relative text-white">
            <Image width={60} height={60} className="absolute blur-3xl w-96 inset-x-0 h-96 mx-auto bottom-12 left-0 -z-10" src="/assets/avatar1.svg" alt=""></Image>
            <div className="max-w-6xl mx-auto text-center">
                <GradientTitle className="text-2xl md:text-3xl lg:text-5xl mx-auto" text="What Our Clients Say " />
                <p className="text-neutral-500 text-lg mb-12">
                Trusted by Businesses, Loved by Clients 💬
                </p>

                <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
                    {/* Card 1 */}


                    <div className='bg-gradient-to-b from-black/70 to-neutral-800/70 rounded-3xl border border-neutral-800  md:-rotate-12'>
                        <div className="bg-gradient-to-b from-neutral-900/30 to-neutral-800/30 rounded-2xl border border-neutral-800 shadow-md m-[6px] text-center space-y-4 ">
                            <div className=" text-left p-5 lg:p-12 rounded-xl shadow-lg max-w-sm md:max-w-xs">
                                <p className="text-neutral-300 mb-10 text-sm">
                                UQIDEV transformed our business with a seamless and scalable software solution. Their team was professional, innovative, and always ready to help!
                                </p>
                                <div>
                                    <h4 className="font-bold">Rahman H.</h4>
                                    <p className="text-neutral-500">CEO, TechVista Ltd.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}


                    <div className='bg-gradient-to-b from-black/70 to-neutral-800/70 rounded-3xl border border-neutral-800 '>
                        <div className="bg-gradient-to-b from-neutral-900/30 to-neutral-800/30 rounded-2xl border border-neutral-800 shadow-md m-[6px] text-center space-y-4 ">
                            <div className="text-left p-5 lg:p-12 rounded-xl shadow-lg max-w-sm md:max-w-xs ">
                                <p className="text-neutral-300 mb-10 text-sm">
                                From concept to execution, UQIDEV delivered beyond our expectations. Their expertise in web and mobile app development is truly impressive!
                                </p>
                                <div>
                                    <h4 className="font-bold">Frantz Arty</h4>
                                    <p className="text-neutral-500">CEO, VideoGift, USA</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}


                    <div className='bg-gradient-to-b from-black/70 to-neutral-800/70 rounded-3xl border border-neutral-800 md:rotate-12'>
                        <div className="bg-gradient-to-b from-neutral-900/30 to-neutral-800/30 rounded-2xl border border-neutral-800 shadow-md m-[6px] text-center space-y-4 ">
                            <div className="text-left p-5 lg:p-12 rounded-xl shadow-lg max-w-sm md:max-w-xs">
                                <p className="text-neutral-300 mb-10 text-sm">
                                Outstanding service and support! UQIDEV’s IT consulting helped us streamline our operations and boost efficiency.
                                </p>
                                <div>
                                    <h4 className="font-bold">James D.</h4>
                                    <p className="text-neutral-500">Operations Manager, BrightWave Technologies</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SkillJourney;
