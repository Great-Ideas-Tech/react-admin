// MapComponent.jsx
import React from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { scaleLinear } from 'd3-scale';

const geoUrl = "https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson";

const markers = [
  { coordinates: [10, 20], name: "Marker 1" },
  { coordinates: [-30, -40], name: "Marker 2" },
];

const Worldmap = () => {
  return (
    <div style={{ width: '100%', height: '500px' }}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 200 }}
        width={800}
        height={600}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#D6D6DA"
                stroke="#FFFFFF"
                strokeWidth={0.5}
              />
            ))
          }
        </Geographies>
        {markers.map(({ coordinates, name }, i) => (
          <Marker key={i} coordinates={coordinates}>
            <circle r={5} fill="#F00" />
            <text textAnchor="middle" y={-10} style={{ fontSize: '10px', fill: '#000' }}>
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default Worldmap;
