import GradientTitle from '@/components/custom/grad-title';
import React from 'react';

const AboutTitle = () => {
    return (
        <div>
            <div className="text-center">
                <GradientTitle className="text-2xl md:text-3xl lg:text-6xl lg:w-2/5 mx-auto leading-none" text="UQIDEV" />
                <p className="mt-4 text-neutral-300 mx-auto lg:w-1/3">
                    Empowering businesses with cutting-edge web solutions to enhance their brand and digital presence.
                </p>
            </div>
        </div>
    );
};

export default AboutTitle;