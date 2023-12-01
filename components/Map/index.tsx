import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import L, { LatLngExpression, LeafletMouseEvent } from "leaflet";
import "leaflet/dist/leaflet.css";

const customMarkerIcon = new L.Icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [32, 32], // Width and height of the icon
  iconAnchor: [16, 32], // Position of the icon anchor (centered at the bottom)
  popupAnchor: [0, -32], // Position of the popup anchor (above the icon)
});

const Map: React.FC<{
  onMarkerPositionChange: (newMarkerPosition: [number, number]) => void;
}> = ({ onMarkerPositionChange }) => {
  const [markerPosition, setMarkerPosition] = useState<LatLngExpression>([
    35.76653945, 51.4749824,
  ]);

  console.log(markerPosition);
  const handleMarkerDragEnd = (event: LeafletMouseEvent) => {
    const { lat, lng } = event.target.getLatLng();
    const newMarkerPosition: [number, number] = [lat, lng];
    setMarkerPosition(newMarkerPosition);
    onMarkerPositionChange(newMarkerPosition);
  };

  const handleMapClick = (event: LeafletMouseEvent) => {
    const { lat, lng } = event.latlng;
    const newMarkerPosition: [number, number] = [lat, lng];
    setMarkerPosition(newMarkerPosition);
    onMarkerPositionChange(newMarkerPosition);
  };

  const ChangeView: React.FC<{ zoom: number }> = ({ zoom }) => {
    const map = useMapEvents({
      click: (event: LeafletMouseEvent) => {
        const { lat, lng } = event.latlng;
        const newMarkerPosition: [number, number] = [lat, lng];
        setMarkerPosition(newMarkerPosition);
        onMarkerPositionChange(newMarkerPosition);
        map.setView([lat, lng], zoom);
      },
    });

    return null;
  };

  return (
    <MapContainer
      // @ts-ignore
      center={markerPosition}
      zoom={15}
      style={{ height: "300px", width: "100%" }}
      onClick={handleMapClick}
    >
      <ChangeView zoom={15} />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker
        // @ts-ignore
        draggable
        icon={customMarkerIcon}
        position={markerPosition}
        onDragend={handleMarkerDragEnd}
      />
    </MapContainer>
  );
};

export default Map;
