// MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function ContactMap() {
    const tamilNaduCoordinates = [10.3623, 77.9690]; // Coordinates for Tamil Nadu
    
    return (
      <div className="map-directions">
        <MapContainer center={tamilNaduCoordinates} zoom={7} style={{ height: "400px" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={tamilNaduCoordinates}>
            <Popup>
              Tamil Nadu, India
            </Popup>
          </Marker>
        </MapContainer>
        <p>Tamil Nadu, India</p>
      </div>
    );
}

export default ContactMap;
