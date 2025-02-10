import GradientTitle from '@/components/custom/grad-title';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const WhyVanta = () => {
    return (
        <div>
            <div className='bg-gradient-to-b from-black to-neutral-800 rounded-3xl border border-neutral-800'>
                <div className="bg-gradient-to-b from-neutral-950 to-neutral-800 rounded-2xl border border-neutral-800 shadow-md m-[6px] flex flex-col lg:flex-row space-y-4 p-3 md:px-8 py-16 ">
                    <div className=' '>
                        <GradientTitle text='WE OFFER ' />
                        <p className="text-neutral-400">
                        🚀 Innovative Solutions – We craft cutting-edge software tailored to your business needs. <br />

💡 Expert Team – Skilled developers, designers, and strategists committed to excellence. <br />

⚡ Scalable & Secure – Future-proof, high-performance, and secure digital solutions. <br />

📈 Business-Centric Approach – We align technology with your goals for maximum impact. <br />

🔧 Ongoing Support – Reliable maintenance and support to keep your systems running smoothly. <br />

🤝 Client-First Mindset – Transparent communication and dedicated service, ensuring your success.

                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default WhyVanta;