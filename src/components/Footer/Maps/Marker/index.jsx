import { Marker, Popup } from "react-leaflet";

const MarketComponent = (props) => {
    return (
        <Marker position={props.geometry}>
            <Popup>
                {props.description}
            </Popup>
        </Marker>
    );
};

export default MarketComponent
