import GradientTitle from '@/components/custom/grad-title';
import React, { JSX } from 'react';
import { FiSettings, FiMessageCircle, FiFileText, FiMonitor, FiActivity, FiUsers } from 'react-icons/fi';


interface CardProps {
    icon: JSX.Element;
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
    return (
        <div className="bg-gradient-to-b from-[#101010] to-neutral-900 p-3 md:p-8 border border-neutral-800 rounded-2xl shadow-sm space-y-4">
            <div className='p-2 bg-neutral-800 border border-neutral-700 rounded-full w-fit'>
            <div className="text-gray-200 text-xl">{icon}</div>
            </div>
            <h3 className="text-white text-lg ">{title}</h3>
            <p className="text-neutral-400 text-sm">{description}</p>
        </div>
    );
};



const Features: React.FC = () => {
    const features = [
        {
            icon: <FiSettings />,
            title: 'Tailored Solutions',
            description: 'Tailored software solutions to streamline your business operations and enhance efficiency.',
        },
        {
            icon: <FiMessageCircle />,
            title: 'Web & Mobile App Development',
            description: 'Responsive, high-performance web and mobile applications designed for an exceptional user experience.',
        },
        {
            icon: <FiFileText />,
            title: 'UI/UX Design',
            description: 'Intuitive and visually appealing designs that enhance user engagement and brand identity.',
        },
        {
            icon: <FiMonitor />,
            title: 'Cloud Solutions',
            description: 'Scalable cloud infrastructure and services to optimize performance and security.',
        },
        {
            icon: <FiActivity />,
            title: 'E-commerce Development',
            description: 'Feature-rich online stores with secure payment integrations for seamless shopping experiences',
        },
        {
            icon: <FiUsers />,
            title: 'IT Consulting & Support',
            description: 'Expert guidance and ongoing support to help businesses navigate digital transformation.',
        },
    ];
    

    return (
        <section className=" text-gray-100">
            <div className="max-w-6xl mx-auto space-y-2">
                <div className='bg-gradient-to-b from-black to-neutral-800 rounded-3xl border border-neutral-800'>
                    <div className="bg-gradient-to-b from-neutral-950 to-neutral-800 rounded-2xl border border-neutral-800 shadow-md m-[6px] text-center space-y-4 ">
                        <div className='md:w-1/2 mx-auto py-10'>
                            <GradientTitle text='Where Ideas Meet Execution' />
                            <p className="text-neutral-400">Transforming challenges into seamless and impactful digital experiences.</p>
                        </div>
                    </div>
                </div>
                <div className='bg-gradient-to-b from-black to-neutral-800 rounded-3xl border border-neutral-800'>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[6px] m-[6px]">
                        {features.map((feature, index) => (
                            <Card
                                key={index}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
