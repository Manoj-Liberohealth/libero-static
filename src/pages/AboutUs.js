import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/light.js";
import Footer from "components/Footer.js";
import MainFeature1 from "components/MainFeature.js";
import Features from "components/AboutFeatures.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";

import SupportIconImage from "images/icons/support.svg";
import ShieldIconImage from "images/icons/strong-team.svg";
import CustomerLoveIconImage from "images/icons/satisfaction.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;

export default () => {

  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading>Connected Health</Subheading>}
        heading="Disrupting the healthcare space- Connected Health"
        buttonRounded={false}
        primaryButtonText="See Portfolio"
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        description="This term has been increasingly used in recent times to describe this new technology enabled model of health care delivery. It encompasses the use of terms like wireless, tele-health, digital and electronic services to ease out the treatment process for our patients. We aim to integrate the various services involved in medication, such as, consultation, checking patient history and medicine delivery in a seamless and paperless process. Want to know more about this upcoming concept? Read this article by the experts of Deloitte: https://www2.deloitte.com/content/dam/Deloitte/uk/Documents/life-sciences-health-care/deloitte-uk-connected-health.pdf"
      />
      <MainFeature1
        subheading={<Subheading>Our Story</Subheading>}
        heading="What inspires us"
        buttonRounded={false}
        primaryButtonText="Contact Us"
        imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
        textOnLeft={false}
        description='Innovative linked health platform services are being built by Libero Health, a cutting-edge health technology and services startup that provides scalable solutions for patients, healthcare providers, and business partners of all sizes. By carefully listening to patients and comprehending their expectations for our product, we were able to develop our answers. We are skilled at analyzing this data in order to tailor our services to the demands of the patients. Why not use our system? To find out more about the Libero Health story, get in touch right away.'
      />
      <Features
        subheading={<Subheading>Our Values</Subheading>}
        heading="We are always happy to help"
        description="Our company believes in creating more informed customers so that they are well aware of what they’re signing up for. Hence, we have these facilities just for you!"
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "24/7 Support",
            description: "Need medical aid at 3 am? With us, no hours are odd hours! Libero Health is always ready to the rescue of its customers. Call us anytime for help on: 0101010101."
          },
          {
            imageSrc: ShieldIconImage,
            title: "Strong Teams",
            description: "Alone we can do so little, together we can do so much. It is important to work in a group to bring the best. We have a team of capable colleagues who work together tirelessly to bring forth these services to you."
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Customer Satisfaction",
            description: "We trust that consistency leads to success. And our success is defined by your well being! We are doing our level best to bring premium medical services to your town for you to have a safe and easy medical procedure."
          },
        ]}
        linkText=""
      />
      <TeamCardGrid 
        subheading={<Subheading>Our Team</Subheading>}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
