import React from 'react';
import HomeBanner from "../Components/HomeBanner/HomeBanner";
import NavComponent from "../Components/Navigation/NavComponent";
import AboutComponent from "../Components/AboutComponent/AboutComponent";
import ServiceComponent from "../Components/ServiceCompoenent/ServiceComponent";
import PortFolioComponent from "../Components/PortfolioComponent/PortFolioComponent";
import ClientComponent from "../Components/ClientsComponent/ClientComponent";
import TestimonialComponent from "../Components/TestiMonialComponent/TestimonialComponent";
import ContactComponent from "../Components/ContactComponent/ContactComponent";
import BlogComponent from "../Components/BlogComponent/BlogComponent";
import FooterComponent from "../Components/FooterComponent/FooterComponent";

function HomePage(props) {
    return (
        <>
            <HomeBanner/>
            <NavComponent/>
            <AboutComponent/>
            <ServiceComponent/>
            <PortFolioComponent/>
            <ClientComponent/>
            <TestimonialComponent/>
            <ContactComponent/>
            <BlogComponent/>
            <FooterComponent/>
        </>
    );
}

export default HomePage;