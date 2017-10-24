import React from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';
import pin from '../images/icons/map_pin.png';


const GMaps = withScriptjs(
                withGoogleMap(props =>
                    <GoogleMap defaultZoom={15} defaultCenter={{ lat: 43.738725, lng: 7.419143 }}>
                        <Marker icon={pin} position={{ lat: 43.738725, lng: 7.419143 }}/>
                    </GoogleMap>
                )
            );

export default GMaps;