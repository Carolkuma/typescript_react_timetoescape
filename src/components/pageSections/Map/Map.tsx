import { Overlay } from "./Overlay";
import loadable from "@loadable/component";
const LeafletMap = loadable(() => import("./LeafletMap"));

interface Props {
  coordinates: {
    lat: number;
    lng: number;
  };
  zoom: number;
  link: string;
  label: string;
}

export const Map = ({ zoom = 16, link, label, coordinates }: Props) => (
  <Overlay label={label} link={link}>
    <LeafletMap coordinates={coordinates} zoom={zoom} />
  </Overlay>
);
