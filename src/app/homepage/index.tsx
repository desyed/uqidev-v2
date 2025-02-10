import React from 'react';
import Banner from './Banner';
import Features from './Features';
import CoursesSection from './Courses';
import WhyVanta from './WhyVanta';
import SkillJourney from './SkillJourney';
import Pricing from './Pricing';

const Homepage = () => {
    return (
        <div className='space-y-20 md:space-y-40 mx-5'>
            <Banner />
            <Features />
            {/* <CoursesSection /> */}
            <WhyVanta />
            <SkillJourney />
            {/* <Pricing /> */}
        </div>
    );
};

export default Homepage;