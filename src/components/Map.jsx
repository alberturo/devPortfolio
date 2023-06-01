import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  Marker,
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      // projection="geoAzimuthalEqualArea"
      projection="geoAlbers"
      projectionConfig={{
        scale: 700,
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies
        geography="/features.json"
        fill="#2C065D"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Marker coordinates={[-80.19362, 25.7741728]}>
        <circle r={8} fill="#F53" />
      </Marker>
      <Annotation
        subject={[-80.19362, 25.7741728]}
        dx={-80}
        dy={-30}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Miami"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
