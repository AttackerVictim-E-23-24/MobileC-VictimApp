// GoogleMapsRepository.tsx
import GoogleMapsRemote from '../Remote/GoogleMapsRemote';
import GoogleMapsModel from '../Model/GoogleMapsModel';
import { GoogleMap } from '@capacitor/google-maps';
import { GeolocationRepository } from './GeolocationRepository';
import { GeolocationModel } from '../Model/GeolocationModel';

class GoogleMapsRepository {
  private newMap: GoogleMap|null = null;
  private remote: GoogleMapsRemote;
  private model: GoogleMapsModel;
  private geolocationRepository: GeolocationRepository;
  private geolocationModel: GeolocationModel;

  constructor() {
    this.geolocationModel = new GeolocationModel();
    this.geolocationRepository = new GeolocationRepository(this.geolocationModel);
    this.remote = new GoogleMapsRemote();
    this.model = new GoogleMapsModel();
  }

  getMap() {
    return this.newMap;
  }

  async createMap(mapRef: React.RefObject<HTMLElement>) {
    if (!mapRef.current) return;

    const { latitude, longitude } = await this.geolocationRepository.getCurrentPosition();

    this.newMap = await GoogleMap.create({
      id: 'my-cool-map',
      element: mapRef.current,
      apiKey: 'AIzaSyAVCv2edVHkkor2XENUBSsamIXFgMFn8UM',
      config: {
        center: {
          lat: latitude,
          lng: longitude
        },
        zoom: 3
      }
    })

    this.newMap.enableCurrentLocation(true);

  }

  async fetchZonesAndPoints() {
    const zones = await this.remote.fetchZones();

    for (let zone of zones) {
      if (zone.activo) {
        const points = await this.remote.fetchPointsForZone(zone.id);
        this.model.addZones(zone.id);
        this.model.addPointsToZone(zone.id, points);
      }
    }

    return this.model.getZones();
  }

}

export default GoogleMapsRepository;