// GoogleMapsModel.tsx
class GoogleMapsModel {
    private zones: {
      id: string;
      points: { latitude: number; longitude: number }[];
    }[];
  
    constructor() {
      this.zones = [];
    }
  
    addZones(zones: { id: string; points: { latitude: number; longitude: number }[] }[]) {
      this.zones.push(...zones);
    }
  
    addPointsToZone(id: string, points: { latitude: number; longitude: number }[]) {
      const zone = this.zones.find((zone) => zone.id === id);
      if (!zone) {
        throw new Error(`Zone with id ${id} not found`);
      }
      zone.points.push(...points);
    }
  
    getZones() {
      return this.zones;
    }
  }
  
  export default GoogleMapsModel;