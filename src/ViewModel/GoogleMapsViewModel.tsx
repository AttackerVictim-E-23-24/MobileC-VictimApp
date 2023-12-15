import { useEffect, useRef } from 'react';
import { GoogleMapsRepository } from '../Repository/GoogleMapsRepository';

export function useGoogleMapsViewModel() {
  const mapRef = useRef<HTMLElement>(null);
  const googleMapsRepo = new GoogleMapsRepository();

  useEffect(() => {
    if (mapRef.current) {
      googleMapsRepo.createMap(mapRef);
    }
  }, []);

  return mapRef;
}