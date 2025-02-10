
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import sponsor1 from "@/../public/assets/1.svg"
import sponsor2 from "@/../public/assets/2.svg"
import sponsor3 from "@/../public/assets/3.svg"
import wid1 from "@/../public/uqi/banner1.jpg"
import wid2 from "@/../public/uqi/banner2.jpg"
import wid3 from "@/../public/uqi/banner3.jpg"
import wid4 from "@/../public/uqi/banner4.jpg"
import Link from 'next/link';

const Banner = () => {
    return (
        <div className='h-screen '>
            <div
                className="absolute inset-x-0 justify-center w-32 ml-auto rounded-lg opacity-50 bg-gradient-to-r from-neutral-100 via-neutral-300 to-neutral-800 h-42 right-52 top-64 lg:w-96 lg:h-96 blur-3xl">
            </div>
            <div className='flex flex-col lg:flex-row justify-between items-center h-full mt-20 lg:mt-0'>
                <div className='lg:w-1/2'>
                    <h1 className=" pb-2 text-5xl leading-normal font-normal tracking-tight text-transparent bg-gradient-to-r from-neutral-50 via-neutral-400 to-neutral-600 bg-clip-text font-display">
                        Inspiring Innovation
                    </h1>
                    <p className="md:w-4/5 mt-4 text-neutral-400">
                    We bridge imagination and technology, engineering digital experiences that blend creativity, precision, and unmatched scalability.
                    </p>
                    <div className='relative flex flex-col max-w-xl gap-2 mt-12 sm:flex-row'>
                        <Link href={'/contact'}><Button className='bg-gradient-to-b from-neutral-400 via-neutral-500 to-neutral-600'>Free Cunsultation</Button></Link>
                        <Link href={'/about'}><Button className='border border-neutral-700 bg-gradient-to-b from-neutral-800 to-neutral-900'>What we do?</Button></Link>
                    </div>

                    <div className=" justify-between  mt-12 -ml-4 lg:mt-24 flex">
                        <div>
                            <Image src={sponsor1} alt="Brand 1" />
                        </div>
                        <div>
                            <Image src={sponsor2} alt="Brand 2" />
                        </div>
                        <div>
                            <Image src={sponsor3} alt="Brand 3" />
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2 gap-2 grid grid-cols-2 my-5">
                    <div>
                        <div className="duration-500 lg:ring-white/10 lg:ring-1 lg:p-2 lg:rounded-3xl lg:bg-gradient-to-t from-white/20 hover:rotate-0 rotate-6">
                            <Image className="block ring-1 ring-white/10 rounded-2xl shadow-massive" src={wid2} alt='wid1' />
                        </div>
                    </div>
                    <div>
                        <div className="duration-500 lg:ring-white/10 lg:ring-1 lg:p-2 lg:rounded-3xl lg:bg-gradient-to-t from-white/20 hover:rotate-0 -rotate-12">
                            <Image className="block ring-1 ring-white/10 rounded-2xl shadow-massive" src={wid3} alt='wid2' />
                        </div>
                    </div>
                    <div>
                        <div className="duration-500 lg:ring-white/10 lg:ring-1 lg:p-2 lg:rounded-3xl lg:bg-gradient-to-t from-white/20 hover:rotate-0 -rotate-12">
                            <Image className="block ring-1 ring-white/10 rounded-2xl shadow-massive" src={wid4} alt='wid3' />
                        </div>
                    </div>
                    <div>
                        <div className="duration-500 lg:ring-white/10 lg:ring-1 lg:p-2 lg:rounded-3xl lg:bg-gradient-to-t from-white/20 hover:rotate-0 rotate-12">
                            <Image className="block ring-1 ring-white/10 rounded-2xl shadow-massive" src={wid1} alt='wid4' />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;