// GoogleMapsRemote.tsx
import axios from "axios";
import { BaseURL } from "./BaseURL";
import { LoginModel } from "../Model/LoginModel";

class GoogleMapsRemote {
  
  async fetchZones() {
    const username = LoginModel.getInstance().getUsername();

    try {
      const response = await fetch(
        `${BaseURL.baseUrl}/zonasSeg/getAllByUsername/${username}`
      );
      const zoneData = await response.json();

      if (!response.ok) {
        console.error(
          "Error en la petición:",
          response.status,
          response.statusText
        );
        return []; // Return the empty array if the response is not ok
      }

      return zoneData.respuesta; // Return the zones
    } catch (error) {
      console.error("Error fetching zones:", error);
      return []; // Return an empty array if an error occurs
    }
  }

  async fetchPointsForZone(zoneId: string) {
    try {
      const response = await fetch(
        `${BaseURL.baseUrl}/coordenadas/getCoordZonaSeg/${zoneId}`
      );
      const data = await response.json();

      if (!data.status) {
        console.error("Error fetching coordinates:", data.mensaje);
        return []; // Return the empty array if the response is not ok
      }

      const newPolygonPoints = data.respuesta.map((coord: any) => ({
        latitude: coord.latitud,
        longitude: coord.longitud,
      }));

      return newPolygonPoints; // Return the points for the zone
    } catch (error) {
      console.error("Error fetching points for zone:", error);
      return []; // Return an empty array if an error occurs
    }
  }
}

export default GoogleMapsRemote;