
import React from 'react'
import VideoCover from "react-video-cover";
import { withPrefix } from "gatsby";
import { isMobile } from "react-device-detect";

const style = {
  height: "100%",
  backgroundImage: `url('${withPrefix('/intro.jpg')}')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

 const videoOptions = {
   src: withPrefix("/intro.mp4"),
   autoPlay: true,
   muted: true,
   loop: true,
   playsInline: true,
 };

const BackgroundVideo = () =>
 <div className="absolute top-0 z-0 bg-dark overflow-hidden w-full" style={style}>
     {!isMobile   ?  <VideoCover videoOptions={videoOptions} remeasureOnWindowResize />
     : null}
 </div>


export default BackgroundVideo