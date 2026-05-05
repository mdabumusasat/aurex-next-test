import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import Banner from "../section/home2/Banner";
import About from "../section/home2/About";
import Funfact from "../section/home2/Funfact";
import Cta from "../section/home2/Cta";
import Service from "../section/home2/Service";
import Clients from "../section/home2/Clients";
import Projects from "../section/home2/Projects";
import Testimonial from "../section/home2/Testimonial";
import Teams from "../section/home2/Teams";
import Award from "../section/home2/Award";
import Contact from "../section/home2/Contact";
import News from "../section/home2/News";


export const metadata = {
  title: `Home Layout2 || ${SITE_NAME}`,
};

const Home2: React.FC = (): JSX.Element => {
  return (
    <LayoutWrapper FooterStyle="two">
      <Banner />
      <About />
      <Funfact />
      <Cta />
      <Service />
      <Clients />
      <Projects />
      <Testimonial />
      <Teams />
      <Award />
      <Contact />
      <News />
    </LayoutWrapper>
  );
};

export default Home2;