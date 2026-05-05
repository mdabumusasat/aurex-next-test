
import React from 'react';
import { SITE_NAME } from "../app/Head";
import LayoutWrapper from './LayoutWrapper';
import Banner from "./section/home1/Banner";
import About from "./section/home1/About";
import Marquee from "./section/home1/Marquee";
import Service from "./section/home1/Service";
import Projects from "./section/home1/Projects";
import Works from "./section/home1/Works";
import Testimonial from "./section/home1/Testimonial";
import Clients from "./section/home1/Clients";
import Teams from "./section/home1/Teams";
import Award from "./section/home1/Award";
import Faq from "./section/home1/Faq";
import News from "./section/home1/News";
import Cta from "./section/home1/Cta";

export const metadata = {
  title: `Home Layout1 || ${SITE_NAME}`,
};

const Home: React.FC = (): JSX.Element => {
    return (
        <>
        <LayoutWrapper>
            <Banner />
            <About />
            <Marquee />
            <Service />
            <Projects />
            <Works />
            <Testimonial />
            <Clients />
            <Teams />
            <Award />
            <Faq />
            <News />
            <Cta />
        </LayoutWrapper>
        </>
    );
};

export default Home;