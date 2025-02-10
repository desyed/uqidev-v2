import GradientTitle from "@/components/custom/grad-title";
import React from "react";

const Details = () => {
    return (
        <section className="bg-black text-white py-16">
            <div className="container mx-auto md:px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Text Content */}
                    <div>
                        <GradientTitle className="text-4xl" text="UQIDEV" />
                        <p className="text-neutral-400 mb-8 leading-relaxed">
                            we specialize in crafting cutting-edge digital solutions that empower businesses to thrive in the online world.
                            Our goal is to bridge the gap between ideas and execution by delivering tailored web applications, modern designs,
                            and scalable systems. We are dedicated to helping businesses enhance their digital presence and achieve their goals
                            with innovation and precision.
                        </p>
                    </div>

                    {/* Right Side - Image */}


                    <div className='bg-gradient-to-b from-black to-neutral-800 rounded-3xl border border-neutral-800'>
                        <div className="bg-gradient-to-b from-neutral-950 to-neutral-800 rounded-2xl border border-neutral-800 shadow-md m-[6px] text-center space-y-4 ">
                            <div className="flex justify-center">
                                <div className="rounded-xl overflow-hidden shadow-lg">
                                    <img
                                        src="/about/photo-1504384308090-c894fdcc538d.avif"
                                        alt="Classroom"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Section - Features */}
                <div className="grid lg:grid-cols-3 gap-8 mt-16">
                    <div>
                        <h3 className="text-xl mb-3">1. Deliver Innovative Solutions</h3>
                        <p className="text-neutral-400 leading-relaxed">
                            We create cutting-edge web and software solutions that solve real-world problems and help businesses thrive in the digital era.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl mb-3">2. Empower Business Growth</h3>
                        <p className="text-neutral-400 leading-relaxed">
                            Our tailored services are designed to enhance your digital presence, streamline operations, and foster long-term growth.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl mb-3">3. Build Lasting Partnerships</h3>
                        <p className="text-neutral-400 leading-relaxed">
                            At Uqidev, we believe in collaborating with our clients to understand their needs and deliver solutions that truly make an impact.
                        </p>
                    </div>
                </div>

            </div>

            <div className="lg:grid lg:grid-cols-4 mt-12 gap-2 hidden">
                <div>
                    <div className="lg:ring-white/10 lg:ring-1 lg:p-2 lg:rounded-3xl lg:bg-gradient-to-t from-white/20 hover:rotate-0 duration-500 lg:rotate-6">
                        <img className="block ring-1 ring-white/10 rounded-2xl shadow-massive" src="/about/head1.svg" />
                    </div>
                </div>
                <div>
                    <div className="lg:ring-white/10 lg:ring-1 lg:p-2 lg:rounded-3xl lg:bg-gradient-to-t from-white/20 hover:rotate-0 duration-500 lg:-rotate-12">
                        <img className="block ring-1 ring-white/10 rounded-2xl shadow-massive" src="/about/head2.svg" />
                    </div>
                </div>
                <div>
                    <div className="lg:ring-white/10 lg:ring-1 lg:p-2 lg:rounded-3xl lg:bg-gradient-to-t from-white/20 hover:rotate-0 duration-500 lg:-rotate-12">
                        <img className="block ring-1 ring-white/10 rounded-2xl shadow-massive" src="/about/head4.svg" />
                    </div>
                </div>
                <div>
                    <div className="ring-white/10 lg:ring-1 lg:p-2 lg:rounded-3xl lg:bg-gradient-to-t from-white/20 lg: rotate-12 hover:rotate-0 duration-500">
                        <img className="block ring-1 ring-white/10 rounded-2xl shadow-massive" src="/about/head6.svg" />
                    </div>
                </div>
            </div>
            <div className="grid gap-x-8 gap-y-16 text-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-24">
                {[
                    { label: "Projects Completed", value: "150+" },
                    { label: "Happy Clients", value: "120+" },
                    { label: "Team Members", value: "25+" },
                ].map((item, index) => (
                    <div key={index} className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <div className="order-first text-3xl font-semibold tracking-tight text-white font-display sm:text-5xl">
                            {item.value}
                        </div>
                        <div className="leading-7 text-neutral-300">{item.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Details;
