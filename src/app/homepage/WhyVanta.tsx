import GradientTitle from '@/components/custom/grad-title';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const WhyVanta = () => {
    return (
        <div>
            <div className='bg-gradient-to-b from-black to-neutral-800 rounded-3xl border border-neutral-800'>
                <div className="bg-gradient-to-b from-neutral-950 to-neutral-800 rounded-2xl border border-neutral-800 shadow-md m-[6px] flex flex-col lg:flex-row space-y-4 p-3 md:px-8 py-16 ">
                    <div className='lg:w-1/2 '>
                        <GradientTitle text='Why Partner with Uqidev?' />
                        <p className="text-neutral-400">Experience a seamless fusion of creativity, innovation, and technical expertise, delivering tailored solutions that elevate your brand and accelerate your success</p>
                    </div>
                    <div className='relative flex  gap-2 mt-12 justify-start md:justify-center items-center lg:w-1/2'>
                        <Link href={'/about'}><Button className='bg-gradient-to-b from-neutral-400 via-neutral-500 to-neutral-600'>Learn More</Button></Link>
                        <Link href={'/contact'}><Button className='border border-neutral-700 bg-gradient-to-b from-neutral-800 to-neutral-900'>Get in touch</Button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyVanta;