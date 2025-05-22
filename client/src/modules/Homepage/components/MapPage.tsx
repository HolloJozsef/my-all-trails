import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import BackButton from "../../Core/BackButton";

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
    iconUrl: new URL("leaflet/dist/images/marker-icon.png", import.meta.url).toString(),
    iconRetinaUrl: new URL("leaflet/dist/images/marker-icon-2x.png", import.meta.url).toString(),
    shadowUrl: new URL("leaflet/dist/images/marker-shadow.png", import.meta.url).toString(),
});

const MapPage: React.FC = () => {
    const { state } = useLocation() as { state: { lat: number; lng: number } };
    const navigate = useNavigate();

    if (!state?.lat || !state?.lng) {
        return (
            <div className="p-4">
                <p className="text-red-500">Location data missing. Please return to the trail page.</p>
                <button
                    onClick={() => navigate(-1)}
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <div className="h-screen w-full relative">
            <BackButton />
            <div className="absolute inset-0">

            <MapContainer center={[state.lat, state.lng]} zoom={13} className="h-full w-full" zoomControl={false} >
                <ZoomControl position="bottomright" />
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                />
                <Marker position={[state.lat, state.lng]}>
                    <Popup>Trail starting point</Popup>
                </Marker>
            </MapContainer>
            </div>
        </div>
    );
};

export default MapPage;
