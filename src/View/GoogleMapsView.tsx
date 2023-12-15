import { useGoogleMapsViewModel } from '../ViewModel/GoogleMapsViewModel';
import '../pages/style.css';

const MyMap: React.FC = () => {
  const mapRef = useGoogleMapsViewModel();

  return (
    <div className="component-wrapper">
      <capacitor-google-map ref={mapRef} style={{
        display: 'inline-block',
        width: 275,
        height: 400
      }}></capacitor-google-map>
    </div>
  )
}

export default MyMap;