import LatLng, { GoogleMap, Marker } from '@capacitor/google-maps';
import { GeolocationRepository } from './GeolocationRepository';
import { GeolocationModel } from '../Model/GeolocationModel';

export class GoogleMapsRepository {
  private newMap: GoogleMap|null = null;
  private geolocationRepository: GeolocationRepository;
  private geolocationModel: GeolocationModel;
  constructor() {
    this.geolocationModel = new GeolocationModel();
    this.geolocationRepository = new GeolocationRepository(this.geolocationModel);
  }

  async createMap(mapRef: React.RefObject<HTMLElement>) {
    if (!mapRef.current) return;

    const { latitude, longitude } = await this.geolocationRepository.getCurrentPosition();

    this.newMap = await GoogleMap.create({
      id: 'my-cool-map',
      element: mapRef.current,
      apiKey: 'AIzaSyCccZNiLlQVuUUN__qwtUC5GdpJveXQ1s8',
      config: {
        center: {
          lat: latitude,
          lng: longitude
        },
        zoom: 3
      }
    })

    this.newMap.enableCurrentLocation(true);

    if (this.newMap) {
        this.newMap.addMarker({
            coordinate:{
            lat: 1,
            lng: longitude
          },
          title: 'My Location'
        });
      }
  }
}