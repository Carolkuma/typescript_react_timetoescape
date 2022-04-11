import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getIcon } from "./getIcon";
import social from "../../content/home/common/social.json";
import "twin.macro";
const style = {
  marginLeft: "-8px",
};

const { sites } = social;

export const Social = () =>
  sites.map(({ link, icon, alt }, key) => (
    <a
      href={link}
      key={key}
      target="_blank"
      rel="noopener"
      tw="text-4xl mr-5"
      style={style}
      aria-label={alt}
      title={alt}
    >
      <FontAwesomeIcon icon={getIcon(icon)} fixedWidth />
    </a>
  ));
