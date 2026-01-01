"use client"

import L from "leaflet";
import "leaflet-fullscreen";
import "leaflet/dist/leaflet.css";
import { useCallback, useEffect, useRef, useState } from "react";
import { countries, CountryColors, type Visit } from "@/app/map/countries";
import { StyledColorField } from "@/app/map/map.styled";
import { createRoot } from "react-dom/client";
import { Base64 } from "js-base64";

const Map = () => {
  const mapRef = useRef<L.Map | null>(null);

  const addPopupContent = useCallback((visit: Visit): HTMLElement => {
    const container = document.createElement('div');
    const root = createRoot(container);

    Base64.extendString();

    root.render(
      <div>
        {visit.image && !visit.url && (
          <a href={`./yearImage?imageName=${visit.image}`}>
            <h4 style={{ textAlign: "center" }}>{visit.year}</h4>
            <img 
              src={`./${visit.image}`}
              style={{ width: "100%", borderRadius: '8px', marginTop: 10, marginBottom: 10 }}
            />
            <div style={{ textAlign: "center" }}>{visit.author}</div>
          </a>)
        }
        {visit.url && visit.image && (
// @ts-expect-error from Base64 library
          <a href={`./yearImage?imageName=${visit.image}&link=` + visit.url.toBase64()}>
            <h4 style={{ textAlign: "center" }}>{visit.year}</h4>
            <img 
              src={`./${visit.image}`}
              style={{ width: "100%", borderRadius: '8px', marginTop: 10, marginBottom: 10 }}
            />
            <div style={{ textAlign: "center" }}>{visit.author}</div>
          </a>)
        }
        {!visit.image && !visit.url && (
          <>
            <h4 style={{ textAlign: "center" }}>{visit.year}</h4>
            <div style={{ textAlign: "center", marginTop: 10 }}>{visit.author}</div>
          </>)
        }
      </div>
    )

    return container;
  }, []);

  useEffect(() => {
    if (mapRef.current) return;

    mapRef.current = L.map("map", {
      center: [54.5, 13.5],
      zoom: 3.5,
      // @ts-expect-error because it works...
      fullscreenControl: true,
    })

    L.tileLayer("https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap.org</a>`,
    }).addTo(mapRef.current);

    countries.forEach((country ) => {
        country.geoJson.forEach((geoJsonFeature) => {
          if (!mapRef.current) return;

          if (country.reasonText) {
             L.geoJSON(geoJsonFeature, {
                style: {
                  color: country.color,
                  opacity: 0.2,
                }
              })
              .on("click", (e) => {
                if (!mapRef.current || !country.reasonText) return;
                L.popup()
                  .setLatLng(e.latlng)
                  .setContent(country.reasonText)
                  .openOn(mapRef.current)
              })
              .addTo(mapRef.current)
          } else {
              L.geoJSON(geoJsonFeature, {
                  style: {
                  color: country.color,
                  opacity: 0.2,
                }
              }).addTo(mapRef.current);
          }

          country.visits?.forEach((visit) => {
            if (!mapRef.current) return;

            L.marker(visit.coords).on("click", (e) => {
              if (!mapRef.current) return;

              L.popup()
                .setLatLng(visit.coords)
                .setContent(addPopupContent(visit))
                .openOn(mapRef.current);
            }).addTo(mapRef.current);
          });
        });
    });
  }, []);

  return (
    <div style={{ paddingLeft: 40, paddingRight: 40 }}>
      <h2 style={{ textAlign: "center", paddingTop: 40, paddingBottom: 40 }}>Europa und die bisherigen Himmelfahrten</h2>
      <div id="map" style={{ height: 600, marginBottom: 44, width: "100%" }} />
      <table style={{ paddingBottom: 40 }}>
        <tbody>
        <tr>
          <td>
            <StyledColorField color={CountryColors.untaken}/>
          </td>
          <td>
            <div style={{width: 22, textAlign: "center"}}>-</div>
          </td>
          <td>da waren wir noch nie</td>
        </tr>
        <tr>
          <td>
            <StyledColorField color={CountryColors.onceTaken}/>
          </td>
          <td>
            <div style={{width: 22, textAlign: "center"}}>-</div>
          </td>
          <td>da waren wir bisher einmal</td>
        </tr>
        <tr>
          <td>
            <StyledColorField color={CountryColors.twiceTaken}/>
          </td>
          <td>
            <div style={{width: 22, textAlign: "center"}}>-</div>
          </td>
          <td>da waren wir schon zweimal</td>
        </tr>
        <tr>
          <td>
            <StyledColorField color={CountryColors.oftenTaken}/>
          </td>
          <td>
            <div style={{width: 22, textAlign: "center"}}>-</div>
          </td>
          <td>da waren wir schon mehrmals!</td>
        </tr>
        <tr>
          <td>
            <StyledColorField color={CountryColors.home}/>
          </td>
          <td>
            <div style={{width: 22, textAlign: "center"}}>-</div>
          </td>
          <td>Home Sweet Home</td>
        </tr>
        <tr>
          <td>
            <StyledColorField color={CountryColors.somehowInvalid}/>
          </td>
          <td>
            <div style={{width: 22, textAlign: "center"}}>-</div>
          </td>
          <td>da wird es schwierig hinzukommen</td>
        </tr>
        <tr>
          <td>
            <StyledColorField color={CountryColors.totalyInvalid}/>
          </td>
          <td>
          <div style={{ width: 22, textAlign: "center" }}>-</div>
          </td>
          <td>da sollten wir nicht hin!</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Map;
