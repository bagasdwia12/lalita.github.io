import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import { IoLocationSharp } from "react-icons/io5";
import { ImAndroid } from "react-icons/im";
import Leaflet from 'leaflet';


const marker = Leaflet.divIcon({
    html: `<svg width="47" height="67" viewBox="0 0 47 67" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.5 31.825C21.2741 31.825 19.1393 30.9426 17.5654 29.372C15.9914 27.8014 15.1071 25.6712 15.1071 23.45C15.1071 21.2288 15.9914 19.0986 17.5654 17.528C19.1393 15.9574 21.2741 15.075 23.5 15.075C25.7259 15.075 27.8607 15.9574 29.4346 17.528C31.0086 19.0986 31.8929 21.2288 31.8929 23.45C31.8929 24.5498 31.6758 25.6389 31.254 26.655C30.8322 27.6711 30.214 28.5943 29.4346 29.372C28.6553 30.1497 27.7301 30.7666 26.7118 31.1875C25.6935 31.6084 24.6022 31.825 23.5 31.825ZM23.5 0C17.2674 0 11.2901 2.47062 6.88299 6.86835C2.47589 11.2661 0 17.2307 0 23.45C0 41.0375 23.5 67 23.5 67C23.5 67 47 41.0375 47 23.45C47 17.2307 44.5241 11.2661 40.117 6.86835C35.7099 2.47062 29.7326 0 23.5 0Z" fill="#F24822"/>
</svg>

`,

    iconSize: [47, 67],
    iconAnchor: [47 / 2, 67],
    className: "marker-icon",
})

export default function MapCard() {
    return (
        <MapContainer style={{ height: "450px", width: "650px", borderRadius: "12px" }} center={[-7.714128901815101, 111.14031452337547]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-7.714128901815101, 111.14031452337547]} icon={marker}>

                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
}