import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import dataMarket from "./dataMarket";
import MarketComponent from "./Marker";

// Solución para los iconos que no se muestran correctamente
import L from "leaflet";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const Maps = () => {
    return (
        <MapContainer
            center={[10.495087, -75.126380]}
            zoom={18}
            className="w-full h-full "
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {dataMarket.map((market, index) => (
                <MarketComponent 
                    key={index}
                    geometry={market.geometry}
                    description={market.description}
                />
            ))}
        </MapContainer>
    );
};

export default Maps;
