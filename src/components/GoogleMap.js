import React from 'react'
import GoogleMapReact from 'google-map-react'
import logo from '../images/logo2.png';

const styles = {
  logo: {
    width: 70,
    height: 70,
    backgroundImage: `url(${logo})`,
  }
}

const defaultProps = {
  center: {
    lat: 40.468418,
    lng: -74.360347
  },
  zoom: 16,
}

const AnyReactComponent = ({ text }) => <div style={styles.logo}>{text}</div>

const GoogleMap = () => (
  <div style={{ height: '70vh', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: `${process.env.GOOGLE_API}` }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent
        lat={40.468418}
        lng={-74.360347}
      />
    </GoogleMapReact>
  </div>
)

export default GoogleMap