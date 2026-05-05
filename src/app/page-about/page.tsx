import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import About from "../section/home1/About";
import Award from "../section/home2/Award";
import Service from "../section/home1/Service";
import Teams from "../section/home2/Teams";

export const metadata = {
  title: `About Pages || ${SITE_NAME}`,
};

const AboutPage: React.FC = (): JSX.Element => {
    return (
        <>
        <LayoutWrapper FooterStyle="two">
            <PageTitle pageName="About Us" />
            <About />
            <Award />
            <Service />
            <Teams />
        </LayoutWrapper>
        </>
    );
};

export default AboutPage;