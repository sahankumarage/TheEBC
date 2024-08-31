import React, { useEffect, useRef } from "react";

const StyledMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const initMap = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: -33.86, lng: 151.209 },
        zoom: 13,
        mapTypeControl: false,
      });

      const styleControl = document.getElementById("style-selector-control");
      map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(styleControl);

      const styleSelector = document.getElementById("style-selector");
      map.setOptions({ styles: styles[styleSelector.value] });

      styleSelector.addEventListener("change", () => {
        map.setOptions({ styles: styles[styleSelector.value] });
      });
    };

    const styles = {
      default: [],
      silver: [
        {
          elementType: "geometry",
          stylers: [{ color: "#f5f5f5" }],
        },
        // Add the rest of your styles here...
      ],
      night: [
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        // Add the rest of your styles here...
      ],
      retro: [
        { elementType: "geometry", stylers: [{ color: "#ebe3cd" }] },
        // Add the rest of your styles here...
      ],
      hiding: [
        {
          featureType: "poi.business",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "transit",
          elementType: "labels.icon",
          stylers: [{ visibility: "off" }],
        },
      ],
    };

    // Ensure that the Google Maps script is loaded
    if (window.google && window.google.maps) {
      initMap();
    } else {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&v=weekly&solution_channel=GMP_CCS_styledmap_v2`;
      script.defer = true;
      window.initMap = initMap;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <div id="style-selector-control" className="map-control">
        <select id="style-selector" className="selector-control">
          <option value="default">Default</option>
          <option value="silver">Silver</option>
          <option value="night">Night mode</option>
          <option value="retro" selected="selected">
            Retro
          </option>
          <option value="hiding">Hide features</option>
        </select>
      </div>
      <div ref={mapRef} id="map" style={{ height: "100%" }}></div>
    </div>
  );
};

export default StyledMap;
