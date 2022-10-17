import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

interface Props {
  mainSrc: string;
  nextSrc: string;
  prevSrc: string;
  onCloseRequest: () => void;
  onMoveNextRequest: () => void;
}

const LightBoxGallery = (props: Props) => <Lightbox {...props} />;

export default LightBoxGallery;
