import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import defaultCardImage from "images/shield-icon.svg";

// import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";
import TelehealthIcon from "images/icons/telehealth.svg"
import AppointIcon from "images/icons/appointment.svg"
import EHRIcon from "images/icons/ehr.svg"
import PharmaIcon from "images/icons/pharmacy.svg"
import PayIcon from "images/icons/payment.svg"
import PrescriptionIcon from "images/icons/prescription.svg"


const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose`}
  }
`;

// const DecoratorBlob = styled(SvgDecoratorBlob3)`
//   ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
// `;

export default ({ cards = null, heading = "Amazing Features", subheading = "Features", description = "" }) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {
      imageSrc: TelehealthIcon,
      title: "Telehealth",
      description: "We present to you our telehealth facility which allows/facilitates you to connect with over 1200+ providers and 9000 doctors all over the country. Get access to the best doctors in your country with the click of a button from the comfort of your own home."
    },
    { imageSrc: AppointIcon, title: "Appointments", description: "Are you having to visit various doctors all around the city? Remove the hassle of having to call various centers to book appointments! We provide you the facility of booking all your doctor appointments within a jiffy." },
    { imageSrc: EHRIcon, title: "Electronic Health Record", description: "We collect all your prescriptions and create an archive of all your records that are at your perusal 24x7! Now, you can sit back hassle-free and analyze your medical history. And do not worry about privacy. All your data remains with us, safe and secure!" },
    { imageSrc: PharmaIcon, title: "ePharmacy", description:"Get real-time updates and manage all of them seamlessly across various devices. Just book an appointment once and count on us to keep giving you constant reminders regarding the same. We save you off the trouble of checking on your appointments repeatedly." },
    { imageSrc: PayIcon, title: "Seamless Payments", description:"Just like you, we too realize that payments can make you anxious. So we introduce to you same day settlements and state of art payment gateways. This will aid your payment process and leave you hassle-free." },
    { imageSrc: PrescriptionIcon, title:"Electronic Prescription", description: "Do you wish to save paper? Go paperless by collecting all your prescriptions on our site. This would also be helpful when you are out of town and want someone to take your dependents for a check-up." },
   
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container>
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      {/* <DecoratorBlob /> */}
    </Container>
  );
};
