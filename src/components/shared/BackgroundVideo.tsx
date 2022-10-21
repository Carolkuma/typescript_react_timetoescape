import VideoCover from 'react-video-cover'
import { withPrefix } from 'gatsby'
import { isMobile } from 'react-device-detect'
import styled from 'styled-components'

const getVideoPath = (path: string, ext: string, lowResolutionExt = ''): string =>
  withPrefix(`${path}${lowResolutionExt}${ext}`)

const videoOptions = {
  autoPlay: true,
  muted: true,
  loop: true,
  playsInline: true,
}

const VideoContainer = styled.div`
  top: 0;
  flex: 1 1;
  position: absolute;
  height: 100%;
  width: 100%;
`

const SUPPORTED_EXTENSIONS = ['.webm']

export const BackgroundVideo = () => (
  <VideoContainer>
    <VideoCover
      videoOptions={{
        ...videoOptions,
        children: SUPPORTED_EXTENSIONS.map((ext, i) => (
          <source key={i} src={getVideoPath('intro', ext, isMobile ? '_mobile' : '')} />
        )),
      }}
      remeasureOnWindowResize
    />
  </VideoContainer>
)

export default BackgroundVideo
