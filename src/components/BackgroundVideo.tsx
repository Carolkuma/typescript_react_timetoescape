
import React from 'react'
import VideoCover from "react-video-cover";
import { withPrefix } from "gatsby";
import { isMobile } from "react-device-detect";

const style = {
  height: "100%",
}

const getVideoPath = (
  path: string,
  ext: string,
  lowResolutionExt = ''
): string => withPrefix(`${path}${lowResolutionExt}${ext}`)

 const videoOptions = {
   autoPlay: true,
   muted: true,
   loop: true,
   playsInline: true,
 }




const BackgroundVideo = () => (
  <div
    className="absolute top-0 z-0 bg-dark overflow-hidden w-full"
    style={style}
  >
      <VideoCover
        videoOptions={{
          ...videoOptions,
          children: [
            <source
              key={1}
              src={getVideoPath("intro", ".webm", isMobile ? "_mobile" : "")}
            />,
            <source
              key={2}
              src={getVideoPath("intro", ".mp4", isMobile ? "_mobile" : "")}
            />,
          ],
        }}
        remeasureOnWindowResize
      />
  </div>
);


export default BackgroundVideo