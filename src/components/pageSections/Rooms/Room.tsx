import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import "twin.macro";
import { BookingButton } from "../../shared/BookingButton";
import Img from "gatsby-image";

interface Props {
  optImage: any;
  title: string;
  description: string;
}

const RoomWrapper = styled.div`
  flex-direction: row-reverse;
  ${tw`text-center md:text-left md:flex`}
`;

const RoomImageWrapper = styled.div`
  ${tw`w-full lg:w-1/3 self-center p-5`}
`;

const RoomTextWrapper = styled.div`
  ${tw`w-full lg:w-2/3 self-center p-5`}
`;

export const Room = ({ optImage, title, description }: Props) => {
  return (
    <RoomWrapper>
      <RoomImageWrapper>
        <Img
          fluid={optImage.node.childImageSharp.fluid}
          alt={title}
          tw="w-1/2 mx-auto md:w-auto"
        />
      </RoomImageWrapper>
      <RoomTextWrapper>
        <h3 tw="text-3xl" className="alt-font">
          {title}
        </h3>
        <p tw="mt-6 mb-10 md:text-lg">{description}</p>
        <BookingButton />
      </RoomTextWrapper>
    </RoomWrapper>
  );
};
