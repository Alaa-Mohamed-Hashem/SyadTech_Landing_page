import styles from "./DiscoverMakkah.module.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const customIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41],
});

const centerCoordinates = [21.3891, 39.8579];

const markers = [{ position: [21.3891, 39.8579], text: "A sample marker" }];

const DiscoverMakkah = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h5>اكتشف مكة المكرمة ومحافظتها</h5>
        <p>
          يوفر مستكشف أخضر مكة للمواطنين و المستخدمين البحث عن الأماكن الخضراء
          المتاحة في قاعدة البيانات الجغرافية
        </p>
      </header>

      <MapContainer
        center={centerCoordinates}
        zoom={13}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position} icon={customIcon}>
            <Popup>{marker.text}</Popup>
          </Marker>
        ))}
      </MapContainer>

      <div className={styles.footer}>
        <p>
          لاستخدام مستكشف اخضر مكة
          <a href="/greenmakkah/explorer" className={styles.link}>
            اضغط هنا
          </a>
        </p>
      </div>
    </div>
  );
};

export default DiscoverMakkah;
