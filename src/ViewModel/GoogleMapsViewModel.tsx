// useGoogleMapsViewModel.tsx
import { useState, useEffect, useRef } from 'react';
import GoogleMapsRepository from '../Repository/GoogleMapsRepository';
import GoogleMapsModel from '../Model/GoogleMapsModel';

const useGoogleMapsViewModel = () => {
  const [zones, setZones] = useState(new GoogleMapsModel());
  const repository = new GoogleMapsRepository();
  const mapRef = useRef(null);

  useEffect(() => {
    const fetchZonesAndDraw = async () => {
      // Call createMap method from the repository
      await repository.createMap(mapRef);

      const fetchedZones = await repository.fetchZonesAndPoints();
      
      // Use the addZones method of GoogleMapsModel to add the fetched zones
      zones.addZones(fetchedZones);

      const map = repository.getMap();

      if (map) {
        const polygons = fetchedZones.map(zone => ({
          points: zone.points,
          strokeColor: '#AA00FF',
          fillColor: '#00FFAA',
          strokeWidth: 10,
        }));

        map.addPolygons(polygons);
      }
    };

    fetchZonesAndDraw();

    const intervalId = setInterval(() => {
      fetchZonesAndDraw();
    }, 10 * 60 * 1000); // Fetch every 10 minutes

    return () => clearInterval(intervalId);
  }, [repository, zones]); // Add zones to the dependency array

  return {
    zones,
    mapRef
  };
};

export default useGoogleMapsViewModel;