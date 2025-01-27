import React from 'react';
import AboutTitle from './AboutTitle';
import Details from './Details';
// import Contact from './Contact';

const About = () => {
    return (
        <div className='mt-40 mx-5'>
            <AboutTitle />
            <Details />
            {/* <Contact /> */}
        </div>
    );
};

export default About;