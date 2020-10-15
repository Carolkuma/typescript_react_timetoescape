
import React from 'react'
import VideoCover from "react-video-cover";
import { withPrefix } from "gatsby";
import { isMobile } from "react-device-detect";

const style = {
  height: "100%",
}

 const videoOptions = (lowResolution: boolean) => { return {
   src: lowResolution ? withPrefix("/intro_mobile.mp4") : withPrefix("/intro.mp4"),
   autoPlay: true,
   muted: true,
   loop: true,
   playsInline: true,
 }}

 let preloadVideo = true;
 const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
 if (connection) {
   if (connection.effectiveType === 'slow-2g') {
     preloadVideo = false;
   }
 }


const BackgroundVideo = () =>
 <div className="absolute top-0 z-0 bg-dark overflow-hidden w-full" style={style}>
    {preloadVideo ? <VideoCover videoOptions={videoOptions(isMobile)} remeasureOnWindowResize /> : null }
 </div>


export default BackgroundVideo