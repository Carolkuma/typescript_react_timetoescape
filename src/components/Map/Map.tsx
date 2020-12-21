

import React from "react";

import { Overlay } from "./Overlay";
import loadable from "@loadable/component";
const LeafletMap = loadable(() => import("./LeafletMap"));

interface props  {
  coordinates: {
    lat: number,
    lng: number,
  },
  zoom: number,
  link?: string,
  label?: string,
};

export const GMap = ({ zoom, link, label, coordinates }: props) => {
  return (
    <Overlay label={label} link={link}>
      <LeafletMap coordinates={coordinates} zoom={zoom}/>
    </Overlay>
  );
};

GMap.defaultProps = {
  zoom: 16,
};




