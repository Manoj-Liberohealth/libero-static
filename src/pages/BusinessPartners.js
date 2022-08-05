import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/light.js";
import Footer from "components/Footer.js";
import MainFeature1 from "components/MainFeature.js";
import Features from "components/AboutFeatures.js";


import SupportIconImage from "images/icons/support.svg";
import ShieldIconImage from "images/icons/strong-team.svg";
import CustomerLoveIconImage from "images/icons/satisfaction.svg";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  return (
    <AnimationRevealPage>
      <Helmet>
        <title>Libero Health Business Partners</title>
        <meta
          name="description"
          content="Libero Health is a health care platform that connects patients and providers. We are a team of health care providers and patients who are passionate about helping each other." />
        <meta name="keywords" content="Health insurance, Non-emergency transport, Online pharmacy, Meditation, Mindfulness, Mental health, Health accommodation" />
      </Helmet>
      <Header />
      <MainFeature1
        subheading={false}
        heading={<>Become a <HighlightedText>Business Partner</HighlightedText></>}
        buttonRounded={false}

        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />
      <MainFeature1
        subheading={<Subheading>Benefits</Subheading>}
        heading="We can together create a difference"
        buttonRounded={false}
        primaryButtonText="Contact Us"
        imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
        textOnLeft={false}
      />
      <Features
        subheading={<Subheading>Avenues</Subheading>}
        heading="We offer."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "24/7 Support",
            description: "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport"
          },
          {
            imageSrc: ShieldIconImage,
            title: "Strong Teams",
            description: "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport"
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Customer Satisfaction",
            description: "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport"
          },
        ]}
        linkText=""
      />

      <Footer />
    </AnimationRevealPage>
  );
};
