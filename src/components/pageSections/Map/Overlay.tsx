import React from "react";
import Button, { ButtonElement } from "../../shared/Button";
import { isDesktop } from "react-device-detect";
import "twin.macro";
import styled from "styled-components";
import tw from "twin.macro";
interface props {
  link: string;
  label: string;
  children?: JSX.Element | JSX.Element[];
}

const styles = {
  height: "100%",
  width: "100%",
  transition: "opacity ease 0.5s",
  zIndex: 2,
};

const OverlayWrapper = styled.div`
  height: 100%;
  width: 100%;
  transition: opacity ease 0.5s;
  z-index: 2;
  ${tw`md:absolute  md:bg-opacity-75 md:bg-dark flex content-center justify-center items-center opacity-100 md:opacity-0 hover:opacity-100`}
`;

export const Overlay = ({ children, link, label }: props) => (
  <a href={link} target="_blank" rel="noopener noreferrer" tw="cursor-pointer">
    <div tw="flex relative">
      {isDesktop === true ? (
        <>
          <OverlayWrapper>
            <Button element={ButtonElement.DIV}>{label}</Button>
          </OverlayWrapper>
          {children}
        </>
      ) : (
        <Button element={ButtonElement.DIV} tw="mx-auto">
          {label}
        </Button>
      )}
    </div>
  </a>
);
