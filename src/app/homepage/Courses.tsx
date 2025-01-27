
import GradientTitle from "@/components/custom/grad-title";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { PiGraduationCapDuotone } from "react-icons/pi";

const CoursesSection: React.FC = () => {
    return (
        <section className="g-gradient-to-b from-black to-neutral-800 rounded-3xl border border-neutral-800 text-white">
            <div className='bg-gradient-to-b from-black to-neutral-800 rounded-3xl border border-neutral-800 m-[6px]'>
                <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 p-3 lg:p-10 ">
                    {/* Left Section */}
                    <div>
                        <GradientTitle className="text-2xl md:text-3xl lg:text-5xl" text="Discover Our Most Used Services" />
                        <p className="text-neutral-400 text-lg mb-8">
                            From debugging to deployment, we’ve got the tools and support you need.
                        </p>
                        <Link href={'/about'}>
                            <Button className='bg-gradient-to-b from-neutral-800 to-neutral-700 border-neutral-600 rounded-lg hover:text-neutral-300' variant="outline">See all services</Button>
                        </Link>
                    </div>

                    {/* Right Section */}
                    <div className='bg-gradient-to-b from-black to-neutral-800 rounded-3xl border border-neutral-800 shadow-2xl'>
                        <div className="bg-gradient-to-b from-[#101010] to-neutral-900 rounded-2xl p-8 shadow-lg border border-neutral-800 m-[6px]">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-semibold">Deployment Assistance</h2>
                                {/* <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center">
                                    <Image
                                        src="/user-icon.svg"
                                        alt="User Icon"
                                        width={32}
                                        height={32}
                                        className="w-8 h-8"
                                    />
                                </div> */}
                            </div>
                            <span className="inline-flex gap-2 items-center bg-gradient-to-b from-neutral-800 to-neutral-700 border-neutral-600 rounded-lg hover:text-neutral-300 text-sm px-3 py-1 mb-4">
                                <PiGraduationCapDuotone />
                                Intermediate
                            </span>
                            <p className="text-neutral-400 mb-8">
                                Seamlessly deploy your projects with guidance from our expert team.
                            </p>
                            <div className="flex items-center justify-between">
                                <p className="text-2xl font-bold">$29.99</p>
                                <Button className='bg-gradient-to-b from-neutral-800 to-neutral-700 border-neutral-600 rounded-lg hover:text-neutral-300' variant="outline">Get Started</Button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default CoursesSection;
