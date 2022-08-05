import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React, { useEffect } from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

import { Routes, Route,HashRouter } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import About from 'pages/AboutUs'
import Contact from 'pages/ContactUs'
import Business from "pages/BusinessPartners";
import Provider from "pages/HealthcareProviders"
import ScrollToTop from "components/ScrollToTop";
import ReactGA from "react-ga";
import { Helmet, HelmetProvider } from "react-helmet-async";

//const TRACKING_ID = "G-1G1VLQMZRB";
const TRACKING_ID = "UA-219286599-1";
ReactGA.initialize(TRACKING_ID);

export default function App() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  return (
    <HelmetProvider>
      <Helmet>
        <title>Libero Health</title>
        <meta name="description" content="Libero Health is a health care platform that connects patients and providers. We are a team of health care providers and patients who are passionate about helping each other." />
        <meta name="keywords" content="Libero Health, Connected health platform, Patient centred; Patient centric, Patient centred connected health"/>
      </Helmet>
      <ScrollToTop>
        <Routes >
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/business-partner" element={<Business />} />
          <Route path="/healthcare-provider" element={<Provider />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<LandingPage />} />
          {/* <Route path="/contact" element={<ContactUs/>} /> */}
        </Routes>
      </ScrollToTop>
    </HelmetProvider>

  );
}