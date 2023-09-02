import './App.css';
import 'leaflet/dist/leaflet.css';
import {
	MapContainer,
	Marker,
	Popup,
	TileLayer,
	useMap,
	useMapEvents,
} from 'react-leaflet';
import { CRS, LatLngBounds } from 'leaflet';

function MapClickEvent() {
	const map = useMap();
	useMapEvents({
		click(event) {
			console.log(
				'lat',
				event.latlng.lat,
				'lng',
				event.latlng.lng,
				'zoom',
				map.getZoom()
			);
		},
	});
	return <div></div>;
}

function App() {
	const bounds = new LatLngBounds([1000, 1000], [0, 0]);

	return (
		<div className="App">
			<MapContainer
				id="map"
				center={[0, 0]}
				zoom={2}
				minZoom={-5}
				maxZoom={5}
				scrollWheelZoom={true}
				crs={CRS.Simple}
				bounds={bounds}
			>
				<TileLayer
					attribution="sovnheim.io"
					url="/assets/tiles/{z}/{x}/{y}.png"
				/>

				<MapClickEvent />
				{/* <Marker position={[120, 120]}>
					<Popup>You are here</Popup>
				</Marker> */}
			</MapContainer>
		</div>
	);
}

export default App;
