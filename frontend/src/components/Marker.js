import React, { useState } from 'react';
import { MarkerF, InfoWindowF } from '@react-google-maps/api';

function Marker(props) {
  const [windowOpen, setOpen] = useState(false);

  const handleMouseOver = (e) => {
    setOpen(true);
  };

  const handleMouseOut = () => {
    setOpen(false);
  };
  console.log(props.lat, props.lng)

  return (
    <>
      <MarkerF
        position={{ lat: props.lat, lng: props.lng }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {windowOpen && (
          <InfoWindowF
            onCloseClick={() => setOpen(false)}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <div>
              <div className = "marker-container">
                <h3>{props.apartment}</h3>
              </div>
              <p>{props.address}</p>
            </div>
          </InfoWindowF>
        )}
      </MarkerF>
    </>
  );
}

export default Marker;
