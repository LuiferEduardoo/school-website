import { Marker, Popup } from "react-leaflet";

const MarketComponent = (props) => {
    return (
        <>
            {props.locations.map((location, index) => (
                <Marker
                    key={index}
                    position={location.geometry}
                >
                    <Popup>
                        {location.description}
                    </Popup>
                </Marker>
            ))}
        </>
    );
};

export default MarketComponent
