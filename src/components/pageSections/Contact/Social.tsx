import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getIcon } from "../../getIcon";
import social from "../../../../content/home/common/social.json";
import tw from "twin.macro";
import styled from "styled-components";

const { sites } = social;

const SocialLink = styled.a`
  margin-left: -8px;
  ${tw`text-4xl`}
`;

export const Social = () => (
  <div tw="flex justify-center gap-5 text-center md:justify-start">
    {sites.map(({ link, icon, alt }, key) => (
      <SocialLink
        href={link}
        key={key}
        target="_blank"
        rel="noopener"
        aria-label={alt}
        title={alt}
      >
        <FontAwesomeIcon icon={getIcon(icon)} fixedWidth />
      </SocialLink>
    ))}
  </div>
);
