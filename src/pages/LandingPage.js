import React, { useEffect } from "react";
import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/Hero.js";
import FeatureStats from "components/FeatureStats.js";
import Features from "components/Features.js";
import MainFeature from "components/MainFeature.js";
import MainFeature2 from "components/MainFeature2.js";
import Testimonial from "components/Testimonial.js";
import FAQ from "components/FAQ.js";
import GetStarted from "components/GetStarted";
import Footer from "components/Footer.js";
import heroScreenshotImageSrc from "images/about.svg";
import prototypeIllustrationImageSrc from "images/join.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import DownloadApp from "components/DownloadApp";
//import ReactGA from "react-ga";

//ReactGA.initialize('UA-236054729-1');
export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  // useEffect(() => {
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  // }, []);

  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton={true} />
      
      <DownloadApp/>
     
      
      <Features
        subheading={<Subheading>Features</Subheading>}
        heading={
          <>
            Our plethora of Medical <HighlightedText>Services.</HighlightedText>
          </>
        }
      />
      <MainFeature
        subheading={<Subheading>Our Platform</Subheading>}
        imageSrc={heroScreenshotImageSrc}
        imageBorder={true}
        imageDecoratorBlob={true}
      />
      {/* <FeatureWithSteps
        subheading={<Subheading>STEPS</Subheading>}
        heading={
          <>
            Easy to <HighlightedText>Get Started.</HighlightedText>
          </>
        }
        textOnLeft={false}
        imageSrc={macHeroScreenshotImageSrc}
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      /> */}
      <FeatureStats/>
      <MainFeature2
        subheading={<Subheading>ETHICS</Subheading>}
        heading={
          <>
            We believe in our <HighlightedText>Ethics.</HighlightedText>
          </>
        }
        imageSrc={prototypeIllustrationImageSrc}
        showDecoratorBlob={false}
        features={[
          {
            Icon: MoneyIcon,
            title: "Affordable",
            description: "We promise to offer you the best rate we can - at par with the industry standard.",
            iconContainerCss: tw`bg-green-300 text-green-800`
          },
          {
            Icon: BriefcaseIcon,
            title: "Professionalism",
            description: "We assure you that our Doctor are verified through a robust process.",
            iconContainerCss: tw`bg-red-300 text-red-800`
          }
        ]}
      />
     
      <Testimonial
        subheading={<Subheading>Testimonials</Subheading>}
        heading={
          <>
            Here’s what our users have to <HighlightedText>Say.</HighlightedText>
          </>
        }
        testimonials={[
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
            heading: "Amazing User Experience",
            quote:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
            customerName: "Charlotte Hale",
            customerTitle: "Director, Delos Inc."
          },
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
            heading: "Love the Developer Experience and Design Principles !",
            quote:
              "Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            customerName: "Adam Cuppy",
            customerTitle: "Founder, EventsNYC"
          }
        ]}
      />
      <FAQ
        subheading={<Subheading>FAQS</Subheading>}
        heading={
          <>
            You have <HighlightedText>Questions ?</HighlightedText>
          </>
        }
      />
      <GetStarted/>
      <Footer />
    </AnimationRevealPage>
  );
}
