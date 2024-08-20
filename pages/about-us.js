import React from 'react';
import NavbarStyleTwo from '../components/_App/NavbarStyleTwo';
import PageBanner from '../components/Common/PageBanner';
import AboutContent from '../components/AboutUs/AboutContent';
import TestimonialStyleTwo from '../components/Common/TestimonialStyleTwo';
import Footer from '../components/_App/Footer';

const AboutUs = () => {
    return (
        <>
			<NavbarStyleTwo />

			<PageBanner 
                pageTitle="About Us" 
            />  
            
            <AboutContent />

            <TestimonialStyleTwo />
		  
			<Footer />
		</>
    )
}

export default AboutUs;