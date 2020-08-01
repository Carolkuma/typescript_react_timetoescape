
import React from 'react'
import VideoCover from "react-video-cover";
import { withPrefix } from "gatsby";
import { isMobile } from "react-device-detect";

const style = {
  height: "100%",
};

 const videoOptions = {
   src: withPrefix("/cover.mp4"),
   autoPlay: true,
   muted: true,
   loop: true,
   playsInline: true,
 };

const BackgroundVideo = () => (
  !isMobile   ? <div className="absolute top-0 z-0 overflow-hidden w-full" style={style}>
    <VideoCover videoOptions={videoOptions} remeasureOnWindowResize />
  </div>
  : null
);

export default BackgroundVideo