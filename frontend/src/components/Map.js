import { GoogleMap, useLoadScript} from "@react-google-maps/api";
import Marker from './Marker.js';
import "./components.css";

export default function Map(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <MadeMap {...props} />;
}

function MadeMap(props) {
  const center = { lat: props.lat, lng: props.lng };
  return (
    <GoogleMap
      zoom={16}
      center={center}
      mapContainerClassName="map-container"
    >
      <Marker lat={props.lat} lng={props.lng} apartment={"Lark Austin"} address={"123 Guadalupe St"}/>
    </GoogleMap>
  );
}
