import React, { Component } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { withPrefix } from 'gatsby'
import handleViewport from 'react-in-viewport'
import L from 'leaflet'
import { isMobile } from 'react-device-detect'
import { ErrorBoundary } from '../../ErrorBoundary'
import styled from 'styled-components'
import tw from 'twin.macro'
import 'leaflet/dist/leaflet.css'

const MapWrapper = styled.div`
  height: 15.35rem;
  width: 100%;
  z-index: 1;
  ${tw`hidden md:block`}
`

interface Props {
  enterCount: number
  inViewport: boolean
  coordinates: {
    lat: number
    lng: number
  }
  zoom: number
  forwardedRef: any
}

const icon = new L.Icon({
  iconUrl: withPrefix('/marker-icon.svg'),
})

const attribution = '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

export class LeafletMap extends Component<Props> {
  render() {
    const { coordinates, zoom, enterCount } = this.props

    const { lat, lng } = coordinates

    const position: L.LatLngExpression = [lat, lng]
    const insertMap = enterCount > 0 && !isMobile

    return (
      <MapWrapper>
        {insertMap ? (
          <ErrorBoundary>
            <MapContainer
              center={position}
              zoom={zoom}
              zoomControl={false}
              dragging={false}
              boxZoom={false}
              style={{ height: '100%' }}
            >
              <TileLayer attribution={attribution} url={url} />
              <Marker position={position} icon={icon} />
            </MapContainer>
          </ErrorBoundary>
        ) : null}
      </MapWrapper>
    )
  }
}

export default handleViewport(LeafletMap)
