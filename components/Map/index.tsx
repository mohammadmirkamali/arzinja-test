import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L, { LatLngExpression, LeafletMouseEvent } from "leaflet";
import "leaflet/dist/leaflet.css";

const customMarkerIcon = new L.Icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const Map: React.FC<{
  onMarkerPositionChange: (newMarkerPosition: [number, number] | null) => void;
}> = ({ onMarkerPositionChange }) => {
  const initialPosition: [number, number] = [35.76653945, 51.4749824];
  const [markerPosition, setMarkerPosition] =
    useState<LatLngExpression>(initialPosition);

  const handleMarkerDragEnd = (event: LeafletMouseEvent) => {
    const { lat, lng } = event.target.getLatLng();
    const newMarkerPosition: [number, number] = [lat, lng];
    setMarkerPosition(newMarkerPosition);
    onMarkerPositionChange(newMarkerPosition);
  };

  const ChangeView: React.FC = () => {
    const map = useMapEvents({
      click: (event: LeafletMouseEvent) => {
        const { lat, lng } = event.latlng;
        const newMarkerPosition: [number, number] = [lat, lng];
        setMarkerPosition(newMarkerPosition);
        onMarkerPositionChange(newMarkerPosition);
        map.setView([lat, lng]);
      },
    });

    return null;
  };

  useEffect(() => {
    onMarkerPositionChange(initialPosition);
  }, []); // eslint-disable-line

  return (
    <MapContainer
      center={markerPosition}
      zoom={15}
      style={{ height: "300px", width: "100%" }}
    >
      <ChangeView />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker
        draggable
        eventHandlers={{
          dragend: handleMarkerDragEnd as any,
        }}
        icon={customMarkerIcon}
        position={markerPosition}
      />
    </MapContainer>
  );
};

export default Map;
